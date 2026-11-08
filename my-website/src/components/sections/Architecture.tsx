'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  Scissors,
  Layers,
  Database,
  Search,
  SortAsc,
  BrainCircuit,
} from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const flowSteps = [
  { icon: FileText, label: 'Documents', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary)]/10' },
  { icon: Scissors, label: 'Chunking', color: 'text-[var(--accent-teal)]', bg: 'bg-[var(--accent-teal)]/10' },
  { icon: Layers, label: 'Embedding', color: 'text-[var(--accent-emerald)]', bg: 'bg-[var(--accent-emerald)]/10' },
  { icon: Database, label: 'Vector Store', color: 'text-[var(--secondary)]', bg: 'bg-[var(--secondary)]/10' },
  { icon: Search, label: 'Retrieval', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary)]/10' },
  { icon: SortAsc, label: 'Reranking', color: 'text-[var(--accent-amber)]', bg: 'bg-[var(--accent-amber)]/10' },
  { icon: BrainCircuit, label: 'LLM Answer', color: 'text-[var(--accent-emerald)]', bg: 'bg-[var(--accent-emerald)]/10' },
];

const systemLayers = [
  {
    title: 'Data Layer',
    items: ['Document ingestion', 'ETL pipelines', 'Data validation', 'Schema management'],
    border: 'border-[var(--primary)]/25',
    bg: 'bg-[var(--primary)]/5',
    accent: 'text-[var(--primary)]',
    dot: 'bg-[var(--primary)]',
  },
  {
    title: 'ML Layer',
    items: ['Model training', 'Fine-tuning', 'Evaluation', 'Experiment tracking'],
    border: 'border-[var(--accent-teal)]/25',
    bg: 'bg-[var(--accent-teal)]/5',
    accent: 'text-[var(--accent-teal)]',
    dot: 'bg-[var(--accent-teal)]',
  },
  {
    title: 'Serving Layer',
    items: ['FastAPI endpoints', 'Caching', 'Rate limiting', 'Load balancing'],
    border: 'border-[var(--accent-emerald)]/25',
    bg: 'bg-[var(--accent-emerald)]/5',
    accent: 'text-[var(--accent-emerald)]',
    dot: 'bg-[var(--accent-emerald)]',
  },
  {
    title: 'Ops Layer',
    items: ['Monitoring', 'Alerting', 'CI/CD', 'Infrastructure as code'],
    border: 'border-[var(--accent-amber)]/25',
    bg: 'bg-[var(--accent-amber)]/5',
    accent: 'text-[var(--accent-amber)]',
    dot: 'bg-[var(--accent-amber)]',
  },
];

export const Architecture = () => (
  <Section id="architecture" background="secondary">
    <SectionHeader>
      <SectionLabel>System design</SectionLabel>
      <SectionTitle>Engineering Architecture</SectionTitle>
      <SectionSubtitle>End-to-end AI system design from data ingestion to production serving.</SectionSubtitle>
    </SectionHeader>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-6"
    >
      {/* RAG Flow */}
      <motion.div variants={fadeUp}>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <h3 className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
            RAG System Pipeline
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
            {flowSteps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-2.5">
                  <div className={`rounded-xl border border-[var(--border)] p-3.5 ${step.bg} ${step.color}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-medium text-[var(--text-muted)]">{step.label}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-[var(--border-strong)] md:rotate-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>

      {/* System layers */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systemLayers.map((layer, i) => (
          <motion.div key={layer.title} custom={i} variants={fadeUp}>
            <div className={`h-full rounded-2xl border p-6 ${layer.border} ${layer.bg}`}>
              <h4 className={`mb-4 text-sm font-bold tracking-[-0.01em] ${layer.accent}`}>{layer.title}</h4>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${layer.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);
