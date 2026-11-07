import React from 'react';
import { Code, Linkedin as LinkedIn, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Footer = () => {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
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
                'p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]',
                'text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)]',
                'transition-all duration-300'
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
                'p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]',
                'text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)]',
                'transition-all duration-300'
              )}
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className={cn(
                'p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]',
                'text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)]',
                'transition-all duration-300'
              )}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Yared Asfaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
