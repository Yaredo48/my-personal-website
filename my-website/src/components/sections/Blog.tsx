'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/profile';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const categories = [
  'AI Engineering', 'Machine Learning', 'Deep Learning', 'LLM Engineering',
  'RAG Architecture', 'Agentic AI', 'MLOps', 'Software Architecture',
  'HPC and CUDA', 'Scientific Computing',
];

export const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <Section id="blog">
      <SectionHeader>
        <SectionLabel>Writing</SectionLabel>
        <SectionTitle>Technical Blog</SectionTitle>
        <SectionSubtitle>Knowledge sharing and insights from AI engineering practice.</SectionSubtitle>
      </SectionHeader>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="outline" size="sm">
            {category}
          </Badge>
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-5"
      >
        {/* Featured post */}
        {featured && (
          <motion.div custom={0} variants={fadeUp}>
            <div className="group cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_16px_40px_rgb(0_0_0/_0.08)]">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <div className="mb-3">
                    <Badge variant="primary" size="sm">{featured.category}</Badge>
                  </div>
                  <h3 className="mb-3 text-[1.375rem] font-bold leading-snug tracking-[-0.03em] text-[var(--foreground)] lg:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mb-4 max-w-2xl text-[0.9375rem] leading-[1.7] text-[var(--text-muted)]">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-subtle)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
                <button className="mt-1 flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-[var(--primary)] transition-all hover:gap-2.5">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining posts */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.div key={post.id} custom={i + 1} variants={fadeUp}>
              <div className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_12px_32px_rgb(0_0_0/_0.07)]">
                <div className="mb-3">
                  <Badge variant="primary" size="sm">{post.category}</Badge>
                </div>
                <h3 className="mb-2 line-clamp-2 text-[0.9375rem] font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-[1.65] text-[var(--text-muted)]">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-subtle)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-semibold text-[var(--primary)] transition-all hover:gap-1.5">
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
