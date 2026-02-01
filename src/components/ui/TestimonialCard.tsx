import React from 'react';
import { Testimonial } from '../../types/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="card p-8 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fa-solid fa-star text-white/20 text-xs"></i>
        ))}
      </div>

      <blockquote className="text-neutral-300 leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>

      {testimonial.result && (
        <div className="mb-4 text-sm text-neutral-500">
          {testimonial.result}
        </div>
      )}

      <div className="flex items-center gap-3 pt-6 border-t border-white/10">
        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {testimonial.author.name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-medium text-sm">{testimonial.author.name}</div>
          <div className="text-neutral-500 text-xs">
            {testimonial.author.title}, {testimonial.author.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
