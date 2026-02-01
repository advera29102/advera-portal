import React from 'react';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FinalCTASection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden" ref={sectionRef}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute opacity-20" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 sm:mb-10 leading-tight">
            You know what happens if you do nothing
          </h2>
        </div>

        <div className="animate-on-scroll delay-100">
          <div className="space-y-4 text-base sm:text-lg text-neutral-400 mb-10 sm:mb-12">
            <p>Your competitors keep showing up when customers ask AI for recommendations.</p>
            <p>You keep losing business you don't even know about.</p>
            <p>Your ad costs keep rising while results keep dropping.</p>
          </div>
        </div>

        <div className="animate-on-scroll delay-200">
          <p className="text-2xl sm:text-3xl text-white font-extrabold mb-10 sm:mb-12">
            Or you could be ranked in <span className="text-gradient">60 days</span>.
          </p>
        </div>

        <div className="animate-on-scroll delay-300">
          <Button
            variant="primary"
            size="lg"
            href="https://cal.com/david-jeffries-afl6j5/30min"
            external
            className="w-full sm:w-auto"
          >
            Show Me Where I Rank (Free)
            <i className="fa-solid fa-arrow-right ml-2 text-sm" />
          </Button>
          <p className="text-sm text-neutral-600 mt-6">
            30-minute call. We'll show you exactly where you stand. No pitch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
