import React, { useState } from 'react';
import { useExitIntent } from '../../hooks/useExitIntent';
import Button from '../ui/Button';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useExitIntent({
    onExitIntent: () => setIsVisible(true)
  });

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Exit Intent Form Submission:', { name, email });
    setSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div className="relative glass-card rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 border-purple-500/20">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white rounded-full hover:bg-white/5 transition-colors touch-manipulation"
          aria-label="Close popup"
        >
          <i className="fa-solid fa-times text-lg"></i>
        </button>

        {!submitted ? (
          <>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
              <i className="fa-solid fa-chart-bar text-purple-400 text-xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 pr-8">
              Wait — see where you rank right now
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 mb-6">
              We'll send you a free report showing where you show up when people ask ChatGPT about businesses like yours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 min-h-[48px] touch-manipulation transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 min-h-[48px] touch-manipulation transition-colors"
              />
              <Button variant="primary" size="md" className="w-full">
                Send Me My Report
              </Button>
            </form>
            <p className="text-xs text-neutral-600 mt-4 text-center">
              No spam. Just your ranking report.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-check text-purple-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Check your email</h3>
            <p className="text-neutral-500">Your ranking report is on the way.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
