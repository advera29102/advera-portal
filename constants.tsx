
import { RankingStep, StepStatus } from './types';

export const STEPS: RankingStep[] = [
  {
    id: 1,
    title: "Perfect Your Google Business Profile",
    description: "Your digital storefront. AI reads articles and directories that reference your GBP to verify trust and activity.",
    status: StepStatus.COMPLETED,
    progress: 100,
    icon: "fa-solid fa-shop",
    impact: "Critical",
    details: ["Complete every single field", "30-50 High-quality photos", "Weekly content updates"]
  },
  {
    id: 2,
    title: "Build a Cross-Platform Review Strategy",
    description: "AI is suspicious of single-platform success. We build consistent, positive reviews across Google, Yelp, and Facebook.",
    status: StepStatus.IN_PROGRESS,
    progress: 85,
    icon: "fa-solid fa-star",
    impact: "High",
    details: ["Multi-platform review system", "Automated review requests", "Response to 100% of feedback"]
  },
  {
    id: 3,
    title: "Lock Your NAP Consistency",
    description: "Name, Address, and Phone must be character-for-character identical everywhere to eliminate AI hallucinations.",
    status: StepStatus.COMPLETED,
    progress: 100,
    icon: "fa-solid fa-fingerprint",
    impact: "High",
    details: ["Character-for-character match", "Duplicate removal", "Global directory locking"]
  },
  {
    id: 4,
    title: "Secure Local Media & Digital PR",
    description: "Third-party validation acts as a credibility multiplier. AI scans news and authority sites to find 'proof'.",
    status: StepStatus.IN_PROGRESS,
    progress: 60,
    icon: "fa-solid fa-newspaper",
    impact: "Critical",
    details: ["Local newspaper features", "Industry awards", "Guest article placements"]
  },
  {
    id: 5,
    title: "Inject AI-Readable Schema",
    description: "Giving AI a cheat sheet. Structured data (JSON-LD) tells LLMs exactly who you are and what you do.",
    status: StepStatus.ACTION_REQUIRED,
    progress: 40,
    icon: "fa-solid fa-code",
    impact: "High",
    details: ["Local Business Schema", "FAQ & Review Schema", "Organization Markup"]
  },
  {
    id: 6,
    title: "Flaunt Case Studies & Testimonials",
    description: "Documented success is a high-ranking signal. We convert your wins into structured proof AI can't ignore.",
    status: StepStatus.PENDING,
    progress: 20,
    icon: "fa-solid fa-chart-line",
    impact: "High",
    details: ["Problem-Solution-Result format", "Video testimonials", "Client logo walls"]
  },
  {
    id: 7,
    title: "Monitor, Optimize & Defend Monthly",
    description: "AI search results change daily. Continuous spot-checks ensure you remain the default recommendation.",
    status: StepStatus.PENDING,
    progress: 10,
    icon: "fa-solid fa-shield-halved",
    impact: "Critical",
    details: ["Monthly AI health checks", "Competitor gap analysis", "Visibility trend tracking"]
  }
];

export const ROADMAP = [
  { days: "1-7", title: "Foundation", items: ["GBP Audit", "NAP Verification", "Baseline AI Check"] },
  { days: "8-14", title: "Social Proof", items: ["Review Request System", "Profile Expansion", "Reputation Cleanup"] },
  { days: "15-30", title: "Technical", items: ["Schema Injection", "Site Updates", "NAP Correction"] },
  { days: "31-45", title: "Content", items: ["Case Study Identification", "Testimonial Publishing", "FAQ Building"] }
];
