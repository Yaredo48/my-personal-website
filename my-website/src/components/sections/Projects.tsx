'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Section, SectionHeader, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { projects } from '@/data/profile';
import type { Project } from '@/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_4px_rgb(0_0_0/_0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_12px_30px_rgb(0_0_0/_0.09)]">
      <div className="relative aspect-[1280/668] overflow-hidden border-b border-[var(--border)] bg-[var(--background-secondary)]">
        <Image
          src={project.image}
          alt={`${project.name} dashboard`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3">
          <span
            className={
              project.status === 'completed'
                ? 'inline-flex rounded-full bg-[var(--accent-emerald)]/10 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[var(--accent-emerald)]'
                : 'inline-flex rounded-full bg-[var(--primary)]/10 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[var(--primary)]'
            }
          >
            {project.status === 'completed' ? 'Completed' : 'Planned · concept preview'}
          </span>
        </div>
        <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-lg">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-[1.7] text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <Badge key={technology} variant="outline" size="sm" className="text-[0.6875rem]">
              {technology}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <span
              aria-label={`${project.technologies.length - 4} more technologies`}
              className="inline-flex items-center px-1 text-xs font-medium text-[var(--text-subtle)]"
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[var(--border)] px-4 text-xs font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--background-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            >
              GitHub
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.demo ?? `/projects/${project.id}`}
            target={project.demo ? '_blank' : undefined}
            rel={project.demo ? 'noreferrer' : undefined}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 text-xs font-semibold text-white transition-colors hover:bg-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
          >
            View Project
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

const emptyProjectSlots = ['project-slot-1', 'project-slot-2', 'project-slot-3'];

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <SectionHeader className="mb-9 text-center md:mb-12">
        <SectionLabel>Selected work</SectionLabel>
        <SectionTitle id="featured-projects-heading">Featured Projects</SectionTitle>
        <SectionSubtitle className="mx-auto">
          AI systems designed to make healthcare workflows more useful and accessible.
        </SectionSubtitle>
      </SectionHeader>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          aria-expanded={showAllProjects}
          onClick={() => setShowAllProjects((showAll) => !showAll)}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
        >
          {showAllProjects ? 'Show featured projects' : 'View all projects'}
        </button>
      </div>
      {showAllProjects && (
        <div className="mt-8" id="all-projects">
          <div className="mb-5 text-center">
            <p className="text-sm leading-[1.7] text-[var(--text-muted)]">
              These additional concepts are planned work, not completed or deployed projects. Their
              images are illustrative previews.
            </p>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
      <div className="mb-6 mt-14 text-center md:mt-20">
        <SectionLabel>Future work</SectionLabel>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-3xl">
          Planned Projects
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.7] text-[var(--text-muted)]">
          New projects will be added here when they are ready to share.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {emptyProjectSlots.map((slot, index) => (
          <div
            key={slot}
            className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)]/60 p-6 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-subtle)]">
              Project {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-3 text-sm font-medium text-[var(--text-muted)]">
              A new project will appear here
            </p>
            <span className="mt-2 text-xs text-[var(--text-subtle)]">Coming soon</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
