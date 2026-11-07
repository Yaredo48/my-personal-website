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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-[var(--border)] bg-[var(--background)]/95 shadow-[0_1px_0_rgb(15_23_42_/_0.03)] backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <a
            href="#home"
            className="text-xl font-bold tracking-[-0.08em] text-[var(--foreground)] transition-colors hover:text-[var(--primary)] md:text-2xl"
          >
            YA
          </a>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Button size="sm" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          <button
            className="p-2 text-[var(--foreground)] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--background)] shadow-lg lg:hidden">
          <div className="space-y-1 px-5 py-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block rounded-md px-3 py-2 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--background-secondary)] hover:text-[var(--primary)]"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--background-secondary)] hover:text-[var(--primary)]"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <Button size="md" className="mt-3 flex w-full items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
