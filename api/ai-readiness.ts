import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

// Rate limiting map (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

async function scrapeWebsite(url: string): Promise<string> {
  const jinaUrl = `https://r.jina.ai/${url}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const resp = await fetch(jinaUrl, {
      headers: {
        'Accept': 'text/plain',
        'X-Return-Format': 'text',
      },
      signal: controller.signal,
    });

    if (!resp.ok) {
      throw new Error(`Scrape failed: ${resp.status}`);
    }

    const text = await resp.text();
    return text.slice(0, 6000);
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    if (!process.env.OPENAI_API_KEY) {
      return res.status(503).json({
        error: 'Configuration error',
        message: 'AI readiness service is not configured. Please contact support.'
      });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const { url, city } = req.body;

    if (!url || typeof url !== 'string') {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Website URL is required.'
      });
    }

    if (!city || typeof city !== 'string') {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'City is required.'
      });
    }

    const sanitizedUrl = url.trim().slice(0, 500);
    const sanitizedCity = city.trim().slice(0, 200);

    if (!sanitizedUrl || !sanitizedCity) {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'URL and city cannot be empty.'
      });
    }

    // Scrape the actual website content
    let siteContent = '';
    try {
      siteContent = await scrapeWebsite(sanitizedUrl);
      console.log(`Scraped ${siteContent.length} chars from ${sanitizedUrl}`);
    } catch (err) {
      console.warn(`Could not scrape ${sanitizedUrl}, proceeding with URL-only analysis:`, err);
    }

    const contentSection = siteContent
      ? `\n\nHere is the actual content scraped from their website:\n---\n${siteContent}\n---\n\nUse this real website content to provide a detailed, specific analysis. Look at their actual services, messaging, technology signals, calls-to-action, content quality, and any schema/structured data clues.`
      : `\n\nNote: We could not scrape their website content. Base your analysis on what you can infer from the URL alone, but be transparent that this is an inference-based assessment.`;

    const prompt = `You are an expert AI business consultant. Analyze this real business website and produce a detailed AI readiness assessment.

Website: ${sanitizedUrl}
City Served: ${sanitizedCity}
${contentSection}

STEP 1 — SCORING RUBRIC (use this to assign each category score independently):

"website_and_digital" — Score based on what you observe:
  0-20: Broken, outdated, or nearly empty site
  21-40: Basic brochure site, limited content, no blog
  41-60: Decent site with some content, clear services, basic contact forms
  61-80: Professional site with strong content, clear CTAs, mobile-friendly indicators
  81-100: Exceptional site with rich content, fast-loading signals, interactive elements, video

"ai_integration" — Score based on what you observe:
  0-10: Zero AI features whatsoever
  11-30: Basic automation only (e.g. simple contact form autoresponder)
  31-50: One AI-adjacent feature (e.g. basic chatbot widget, or templated recommendations)
  51-75: Multiple AI features (smart chatbot, personalized content, AI-powered search)
  76-100: Deep AI integration (custom AI tools, predictive features, AI-generated content)

"local_seo_presence" — Score based on what you observe:
  0-20: No city/location mentions, no local signals
  21-40: City mentioned once or twice, no structured local content
  41-60: Service area pages, city in titles, some local keywords
  61-80: Strong local content, multiple location pages, testimonials with locations
  81-100: Comprehensive local strategy, schema markup signals, local blog content

"automation_readiness" — Score based on what you observe:
  0-20: No forms, no online booking, phone-only contact
  21-40: Basic contact form only
  41-60: Contact form plus one of: online booking, quote calculator, or email signup
  61-80: Multiple automated touchpoints (booking, forms, email sequences, CRM signals)
  81-100: Fully automated customer journey with multiple integrated systems

"competitive_position" — Score based on what you observe:
  0-20: Generic site with no differentiation, unclear value proposition
  21-40: Some differentiation but weak messaging
  41-60: Clear services and value proposition, some social proof
  61-80: Strong differentiation, testimonials, case studies, clear USP
  81-100: Market-leading positioning, awards, extensive social proof, thought leadership

"data_and_analytics" — Score based on what you observe:
  0-20: No tracking or analytics signals detected
  21-40: Basic Google Analytics or one tracking pixel
  41-60: Multiple tracking tools, conversion tracking signals
  61-80: Advanced analytics, A/B testing signals, data-driven content
  81-100: Comprehensive measurement stack, dashboards, data-driven everything

STEP 2 — After scoring each category independently using the rubric above, calculate overall_score as the simple average of all 6 category scores (round to nearest integer).

STEP 3 — Assign the rank based on overall_score: "AI Leader" (80-100), "AI Advancing" (60-79), "AI Emerging" (40-59), "AI Curious" (20-39), "AI Unaware" (0-19).

STEP 4 — Respond with ONLY this JSON (no other text):

{
  "business_name": "string",
  "industry": "string",
  "overall_score": number,
  "rank": "string",
  "rank_description": "2 sentences referencing specific observations from the site.",
  "categories": {
    "website_and_digital": { "score": number, "summary": "string" },
    "ai_integration": { "score": number, "summary": "string" },
    "local_seo_presence": { "score": number, "summary": "string" },
    "automation_readiness": { "score": number, "summary": "string" },
    "competitive_position": { "score": number, "summary": "string" },
    "data_and_analytics": { "score": number, "summary": "string" }
  },
  "strengths": [
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" }
  ],
  "weaknesses": [
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" }
  ],
  "recommendations": [
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" },
    { "title": "string", "detail": "string" }
  ]
}

Every summary and detail must cite specific things you observed on the actual website. No generic filler.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 2500
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) {
      throw new Error('Empty response from AI service');
    }

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not parse AI response');
    }

    const result = JSON.parse(jsonMatch[0]);

    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error in /api/ai-readiness:', error);

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
        message: 'Unable to generate analysis at this time. Please try again.'
      });
    }
  }
}
