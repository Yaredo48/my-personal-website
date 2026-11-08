'use client';

import { motion } from 'framer-motion';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { experiences } from '@/data/profile';

export const Experience = () => (
  <Section id="experience">
    <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.9fr)_minmax(0,1.5fr)] lg:gap-16 xl:gap-24">
      <header className="lg:sticky lg:top-32 lg:h-fit">
        <SectionLabel>Career history</SectionLabel>
        <SectionTitle className="mb-0 text-4xl sm:text-5xl lg:text-[3.5rem]">
          Experience
        </SectionTitle>
      </header>

      <ol aria-label="Professional experience timeline">
        {experiences.map((experience, index) => (
          <motion.li
            key={experience.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="relative grid grid-cols-[2rem_minmax(0,1fr)] border-b border-[var(--border)] last:border-b-0 sm:grid-cols-[minmax(0,0.85fr)_2rem_minmax(0,1.4fr)]"
          >
            <div className="col-start-2 row-start-2 py-1 sm:col-start-1 sm:row-start-1 sm:py-7 sm:pr-4 sm:text-right">
              <p className="text-sm font-semibold leading-snug text-[var(--foreground)]">
                {experience.organization}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
                {experience.startDate} – {experience.endDate ?? 'Present'}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--text-subtle)]">
                {experience.location}
                {experience.employmentType && ` · ${experience.employmentType}`}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative col-start-1 row-span-2 row-start-1 flex justify-center sm:col-start-2 sm:row-span-1"
            >
              <span className="absolute inset-y-0 w-px bg-[var(--border-strong)]" />
              <span className="relative mt-2.5 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--background)] bg-[var(--primary)] shadow-[0_0_0_1px_var(--primary)] sm:mt-10" />
            </div>

            <div className="col-start-2 row-start-1 py-6 sm:col-start-3 sm:row-start-1 sm:py-7 sm:pl-4">
              <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-[var(--foreground)] sm:text-2xl">
                {experience.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.75] text-[var(--text-muted)] sm:text-[0.9375rem]">
                {experience.description}
              </p>
              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-2 text-xs leading-[1.65] text-[var(--text-muted)] sm:text-sm"
                    >
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </Section>
);
