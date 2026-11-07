import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-[var(--background-secondary)] text-[var(--foreground)] border border-[var(--border)]',
      primary: 'bg-[var(--primary)] text-white',
      secondary: 'bg-[var(--secondary)] text-white',
      outline: 'border-2 border-[var(--primary)] text-[var(--primary)]',
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
