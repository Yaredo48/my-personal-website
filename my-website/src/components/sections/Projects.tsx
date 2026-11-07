'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/data/profile';
import { cn } from '@/lib/utils';

export const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="projects" background="secondary">
      <SectionHeader>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>
          Enterprise-grade AI solutions and production applications
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={cn(
              'grid lg:grid-cols-2 gap-8 items-center',
              index % 2 === 1 && 'lg:grid-flow-col-dense'
            )}
          >
            <Card className={cn(
              'h-full',
              index % 2 === 1 && 'lg:col-start-2'
            )}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-t-xl flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[var(--foreground)]">
                      {project.name}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                      Project Visualization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className={cn(
              'space-y-6',
              index % 2 === 1 && 'lg:col-start-1'
            )}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
                  {project.name}
                </h3>
                <p className="text-lg text-[var(--text-muted)]">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                    Problem
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                    Architecture
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm">
                    {project.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                    Key Decisions
                  </h4>
                  <ul className="space-y-1">
                    {project.decisions.map((decision, idx) => (
                      <li key={idx} className="text-[var(--text-muted)] text-sm flex items-start gap-2">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.results && (
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                      Results
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm">
                      {project.results}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button variant="primary" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
