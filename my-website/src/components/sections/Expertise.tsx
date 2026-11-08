'use client';

import React, { useState, useMemo } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies, techCategories } from '@/data/profile';
import { cn } from '@/lib/utils';
import { fadeUp, viewportOnce } from '@/lib/motion';

const levelStyles: Record<string, string> = {
  experienced: 'bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border-[var(--accent-emerald)]/25',
  proficient: 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/25',
  familiar: 'bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border-[var(--accent-teal)]/25',
  learning: 'bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/25',
};

export const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    () => new Set([techCategories.programming])
  );

  const categories = Object.values(techCategories);

  const filteredTechnologies = useMemo(
    () =>
      technologies.filter((tech) => {
        const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory;
        const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [selectedCategory, searchQuery]
  );

  const groupedTechnologies = useMemo(() => {
    const groups: Record<string, typeof technologies> = {};
    filteredTechnologies.forEach((tech) => {
      if (!groups[tech.category]) groups[tech.category] = [];
      groups[tech.category].push(tech);
    });
    return groups;
  }, [filteredTechnologies]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      next.has(category) ? next.delete(category) : next.add(category);
      return next;
    });
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setExpandedCategories(category === 'all' ? new Set([techCategories.programming]) : new Set([category]));
  };

  const updateSearch = (query: string) => {
    setSearchQuery(query);
    if (query) setExpandedCategories(new Set(categories));
  };

  return (
    <Section id="expertise" background="secondary">
      <SectionHeader>
        <SectionLabel>Skills & tools</SectionLabel>
        <SectionTitle>Technical Expertise</SectionTitle>
        <SectionSubtitle>
          A comprehensive technology ecosystem spanning AI, ML, software engineering, and infrastructure.
        </SectionSubtitle>
      </SectionHeader>

      <div className="space-y-6">
        {/* Controls */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search technologies…"
              value={searchQuery}
              onChange={(e) => updateSearch(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] py-2.5 pl-9 pr-4 text-sm text-[var(--foreground)] placeholder:text-[var(--text-subtle)] transition focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/15"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectCategory('all')}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                selectedCategory === 'all'
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)]'
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className={cn(
                  'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                  selectedCategory === category
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)]'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Category groups */}
        <div className="space-y-3">
          {Object.entries(groupedTechnologies).map(([category, techs], i) => (
            <motion.div
              key={category}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Card className="overflow-hidden p-0">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[var(--background-secondary)]"
                  >
                    <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-[var(--foreground)]">{category}</h3>
                    {expandedCategories.has(category) ? (
                      <ChevronUp className="h-4 w-4 text-[var(--text-muted)]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[var(--text-muted)]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.has(category) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 px-6 pb-5 pt-1">
                          {techs.map((tech) => (
                            <Badge
                              key={tech.name}
                              variant="outline"
                              size="sm"
                              className={cn('border', levelStyles[tech.level] ?? '')}
                            >
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTechnologies.length === 0 && (
          <p className="py-12 text-center text-[var(--text-muted)]">
            No technologies found matching your search.
          </p>
        )}
      </div>
    </Section>
  );
};
