'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ui/ThemeProvider';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const updateObserver = () => {
      observer?.disconnect();
      const topOffset = Math.round(window.innerHeight * 0.25);
      const bottomOffset = Math.round(window.innerHeight * 0.65);
      observer = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);
          const currentSection = visibleSections[0]?.target.id;
          if (currentSection) setActiveSection(currentSection);
        },
        { rootMargin: `-${topOffset}px 0px -${bottomOffset}px 0px`, threshold: 0 }
      );

      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) observer?.observe(section);
      });
    };

    updateObserver();
    window.addEventListener('resize', updateObserver);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateObserver);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen((isOpen) => !isOpen);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'nav-shell fixed inset-x-0 top-0 z-50',
        isScrolled && 'nav-shell-scrolled'
      )}
    >
      <div className="container">
        <div className="nav-bar">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="nav-brand"
            aria-label="Yared Birhanu — home"
          >
            <Image
              src="/media/yaredpp.jpg"
              alt=""
              className="nav-avatar"
              width={48}
              height={48}
              sizes="48px"
            />
            <span className="nav-brand-name">
              Yared <span>Birhanu</span>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn('nav-link', isActive && 'nav-link-active')}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="nav-theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </button>
            <a href="#contact" className="nav-contact-link">
              Let&apos;s talk
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            type="button"
            className="nav-menu-toggle"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="container">
              <div className="nav-mobile-grid">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      aria-current={isActive ? 'location' : undefined}
                      className={cn('nav-mobile-link', isActive && 'nav-mobile-link-active')}
                    >
                      <span className="nav-mobile-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.name}</span>
                      <span className="nav-mobile-arrow" aria-hidden="true">↗</span>
                    </a>
                  );
                })}
              </div>
              <div className="nav-mobile-footer">
                <span>Building intelligent systems</span>
                <button onClick={toggleTheme} className="nav-mobile-theme">
                  {theme === 'light' ? (
                    <Moon aria-hidden="true" />
                  ) : (
                    <Sun aria-hidden="true" />
                  )}
                  {theme === 'light' ? 'Dark mode' : 'Light mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
