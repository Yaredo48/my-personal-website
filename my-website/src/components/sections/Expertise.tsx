'use client';

import React, { useState, useMemo } from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies, techCategories } from '@/data/profile';
import { cn } from '@/lib/utils';

export const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    () => new Set([techCategories.programming])
  );

  const categories = Object.values(techCategories);

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory;
      const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const groupedTechnologies = useMemo(() => {
    const groups: Record<string, typeof technologies> = {};
    filteredTechnologies.forEach((tech) => {
      if (!groups[tech.category]) {
        groups[tech.category] = [];
      }
      groups[tech.category].push(tech);
    });
    return groups;
  }, [filteredTechnologies]);

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setExpandedCategories(category === 'all' ? new Set([techCategories.programming]) : new Set([category]));
  };

  const updateSearch = (query: string) => {
    setSearchQuery(query);
    if (query) setExpandedCategories(new Set(categories));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'experienced':
        return 'bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border-[var(--accent-emerald)]/20';
      case 'proficient':
        return 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20';
      case 'familiar':
        return 'bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border-[var(--accent-teal)]/20';
      case 'learning':
        return 'bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/20';
      default:
        return 'bg-[var(--background-secondary)] text-[var(--foreground)] border-[var(--border)]';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'experienced':
        return 'Experienced';
      case 'proficient':
        return 'Proficient';
      case 'familiar':
        return 'Familiar';
      case 'learning':
        return 'Learning';
      default:
        return level;
    }
  };

  return (
    <Section id="expertise">
      <SectionHeader>
        <SectionTitle>Technical Expertise</SectionTitle>
        <SectionSubtitle>
          A comprehensive technology ecosystem spanning AI, ML, software engineering, and infrastructure
        </SectionSubtitle>
      </SectionHeader>

      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => updateSearch(e.target.value)}
              className="w-full rounded-md border border-[var(--border)] bg-[var(--card-bg)] py-3 pl-10 pr-4 text-[var(--foreground)] placeholder:text-[var(--text-muted)] transition focus:border-[var(--primary)] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectCategory('all')}
              className={cn(
                'rounded-md border px-3 py-2 text-xs font-medium transition-colors sm:text-sm',
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
                  'rounded-md border px-3 py-2 text-xs font-medium transition-colors sm:text-sm',
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

        <div className="space-y-6">
          {Object.entries(groupedTechnologies).map(([category, techs]) => (
            <Card key={category} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[var(--background-secondary)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {category}
                  </h3>
                  {expandedCategories.has(category) ? (
                    <ChevronUp className="w-5 h-5 text-[var(--text-muted)]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedCategories.has(category) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="flex flex-wrap gap-3">
                          {techs.map((tech) => (
                            <div
                              key={tech.name}
                              className="flex items-center gap-2"
                            >
                              <Badge
                                variant="outline"
                                size="md"
                                className={cn(
                                  'border-2',
                                  getLevelColor(tech.level)
                                )}
                              >
                                {tech.name}
                              </Badge>
                              <span className="text-xs text-[var(--text-muted)]">
                                {getLevelLabel(tech.level)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-muted)] text-lg">
              No technologies found matching your search.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};
