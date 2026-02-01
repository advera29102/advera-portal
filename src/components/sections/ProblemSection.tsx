import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProblemSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="reality" className="relative py-20 sm:py-28 px-4 sm:px-6" ref={sectionRef}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-14">
            Here's what's happening right now
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* Chat simulation */}
          <div className="animate-on-scroll">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <i className="fa-solid fa-robot text-emerald-400 text-sm" />
                </div>
                <span className="text-neutral-500 text-sm font-medium">ChatGPT Conversation</span>
              </div>
              <p className="text-neutral-400 mb-3 text-base sm:text-lg">
                Someone in your city opens ChatGPT:
              </p>
              <div className="bg-white/5 rounded-xl px-5 py-3.5 mb-4 inline-block">
                <p className="text-white font-medium text-lg sm:text-xl">
                  "Best dentist near me"
                </p>
              </div>
              <div className="space-y-2.5 ml-2">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 text-lg">1.</span>
                  <p className="text-purple-400 font-medium text-base sm:text-lg">
                    Your competitor shows up #1
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-600 text-lg">...</span>
                  <p className="text-neutral-600 text-base sm:text-lg">
                    You don't exist
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll delay-100">
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl font-bold text-white">
                This happens 100+ times per day in your market.
              </p>
              <p className="text-base sm:text-lg text-neutral-400">
                Every single one is a customer you're losing to someone else.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll delay-200">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
              {[
                { value: '887M', label: 'Weekly ChatGPT users' },
                { value: '76%', label: 'Skip Google entirely' },
                { value: '$0', label: "What you're getting" },
              ].map((stat) => (
                <div key={stat.value} className="text-center glass-card rounded-2xl p-5 sm:p-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-500 mb-2 stat-glow">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
