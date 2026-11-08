'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Atom, CircuitBoard, Cpu, Database, Network, Rocket } from 'lucide-react';
import { projects } from '@/data/profile';
import { cn } from '@/lib/utils';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const projectIcons = [Network, CircuitBoard, Database, Rocket, Cpu, Atom];
const projectTypes = [
  'Retrieval systems',
  'Predictive intelligence',
  'Agent orchestration',
  'LLM operations',
  'GPU infrastructure',
  'Scientific ML',
];

export const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeProjectId) ?? projects[0];
  const activeIndex = projects.findIndex((p) => p.id === activeProjectId);
  const ActiveIcon = projectIcons[activeIndex % projectIcons.length];

  return (
    <Section id="projects">
      <SectionHeader>
        <SectionLabel>Selected work</SectionLabel>
        <SectionTitle>Systems designed for the real world.</SectionTitle>
        <SectionSubtitle>
          Explore the engineering decisions behind AI products, platforms, and research infrastructure.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        {/* Project list */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          {projects.map((project, index) => {
            const ProjectIcon = projectIcons[index % projectIcons.length];
            const isActive = project.id === activeProjectId;
            return (
              <motion.button
                key={project.id}
                custom={index}
                variants={fadeUp}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                aria-pressed={isActive}
                className={cn(
                  'group relative overflow-hidden rounded-xl border p-5 text-left transition-all duration-200',
                  isActive
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_8px_24px_color-mix(in_srgb,var(--primary)_25%,transparent)]'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-md'
                )}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className={cn('text-xs font-semibold tracking-[0.12em]', isActive ? 'text-white/60' : 'text-[var(--text-subtle)]')}>
                    0{index + 1}
                  </span>
                  <ProjectIcon className={cn('h-5 w-5', isActive ? 'text-white/80' : 'text-[var(--primary)]')} aria-hidden="true" />
                </div>
                <p className={cn('mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]', isActive ? 'text-white/60' : 'text-[var(--text-subtle)]')}>
                  {projectTypes[index % projectTypes.length]}
                </p>
                <h3 className="text-base font-semibold leading-snug tracking-[-0.02em]">{project.name}</h3>
                <p className={cn('mt-1.5 line-clamp-2 text-sm leading-6', isActive ? 'text-white/75' : 'text-[var(--text-muted)]')}>
                  {project.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active project detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProjectId}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                <ActiveIcon className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
                  {projectTypes[activeIndex % projectTypes.length]}
                </p>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  {activeProject.name}
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-7 text-[var(--text-muted)]">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">Problem</p>
                <p>{activeProject.problem}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">Architecture</p>
                <p>{activeProject.architecture}</p>
              </div>
              {activeProject.results && (
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">Results</p>
                  <p>{activeProject.results}</p>
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <Badge key={tech} variant="outline" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Button size="sm" variant="outline" className="flex items-center gap-1.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
                View Project
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};
