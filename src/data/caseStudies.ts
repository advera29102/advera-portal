import { CaseStudy } from '../types/caseStudies';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    slug: 'elite-dental-group',
    company: 'Elite Dental Group',
    industry: 'Healthcare - Dental',
    tagline: 'From invisible to #1 ChatGPT recommendation in 45 days',
    results: [
      {
        metric: 'AI Ranking',
        value: '#1',
        icon: 'fa-solid fa-trophy'
      },
      {
        metric: 'New Patients',
        value: '+215%',
        icon: 'fa-solid fa-chart-line'
      },
      {
        metric: 'Time to Top 5',
        value: '45 days',
        icon: 'fa-solid fa-clock'
      }
    ],
    timeline: '45 days'
  },
  {
    id: 'cs2',
    slug: 'summit-properties',
    company: 'Summit Properties',
    industry: 'Real Estate - Commercial',
    tagline: 'Dominated competitive metro market against national firms',
    results: [
      {
        metric: 'AI Visibility',
        value: '850%',
        icon: 'fa-solid fa-rocket'
      },
      {
        metric: 'Qualified Leads',
        value: '+180%',
        icon: 'fa-solid fa-users'
      },
      {
        metric: 'Implementation',
        value: '52 days',
        icon: 'fa-solid fa-calendar-check'
      }
    ],
    timeline: '52 days'
  },
  {
    id: 'cs3',
    slug: 'rodriguez-law-firm',
    company: 'Rodriguez Law Firm',
    industry: 'Legal Services',
    tagline: 'Outranked 3 major competitors with 10x the marketing budget',
    results: [
      {
        metric: 'Market Position',
        value: 'Top 3',
        icon: 'fa-solid fa-medal'
      },
      {
        metric: 'Consultation Requests',
        value: '+165%',
        icon: 'fa-solid fa-phone'
      },
      {
        metric: 'ROI',
        value: '420%',
        icon: 'fa-solid fa-dollar-sign'
      }
    ],
    timeline: '58 days'
  },
  {
    id: 'cs4',
    slug: 'park-financial-advisors',
    company: 'Park Financial Advisors',
    industry: 'Financial Services',
    tagline: '40% of new clients now discover them through AI search',
    results: [
      {
        metric: 'AI-Sourced Clients',
        value: '40%',
        icon: 'fa-solid fa-brain'
      },
      {
        metric: 'Brand Mentions',
        value: '+320%',
        icon: 'fa-solid fa-bullhorn'
      },
      {
        metric: 'Time to Results',
        value: '38 days',
        icon: 'fa-solid fa-stopwatch'
      }
    ],
    timeline: '38 days'
  },
  {
    id: 'cs5',
    slug: 'thompson-home-services',
    company: 'Thompson Home Services',
    industry: 'Home Services',
    tagline: 'Seasonal business transformed into year-round AI-driven leads',
    results: [
      {
        metric: 'Off-Season Growth',
        value: '+275%',
        icon: 'fa-solid fa-arrow-trend-up'
      },
      {
        metric: 'AI Rankings',
        value: 'Top 5',
        icon: 'fa-solid fa-ranking-star'
      },
      {
        metric: 'Customer Acquisition Cost',
        value: '-45%',
        icon: 'fa-solid fa-piggy-bank'
      }
    ],
    timeline: '60 days'
  }
];
