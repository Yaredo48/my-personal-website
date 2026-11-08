import { Mail, Phone } from 'lucide-react';
import type { CSSProperties } from 'react';

export type ContactMethod =
  | 'Phone'
  | 'LinkedIn'
  | 'GitHub'
  | 'Email'
  | 'Facebook'
  | 'X'
  | 'Telegram'
  | 'Instagram';

const brandColors: Partial<Record<ContactMethod, string>> = {
  Phone: '#25D366',
  Email: '#EA4335',
  LinkedIn: '#0A66C2',
  Facebook: '#0866FF',
  Telegram: '#26A5E4',
};

type ContactIconProps = {
  name: ContactMethod;
  className?: string;
  style?: CSSProperties;
};

export const ContactIcon = ({ name, className, style }: ContactIconProps) => {
  const iconClassName = [
    className,
    name === 'GitHub' || name === 'X' ? 'contact-brand-neutral' : undefined,
  ]
    .filter(Boolean)
    .join(' ');
  const iconStyle = { color: brandColors[name], ...style };

  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} style={iconStyle} aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    );
  }

  if (name === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} style={iconStyle} aria-hidden="true">
        <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.292-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
      </svg>
    );
  }

  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 320 512" fill="currentColor" className={iconClassName} style={iconStyle} aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.36 0 225.36 0C152.77 0 105.47 44 105.47 123.76v71.58H24.1V288h81.37v224h100.2V288z" />
      </svg>
    );
  }

  if (name === 'X') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClassName} style={iconStyle} aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.5h-7.406l-5.8-7.584-6.635 7.584H.478l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.29 19.49h2.039L6.486 3.237H4.298z" />
      </svg>
    );
  }

  if (name === 'Telegram') {
    return (
      <svg viewBox="0 0 496 512" fill="currentColor" className={iconClassName} style={iconStyle} aria-hidden="true">
        <path d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248 248-111.033 248-248S384.967 8 248 8zm121.8 169.2-40.7 191.8c-3 13.6-11 16.9-22.3 10.5l-61.7-45.5-29.8 28.7c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-62.8 114.4-103.4c5-4.4-1.1-6.8-7.8-2.4L172.4 292l-60.4-18.9c-13.1-4.1-13.3-13.1 2.7-19.4l236-91c10.9-4 20.4 2.7 19.1 14.5z" />
      </svg>
    );
  }

  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 448 512" fill="url(#instagram-gradient)" className={iconClassName} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="50%" stopColor="#F77737" />
            <stop offset="100%" stopColor="#C13584" />
          </linearGradient>
        </defs>
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9s-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0-35.9 1.7-67.7 9.9-93.9 36.2s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-58 36.2-93.9c2.1-37 2.1-147.9 0-184.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    );
  }

  const Icon = name === 'Phone' ? Phone : Mail;
  return <Icon className={iconClassName} strokeWidth={3} style={iconStyle} aria-hidden="true" />;
};
