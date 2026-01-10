import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Rate limiting map (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  const ip = Array.isArray(clientIP) ? clientIP[0] : clientIP;
  const now = Date.now();

  const clientData = rateLimitMap.get(ip);

  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
  } else if (clientData.count < RATE_LIMIT_MAX_REQUESTS) {
    clientData.count++;
  } else {
    return res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((clientData.resetTime - now) / 1000)
    });
  }

  try {
    const { businessName } = req.body;

    // Input validation
    if (!businessName || typeof businessName !== 'string') {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Business name is required and must be a string'
      });
    }

    // Sanitize input (trim and limit length)
    const sanitizedBusinessName = businessName.trim().slice(0, 200);

    if (sanitizedBusinessName.length === 0) {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Business name cannot be empty'
      });
    }

    // Validate API key exists
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: 'Configuration error',
        message: 'AI service is not properly configured. Please contact support.'
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Create the prompt
    const prompt = `As an AI SEO expert, analyze the following business and provide 3 specific, actionable recommendations to improve their local search rankings and AI visibility.

Business Name: ${sanitizedBusinessName}

Focus on:
1. AI-Readable Schema implementation opportunities
2. Authority mention strategies specific to their industry
3. Content optimization for voice search and AI assistants

Provide concrete, implementable advice in 2-3 sentences per recommendation.`;

    // Call Gemini API
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
    const result = await model.generateContent(prompt);

    if (!result || !result.response) {
      throw new Error('Invalid response from AI service');
    }

    const text = result.response.text();

    res.status(200).json({
      success: true,
      insights: text,
      businessName: sanitizedBusinessName
    });

  } catch (error: any) {
    console.error('Error in /api/analyze:', error);

    // Distinguish between different error types
    if (error.message?.includes('API key')) {
      res.status(503).json({
        error: 'Configuration error',
        message: 'AI service is not properly configured. Please contact support.'
      });
    } else if (error.message?.includes('quota') || error.message?.includes('rate limit')) {
      res.status(429).json({
        error: 'Service limit reached',
        message: 'The AI service is currently at capacity. Please try again later.'
      });
    } else {
      res.status(500).json({
        error: 'Analysis failed',
        message: 'Unable to generate insights at this time. Please try again.'
      });
    }
  }
}
