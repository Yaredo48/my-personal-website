import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary-light)] focus:ring-[var(--primary)] shadow-md hover:shadow-lg',
      secondary: 'bg-[var(--secondary)] text-white hover:bg-purple-600 focus:ring-[var(--secondary)] shadow-md hover:shadow-lg',
      outline: 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white focus:ring-[var(--primary)]',
      ghost: 'text-[var(--foreground)] hover:bg-[var(--background-secondary)] focus:ring-[var(--foreground)]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
