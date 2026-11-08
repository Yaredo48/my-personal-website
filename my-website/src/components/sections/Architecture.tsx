'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  BrainCircuit,
  Boxes,
  Database,
  FileInput,
  Layers3,
  Search,
  Scissors,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const flowSteps = [
  {
    icon: FileInput,
    label: 'Ingest',
    detail: 'Load, parse, and validate source documents.',
    accent: 'text-[var(--primary)]',
    tint: 'bg-[var(--primary)]/10',
  },
  {
    icon: Scissors,
    label: 'Prepare',
    detail: 'Normalize content and create useful chunks.',
    accent: 'text-[var(--accent-teal)]',
    tint: 'bg-[var(--accent-teal)]/10',
  },
  {
    icon: Layers3,
    label: 'Embed',
    detail: 'Represent content for semantic retrieval.',
    accent: 'text-[var(--accent-emerald)]',
    tint: 'bg-[var(--accent-emerald)]/10',
  },
  {
    icon: Database,
    label: 'Index',
    detail: 'Store vectors and metadata for search.',
    accent: 'text-[var(--secondary)]',
    tint: 'bg-[var(--secondary)]/10',
  },
  {
    icon: Search,
    label: 'Retrieve',
    detail: 'Find relevant context for each question.',
    accent: 'text-[var(--primary)]',
    tint: 'bg-[var(--primary)]/10',
  },
  {
    icon: Boxes,
    label: 'Rerank',
    detail: 'Prioritize the strongest matching evidence.',
    accent: 'text-[var(--accent-amber)]',
    tint: 'bg-[var(--accent-amber)]/10',
  },
  {
    icon: BrainCircuit,
    label: 'Respond',
    detail: 'Generate an answer grounded in retrieved sources.',
    accent: 'text-[var(--accent-emerald)]',
    tint: 'bg-[var(--accent-emerald)]/10',
  },
];

const systemLayers = [
  {
    icon: Database,
    index: '01',
    title: 'Data foundation',
    summary: 'Reliable inputs and well-structured knowledge.',
    items: ['Document ingestion', 'ETL and validation', 'Schema management'],
    accent: 'text-[var(--primary)]',
    tint: 'bg-[var(--primary)]/10',
    dot: 'bg-[var(--primary)]',
    border: 'border-t-[var(--primary)]',
  },
  {
    icon: BrainCircuit,
    index: '02',
    title: 'Intelligence',
    summary: 'Models, retrieval, and quality measurement.',
    items: ['Model training and tuning', 'Retrieval and evaluation', 'Experiment tracking'],
    accent: 'text-[var(--accent-teal)]',
    tint: 'bg-[var(--accent-teal)]/10',
    dot: 'bg-[var(--accent-teal)]',
    border: 'border-t-[var(--accent-teal)]',
  },
  {
    icon: Workflow,
    index: '03',
    title: 'Application services',
    summary: 'Interfaces and APIs to deliver AI capabilities.',
    items: ['API endpoints', 'Caching and rate limits', 'Service orchestration'],
    accent: 'text-[var(--accent-emerald)]',
    tint: 'bg-[var(--accent-emerald)]/10',
    dot: 'bg-[var(--accent-emerald)]',
    border: 'border-t-[var(--accent-emerald)]',
  },
  {
    icon: Activity,
    index: '04',
    title: 'Operations & trust',
    summary: 'Operational visibility and responsible delivery.',
    items: ['Monitoring and alerting', 'CI/CD', 'Security and guardrails'],
    accent: 'text-[var(--accent-amber)]',
    tint: 'bg-[var(--accent-amber)]/10',
    dot: 'bg-[var(--accent-amber)]',
    border: 'border-t-[var(--accent-amber)]',
  },
];

export const Architecture = () => (
  <Section id="architecture" background="secondary">
    <SectionHeader className="mb-9 md:mb-12">
      <SectionLabel>System design</SectionLabel>
      <SectionTitle>From data to dependable AI products.</SectionTitle>
      <SectionSubtitle>
        A practical view of the layers and lifecycle behind maintainable AI systems.
      </SectionSubtitle>
    </SectionHeader>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-5 sm:space-y-6"
    >
      <motion.section
        variants={fadeUp}
        aria-labelledby="rag-pipeline-heading"
        className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="flex flex-col gap-2 border-b border-[var(--border)] px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--primary)]">
              Retrieval-augmented generation
            </p>
            <h3 id="rag-pipeline-heading" className="mt-1 text-lg font-semibold text-[var(--foreground)]">
              Knowledge-to-answer lifecycle
            </h3>
          </div>
          <span className="inline-flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[var(--accent-emerald)]" />
            Grounded responses with source context
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-5 lg:grid-cols-4 xl:grid-cols-7">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.label}
              custom={index}
              variants={fadeUp}
              className="relative min-h-36 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${step.tint} ${step.accent}`}>
                <step.icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                <span className="mr-1.5 text-[0.625rem] font-semibold text-[var(--text-subtle)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {step.label}
              </p>
              <p className="mt-1.5 text-xs leading-[1.6] text-[var(--text-muted)]">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {systemLayers.map((layer, index) => (
          <motion.article
            key={layer.title}
            custom={index}
            variants={fadeUp}
            className={`h-full rounded-2xl border border-[var(--border)] border-t-2 ${layer.border} bg-[var(--surface)] p-5 sm:p-6`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.12em] text-[var(--text-subtle)]">
                LAYER {layer.index}
              </span>
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${layer.tint} ${layer.accent}`}>
                <layer.icon aria-hidden="true" className="h-[18px] w-[18px]" />
              </span>
            </div>
            <h3 className={`mt-4 text-base font-semibold ${layer.accent}`}>{layer.title}</h3>
            <p className="mt-1.5 min-h-10 text-sm leading-[1.6] text-[var(--text-muted)]">
              {layer.summary}
            </p>
            <ul className="mt-4 space-y-2.5 border-t border-[var(--border)] pt-4">
              {layer.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs leading-[1.6] text-[var(--text-muted)]">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${layer.dot}`} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </Section>
);
