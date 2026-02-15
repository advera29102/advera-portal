import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AIReadinessSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Free Tool
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
            How AI-ready is your business?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get a free, instant AI readiness score. We'll analyze your website, local SEO, automation potential, and competitive positioning — then tell you exactly what to focus on.
          </p>
        </div>

        <div className="animate-on-scroll delay-200">
          <Link
            to="/ai-readiness"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 text-base"
          >
            Check Your AI Readiness Score
            <i className="fa-solid fa-arrow-right text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIReadinessSection;
