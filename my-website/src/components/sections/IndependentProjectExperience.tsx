import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Section, SectionHeader, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { projects } from '@/data/profile';

const independentProjects = projects.filter(
  (project) => project.status === 'completed' && project.featured
);

export const IndependentProjectExperience = () => (
  <Section id="independent-project-experience" background="secondary">
    <SectionHeader className="mb-9 md:mb-12">
      <SectionLabel>Independent Project Experience</SectionLabel>
      <SectionTitle>Ideas explored through hands-on engineering.</SectionTitle>
      <SectionSubtitle>
        Personal and independently developed AI and software projects, presented separately from
        professional employment.
      </SectionSubtitle>
    </SectionHeader>

    <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {independentProjects.map((project) => (
        <article
          key={project.id}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_4px_rgb(0_0_0/_0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_12px_30px_rgb(0_0_0/_0.08)]"
        >
          <div className="relative aspect-[1280/668] overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
            <Image
              src={project.image}
              alt={`${project.name} project dashboard`}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent-emerald)]">
              Independent project
            </p>
            <h3 className="mt-2 text-base font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-lg">
              {project.name}
            </h3>
            <p className="mt-2 line-clamp-4 text-sm leading-[1.7] text-[var(--text-muted)]">
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
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[var(--border)] px-4 text-xs font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
                >
                  GitHub
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={project.demo ?? `/projects/${project.id}`}
                target={project.demo ? '_blank' : undefined}
                rel={project.demo ? 'noreferrer' : undefined}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[var(--primary)] px-4 text-xs font-semibold text-white transition-colors hover:bg-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              >
                View Project
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
