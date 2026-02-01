import React from 'react';

const MobileCTABar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/10 px-4 py-4 safe-area-bottom">
      <a
        href="https://cal.com/david-jeffries-afl6j5/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-indigo-500 active:from-purple-700 active:to-indigo-700 transition-all text-center min-h-[52px] flex items-center justify-center gap-2 touch-manipulation"
      >
        Show Me Where I Rank
        <i className="fa-solid fa-arrow-right text-sm" />
      </a>
    </div>
  );
};

export default MobileCTABar;
