'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { publications, profile } from '@/data/profile';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

export const Research = () => (
  <Section id="research" background="secondary">
    <SectionHeader>
      <SectionLabel>Academic work</SectionLabel>
      <SectionTitle>Research & Publications</SectionTitle>
      <SectionSubtitle>Contributions to AI research and academic publications.</SectionSubtitle>
    </SectionHeader>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-4"
    >
      {publications.map((pub, i) => (
        <motion.div
          key={pub.id}
          custom={i}
          variants={fadeUp}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_12px_32px_rgb(0_0_0/_0.07)]"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="mb-2 text-[1.0625rem] font-semibold leading-snug tracking-[-0.025em] text-[var(--foreground)]">
                {pub.title}
              </h3>
              <p className="mb-3 text-sm leading-[1.65] text-[var(--text-muted)]">{pub.authors}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-subtle)]">
                <span className="font-medium text-[var(--text-muted)]">{pub.venue}</span>
                <span className="text-[var(--border-strong)]">·</span>
                <span>{pub.date}</span>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
              {pub.doi && (
                <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5" />
                  DOI
                </Button>
              )}
              {pub.url && (
                <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5" />
                  View Paper
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    <div className="mt-12 flex flex-wrap justify-center gap-4">
      <Button
        variant="outline"
        size="md"
        className="flex items-center gap-2"
        onClick={() => window.open(profile.googleScholar, '_blank')}
      >
        <BookOpen className="h-4 w-4" />
        Google Scholar
      </Button>
      <Button
        variant="outline"
        size="md"
        className="flex items-center gap-2"
        onClick={() => window.open(profile.researchGate, '_blank')}
      >
        <BookOpen className="h-4 w-4" />
        ResearchGate
      </Button>
    </div>
  </Section>
);
