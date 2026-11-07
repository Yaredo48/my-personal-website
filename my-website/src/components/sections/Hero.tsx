'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Code, Link, Mail, ArrowRight, Download, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="hero-cinematic flex min-h-screen items-center justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20"
    >
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/media/ai-network.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20"
        >
          <div className="space-y-9">
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--primary)]">
                  Senior AI Engineer
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--secondary)]">
                  Software Engineer
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--accent-teal)]/25 bg-[var(--accent-teal)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent-teal)]">
                  AI Systems Architect
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-6xl xl:text-7xl">
                Building Intelligent Systems.
                <br />
                <span className="text-[var(--primary)]">Engineering the Future.</span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-[var(--text-muted)] md:text-xl">
                I architect, engineer, and deploy scalable AI solutions that transform complex challenges into intelligent products.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button size="lg" className="flex items-center gap-2" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore My Work
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--card-border)] bg-[var(--surface)] p-3 text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                aria-label="GitHub"
              >
                <Code className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-[var(--card-border)] bg-[var(--surface)] p-3 text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                aria-label="LinkedIn"
              >
                <Link className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="rounded-md border border-[var(--card-border)] bg-[var(--surface)] p-3 text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] p-5 shadow-[0_24px_56px_rgb(0_0_0_/_0.34)] backdrop-blur-xl sm:p-7">
              <div className="mb-7 flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-subtle)]">Systems practice</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">Applied AI engineering</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-emerald)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent-emerald)_18%,transparent)]" aria-label="Available" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                    <Cpu className="w-8 h-8 text-[var(--primary)] mb-2" />
                    <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">ML & Deep Learning</p>
                  </div>
                  <div className="border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                    <Database className="w-8 h-8 text-[var(--secondary)] mb-2" />
                    <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">RAG Systems</p>
                  </div>
                  <div className="border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                    <Zap className="w-8 h-8 text-[var(--accent-teal)] mb-2" />
                    <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">Agentic AI</p>
                  </div>
                  <div className="border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center bg-[var(--primary)] text-sm font-bold text-white">LL</div>
                    <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">LLM Engineering</p>
                  </div>
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
};
