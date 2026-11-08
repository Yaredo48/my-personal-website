'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Research', href: '#research' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-[var(--border)] bg-[var(--nav-bg)] shadow-[0_1px_12px_rgb(15_28_53_/_0.06)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-xl font-bold tracking-[-0.08em] text-[var(--foreground)] transition-colors hover:text-[var(--primary)] md:text-2xl"
          >
            YA
          </a>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={cn(
                  'text-sm font-medium transition-colors',
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--foreground)]'
                )}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <Button size="sm" className="flex items-center gap-1.5">
              <Download className="h-3.5 w-3.5" />
              Resume
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-[var(--foreground)] transition-colors hover:bg-[var(--background-secondary)] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl lg:hidden">
          <div className="space-y-0.5 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  activeSection === item.href.slice(1)
                    ? 'bg-[var(--primary)]/10 text-[var(--primary)]'
                    : 'text-[var(--foreground)] hover:bg-[var(--background-secondary)]'
                )}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--background-secondary)]"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
              <Button size="sm" className="ml-auto flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
