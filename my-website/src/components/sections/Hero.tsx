'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Code, Link, Mail, ArrowRight, Download, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const capabilities = [
  { icon: Cpu, label: 'ML & Deep Learning', color: 'text-[var(--primary)]' },
  { icon: Database, label: 'RAG Systems', color: 'text-[var(--secondary)]' },
  { icon: Zap, label: 'Agentic AI', color: 'text-[var(--accent-teal)]' },
  { icon: Code, label: 'LLM Engineering', color: 'text-[var(--accent-emerald)]' },
];

export const Hero = () => (
  <section
    id="home"
    className="hero-cinematic flex min-h-screen items-center justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20"
  >
    <div className="relative z-10 mx-auto w-full max-w-6xl">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
      >
        {/* Left column */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Senior AI Engineer', color: 'border-[var(--primary)]/30 bg-[var(--primary)]/12 text-[var(--primary)]' },
                { label: 'Software Engineer', color: 'border-[var(--border-strong)] bg-[var(--surface)] text-[var(--secondary)]' },
                { label: 'AI Systems Architect', color: 'border-[var(--accent-teal)]/30 bg-[var(--accent-teal)]/12 text-[var(--accent-teal)]' },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Building Intelligent Systems.{' '}
              <span className="text-[var(--primary)]">Engineering the Future.</span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-[var(--text-muted)] md:text-xl">
              I architect, engineer, and deploy scalable AI solutions that transform complex challenges into intelligent products.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="flex items-center gap-2"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {[
              { href: 'https://github.com/yourprofile', icon: Code, label: 'GitHub' },
              { href: 'https://linkedin.com/in/yourprofile', icon: Link, label: 'LinkedIn' },
              { href: 'mailto:contact@example.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-3 text-[var(--foreground)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column — capability card */}
        <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 shadow-[0_24px_56px_rgb(0_0_0_/_0.32)] backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-subtle)]">
                  Systems practice
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--foreground)]">
                  Applied AI engineering
                </p>
              </div>
              <span
                className="h-2.5 w-2.5 rounded-full bg-[var(--accent-emerald)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent-emerald)_20%,transparent)]"
                aria-label="Available"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {capabilities.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-4 transition-colors hover:border-[var(--border-strong)]"
                >
                  <Icon className={`mb-2.5 h-7 w-7 ${color}`} />
                  <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="text-center text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)]">
                End-to-End AI Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
