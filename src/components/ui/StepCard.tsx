import React from 'react';
import { RankingStep } from '../../types';

interface StepCardProps {
  step: RankingStep;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  return (
    <div className="card p-8 card-hover h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white">
          <i className={`${step.icon} text-lg`}></i>
        </div>
        <span className="text-sm text-neutral-500 font-medium">Pillar {index + 1}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-3 leading-snug">{step.title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed flex-grow">{step.description}</p>
    </div>
  );
};

export default StepCard;
