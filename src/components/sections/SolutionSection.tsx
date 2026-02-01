import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SolutionSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const solutions = [
    {
      icon: 'fa-bullseye',
      title: 'Show up when it matters',
      description: "When someone asks ChatGPT for a business like yours, you're in the top 5. Every single time.",
    },
    {
      icon: 'fa-piggy-bank',
      title: 'Stop losing money',
      description: 'Your Ads keep getting more expensive while reaching fewer people. AI search costs you nothing per click.',
    },
    {
      icon: 'fa-rocket',
      title: 'Own your market before competitors wake up',
      description: "Right now, 95% of businesses have no idea this is even happening. In 6 months, everyone will be fighting for position. Get there first.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-14">
            What you actually need
          </h2>
        </div>

        <div className="space-y-5">
          {solutions.map((item, idx) => (
            <div key={idx} className={`animate-on-scroll delay-${(idx + 1) * 100}`}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 flex gap-5 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <i className={`fa-solid ${item.icon} text-purple-400 text-lg sm:text-xl`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why it works */}
        <div className="animate-on-scroll delay-400">
          <div className="mt-12 pt-10 border-t border-white/5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why this actually works</h3>
            <div className="space-y-4 text-base sm:text-lg text-neutral-400">
              <p>
                AI doesn't care about your ad budget. It cares about <span className="text-white font-medium">signals</span>.
              </p>
              <p>
                We know exactly what signals ChatGPT looks for when deciding who to recommend. We optimize every single one.
              </p>
              <p className="text-gradient font-semibold text-lg sm:text-xl inline-block">
                60 days later, you're in the top 5. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
