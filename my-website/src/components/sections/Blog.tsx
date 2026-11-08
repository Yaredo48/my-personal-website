'use client';

import React from 'react';
import Link from 'next/link';
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
        <SectionSubtitle className="text-lg md:text-xl">
          Knowledge sharing and insights from AI engineering practice.
        </SectionSubtitle>
      </SectionHeader>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="outline" size="md">
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
            <div className="group cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_16px_40px_rgb(0_0_0/_0.08)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <div className="mb-3">
                    <Badge variant="primary" size="md">{featured.category}</Badge>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold leading-snug tracking-[-0.03em] text-[var(--foreground)] sm:text-[1.75rem] lg:text-[2rem]">
                    {featured.title}
                  </h3>
                  <p className="mb-5 max-w-2xl text-base leading-[1.75] text-[var(--text-muted)] sm:text-[1.0625rem]">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--text-subtle)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="mt-1 flex shrink-0 items-center gap-1.5 self-start text-base font-semibold text-[var(--primary)] transition-all hover:gap-2.5"
                >
                  Read More
                  <ArrowRight className="h-[1.125rem] w-[1.125rem]" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {rest.map((post, i) => (
            <motion.div key={post.id} custom={i + 1} variants={fadeUp}>
              <div className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_12px_32px_rgb(0_0_0/_0.07)] sm:p-7">
                <div className="mb-3">
                  <Badge variant="primary" size="md">{post.category}</Badge>
                </div>
                <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-xl">
                  {post.title}
                </h3>
                <p className="mb-5 line-clamp-3 flex-1 text-base leading-[1.7] text-[var(--text-muted)]">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-subtle)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href="/blog"
                    className="flex items-center gap-1 text-sm font-semibold text-[var(--primary)] transition-all hover:gap-1.5"
                  >
                    Read
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
