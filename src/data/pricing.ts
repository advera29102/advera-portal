import { PricingTier } from '../types/pricing';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'blueprint',
    name: 'Blueprint',
    tagline: 'Foundation for AI Visibility',
    price: 4000,
    description: 'Perfect for businesses ready to establish their presence in AI search results.',
    features: [
      {
        category: 'Strategy',
        items: [
          'AI Visibility Audit',
          'GBP Optimization Plan',
          'NAP Consistency Check',
          'Baseline AI Ranking Report'
        ]
      },
      {
        category: 'Implementation',
        items: [
          'Google Business Profile Setup',
          'Schema Markup Installation',
          'Review System Setup',
          'Monthly Progress Reports'
        ]
      },
      {
        category: 'Support',
        items: [
          'Email Support',
          '30-Day Implementation Timeline',
          'Monthly Check-ins'
        ]
      },
      {
        category: 'Guarantee',
        items: [
          'Top 10 ChatGPT Ranking in 60 Days',
          'Or We Work for Free Until You Do'
        ]
      }
    ],
    cta: {
      text: 'Get Started',
      href: 'https://cal.com/david-jeffries-afl6j5/30min'
    }
  },
  {
    id: 'accelerator',
    name: 'Accelerator',
    tagline: 'Complete AI Domination Package',
    price: 8000,
    description: 'Most comprehensive solution for businesses serious about owning AI search results.',
    badge: 'Most Popular',
    highlight: true,
    features: [
      {
        category: 'Strategy',
        items: [
          'Everything in Blueprint',
          'Competitor Gap Analysis',
          'Multi-Platform Review Strategy',
          'Content Marketing Plan',
          'Local PR Outreach Strategy'
        ]
      },
      {
        category: 'Implementation',
        items: [
          'All Blueprint Implementation',
          'Case Study Creation (3)',
          'Video Testimonial Production',
          'PR & Media Placement',
          'Advanced Schema Deployment',
          'Weekly Progress Updates'
        ]
      },
      {
        category: 'Support',
        items: [
          'Priority Email & Phone Support',
          '45-Day Implementation Timeline',
          'Bi-Weekly Strategy Calls',
          'Dedicated Account Manager'
        ]
      },
      {
        category: 'Guarantee',
        items: [
          'Top 5 ChatGPT Ranking in 60 Days',
          'Or We Work for Free Until You Do',
          '6-Month Performance Tracking Included'
        ]
      }
    ],
    cta: {
      text: 'Start Accelerating',
      href: 'https://cal.com/david-jeffries-afl6j5/30min'
    }
  },
  {
    id: 'concierge',
    name: 'Concierge',
    tagline: 'White-Glove AI Visibility Management',
    price: 10000,
    description: 'Full-service, hands-off AI visibility management with priority support and ongoing optimization.',
    features: [
      {
        category: 'Strategy',
        items: [
          'Everything in Accelerator',
          'Custom AI Visibility Strategy',
          'Quarterly Strategic Planning',
          'Industry-Specific Optimization',
          'Competitor Monitoring & Response'
        ]
      },
      {
        category: 'Implementation',
        items: [
          'All Accelerator Implementation',
          'Case Study Creation (5)',
          'Professional Video Production',
          'Ongoing PR & Media Relations',
          'Monthly Content Updates',
          'Review Management Service',
          'Daily AI Ranking Monitoring'
        ]
      },
      {
        category: 'Support',
        items: [
          'VIP Priority Support (24/7)',
          '30-Day Fast-Track Implementation',
          'Weekly Strategy Calls',
          'Dedicated Success Team',
          'Direct Founder Access'
        ]
      },
      {
        category: 'Guarantee',
        items: [
          'Top 3 ChatGPT Ranking in 60 Days',
          'Or We Work for Free Until You Do',
          '12-Month Performance Tracking Included',
          'Guaranteed Position Maintenance'
        ]
      }
    ],
    cta: {
      text: 'Get Concierge Service',
      href: 'https://cal.com/david-jeffries-afl6j5/30min'
    }
  }
];
