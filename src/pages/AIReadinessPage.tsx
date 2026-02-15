import React, { useState } from 'react';
import AIReadinessCalculator from '../components/features/AIReadinessCalculator';

const AIReadinessPage: React.FC = () => {
  const [hasResult, setHasResult] = useState(false);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Hero — hidden when results are showing */}
        {!hasResult && (
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full tracking-wide mb-5">
              Free Instant Analysis
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              See where your business{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-400 bg-clip-text text-transparent">
                ranks on AI
              </span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Enter your website and the city you serve. We'll analyze your online presence and tell you exactly where you stand and what to focus on.
            </p>
          </div>
        )}

        {/* Calculator */}
        <AIReadinessCalculator onResultChange={setHasResult} />
      </div>
    </section>
  );
};

export default AIReadinessPage;
