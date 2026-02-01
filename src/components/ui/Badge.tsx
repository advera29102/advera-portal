import React from 'react';

interface BadgeProps {
  variant: 'critical' | 'high' | 'medium' | 'popular' | 'new';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, children, className = '' }) => {
  const baseClasses = 'inline-block px-3 py-1 text-xs font-medium rounded-full';

  const variantClasses = {
    critical: 'bg-red-500/10 text-red-400',
    high: 'bg-white/5 text-white',
    medium: 'bg-white/5 text-neutral-400',
    popular: 'bg-white/5 text-white',
    new: 'bg-white/5 text-neutral-400'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
