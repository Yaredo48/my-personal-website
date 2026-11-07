'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/profile';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, CalendarDays, CheckCircle2, ChevronRight } from 'lucide-react';

export const Experience = () => {
  const [activeExperienceId, setActiveExperienceId] = useState(experiences[0].id);
  const activeExperience = experiences.find((experience) => experience.id === activeExperienceId) ?? experiences[0];

  return (
    <Section id="experience" background="secondary">
      <SectionHeader>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Career path</p>
        <SectionTitle>Engineering leadership in practice.</SectionTitle>
        <SectionSubtitle>
          A focused view of the roles, responsibilities, and outcomes that shape my approach to building systems.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:gap-10">
        <div className="relative space-y-2 border-l border-[var(--border-strong)] pl-5">
          {experiences.map((experience) => {
            const isActive = experience.id === activeExperienceId;
            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => setActiveExperienceId(experience.id)}
                aria-pressed={isActive}
                className={cn(
                  'relative w-full p-4 text-left transition-colors',
                  isActive ? 'bg-[var(--surface)] shadow-sm' : 'hover:bg-[var(--surface)]/60'
                )}
              >
                <span className={cn('absolute -left-[1.78rem] top-6 h-3 w-3 rounded-full border-[3px] border-[var(--background-secondary)]', isActive ? 'bg-[var(--primary)]' : 'bg-[var(--border-strong)]')} />
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
                  {experience.startDate} — {experience.endDate ?? 'Present'}
                </p>
                <p className="font-semibold tracking-[-0.02em] text-[var(--foreground)]">{experience.title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{experience.organization}</p>
                {isActive && <ChevronRight className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--primary)]" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        <div className="min-h-[28rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_12px_28px_rgb(15_23_42_/_0.06)] sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeExperience.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col justify-between gap-6 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-start">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{activeExperience.organization}</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-3xl">{activeExperience.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {activeExperience.startDate} — {activeExperience.endDate ?? 'Present'}
                </div>
              </div>

              <div className="grid gap-9 pt-8 sm:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">Scope of work</p>
                  <ul className="space-y-3">
                    {activeExperience.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {activeExperience.achievements && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">Selected outcomes</p>
                    <ul className="space-y-3">
                      {activeExperience.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3 text-sm font-medium leading-6 text-[var(--foreground)]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-emerald)]" aria-hidden="true" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-9 border-t border-[var(--border)] pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">Core toolkit</p>
                <div className="flex flex-wrap gap-2">
                  {activeExperience.technologies.map((technology) => <Badge key={technology} size="sm">{technology}</Badge>)}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
