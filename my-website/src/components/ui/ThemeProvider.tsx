'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const initialized = useRef(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');

    document.documentElement.dataset.theme = initialTheme;
    window.setTimeout(() => {
      initialized.current = true;
      setTheme(initialTheme);
    }, 0);
  }, []);

  useEffect(() => {
    if (!initialized.current) return;

    const root = document.documentElement;
    root.dataset.theme = theme;

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return { theme: 'light' as const, toggleTheme: () => {} };
  }
  return context;
}
