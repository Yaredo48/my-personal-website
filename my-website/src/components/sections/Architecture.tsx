'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
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
  { icon: FileText, label: 'Documents', color: 'text-[var(--primary)]' },
  { icon: Scissors, label: 'Chunking', color: 'text-[var(--accent-teal)]' },
  { icon: Layers, label: 'Embedding', color: 'text-[var(--accent-emerald)]' },
  { icon: Database, label: 'Vector Store', color: 'text-[var(--secondary)]' },
  { icon: Search, label: 'Retrieval', color: 'text-[var(--primary)]' },
  { icon: SortAsc, label: 'Reranking', color: 'text-[var(--accent-amber)]' },
  { icon: BrainCircuit, label: 'LLM Answer', color: 'text-[var(--accent-emerald)]' },
];

const systemLayers = [
  {
    title: 'Data Layer',
    items: ['Document ingestion', 'ETL pipelines', 'Data validation', 'Schema management'],
    color: 'border-[var(--primary)]/30 bg-[var(--primary)]/5',
    accent: 'text-[var(--primary)]',
  },
  {
    title: 'ML Layer',
    items: ['Model training', 'Fine-tuning', 'Evaluation', 'Experiment tracking'],
    color: 'border-[var(--accent-teal)]/30 bg-[var(--accent-teal)]/5',
    accent: 'text-[var(--accent-teal)]',
  },
  {
    title: 'Serving Layer',
    items: ['FastAPI endpoints', 'Caching', 'Rate limiting', 'Load balancing'],
    color: 'border-[var(--accent-emerald)]/30 bg-[var(--accent-emerald)]/5',
    accent: 'text-[var(--accent-emerald)]',
  },
  {
    title: 'Ops Layer',
    items: ['Monitoring', 'Alerting', 'CI/CD', 'Infrastructure as code'],
    color: 'border-[var(--accent-amber)]/30 bg-[var(--accent-amber)]/5',
    accent: 'text-[var(--accent-amber)]',
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
        <Card>
          <CardContent className="p-7">
            <h3 className="mb-6 text-center text-base font-semibold tracking-[-0.02em] text-[var(--foreground)]">
              RAG System Pipeline
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
              {flowSteps.map((step, index) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center gap-2">
                    <div className={`rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-3.5 ${step.color}`}>
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
          </CardContent>
        </Card>
      </motion.div>

      {/* System layers */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systemLayers.map((layer, i) => (
          <motion.div key={layer.title} custom={i} variants={fadeUp}>
            <Card className={`h-full border ${layer.color}`}>
              <h4 className={`mb-3 text-sm font-semibold ${layer.accent}`}>{layer.title}</h4>
              <ul className="space-y-1.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${layer.accent.replace('text-', 'bg-')}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);
