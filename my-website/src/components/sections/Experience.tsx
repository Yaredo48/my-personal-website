'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Section, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { experiences } from '@/data/profile';

export const Experience = () => (
  <Section id="experience">
    <header className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.2fr)] md:items-end md:gap-10">
      <div>
        <SectionLabel>Career history</SectionLabel>
        <SectionTitle className="mb-0 text-4xl sm:text-5xl lg:text-[3.5rem]">
          Experience
        </SectionTitle>
      </div>
      <SectionSubtitle className="max-w-2xl md:justify-self-end">
        Software, systems, and research roles focused on building dependable technology and
        exploring high-performance computing.
      </SectionSubtitle>
    </header>

    <ol aria-label="Professional experience timeline" className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-8 left-[0.9375rem] top-8 w-px bg-[var(--border-strong)] sm:left-[calc(36%+2.25rem)]"
      />
      {experiences.map((experience, index) => (
        <motion.li
          key={experience.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
          className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 border-b border-[var(--border)] py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[minmax(0,36%)_2rem_minmax(0,1fr)] sm:gap-x-5 sm:py-9"
        >
          <div className="col-start-1 row-start-1 hidden pr-3 text-right sm:block">
            <p className="text-sm font-semibold leading-snug text-[var(--foreground)] sm:text-base">
              {experience.organization}
            </p>
            <p className="mt-2 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
              {experience.startDate} – {experience.endDate ?? 'Present'}
            </p>
            <p className="mt-1.5 inline-flex items-center justify-end gap-1.5 text-xs text-[var(--text-subtle)]">
              {experience.employmentType && <span>{experience.employmentType} ·</span>}
              <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
              {experience.location}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative col-start-1 row-span-2 row-start-1 flex justify-center sm:col-start-2 sm:row-span-1"
          >
            <span className="relative z-10 mt-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--background)] bg-[var(--primary)] shadow-[0_0_0_1px_var(--primary)] sm:mt-1" />
          </div>

          <article className="col-start-2 row-start-1 min-w-0 sm:col-start-3">
            <div className="mb-2 flex flex-wrap items-center gap-2 sm:hidden">
              <span className="text-xs font-semibold text-[var(--foreground)]">
                {experience.organization}
              </span>
              <span aria-hidden="true" className="text-[var(--text-subtle)]">·</span>
              <span className="text-xs text-[var(--text-muted)]">
                {experience.startDate} – {experience.endDate ?? 'Present'}
              </span>
            </div>
            <p className="mb-2 inline-flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
              <BriefcaseBusiness aria-hidden="true" className="h-3 w-3" />
              Role overview
            </p>
            <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-[var(--foreground)] sm:text-2xl">
              {experience.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.8] text-[var(--text-muted)] sm:text-[0.9375rem]">
              {experience.description}
            </p>

            {((experience.responsibilities && experience.responsibilities.length > 0) ||
              (experience.achievements && experience.achievements.length > 0)) && (
              <details className="group mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-xs font-semibold text-[var(--foreground)] marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring)] [&::-webkit-details-marker]:hidden">
                  Responsibilities &amp; impact
                  <ArrowDown
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[var(--text-subtle)] transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="space-y-4 border-t border-[var(--border)] px-4 py-3">
                  {experience.responsibilities && experience.responsibilities.length > 0 && (
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-2.5 text-xs leading-[1.7] text-[var(--text-muted)] sm:text-sm"
                    >
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />
                      {responsibility}
                    </li>
                  ))}
                    </ul>
                  )}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="rounded-lg bg-[var(--accent-emerald)]/5 p-3">
                      <p className="mb-2 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-emerald)]">
                        Achievements &amp; impact
                      </p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-xs leading-[1.7] text-[var(--text-muted)] sm:text-sm"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.technologies.slice(0, 5).map((technology) => (
                  <Badge key={technology} variant="outline" size="sm" className="text-[0.6875rem]">
                    {technology}
                  </Badge>
                ))}
                {experience.technologies.length > 5 && (
                  <span
                    aria-label={`${experience.technologies.length - 5} more skills`}
                    className="inline-flex items-center px-1 text-xs font-medium text-[var(--text-subtle)]"
                  >
                    +{experience.technologies.length - 5}
                  </span>
                )}
              </div>
            )}

            <a
              href="https://www.linkedin.com/in/yared-birhanu-442273363/"
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${experience.title} on LinkedIn`}
              className="mt-4 inline-flex min-h-9 items-center gap-1.5 text-xs font-semibold text-[var(--text-subtle)] transition-colors hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            >
              LinkedIn profile
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </article>

          <div className="col-start-2 row-start-2 mt-3 sm:hidden">
            <p className="inline-flex items-center gap-1.5 text-xs text-[var(--text-subtle)]">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
              {experience.location}
              {experience.employmentType && ` · ${experience.employmentType}`}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  </Section>
);
