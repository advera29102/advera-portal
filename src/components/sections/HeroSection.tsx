import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="gradient-orb gradient-orb-purple w-[600px] h-[600px] -top-40 -right-40 absolute animate-pulse-glow" />
      <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] top-20 -left-40 absolute animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          AI Search Optimization
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight animate-slide-in-from-bottom-4">
          Your customers are asking ChatGPT for recommendations.
          <span className="block mt-3 text-gradient">You're not even mentioned.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          While you're dumping money into Ads, your competitors are showing up first when people ask AI where to go.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="primary" size="lg" href="https://cal.com/david-jeffries-afl6j5/30min" external className="w-full sm:w-auto">
            Show Me Where I Rank
            <i className="fa-solid fa-arrow-right ml-2 text-sm" />
          </Button>
          <Button variant="secondary" size="lg" href="#reality" className="w-full sm:w-auto">
            Prove It
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <i className="fa-solid fa-shield-halved text-purple-500" />
            60-Day Guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
