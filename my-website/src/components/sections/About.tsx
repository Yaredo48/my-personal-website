'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { BrainCircuit, Gauge, Network, Workflow } from 'lucide-react';

const strengths = [
  { icon: BrainCircuit, title: 'Intelligent products', detail: 'ML, deep learning, and generative AI' },
  { icon: Network, title: 'Knowledge systems', detail: 'RAG, vector search, and AI agents' },
  { icon: Workflow, title: 'Production engineering', detail: 'APIs, MLOps, and cloud infrastructure' },
  { icon: Gauge, title: 'Scientific performance', detail: 'GPU, HPC, and parallel computing' },
];

export const About = () => {
  return (
    <Section id="about">
      <SectionHeader>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">What I do</p>
        <SectionTitle>From complex data to dependable intelligence.</SectionTitle>
        <SectionSubtitle>
          I architect AI systems with the rigor of a software engineer and the curiosity of a researcher.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map(({ icon: Icon, title, detail }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            className="group bg-[var(--surface)] p-6 transition-colors hover:bg-[var(--background-secondary)]"
          >
            <Icon className="mb-7 h-6 w-6 text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-1" aria-hidden="true" />
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-l-2 border-[var(--primary)] py-1 pl-6">
          <p className="max-w-2xl text-xl leading-8 tracking-[-0.02em] text-[var(--foreground)] sm:text-2xl">
            I build end-to-end AI solutions that make advanced models useful, observable, scalable, and safe in production.
          </p>
        </div>
        <details className="group border border-[var(--border)] bg-[var(--background-secondary)] p-5">
          <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--foreground)] marker:content-none">
            <span className="flex items-center justify-between gap-4">
              Engineering philosophy
              <span className="text-[var(--primary)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </span>
          </summary>
          <p className="pt-4 text-sm leading-6 text-[var(--text-muted)]">
            Every solution balances innovation with practical production concerns: reliability, maintainability, cost, evaluation, monitoring, and measurable business value.
          </p>
        </details>
      </div>

      <div className="mt-10 flex flex-wrap gap-2" aria-label="Research interests">
        {['Generative AI', 'Retrieval systems', 'Agentic workflows', 'MLOps', 'Distributed systems', 'GPU computing', 'Scientific research'].map((interest) => (
          <span key={interest} className="border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-muted)]">
            {interest}
          </span>
        ))}
      </div>
    </Section>
  );
};
