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
      outline: 'border border-[var(--border-strong)] bg-transparent text-[var(--foreground)] hover:border-[var(--primary)]',
    };

    const sizes = {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium leading-none transition-colors duration-200',
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
