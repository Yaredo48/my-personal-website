'use client';

import React from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
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

export const Blog = () => (
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
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {blogPosts.map((post, i) => (
        <motion.div key={post.id} custom={i} variants={fadeUp}>
          <Card hover className="flex h-full flex-col">
            <CardHeader>
              <div className="mb-2">
                <Badge variant="primary" size="sm">{post.category}</Badge>
              </div>
              <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="mb-4 flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <button className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] transition-all hover:gap-2.5">
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);
