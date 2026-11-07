'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Menu, X, Github, Linkedin, Download, Sun, Moon } from 'lucide-react';

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
          ? 'bg-[var(--background)]/95 backdrop-blur-md shadow-md border-b border-[var(--border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            YA
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--background-secondary)] text-[var(--foreground)] hover:bg-[var(--primary)]/10 transition-colors"
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
            className="md:hidden p-2 text-[var(--foreground)]"
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
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border)]">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <Button size="md" className="w-full flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
