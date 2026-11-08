'use client';

import React, { useEffect, useState } from 'react';
import { Code, Link, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { href: 'https://github.com/yourprofile', icon: Code, label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourprofile', icon: Link, label: 'LinkedIn' },
  { href: 'mailto:contact@example.com', icon: Mail, label: 'Email' },
];

export const Footer = () => {
  const [year, setYear] = useState(2024);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background-secondary)]/90 px-5 py-10 sm:px-8 lg:px-12">
      <div className="w-full">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-[-0.025em] text-[var(--foreground)]">Yared Asfaw</h3>
            <p className="mt-0.5 text-sm text-[var(--text-muted)]">Senior AI Engineer · Software Engineer</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={cn(
                  'rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2.5',
                  'text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]'
                )}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center">
          <p className="text-xs text-[var(--text-subtle)]">
            © {year} Yared Asfaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
