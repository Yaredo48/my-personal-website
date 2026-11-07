import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold tracking-[-0.01em] transition duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-px';

    const variants = {
      primary: 'bg-[var(--primary)] text-white shadow-sm hover:bg-[var(--primary-light)] hover:shadow-md',
      secondary: 'bg-[var(--foreground)] text-[var(--background)] shadow-sm hover:opacity-90',
      outline: 'border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]',
      ghost: 'text-[var(--foreground)] hover:bg-[var(--background-secondary)]',
    };

    const sizes = {
      sm: 'min-h-9 px-3.5 py-2 text-sm',
      md: 'min-h-11 px-5 py-2.5 text-sm',
      lg: 'min-h-12 px-6 py-3 text-base',
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
