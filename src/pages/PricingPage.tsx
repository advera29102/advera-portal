import React from 'react';
import { PRICING_TIERS } from '../data/pricing';
import { FAQ_ITEMS } from '../data/faq';
import PricingCard from '../components/ui/PricingCard';
import FAQItem from '../components/ui/FAQItem';
import Button from '../components/ui/Button';

const PricingPage: React.FC = () => {
  const pricingFAQs = FAQ_ITEMS.filter(faq => faq.category === 'Pricing');

  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6">
      {/* Background orb */}
      <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 absolute opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Transparent pricing.
            <span className="block mt-2 text-neutral-500">Guaranteed results.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            All plans include our 60-day guarantee: Top 5 ChatGPT ranking or we work for free.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-20">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} mode="full" />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-12 text-center">
            Compare plans
          </h2>

          {/* Desktop Table */}
          <div className="hidden lg:block glass-card rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-neutral-500 font-medium text-sm">Feature</th>
                  {PRICING_TIERS.map((tier) => (
                    <th key={tier.id} className="p-6 text-center">
                      <div className="text-white font-bold text-lg mb-1">{tier.name}</div>
                      <div className="text-neutral-500 text-sm">${tier.price.toLocaleString()}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="p-6 text-neutral-300">AI Visibility Audit</td>
                  <td className="p-6 text-center"><i className="fa-solid fa-check text-purple-400"></i></td>
                  <td className="p-6 text-center"><i className="fa-solid fa-check text-purple-400"></i></td>
                  <td className="p-6 text-center"><i className="fa-solid fa-check text-purple-400"></i></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-neutral-300">Case Studies Created</td>
                  <td className="p-6 text-center text-neutral-600">0</td>
                  <td className="p-6 text-center text-white font-medium">3</td>
                  <td className="p-6 text-center text-white font-medium">5</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-neutral-300">Video Testimonials</td>
                  <td className="p-6 text-center"><i className="fa-solid fa-minus text-neutral-700"></i></td>
                  <td className="p-6 text-center"><i className="fa-solid fa-check text-purple-400"></i></td>
                  <td className="p-6 text-center"><i className="fa-solid fa-check text-purple-400"></i></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-neutral-300">Support Level</td>
                  <td className="p-6 text-center text-neutral-500">Email</td>
                  <td className="p-6 text-center text-white font-medium">Priority</td>
                  <td className="p-6 text-center text-white font-medium">VIP 24/7</td>
                </tr>
                <tr>
                  <td className="p-6 text-neutral-300">Ranking Target</td>
                  <td className="p-6 text-center text-neutral-500">Top 10</td>
                  <td className="p-6 text-center text-white font-medium">Top 5</td>
                  <td className="p-6 text-center text-white font-medium">Top 3</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.id} className="glass-card rounded-2xl p-6">
                <div className="text-center mb-6 pb-6 border-b border-white/5">
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-neutral-400">${tier.price.toLocaleString()}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Case Studies</span>
                    <span className="text-white">{tier.id === 'blueprint' ? '0' : tier.id === 'accelerator' ? '3' : '5'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Support</span>
                    <span className="text-white">{tier.id === 'blueprint' ? 'Email' : tier.id === 'accelerator' ? 'Priority' : 'VIP'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Target</span>
                    <span className="text-white">{tier.id === 'blueprint' ? 'Top 10' : tier.id === 'accelerator' ? 'Top 5' : 'Top 3'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-12 text-center">
            Pricing questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {pricingFAQs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center relative rounded-2xl p-10 sm:p-12 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-purple-500/20 overflow-hidden">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Book a free strategy call and we'll show you where you rank.
            </p>
            <Button variant="primary" size="lg" href="https://cal.com/david-jeffries-afl6j5/30min" external>
              Book a Call
              <i className="fa-solid fa-arrow-right ml-2 text-sm" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
