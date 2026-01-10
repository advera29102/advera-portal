# Advera AI Advantage Portal

A premium client-facing SaaS dashboard for dominating AI-powered search engines like ChatGPT, Claude, and Perplexity.

## Features

- **7 Pillars of AI Domination**: Systematic approach to ranking optimization
- **AI-Powered Business Analysis**: Real-time insights using Google Gemini 2.0 API
- **90-Day Roadmap**: Phase-by-phase implementation guide
- **Modern Tech Stack**: React 19, TypeScript, Vite, and Tailwind CSS
- **Secure Architecture**: Backend API proxy for API key protection
- **Fully Accessible**: WCAG-compliant with ARIA labels and keyboard navigation
- **Mobile Responsive**: Optimized for all screen sizes

## Prerequisites

- Node.js 18+ and npm
- Google Gemini API key

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file (if not exists) with your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

Get your API key: [Google AI Studio](https://makersuite.google.com/app/apikey)

### 3. Development

**Run both frontend and backend:**

```bash
# Option 1: Run both servers together (Unix/Mac/Linux)
npm run dev:all

# Option 2: Run separately in different terminals
npm run dev:server  # Backend (port 3001)
npm run dev         # Frontend (port 3000)
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Production Build

```bash
npm run build           # Build frontend
npm run build:server    # Build backend
npm run start:server    # Start production server
```

## Recent Improvements

### Security Enhancements
- ✅ API key moved to secure backend server (never exposed to browser)
- ✅ Rate limiting: 10 requests/minute per IP
- ✅ Input validation and sanitization
- ✅ Comprehensive error handling

### Performance Optimizations
- ✅ Bundled Tailwind CSS and Font Awesome (eliminated CDN dependencies)
- ✅ Removed unused dependencies (recharts)
- ✅ Loading states with skeleton screens
- ✅ Updated to latest Gemini 2.0 Flash model

### Accessibility & UX
- ✅ ARIA labels and semantic HTML throughout
- ✅ Keyboard navigation with visible focus states
- ✅ Screen reader support with live regions
- ✅ Enhanced mobile responsiveness

### Code Quality
- ✅ Full TypeScript type safety
- ✅ Proper error handling with user-friendly messages
- ✅ Clean component structure

## Project Structure

```
├── App.tsx               # Main React component
├── index.tsx            # React entry point
├── index.html           # HTML template with meta tags
├── index.css            # Tailwind + custom styles
├── server.ts            # Express backend (API proxy)
├── constants.tsx        # Application data
├── types.ts            # TypeScript interfaces
├── components/
│   └── StepCard.tsx    # Reusable step card
└── services/
    └── gemini.ts       # Backend API client
```

## API Endpoints

Backend server (http://localhost:3001):

- `GET /api/health` - Health check
- `POST /api/analyze` - AI business analysis
  - Body: `{ businessName: string }`
  - Response: `{ success: boolean, insights: string }`

## Troubleshooting

**API Key Errors**: Ensure `.env.local` exists with valid `GEMINI_API_KEY`

**Port Conflicts**: Update ports in `vite.config.ts` (frontend) or `.env.local` (backend)

**Build Errors**: Try clearing dependencies:
```bash
rm -rf node_modules package-lock.json && npm install
```

---

View in AI Studio: https://ai.studio/apps/drive/1j-xXsFzK5IVVjJEMFRsDJZoIjcyEs-IB

© 2026 Advera Strategy Group
