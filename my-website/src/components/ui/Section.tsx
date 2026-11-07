import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'primary';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, background = 'default', ...props }, ref) => {
    const backgrounds = {
      default: 'bg-[var(--background)]',
      secondary: 'bg-[var(--background-secondary)]',
      primary: 'bg-[var(--primary)] text-white',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'py-20 md:py-32 px-4 md:px-8 lg:px-16',
          backgrounds[background],
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-center mb-12 md:mb-16', className)}
    {...props}
  />
));

SectionHeader.displayName = 'SectionHeader';

export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
      className
    )}
    {...props}
  />
));

SectionTitle.displayName = 'SectionTitle';

export const SectionSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto',
      className
    )}
    {...props}
  />
));

SectionSubtitle.displayName = 'SectionSubtitle';
