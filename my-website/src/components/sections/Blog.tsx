'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/profile';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const categories = [
    'AI Engineering',
    'Machine Learning',
    'Deep Learning',
    'LLM Engineering',
    'RAG Architecture',
    'Agentic AI',
    'MLOps',
    'Software Architecture',
    'HPC and CUDA',
    'Scientific Computing',
  ];

  return (
    <Section id="blog" background="secondary">
      <SectionHeader>
        <SectionTitle>Technical Blog</SectionTitle>
        <SectionSubtitle>
          Knowledge sharing and insights from AI engineering practice
        </SectionSubtitle>
      </SectionHeader>

      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge key={category} variant="outline" size="md">
            {category}
          </Badge>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <Card hover className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="primary" size="sm">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="text-[var(--primary)] font-medium flex items-center gap-2 hover:gap-3 transition-all hover:text-[var(--primary-light)]">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
