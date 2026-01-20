
import React, { useState, useEffect } from 'react';
import { STEPS, ROADMAP } from './constants';
import { StepStatus } from './types';
import StepCard from './components/StepCard';
import { getAIInsights } from './services/gemini';

const App: React.FC = () => {
  const [auditQuery, setAuditQuery] = useState('');
  const [auditResult, setAuditResult] = useState<string | null>(null);
  const [loadingAudit, setLoadingAudit] = useState(false);

  const runFreeAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditQuery) return;
    setLoadingAudit(true);
    const result = await getAIInsights(auditQuery);
    setAuditResult(result);
    setLoadingAudit(false);
  };

  return (
    <div className="relative">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 lg:px-12 py-4" role="banner">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20" aria-hidden="true">
              <i className="fa-solid fa-bolt-lightning text-white"></i>
            </div>
            <span className="text-xl font-black tracking-tighter text-white">ADVERA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400" aria-label="Main navigation">
            <a href="#pillars" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">The 7 Pillars</a>
            <a href="#roadmap" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">90-Day Plan</a>
            {/* <a href="#audit" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Free Audit</a> */}
          </nav>
          <a href="https://cal.com/david-jeffries-afl6j5/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold shadow-xl shadow-indigo-500/20 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Get started">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 hero-gradient min-h-[90vh] flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-6 sm:mb-8 animate-float">
          <i className="fa-solid fa-sparkles"></i> The Future of Search is Here
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[1] mb-6 sm:mb-8 tracking-tighter max-w-5xl px-4">
          Don't just Rank. <br />
          <span className="gradient-text">Be the Answer.</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 sm:mb-12 leading-relaxed px-4">
          Customers are no longer just Googling. They're asking ChatGPT, Claude, and Perplexity. If you're not in the top 3 recommendations, <span className="text-white font-bold">you're invisible.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4">
          <a href="#pillars" className="px-8 sm:px-10 py-4 sm:py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-all text-center">
            See the 7 Steps
          </a>
          <a href="#roadmap" className="px-8 sm:px-10 py-4 sm:py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all text-center">
            View Roadmap
          </a>
        </div>
      </section>

      {/* The 7 Pillars Grid */}
      <section id="pillars" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">The 7 Pillars of AI Domination</h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl px-4">
            Our systematic approach ensures your business becomes the "Ground Truth" for LLMs, moving you from invisible to indispensable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="h-full">
              <StepCard step={step} index={idx} />
            </div>
          ))}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 flex flex-col justify-between text-white shadow-2xl shadow-indigo-500/10 card-hover">
            <div>
              <h3 className="text-2xl font-black mb-4">The Advera Edge</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-8 opacity-80">
                We don't just follow the steps; we automate the entire sequence using GoHighLevel to ensure peak performance 24/7.
              </p>
            </div>
            <a
              href="https://api.leadconnectorhq.com/widget/booking/sZvRXRTlqYb7XltXhPZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-white text-indigo-900 font-black rounded-2xl text-sm shadow-xl hover:scale-105 transition-all text-center block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Free Audit Section - DISABLED FOR NOW - CAN RE-ENABLE LATER */}
      {/*
      <section id="audit" className="py-16 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto glass rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden sm:block">
            <i className="fa-solid fa-wand-magic-sparkles text-9xl"></i>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">Instant AI Readiness Check</h2>
            <p className="text-sm sm:text-base text-slate-400 mb-8 sm:mb-10">Get a preview of how AI models currently perceive your brand.</p>

            <form onSubmit={runFreeAudit} className="flex flex-col sm:flex-row gap-4 mb-8" aria-label="Business audit form">
              <label htmlFor="business-name-input" className="sr-only">Business Name</label>
              <input
                id="business-name-input"
                type="text"
                placeholder="Enter your Business Name (e.g. Apex Dental)"
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                value={auditQuery}
                onChange={(e) => setAuditQuery(e.target.value)}
                required
                aria-required="true"
                aria-describedby="audit-description"
              />
              <button
                type="submit"
                disabled={loadingAudit || !auditQuery.trim()}
                className="px-8 py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-950"
                aria-label={loadingAudit ? 'Analyzing your business' : 'Analyze your business now'}
              >
                {loadingAudit ? 'Analyzing...' : 'Analyze Now'}
              </button>
            </form>
            <p id="audit-description" className="sr-only">Enter your business name to receive AI-powered insights about your search visibility</p>

            {loadingAudit && (
              <div
                className="mt-8 p-8 bg-indigo-950/30 rounded-3xl border border-indigo-500/20 animate-pulse"
                role="status"
                aria-live="polite"
                aria-label="Analyzing your business"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/50" aria-hidden="true"></div>
                  <div className="h-4 bg-indigo-500/30 rounded w-40" aria-hidden="true"></div>
                </div>
                <div className="space-y-3" aria-hidden="true">
                  <div className="h-3 bg-indigo-500/20 rounded w-full"></div>
                  <div className="h-3 bg-indigo-500/20 rounded w-5/6"></div>
                  <div className="h-3 bg-indigo-500/20 rounded w-4/5"></div>
                  <div className="h-3 bg-indigo-500/20 rounded w-full"></div>
                  <div className="h-3 bg-indigo-500/20 rounded w-3/4"></div>
                </div>
                <span className="sr-only">Loading insights...</span>
              </div>
            )}

            {!loadingAudit && auditResult && (
              <div
                className="mt-8 p-8 bg-indigo-950/30 rounded-3xl border border-indigo-500/20 text-indigo-100 animate-in fade-in slide-in-from-bottom-4 duration-500"
                role="region"
                aria-live="polite"
                aria-label="AI consultation results"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center" aria-hidden="true">
                    <i className="fa-solid fa-brain text-xs"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">AI Consultation Result</span>
                </div>
                <div className="text-sm leading-relaxed prose prose-invert">
                  {auditResult.split('\n').map((p, i) => <p key={i} className="mb-4">{p}</p>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      */}

      {/* 90-Day Roadmap Section */}
      <section id="roadmap" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 px-4">The 90-Day Domination Roadmap</h2>
            <p className="text-sm sm:text-base text-slate-400 px-4">Phase-by-phase execution of your AI visibility strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROADMAP.map((phase, i) => (
              <div key={i} className="relative group">
                <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass p-8 rounded-3xl border border-white/5 h-full">
                  <div className="text-indigo-500 text-xs font-black uppercase mb-2">Days {phase.days}</div>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                        <i className="fa-solid fa-circle-check text-indigo-600 text-[10px]"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 lg:px-12 mt-20">
        <div className="max-w-4xl mx-auto text-center glass rounded-[3rem] p-12 sm:p-16 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Dominate AI Search?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Stop being invisible. Book a strategy call and discover how the 7 Pillars can make your business the default AI recommendation.
            </p>
            <a
              href="https://cal.com/david-jeffries-afl6j5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl text-lg shadow-2xl shadow-indigo-500/30 hover:scale-105 hover:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-12 border-t border-white/5 mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                <i className="fa-solid fa-bolt-lightning text-white text-sm"></i>
              </div>
              <span className="text-lg font-black tracking-tighter text-white">ADVERA</span>
            </div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em]">Mastering the AI Search Era</p>
          </div>
          <nav className="flex gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest" aria-label="Footer navigation">
            <a href="#privacy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Contact</a>
          </nav>
          <p className="text-[10px] font-bold text-slate-600">© 2026 ADVERA STRATEGY GROUP</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
