import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TimelineSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const steps = [
    {
      number: 1,
      period: 'Week 1-2',
      title: 'Audit & baseline',
      description: 'We show you exactly where you rank now and map out the path to top 5',
    },
    {
      number: 2,
      period: 'Week 3-6',
      title: 'Systematic optimization',
      description: 'We optimize every signal AI uses to decide who to recommend',
    },
    {
      number: 3,
      period: 'Week 7-8',
      title: 'Verification',
      description: "You're in the top 5. Customers start finding you automatically.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">Our Guarantee</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-14">
            The guarantee
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* Main guarantee */}
          <div className="animate-on-scroll">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-500/25 shimmer overflow-hidden">
              <div className="relative">
                <p className="text-2xl sm:text-3xl text-white font-extrabold mb-4">
                  Top 5 ranking in 60 days.
                </p>
                <p className="text-lg sm:text-xl text-neutral-300 mb-3">
                  Not "we'll try." Not "maybe." <span className="text-gradient font-semibold">Guaranteed.</span>
                </p>
                <p className="text-base sm:text-lg text-neutral-500">
                  If we don't get you there in 60 days, we keep working for free until you do.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-on-scroll delay-200">
            <div className="space-y-0">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex gap-5 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center flex-shrink-0 ${
                      idx === steps.length - 1
                        ? 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/30'
                        : 'bg-purple-500/15 border-2 border-purple-500/40'
                    }`}>
                      <span className={`font-bold text-sm sm:text-base ${
                        idx === steps.length - 1 ? 'text-white' : 'text-purple-400'
                      }`}>{step.number}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-[2px] h-full bg-gradient-to-b from-purple-500/30 to-purple-500/10 my-1" />
                    )}
                  </div>
                  <div className={`${idx < steps.length - 1 ? 'pb-8' : ''} flex-1`}>
                    <div className="text-purple-400 font-medium mb-1.5 text-sm sm:text-base">{step.period}</div>
                    <p className="text-base sm:text-lg text-white font-semibold mb-1.5">{step.title}</p>
                    <p className="text-sm sm:text-base text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll delay-300">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="glass-card rounded-2xl p-5 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-500 mb-2 stat-glow">94%</div>
                <div className="text-sm sm:text-base text-neutral-500">Hit top 5 within 60 days</div>
              </div>
              <div className="glass-card rounded-2xl p-5 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-500 mb-2 stat-glow">100%</div>
                <div className="text-sm sm:text-base text-neutral-500">Get there eventually (guaranteed)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
