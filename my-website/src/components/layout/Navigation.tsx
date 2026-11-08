'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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
          ? 'bg-[var(--nav-bg)] shadow-[0_2px_20px_rgb(0_0_0_/_0.06)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex h-[4.5rem] items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-2xl font-bold tracking-tight text-[var(--foreground)]"
          >
            YA<span className="text-[var(--primary)]">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--foreground)] hover:text-[var(--primary)]'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_color-mix(in_srgb,var(--primary)_35%,transparent)] transition-all hover:bg-[var(--primary-light)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--primary)_40%,transparent)] active:scale-[0.98]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 text-[var(--foreground)] transition-colors hover:text-[var(--primary)] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl lg:hidden">
          <div className="space-y-0.5 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  activeSection === item.href.slice(1)
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--foreground)] hover:text-[var(--primary)]'
                )}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)]"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="ml-auto rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
