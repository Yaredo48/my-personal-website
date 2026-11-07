export const colors = {
  primary: 'var(--primary)',
  primaryLight: 'var(--primary-light)',
  secondary: 'var(--secondary)',
  accentTeal: 'var(--accent-teal)',
  accentEmerald: 'var(--accent-emerald)',
  accentAmber: 'var(--accent-amber)',
  background: 'var(--background)',
  backgroundSecondary: 'var(--background-secondary)',
  foreground: 'var(--foreground)',
  textMuted: 'var(--text-muted)',
  border: 'var(--border)',
  cardBg: 'var(--card-bg)',
  cardBorder: 'var(--card-border)',
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
  '4xl': '8rem',
} as const;

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
} as const;
