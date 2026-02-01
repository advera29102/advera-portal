import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SocialProofSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const benefits = [
    {
      icon: 'fa-users',
      label: 'CUSTOMERS',
      title: 'Steady flow of inbound leads',
      description: 'People finding you without paid ads or cold outreach',
    },
    {
      icon: 'fa-crown',
      label: 'AUTHORITY',
      title: 'AI recommends you by default',
      description: "Your competitors aren't even in the conversation",
    },
    {
      icon: 'fa-bolt',
      label: 'LEVERAGE',
      title: 'First mover advantage',
      description: 'Locked in before your market gets saturated',
    },
    {
      icon: 'fa-lock',
      label: 'CERTAINTY',
      title: 'Guaranteed timeline',
      description: '60 days or we work for free. No excuses.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6" ref={sectionRef}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">What You Get</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-14">
            The results
          </h2>
        </div>

        {/* Main deliverable */}
        <div className="animate-on-scroll">
          <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-500/25 shimmer overflow-hidden">
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Top 5 ranking</div>
              <p className="text-lg sm:text-xl text-neutral-300 mb-3">
                When people in your market ask ChatGPT for recommendations, you show up in the top 5.
              </p>
              <p className="text-base sm:text-lg text-neutral-500">
                Not "improved visibility." Not "better SEO." Actual top 5 placement when it matters.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="animate-on-scroll delay-200">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-8">
            {benefits.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-6 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <i className={`fa-solid ${item.icon} text-purple-400 text-sm`} />
                  </div>
                  <span className="text-purple-400 font-bold text-xs tracking-wider">{item.label}</span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium mb-1">{item.title}</p>
                <p className="text-sm sm:text-base text-neutral-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="animate-on-scroll delay-300">
          <div className="mt-10 glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-neutral-300 mb-4">
              <span className="text-white font-semibold">94% of our clients</span> hit top 5 within 60 days. The rest got there within 90 days at no extra cost.
            </p>
            <p className="text-base sm:text-lg text-neutral-300">
              Most see <span className="text-gradient font-semibold">30-40% of new customers</span> coming from AI search within 3 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
