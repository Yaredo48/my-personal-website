'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/motion';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yourprofile',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/yourprofile',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export const Hero = () => (
  <section
    id="home"
    className="hero-cinematic relative flex min-h-screen overflow-hidden"
  >
    {/* Two-column grid — text left, portrait right, no gap */}
    <div className="relative z-10 grid w-full grid-cols-1 items-center px-6 pb-10 pt-24 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-0 xl:px-24" style={{ minHeight: '100svh' }}>

      {/* ── Left: text content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center"
      >
        {/* Greeting */}
        <motion.h1
          variants={fadeUp}
          className="mb-3 text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
        >
          Hi, I&apos;m{' '}
          <span className="text-[var(--primary)]">Yared Asfaw</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          className="mb-5 text-xl font-bold text-[var(--foreground)] sm:text-2xl"
        >
          Senior AI Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="mb-8 max-w-md text-base leading-7 text-[var(--text-muted)]"
        >
          I architect, engineer, and deploy scalable AI solutions that transform
          complex challenges into intelligent products. Specializing in ML,
          Generative AI, RAG Systems, and Agentic AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_color-mix(in_srgb,var(--primary)_35%,transparent)] transition-all hover:bg-[var(--primary-light)] hover:shadow-[0_6px_24px_color-mix(in_srgb,var(--primary)_45%,transparent)] active:scale-[0.98]"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--primary)] bg-transparent px-7 py-3.5 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white active:scale-[0.98]"
          >
            See Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
          {socialLinks.map(({ svg, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_4px_12px_color-mix(in_srgb,var(--primary)_30%,transparent)] transition-all hover:scale-110 hover:bg-[var(--primary-light)] hover:shadow-[0_6px_18px_color-mix(in_srgb,var(--primary)_40%,transparent)]"
            >
              {svg}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Right: portrait ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
        className="hidden lg:flex items-end justify-center h-full"
        style={{ minHeight: '100svh' }}
      >
        <img
          src="/media/portrait.png"
          alt="Yared Asfaw"
          className="portrait-blend w-auto max-w-full"
          style={{ height: '92%', objectFit: 'contain', objectPosition: 'bottom center', display: 'block' }}
        />
      </motion.div>
    </div>

    {/* Decorative purple blob — subtle background accent */}
    <div
      className="pointer-events-none absolute right-[10%] top-[15%] h-[500px] w-[500px] rounded-full opacity-[0.07]"
      style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
    />
  </section>
);
