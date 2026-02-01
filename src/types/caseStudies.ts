export interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  industry: string;
  tagline: string;
  results: {
    metric: string;
    value: string;
    icon: string;
  }[];
  timeline: string;
}
