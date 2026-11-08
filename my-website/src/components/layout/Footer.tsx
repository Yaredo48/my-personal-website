'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ContactIcon, type ContactMethod } from '@/components/ui/ContactIcon';
import { profile } from '@/data/profile';

const contactLinks: { href: string; icon: ContactMethod; label: string; external?: boolean }[] = [
  { href: `tel:${profile.phone}`, icon: 'Phone', label: 'Phone' },
  { href: `mailto:${profile.email}`, icon: 'Email', label: 'Email' },
  { href: profile.linkedin, icon: 'LinkedIn', label: 'LinkedIn', external: true },
  { href: profile.github, icon: 'GitHub', label: 'GitHub', external: true },
  { href: profile.facebook, icon: 'Facebook', label: 'Facebook', external: true },
  { href: profile.twitter, icon: 'X', label: 'X / Twitter', external: true },
  { href: profile.telegram, icon: 'Telegram', label: 'Telegram', external: true },
  { href: profile.instagram, icon: 'Instagram', label: 'Instagram', external: true },
];

export const Footer = () => {
  const [year, setYear] = useState(2024);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background-secondary)]/90 py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-[-0.025em] text-[var(--foreground)]">Yared Asfaw</h3>
            <p className="mt-0.5 text-sm text-[var(--text-muted)]">Senior AI Engineer · Software Engineer</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <span className="text-sm font-medium text-[var(--text-muted)]">Find us on:</span>
            {contactLinks.map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2.5',
                  'text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]'
                )}
              >
                <ContactIcon
                  name={icon}
                  className="h-[1.125rem] w-[1.125rem] transition-colors"
                />
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
