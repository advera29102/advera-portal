import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PricingPreviewSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6" ref={sectionRef}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">Investment</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-14">
            What this costs
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Current spend */}
          <div className="animate-on-scroll">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-arrow-trend-down text-red-400 text-sm" />
                <span className="text-sm text-neutral-500 font-medium">YOU'RE PROBABLY SPENDING</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-3">$2,000-$10,000/month</div>
              <p className="text-base sm:text-lg text-neutral-500">
                On Ads that reach fewer customers every month as more people switch to AI.
              </p>
            </div>
          </div>

          {/* Our pricing */}
          <div className="animate-on-scroll delay-100">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-500/25 shimmer overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-arrow-trend-up text-emerald-400 text-sm" />
                  <span className="text-sm text-purple-400 font-bold">ONE-TIME INVESTMENT</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-5">$4,000 - $10,000</div>
                <div className="space-y-3 text-base sm:text-lg">
                  {[
                    'Top 5 ChatGPT ranking guaranteed in 60 days',
                    "Keep working for free if we don't hit it",
                    'Steady flow of customers on autopilot',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fa-solid fa-check text-purple-400 text-[10px]" />
                      </div>
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Math */}
          <div className="animate-on-scroll delay-200">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-calculator text-purple-400 text-sm" />
                <p className="text-base sm:text-lg text-white font-bold">Simple math:</p>
              </div>
              <div className="space-y-3 text-base sm:text-lg text-neutral-300">
                <p>
                  <span className="text-gradient font-semibold">3 extra customers/month</span> x <span className="text-gradient font-semibold">$2,000 average value</span> = <span className="text-white font-bold">$6,000/month</span>
                </p>
                <p className="text-gradient font-semibold inline-block">
                  Positive ROI in month 1. Compounds every month after.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="animate-on-scroll delay-300">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" href="https://cal.com/david-jeffries-afl6j5/30min" external className="w-full sm:w-auto">
                See If This Makes Sense
                <i className="fa-solid fa-arrow-right ml-2 text-sm" />
              </Button>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  View Pricing Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
