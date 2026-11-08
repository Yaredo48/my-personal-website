'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/motion';
import { ContactIcon, type ContactMethod } from '@/components/ui/ContactIcon';
import { profile } from '@/data/profile';

const socialLinks: { label: ContactMethod; href: string }[] = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
];

export const Hero = () => (
  <section
    id="home"
    className="hero-cinematic relative overflow-hidden"
    style={{ minHeight: '100svh' }}
  >
    {/*
      ── Outer shell: full-viewport flex column, centers the inner grid
         vertically. Nav is fixed so we compensate with pt for the nav bar.
    */}
    <div className="flex min-h-[100svh] flex-col justify-center pt-[4.5rem]">

      {/*
        ── Inner grid: two equal columns.
           Left  → text block, vertically centered.
           Right → portrait column, fills the available height.

           On tablet (md) we stack: portrait above, text below — both centered.
           On mobile (< md) portrait is hidden; text is centered.
      */}
      <div className="container grid min-h-0 grid-cols-1 items-center gap-0 md:grid-cols-2">

        {/* ── LEFT: text content ─────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center py-16 pr-0 md:py-20 md:pr-10 lg:pr-16"
        >
          {/* Eyebrow label */}
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex w-fit items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-[var(--primary)]"
          >
            <span
              className="inline-block h-px w-6 bg-[var(--primary)]"
              aria-hidden="true"
            />
            Senior AI Engineer
          </motion.p>

          {/* Name — the primary visual anchor */}
          <motion.h1
            variants={fadeUp}
            className="mb-5 text-[2.5rem] font-bold leading-[1.06] tracking-[-0.04em] text-[var(--foreground)] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]"
          >
            Hi, I&apos;m{' '}
            <br className="hidden sm:block" />
            <span className="text-[var(--primary)]">Yared Asfaw</span>
          </motion.h1>

          {/* Role subtitle */}
          <motion.p
            variants={fadeUp}
            className="mb-5 text-base font-semibold tracking-[-0.01em] text-[var(--foreground)] sm:text-lg"
          >
            AI Engineer · ML Researcher · Software Architect
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="mb-9 max-w-[460px] text-[0.9375rem] leading-[1.8] text-[var(--text-muted)]"
          >
            I architect, engineer, and deploy scalable AI solutions that
            transform complex challenges into intelligent products. Specializing
            in ML, Generative AI, RAG Systems, and Agentic AI.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_color-mix(in_srgb,var(--primary)_30%,transparent)] transition-all hover:bg-[var(--primary-light)] hover:shadow-[0_8px_26px_color-mix(in_srgb,var(--primary)_40%,transparent)] active:scale-[0.98]"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--primary)] bg-transparent px-7 py-3.5 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white active:scale-[0.98]"
            >
              See Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Divider + social row */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center gap-4"
          >
            <span className="h-px flex-1 max-w-[2rem] bg-[var(--border)]" aria-hidden="true" />
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-subtle)]">
              Connect
            </span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] shadow-sm transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-[0_3px_12px_color-mix(in_srgb,var(--primary)_18%,transparent)]"
                >
                  <ContactIcon name={label} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: portrait ────────────────────────────────────────── */}
        {/*
          portrait-col is a CSS class that:
            - fills the full column height via align-self:stretch
            - centers the image both axes
            - clips overflow

          The image uses object-fit:contain + object-position:center so the
          subject (centered at 50.4% of image width) aligns with the column
          center. Width is 100% of the column; height is auto so the 2:3
          aspect ratio is respected and the image never overflows vertically.

          max-height clamps the image to 88vh so on short viewports the
          portrait doesn't push content off-screen.
        */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="portrait-col hidden self-stretch md:flex"
        >
          <img
            src="/media/portrait.png"
            alt="Yared Asfaw — Senior AI Engineer"
            className="portrait-blend"
            style={{
              width: '100%',
              maxHeight: '88vh',
              objectFit: 'contain',
              objectPosition: 'center bottom',
            }}
          />
        </motion.div>
      </div>
    </div>

    {/* Ambient glow — sits behind everything, purely decorative */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[5%] top-[20%] h-[520px] w-[520px] rounded-full opacity-[0.055]"
      style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 68%)' }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[10%] right-[8%] h-[360px] w-[360px] rounded-full opacity-[0.04]"
      style={{ background: 'radial-gradient(circle, #6d28d9 0%, transparent 70%)' }}
    />
  </section>
);
