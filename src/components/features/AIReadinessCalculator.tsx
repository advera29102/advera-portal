import React, { useState, useRef, useEffect } from 'react';

interface CategoryData {
  score: number;
  summary: string;
}

interface FindingItem {
  title: string;
  detail: string;
}

interface AIReadinessResult {
  business_name: string;
  industry: string;
  overall_score: number;
  rank: string;
  rank_description: string;
  categories: {
    website_and_digital: CategoryData;
    ai_integration: CategoryData;
    local_seo_presence: CategoryData;
    automation_readiness: CategoryData;
    competitive_position: CategoryData;
    data_and_analytics: CategoryData;
  };
  strengths: FindingItem[];
  weaknesses: FindingItem[];
  recommendations: FindingItem[];
}

interface AIReadinessCalculatorProps {
  compact?: boolean;
  onResultChange?: (hasResult: boolean) => void;
}

const CAT_LABELS: Record<string, string> = {
  website_and_digital: 'Website & Digital',
  ai_integration: 'AI Integration',
  local_seo_presence: 'Local SEO',
  automation_readiness: 'Automation',
  competitive_position: 'Competitive Edge',
  data_and_analytics: 'Data & Analytics',
};

function getScoreColor(score: number): string {
  if (score >= 80) return '#10B981';
  if (score >= 60) return '#F59E0B';
  if (score >= 40) return '#F97316';
  return '#EF4444';
}

function getScoreBg(score: number): string {
  if (score >= 80) return 'rgba(16,185,129,0.12)';
  if (score >= 60) return 'rgba(245,158,11,0.12)';
  if (score >= 40) return 'rgba(249,115,22,0.12)';
  return 'rgba(239,68,68,0.12)';
}

const AIReadinessCalculator: React.FC<AIReadinessCalculatorProps> = ({ compact = false, onResultChange }) => {
  const [url, setUrl] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<AIReadinessResult | null>(null);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const circumference = 2 * Math.PI * 76;

  useEffect(() => {
    if (!result) return;
    setBarsAnimated(false);
    setAnimatedScore(0);

    const target = result.overall_score;
    const step = Math.max(1, Math.floor(target / 50));
    let cur = 0;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setAnimatedScore(cur);
      if (cur >= target) clearInterval(timer);
    }, 25);

    const barTimer = setTimeout(() => setBarsAnimated(true), 300);

    return () => {
      clearInterval(timer);
      clearTimeout(barTimer);
    };
  }, [result]);

  const analyze = async () => {
    const trimmedUrl = url.trim();
    const trimmedCity = city.trim();

    if (!trimmedUrl) {
      setError('Please enter your website URL.');
      return;
    }
    if (!trimmedCity) {
      setError('Please enter the city you serve.');
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);

    try {
      const resp = await fetch('/api/ai-readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmedUrl, city: trimmedCity }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.message || `Something went wrong (${resp.status})`);
      }

      const data = await resp.json();
      setResult(data.data);
      onResultChange?.(true);

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setUrl('');
    setCity('');
    setError('');
    setAnimatedScore(0);
    setBarsAnimated(false);
    onResultChange?.(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') analyze();
  };

  // --- Form ---
  const renderForm = () => (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="mb-5">
        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
          Website URL
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="https://yourcompany.com"
          className="w-full px-4 py-3 bg-white/[0.04] border-[1.5px] border-white/10 rounded-xl text-white placeholder-neutral-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 outline-none transition-all"
        />
      </div>
      <div className="mb-6">
        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
          City You Serve
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Austin, TX"
          className="w-full px-4 py-3 bg-white/[0.04] border-[1.5px] border-white/10 rounded-xl text-white placeholder-neutral-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 outline-none transition-all"
        />
      </div>
      <button
        onClick={analyze}
        disabled={loading}
        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 relative"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 border-[2.5px] border-white/25 border-t-white rounded-full animate-spin" />
          </span>
        ) : (
          'Analyze My Business'
        )}
      </button>

      {loading && (
        <div className="text-center mt-4 animate-pulse">
          <p className="text-sm text-neutral-400">
            <span className="bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_2s_ease_infinite]">
              Scanning your website and analyzing your market...
            </span>
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 px-4 py-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-300 text-sm animate-in fade-in">
          {error}
        </div>
      )}
    </div>
  );

  // --- Results ---
  const renderResults = () => {
    if (!result) return null;
    const scoreColor = getScoreColor(result.overall_score);
    const scoreBg = getScoreBg(result.overall_score);
    const offset = circumference - (result.overall_score / 100) * circumference;

    return (
      <div ref={resultsRef} className="animate-in slide-in-from-bottom-8 fade-in duration-600 space-y-4">
        {/* Score Hero */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-5">
            {result.business_name} &middot; {result.industry}
          </p>
          <div className="w-[170px] h-[170px] mx-auto mb-5 relative">
            <svg viewBox="0 0 170 170" className="-rotate-90 w-full h-full">
              <circle cx="85" cy="85" r="76" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
              <circle
                cx="85"
                cy="85"
                r="76"
                fill="none"
                stroke={scoreColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-[1800ms] ease-out"
                style={{ filter: `drop-shadow(0 0 8px ${scoreColor}40)` }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold tracking-tight" style={{ color: scoreColor }}>
                {animatedScore}
              </span>
              <span className="text-xs text-neutral-500 mt-0.5 font-medium">out of 100</span>
            </div>
          </div>
          <span
            className="inline-block px-4 py-1.5 rounded-full font-bold text-sm mb-3"
            style={{ background: scoreBg, color: scoreColor }}
          >
            {result.rank}
          </span>
          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            {result.rank_description}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(Object.entries(result.categories) as [string, CategoryData][]).map(([key, cat]) => {
            const catColor = getScoreColor(cat.score);
            return (
              <div
                key={key}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-neutral-400">{CAT_LABELS[key] || key}</span>
                  <span className="text-2xl font-extrabold" style={{ color: catColor }}>
                    {cat.score}
                  </span>
                </div>
                <div className="bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-[1200ms] ease-out"
                    style={{
                      width: barsAnimated ? `${cat.score}%` : '0%',
                      background: catColor,
                    }}
                  />
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{cat.summary}</p>
              </div>
            );
          })}
        </div>

        {/* Strengths */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm">
              &#10003;
            </span>
            Key Strengths
          </h3>
          {result.strengths.map((s, i) => (
            <div key={i} className="flex gap-3 py-3 border-b border-white/5 last:border-0 last:pb-0 first:pt-0">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Weaknesses */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center text-sm font-bold">
              !
            </span>
            Gaps to Address
          </h3>
          {result.weaknesses.map((w, i) => (
            <div key={i} className="flex gap-3 py-3 border-b border-white/5 last:border-0 last:pb-0 first:pt-0">
              <div className="w-6 h-6 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{w.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{w.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-sm">
              &#9670;
            </span>
            What to Focus on Next
          </h3>
          {result.recommendations.map((rec, i) => (
            <div key={i} className="flex gap-3 py-3 border-b border-white/5 last:border-0 last:pb-0 first:pt-0">
              <div className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{rec.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{rec.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-6 space-y-3">
          <a
            href="https://cal.com/david-jeffries-afl6j5/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            I want to fix my ranking now
            <i className="fa-solid fa-arrow-right text-sm" />
          </a>
          <div>
            <button
              onClick={reset}
              className="text-neutral-500 hover:text-neutral-300 text-sm font-medium transition-colors"
            >
              or analyze another business
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={compact ? 'max-w-xl mx-auto' : 'max-w-2xl mx-auto'}>
      {!result && renderForm()}
      {result && renderResults()}
    </div>
  );
};

export default AIReadinessCalculator;
