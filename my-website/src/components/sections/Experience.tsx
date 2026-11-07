'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { experiences } from '@/data/profile';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Section id="experience" background="secondary">
      <SectionHeader>
        <SectionTitle>Professional Experience</SectionTitle>
        <SectionSubtitle>
          A journey through engineering leadership and technical excellence
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] transform md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className={cn(
              'relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-12 last:mb-0',
              index % 2 === 1 ? 'md:text-right' : ''
            )}
          >
            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-[var(--background)] transform md:-translate-x-1/2 z-10" />

            <div className={cn(
              'md:col-span-1',
              index % 2 === 1 ? 'md:col-start-2' : ''
            )}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Building2 className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--primary)] font-medium">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                        Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                            <span className="text-[var(--primary)] mt-1 flex-shrink-0">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                              <span className="text-[var(--accent-emerald)] mt-1 flex-shrink-0">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
