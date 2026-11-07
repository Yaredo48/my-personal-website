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
          'px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28',
          backgrounds[background],
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-6xl">{children}</div>
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
    className={cn('mb-12 max-w-3xl md:mb-16', className)}
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
      'mb-4 text-3xl font-semibold tracking-[-0.035em] md:text-4xl lg:text-[2.75rem]',
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
      'max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg',
      className
    )}
    {...props}
  />
));

SectionSubtitle.displayName = 'SectionSubtitle';
