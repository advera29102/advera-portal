import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FAQSection: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I don't rank in 60 days?",
      answer: "We keep working for free until you do. Simple as that. We've hit the 60-day mark for 94% of clients, but if you're in the 6%, we don't charge another dollar until you're top 5."
    },
    {
      question: "How is this different from SEO?",
      answer: "SEO gets you ranked on Google. This gets you recommended by ChatGPT. Completely different game. And while SEO takes 12+ months, this takes 60 days."
    },
    {
      question: "Can't I just do this myself?",
      answer: "You could spend 2 years figuring out what signals AI looks for. Or 60 days with us getting results. Up to you."
    },
    {
      question: "What if my competitors are already doing this?",
      answer: "Then they know what's up. But we've consistently outranked businesses spending 10x more because we know exactly what AI prioritizes. First mover helps, but second mover with the right strategy still wins."
    },
    {
      question: "What does this actually cost?",
      answer: "$4,000-$10,000 one-time, depending on your market. Compare that to what you're spending monthly on Ads that reach fewer people every month."
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-14">
            Common questions
          </h2>
        </div>

        <div className="space-y-3 animate-on-scroll delay-100">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left touch-manipulation"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <i className="fa-solid fa-chevron-down text-purple-400 text-xs" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
