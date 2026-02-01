import React from 'react';
import { CaseStudy } from '../../types/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="card p-8 flex flex-col h-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3 text-xs text-neutral-500">
          <span>{caseStudy.industry}</span>
          <span>·</span>
          <span>{caseStudy.timeline}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{caseStudy.company}</h3>
        <p className="text-sm text-neutral-400">{caseStudy.tagline}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {caseStudy.results.map((result, idx) => (
          <div key={idx} className="text-center">
            <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
            <div className="text-xs text-neutral-500">{result.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
