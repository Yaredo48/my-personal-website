'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { publications } from '@/data/profile';
import { ExternalLink, BookOpen } from 'lucide-react';

export const Research = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="research">
      <SectionHeader>
        <SectionTitle>Research & Publications</SectionTitle>
        <SectionSubtitle>
          Contributions to AI research and academic publications
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        {publications.map((pub) => (
          <motion.div key={pub.id} variants={itemVariants}>
            <Card hover>
              <CardHeader>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
                <CardDescription className="text-base">
                  {pub.authors}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
                  <span>{pub.venue}</span>
                  <span>•</span>
                  <span>{pub.date}</span>
                </div>
                <div className="flex gap-3">
                  {pub.doi && (
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      DOI
                    </Button>
                  )}
                  {pub.url && (
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Google Scholar
        </Button>
        <Button variant="outline" size="lg" className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          ResearchGate
        </Button>
      </div>
    </Section>
  );
};
