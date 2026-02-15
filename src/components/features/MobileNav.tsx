import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
        onClick={onClose}
      ></div>

      <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-[#0a0a0a] border-l border-white/10 z-[70]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <span className="font-bold text-white text-lg">Advera</span>
            <button
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center text-neutral-400 hover:text-white touch-manipulation"
              aria-label="Close menu"
            >
              <i className="fa-solid fa-times text-xl"></i>
            </button>
          </div>

          <nav className="flex-grow p-5">
            <ul className="space-y-2">
              <li>
                <a
                  href="#reality"
                  onClick={onClose}
                  className="block px-4 py-4 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[52px] flex items-center touch-manipulation"
                >
                  The Reality
                </a>
              </li>
              <li>
                <Link
                  to="/ai-readiness"
                  onClick={onClose}
                  className="block px-4 py-4 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[52px] flex items-center touch-manipulation"
                >
                  AI Readiness
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={onClose}
                  className="block px-4 py-4 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[52px] flex items-center touch-manipulation"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-5 border-t border-white/10">
            <a
              href="https://cal.com/david-jeffries-afl6j5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-purple-600 text-white text-center font-medium rounded-lg hover:bg-purple-700 active:bg-purple-800 transition-colors min-h-[52px] flex items-center justify-center touch-manipulation"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
