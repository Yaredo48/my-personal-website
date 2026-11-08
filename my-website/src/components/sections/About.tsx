'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { BrainCircuit, Network, Workflow, Gauge } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const strengths = [
  { icon: BrainCircuit, title: 'Intelligent products', detail: 'ML, deep learning, and generative AI systems built for production.' },
  { icon: Network, title: 'Knowledge systems', detail: 'RAG pipelines, vector search, and multi-step AI agents.' },
  { icon: Workflow, title: 'Production engineering', detail: 'Scalable APIs, MLOps workflows, and cloud infrastructure.' },
  { icon: Gauge, title: 'Scientific performance', detail: 'GPU acceleration, HPC, and parallel computing at scale.' },
];

export const About = () => (
  <Section id="about">
    <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-start">
      {/* Left: narrative */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeader className="mb-0">
          <SectionLabel>What I do</SectionLabel>
          <SectionTitle>From complex data to dependable intelligence.</SectionTitle>
          <SectionSubtitle>
            I architect AI systems with the rigor of a software engineer and the curiosity of a researcher.
            My work spans the full stack — from raw data pipelines to deployed, monitored, production-grade AI.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--text-muted)]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-[var(--foreground)]">5+</p>
            <p className="mt-0.5">Years in AI engineering</p>
          </div>
          <div className="w-px bg-[var(--border)]" />
          <div>
            <p className="text-2xl font-bold tracking-tight text-[var(--foreground)]">20+</p>
            <p className="mt-0.5">Production systems shipped</p>
          </div>
          <div className="w-px bg-[var(--border)]" />
          <div>
            <p className="text-2xl font-bold tracking-tight text-[var(--foreground)]">10+</p>
            <p className="mt-0.5">Research publications</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right: strength cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {strengths.map(({ icon: Icon, title, detail }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={fadeUp}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_12px_32px_rgb(0_0_0/_0.07)]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-0.5">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mb-1.5 text-[0.9375rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">{title}</h3>
            <p className="text-sm leading-[1.65] text-[var(--text-muted)]">{detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);
