import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 py-10 sm:py-14 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">A</span>
              </div>
              <span className="font-bold text-white">Advera</span>
            </div>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span className="text-neutral-600">AI Search Optimization</span>
          </div>

          <nav className="flex gap-6 sm:gap-8" aria-label="Footer navigation">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <p className="text-xs sm:text-sm text-neutral-600">&copy; 2026 Advera</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
