'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { BrainCircuit, Network, Workflow, Gauge } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const strengths = [
  { icon: BrainCircuit, title: 'Intelligent products', detail: 'ML, deep learning, and generative AI' },
  { icon: Network, title: 'Knowledge systems', detail: 'RAG, vector search, and AI agents' },
  { icon: Workflow, title: 'Production engineering', detail: 'APIs, MLOps, and cloud infrastructure' },
  { icon: Gauge, title: 'Scientific performance', detail: 'GPU, HPC, and parallel computing' },
];

export const About = () => (
  <Section id="about">
    <SectionHeader>
      <SectionLabel>What I do</SectionLabel>
      <SectionTitle>From complex data to dependable intelligence.</SectionTitle>
      <SectionSubtitle>
        I architect AI systems with the rigor of a software engineer and the curiosity of a researcher.
      </SectionSubtitle>
    </SectionHeader>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4"
    >
      {strengths.map(({ icon: Icon, title, detail }, i) => (
        <motion.div
          key={title}
          custom={i}
          variants={fadeUp}
          className="group bg-[var(--surface)] p-7 transition-colors hover:bg-[var(--background-secondary)]"
        >
          <Icon
            className="mb-6 h-6 w-6 text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-1"
            aria-hidden="true"
          />
          <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--foreground)]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{detail}</p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);
