import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 3001;

// Validate API key exists
if (!process.env.GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY is not set in environment variables');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rate limiting map (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

// Rate limiting middleware
const rateLimit = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const clientIP = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  const clientData = rateLimitMap.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    next();
  } else if (clientData.count < RATE_LIMIT_MAX_REQUESTS) {
    clientData.count++;
    next();
  } else {
    res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((clientData.resetTime - now) / 1000)
    });
  }
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API endpoint for AI analysis
app.post('/api/analyze', rateLimit, async (req, res) => {
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

    res.json({
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
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Backend server running on http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/api/health`);
});
