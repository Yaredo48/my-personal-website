'use client';

import React, { useEffect, useState } from 'react';
import { Code, Link, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    const timer = window.setTimeout(() => setYear(new Date().getFullYear()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-secondary)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-semibold tracking-[-0.025em] text-[var(--foreground)]">
              Yared Asfaw
            </h3>
            <p className="text-[var(--text-muted)]">
              Senior AI Engineer | Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] p-3',
                'text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]'
              )}
              aria-label="GitHub"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] p-3',
                'text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]'
              )}
              aria-label="LinkedIn"
            >
              <Link className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className={cn(
                'rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] p-3',
                'text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]'
              )}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            © {year} Yared Asfaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
