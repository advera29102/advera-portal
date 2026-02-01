export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'General' | 'Pricing' | 'Process' | 'Results';
}
