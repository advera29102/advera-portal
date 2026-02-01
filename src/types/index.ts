
export enum StepStatus {
  COMPLETED = 'Verified',
  IN_PROGRESS = 'Active Optimization',
  PENDING = 'Queued',
  ACTION_REQUIRED = 'Awaiting Input'
}

export interface RankingStep {
  id: number;
  title: string;
  description: string;
  status: StepStatus;
  progress: number;
  icon: string;
  details: string[];
  impact: 'Critical' | 'High' | 'Medium';
  ghlAutomation?: string;
}

export interface ClientData {
  companyName: string;
  overallScore: number;
  visibilityTrend: { date: string; score: number }[];
  steps: RankingStep[];
}
