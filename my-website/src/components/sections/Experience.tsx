'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/profile';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

export const Experience = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((e) => e.id === activeId) ?? experiences[0];

  return (
    <Section id="experience">
      <SectionHeader>
        <SectionLabel>Career path</SectionLabel>
        <SectionTitle>Engineering leadership in practice.</SectionTitle>
        <SectionSubtitle>
          A focused view of the roles, responsibilities, and outcomes that shape my approach to building systems.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-8">
        {/* Timeline list */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex flex-col gap-1 border-l border-[var(--border)] pl-6"
        >
          {experiences.map((exp, i) => {
            const isActive = exp.id === activeId;
            return (
              <motion.button
                key={exp.id}
                custom={i}
                variants={fadeUp}
                type="button"
                onClick={() => setActiveId(exp.id)}
                aria-pressed={isActive}
                className={cn(
                  'relative w-full rounded-xl p-4 text-left transition-all duration-200',
                  isActive
                    ? 'bg-[var(--surface)] shadow-[0_2px_12px_rgb(15_28_53_/_0.07)]'
                    : 'hover:bg-[var(--surface)]/60'
                )}
              >
                {/* Timeline dot */}
                <span
                  className={cn(
                    'absolute -left-[1.85rem] top-5 h-3 w-3 rounded-full border-2 border-[var(--background)]',
                    isActive ? 'bg-[var(--primary)]' : 'bg-[var(--border-strong)]'
                  )}
                />
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
                  {exp.startDate} — {exp.endDate ?? 'Present'}
                </p>
                <p className="font-semibold tracking-[-0.02em] text-[var(--foreground)]">{exp.title}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                  <Building2 className="h-3.5 w-3.5 shrink-0" />
                  {exp.organization}
                </p>
                {isActive && (
                  <ChevronRight className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7"
          >
            <div className="mb-5 border-b border-[var(--border)] pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
                {active.startDate} — {active.endDate ?? 'Present'}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                {active.title}
              </h3>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                <Building2 className="h-4 w-4 shrink-0" />
                {active.organization}
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">
                  Responsibilities
                </p>
                <ul className="space-y-2">
                  {active.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-emerald)]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {active.achievements && active.achievements.length > 0 && (
                <div>
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {active.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                {active.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};
