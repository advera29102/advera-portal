import React, { useState, useEffect } from 'react';

const MobileCTABar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/10 px-4 py-4 safe-area-bottom transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
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
