import React, { useState } from 'react';
import { FAQItem as FAQItemType } from '../../types/faq';

interface FAQItemProps {
  faq: FAQItemType;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 sm:px-6 py-5 flex items-center justify-between gap-4 text-left touch-manipulation"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fa-solid fa-chevron-down text-purple-400 text-xs"></i>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 sm:px-6 pb-5 text-sm text-neutral-400 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
