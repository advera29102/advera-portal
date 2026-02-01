export interface PricingTier {
  id: 'blueprint' | 'accelerator' | 'concierge';
  name: string;
  tagline: string;
  price: number;
  description: string;
  badge?: string;
  features: { category: string; items: string[] }[];
  cta: { text: string; href: string };
  highlight?: boolean;
}
