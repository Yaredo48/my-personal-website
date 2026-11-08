'use client';

import {
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  ChartNoAxesCombined,
  Code2,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Gauge,
  Network,
  Play,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Section, SectionHeader, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { projectCategories, projects } from '@/data/profile';
import { cn } from '@/lib/utils';
import type { Project, ProjectCategory } from '@/types';

const categoryIcons: Record<ProjectCategory, LucideIcon> = {
  'RAG & Knowledge': Database,
  'Machine Learning': BrainCircuit,
  'Agentic AI': Workflow,
  'Generative AI': Sparkles,
  'High-Performance Computing': Cpu,
};

const previewIcons: Record<ProjectCategory, LucideIcon[]> = {
  'RAG & Knowledge': [FileText, Search, Database, BrainCircuit],
  'Machine Learning': [Database, ChartNoAxesCombined, BrainCircuit, Gauge],
  'Agentic AI': [Workflow, Network, BrainCircuit, GitBranch],
  'Generative AI': [Code2, Server, Sparkles, ShieldCheck],
  'High-Performance Computing': [Cpu, Boxes, Gauge, Network],
};

const projectFilters = ['All Projects', ...projectCategories] as const;
type ProjectFilter = (typeof projectFilters)[number];

const ProjectPreview = ({ project }: { project: Project }) => {
  const ProjectIcon = categoryIcons[project.category];
  const steps = previewIcons[project.category];

  return (
    <div
      aria-label={`Illustrative ${project.category} project diagram`}
      className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--background-secondary)] px-5 py-4"
      role="img"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-2xl"
      />

      <div className="relative w-full max-w-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
            <ProjectIcon aria-hidden="true" className="h-3 w-3 text-[var(--primary)]" />
            System overview
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)]" />
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {steps.map((Icon, index) => (
            <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2" key={index}>
              <span
                className={cn(
                  'flex aspect-square w-full max-w-14 shrink-0 items-center justify-center rounded-xl border bg-[var(--surface)] shadow-[0_3px_12px_rgb(0_0_0/_0.05)] sm:max-w-16',
                  index === 1 && 'border-[var(--primary)]/40 bg-[var(--primary)]/10'
                )}
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    'h-5 w-5 sm:h-6 sm:w-6',
                    index === 1 ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'
                  )}
                />
              </span>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-px min-w-1 flex-1 border-t border-dashed border-[var(--border-strong)]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <span className="max-w-full truncate rounded-md border border-[var(--border)] bg-[var(--surface)]/80 px-2.5 py-1 text-[0.625rem] font-medium text-[var(--text-subtle)]">
            {project.technologies.slice(0, 3).join(' · ')}
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_4px_rgb(0_0_0/_0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_12px_30px_rgb(0_0_0/_0.09)]"
  >
    <ProjectPreview project={project} />

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[var(--primary)]/10 px-2.5 py-1 text-[0.6875rem] font-semibold text-[var(--primary)]">
          {project.category}
        </span>
      </div>

      <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-lg">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-[1.7] text-[var(--text-muted)]">
        {project.description}
      </p>

      <div className="mt-4 border-t border-[var(--border)] pt-4">
        <p className="mb-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-subtle)]">
          Technical approach
        </p>
        <p className="line-clamp-3 text-xs leading-[1.7] text-[var(--text-muted)] sm:text-[0.8125rem]">
          {project.architecture}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((technology) => (
          <Badge key={technology} variant="outline" size="sm" className="text-[0.6875rem]">
            {technology}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <span className="inline-flex items-center px-1 text-xs text-[var(--text-subtle)]">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {(project.demo || project.github) && (
        <div className="mt-auto flex gap-4 pt-5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-1.5 text-xs font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            >
              <Play aria-hidden="true" className="h-3.5 w-3.5" />
              Live demo
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            >
              <Code2 aria-hidden="true" className="h-3.5 w-3.5" />
              Source
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All Projects');
  const visibleProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Section id="projects">
      <SectionHeader className="mb-9 text-center md:mb-12">
        <SectionLabel>Selected work</SectionLabel>
        <SectionTitle id="featured-projects-heading">Featured Projects</SectionTitle>
        <SectionSubtitle className="mx-auto">
          A closer look at AI systems, intelligent applications, and computing platforms.
        </SectionSubtitle>
      </SectionHeader>

      <div className="mb-7 flex flex-wrap justify-center gap-2 sm:mb-9">
        {projectFilters.map((filter) => {
          const isActive = activeFilter === filter;
          const count =
            filter === 'All Projects'
              ? projects.length
              : projects.filter((project) => project.category === filter).length;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'min-h-10 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
                isActive
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--foreground)]'
              )}
            >
              {filter}
              <span className={cn('ml-1.5 text-[0.6875rem]', isActive ? 'text-white/75' : 'text-[var(--text-subtle)]')}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        aria-label="Featured project cards"
        className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3"
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
