import React from 'react';
import { PricingTier } from '../../types/pricing';
import Button from './Button';

interface PricingCardProps {
  tier: PricingTier;
  mode?: 'preview' | 'full';
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, mode = 'full' }) => {
  const isPreview = mode === 'preview';
  const displayFeatures = isPreview ? tier.features.slice(0, 2) : tier.features;

  return (
    <div className={`relative rounded-2xl p-7 sm:p-8 flex flex-col h-full transition-all duration-300 ${
      tier.highlight
        ? 'bg-gradient-to-br from-purple-500/15 to-indigo-500/10 border border-purple-500/30 shadow-lg shadow-purple-500/10 shimmer overflow-hidden'
        : 'glass-card'
    }`}>
      <div className="relative">
        {tier.badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/15 text-purple-300 text-xs font-semibold rounded-full mb-4 border border-purple-500/20">
            {tier.badge}
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-sm text-neutral-500 mb-6">{tier.tagline}</p>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-extrabold text-white">${tier.price.toLocaleString()}</span>
            <span className="text-neutral-600 text-sm">one-time</span>
          </div>

          <p className="text-sm text-neutral-500">{tier.description}</p>
        </div>

        <div className="flex-grow space-y-6 mb-8">
          {displayFeatures.map((featureGroup, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-3">
                {featureGroup.category}
              </h4>
              <ul className="space-y-2.5">
                {featureGroup.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <div className="w-4 h-4 rounded-full bg-purple-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fa-solid fa-check text-purple-400 text-[8px]"></i>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button
          variant={tier.highlight ? 'primary' : 'secondary'}
          size="md"
          href={tier.cta.href}
          external
          className="w-full"
        >
          {tier.cta.text}
        </Button>

        {isPreview && (
          <p className="text-center text-xs text-neutral-600 mt-4">
            <a href="/pricing" className="hover:text-white transition-colors">
              View full details <i className="fa-solid fa-arrow-right text-[10px] ml-1" />
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
