
import React from 'react';
import { RankingStep } from '../types';

interface StepCardProps {
  step: RankingStep;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'High': return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="glass rounded-[2.5rem] p-8 sm:p-10 border border-white/5 shadow-2xl flex flex-col h-full card-hover transition-all duration-500 group">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
            <i className={`${step.icon} text-xl`}></i>
          </div>
          <div className="flex flex-col gap-1.5">
             <span className="text-[10px] uppercase tracking-widest font-black text-indigo-400">Pillar {index + 1}</span>
             <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border w-fit uppercase tracking-tighter ${getImpactBadge(step.impact)}`}>
               {step.impact}
             </span>
          </div>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight tracking-tight">{step.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{step.description}</p>

      <div className="mt-auto">
        <div className="pt-6 border-t border-white/5">
          <ul className="space-y-3">
            {step.details.slice(0, 3).map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-slate-400">
                <i className="fa-solid fa-check text-indigo-500 mt-0.5 flex-shrink-0"></i>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {step.ghlAutomation && (
          <div className="mt-6 px-4 py-2.5 bg-indigo-500/5 rounded-xl flex items-center gap-2 border border-indigo-500/10">
            <i className="fa-solid fa-bolt text-indigo-400 text-xs"></i>
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wide">Automated via {step.ghlAutomation}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepCard;
