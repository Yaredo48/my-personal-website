'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
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
        <motion.div key={pub.id} custom={i} variants={fadeUp}>
          <Card hover>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
              <CardDescription>{pub.authors}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                <span>{pub.venue}</span>
                <span className="text-[var(--border-strong)]">•</span>
                <span>{pub.date}</span>
              </div>
              <div className="flex flex-wrap gap-3">
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
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>

    <div className="mt-10 flex flex-wrap justify-center gap-4">
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
