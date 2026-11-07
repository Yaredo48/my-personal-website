'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/profile';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Atom, CircuitBoard, Cpu, Database, Network, Rocket } from 'lucide-react';

const projectIcons = [Network, CircuitBoard, Database, Rocket, Cpu, Atom];
const projectTypes = ['Retrieval systems', 'Predictive intelligence', 'Agent orchestration', 'LLM operations', 'GPU infrastructure', 'Scientific ML'];

export const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const activeIndex = projects.findIndex((project) => project.id === activeProject.id);
  const ActiveIcon = projectIcons[activeIndex % projectIcons.length];

  return (
    <Section id="projects" background="secondary">
      <SectionHeader>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Selected work</p>
        <SectionTitle>Systems designed for the real world.</SectionTitle>
        <SectionSubtitle>
          Explore the engineering decisions behind AI products, platforms, and research infrastructure.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, index) => {
            const ProjectIcon = projectIcons[index % projectIcons.length];
            const isActive = project.id === activeProjectId;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                aria-pressed={isActive}
                className={cn(
                  'group relative overflow-hidden border p-5 text-left transition duration-200 sm:p-6',
                  isActive
                    ? 'border-[var(--primary)] bg-[var(--foreground)] text-white shadow-[0_16px_34px_rgb(15_23_42_/_0.14)]'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-sm'
                )}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className={cn('text-xs font-semibold tracking-[0.12em]', isActive ? 'text-white/60' : 'text-[var(--text-subtle)]')}>
                    0{index + 1}
                  </span>
                  <ProjectIcon className={cn('h-5 w-5', isActive ? 'text-[var(--primary-light)]' : 'text-[var(--primary)]')} aria-hidden="true" />
                </div>
                <p className={cn('mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]', isActive ? 'text-white/60' : 'text-[var(--text-subtle)]')}>
                  {projectTypes[index % projectTypes.length]}
                </p>
                <h3 className="max-w-sm text-lg font-semibold leading-snug tracking-[-0.02em]">{project.name}</h3>
                <p className={cn('mt-2 line-clamp-2 text-sm leading-6', isActive ? 'text-white/70' : 'text-[var(--text-muted)]')}>
                  {project.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="min-h-[31rem] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[0_16px_34px_rgb(15_23_42_/_0.08)]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex h-full min-h-[31rem] flex-col"
            >
              <div className="relative overflow-hidden bg-[var(--foreground)] p-7 text-white sm:p-9">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.32)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.32)_1px,transparent_1px)] [background-size:30px_30px]" />
                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Case study 0{activeIndex + 1}</p>
                    <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">{activeProject.name}</h3>
                  </div>
                  <ActiveIcon className="h-8 w-8 shrink-0 text-[var(--primary-light)]" aria-hidden="true" />
                </div>
              </div>

              <div className="grid flex-1 gap-7 p-7 sm:p-9">
                <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{activeProject.description}</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">The challenge</p>
                    <p className="text-sm leading-6 text-[var(--text-muted)]">{activeProject.problem}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">Architecture</p>
                    <p className="text-sm leading-6 text-[var(--text-muted)]">{activeProject.architecture}</p>
                  </div>
                </div>

                <div className="border-y border-[var(--border)] py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">Technology stack</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((technology) => (
                      <Badge key={technology} size="sm">{technology}</Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">Key decisions</p>
                    <ul className="space-y-1.5">
                      {activeProject.decisions.map((decision) => (
                        <li key={decision} className="flex gap-2 text-sm text-[var(--text-muted)]">
                          <span className="text-[var(--primary)]" aria-hidden="true">—</span>
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {activeProject.results && (
                    <div className="border-l-2 border-[var(--accent-emerald)] bg-[var(--background-secondary)] p-4 sm:max-w-48">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-emerald)]">Impact</p>
                      <p className="text-sm font-medium leading-6 text-[var(--foreground)]">{activeProject.results}</p>
                    </div>
                  )}
                </div>

                {(activeProject.github || activeProject.demo) && (
                  <div className="flex flex-wrap gap-3">
                    {activeProject.github && <Button size="sm" variant="outline">Source <ArrowUpRight className="ml-1 h-4 w-4" /></Button>}
                    {activeProject.demo && <Button size="sm">Live demo <ArrowUpRight className="ml-1 h-4 w-4" /></Button>}
                  </div>
                )}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};
