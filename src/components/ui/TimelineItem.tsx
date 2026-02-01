import React from 'react';

interface TimelineItemProps {
  days: string;
  title: string;
  items: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ days, title, items, isLast = false }) => {
  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative glass p-8 rounded-3xl border border-white/5 h-full">
        <div className="text-indigo-500 text-xs font-black uppercase mb-2">{days}</div>
        <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
              <i className="fa-solid fa-circle-check text-indigo-600 text-[10px]"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
