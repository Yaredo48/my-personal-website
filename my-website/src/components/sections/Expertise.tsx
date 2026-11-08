'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { TechnologyLogo } from '@/components/ui/TechnologyLogo';
import { techCategories, techCategoryDescriptions, technologies } from '@/data/profile';
import { cn } from '@/lib/utils';

const categoryIcons: Record<keyof typeof techCategories, LucideIcon> = {
  programming: Code2,
  ml: BrainCircuit,
  genai: Sparkles,
  rag: Database,
  agents: Workflow,
  backend: Server,
  databases: Network,
  mlops: Boxes,
  cloud: Cloud,
  hpc: Gauge,
  testing: ShieldCheck,
};

const categories = Object.entries(techCategories) as [
  keyof typeof techCategories,
  (typeof techCategories)[keyof typeof techCategories],
][];

const getCategoryTechnologies = (category: string) =>
  Array.from(
    new Map(
      technologies
        .filter((tech) => tech.category === category)
        .map((tech) => [tech.name, tech])
    ).values()
  );

export const Expertise = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof techCategories>('programming');
  const selectedLabel = techCategories[selectedCategory];
  const selectedTechnologies = getCategoryTechnologies(selectedLabel);
  const SelectedIcon = categoryIcons[selectedCategory];

  return (
    <Section id="expertise" background="secondary">
      <SectionHeader className="mb-9 md:mb-12">
        <SectionLabel>Skills &amp; Tools</SectionLabel>
        <SectionTitle>Technical Expertise</SectionTitle>
        <SectionSubtitle>
          Explore the tools and technologies I use to build production-ready AI systems and
          software.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.8fr)] lg:gap-10">
        <div
          aria-label="Technical expertise categories"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3"
          role="group"
        >
          {categories.map(([key, label], index) => {
            const Icon = categoryIcons[key];
            const isSelected = selectedCategory === key;
            const skillCount = getCategoryTechnologies(label).length;

            return (
              <button
                key={key}
                type="button"
                aria-controls="expertise-details"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(key)}
                className={cn(
                  'group flex min-h-14 min-w-0 items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 sm:gap-3 sm:px-3.5',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-secondary)]',
                  isSelected
                    ? 'border-[var(--primary)] bg-[var(--surface)] text-[var(--foreground)]'
                    : 'border-transparent bg-transparent text-[var(--text-muted)] hover:border-[var(--border)] hover:bg-[var(--surface)]'
                )}
              >
                <span
                  className={cn(
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors',
                    isSelected
                      ? 'bg-[var(--primary)]/10 text-[var(--primary)]'
                      : 'bg-[var(--surface)] text-[var(--text-muted)] group-hover:text-[var(--primary)]'
                  )}
                >
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-snug text-[var(--foreground)] sm:text-base">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-tight text-[var(--text-subtle)] sm:text-sm">
                    {skillCount} skills
                  </span>
                </span>
                <span className="hidden text-xs tabular-nums text-[var(--text-subtle)] lg:block">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="expertise-details"
          aria-live="polite"
          className="min-h-[22rem] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_1px_4px_rgb(0_0_0/_0.04)] sm:p-7 lg:min-h-[30rem] lg:p-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] sm:h-14 sm:w-14">
                  <SelectedIcon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--text-subtle)]">
                    Expertise area
                  </p>
                  <h3 className="mt-1 text-xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
                    {selectedLabel}
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:mt-6 sm:text-lg">
                {techCategoryDescriptions[selectedCategory]}
              </p>

              <div className="mt-6 border-t border-[var(--border)] pt-5 sm:mt-7 sm:pt-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h4 className="text-base font-semibold text-[var(--foreground)]">
                    Tools &amp; technologies
                  </h4>
                  <span className="text-sm text-[var(--text-subtle)]">
                    {selectedTechnologies.length} skills
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-7 xl:grid-cols-4">
                  {selectedTechnologies.map((tech) => (
                    <li key={tech.name} className="flex min-w-0 flex-col items-center gap-2.5 text-center">
                      <div className="flex aspect-square w-full max-w-24 items-center justify-center rounded-xl bg-[var(--background-secondary)] p-3 transition-colors duration-200 hover:bg-[var(--border)] sm:max-w-28 sm:p-4">
                        <TechnologyLogo name={tech.name} />
                      </div>
                      <span className="max-w-full text-sm font-medium leading-snug text-[var(--foreground)] sm:text-base">
                        {tech.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
