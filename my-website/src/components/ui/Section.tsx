import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'none';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, background = 'default', ...props }, ref) => {
    const backgrounds = {
      default: 'bg-[var(--background)]',
      secondary: 'bg-[var(--background-secondary)]',
      none: '',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative py-[var(--section-pad-y)]',
          backgrounds[background],
          className
        )}
        {...props}
      >
        <div className="container relative">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { centered?: boolean }
>(({ className, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-14 md:mb-16',
      centered && 'text-center',
      className
    )}
    {...props}
  />
));
SectionHeader.displayName = 'SectionHeader';

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
    {children}
  </p>
);

export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'mb-4 bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-[var(--primary-dark)] bg-clip-text text-[2.25rem] font-bold leading-[1.15] tracking-[-0.04em] text-transparent sm:text-[2.625rem] lg:text-[3rem]',
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
      'max-w-2xl text-lg leading-[1.75] text-[var(--text-muted)] md:text-xl',
      className
    )}
    {...props}
  />
));
SectionSubtitle.displayName = 'SectionSubtitle';
