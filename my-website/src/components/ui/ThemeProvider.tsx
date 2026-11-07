'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--background', '#0f172a');
      root.style.setProperty('--foreground', '#f1f5f9');
      root.style.setProperty('--background-secondary', '#1e293b');
      root.style.setProperty('--border', '#334155');
      root.style.setProperty('--primary', '#3b82f6');
      root.style.setProperty('--primary-light', '#60a5fa');
      root.style.setProperty('--secondary', '#8b5cf6');
      root.style.setProperty('--accent-teal', '#2dd4bf');
      root.style.setProperty('--accent-emerald', '#34d399');
      root.style.setProperty('--accent-amber', '#fbbf24');
      root.style.setProperty('--text-muted', '#94a3b8');
      root.style.setProperty('--card-bg', '#1e293b');
      root.style.setProperty('--card-border', '#334155');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#0f172a');
      root.style.setProperty('--background-secondary', '#f8fafc');
      root.style.setProperty('--border', '#e2e8f0');
      root.style.setProperty('--primary', '#2563eb');
      root.style.setProperty('--primary-light', '#3b82f6');
      root.style.setProperty('--secondary', '#7c3aed');
      root.style.setProperty('--accent-teal', '#14b8a6');
      root.style.setProperty('--accent-emerald', '#10b981');
      root.style.setProperty('--accent-amber', '#f59e0b');
      root.style.setProperty('--text-muted', '#64748b');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--card-border', '#e2e8f0');
    }

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
