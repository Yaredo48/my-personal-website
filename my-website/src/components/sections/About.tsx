'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion } from 'framer-motion';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="about" background="secondary">
      <SectionHeader>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          Passionate about building intelligent systems that solve real-world problems
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--foreground)] leading-relaxed">
              I am a Senior AI Engineer and Software Engineer specializing in architecting, developing, and deploying intelligent, scalable AI solutions. My expertise spans Machine Learning, Deep Learning, Generative AI, and Large Language Models (LLMs), with a strong focus on Retrieval-Augmented Generation (RAG) systems, AI agents, and enterprise-grade AI applications.
            </p>
            <p className="text-[var(--foreground)] leading-relaxed">
              I specialize in building end-to-end AI solutions using technologies such as Hugging Face, LangChain, OpenAI and Vector Databases. I have experience designing scalable APIs, integrating AI models into production environments, and implementing MLOps practices for deployment, monitoring, and continuous improvement.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              Engineering Philosophy
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              I believe in building systems that are not only intelligent but also reliable, scalable, and maintainable. Every solution I architect balances innovation with practical production considerations, ensuring that AI models deliver measurable business value.
            </p>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              Professional Mission
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              My primary focus is delivering reliable, high-performance AI solutions that solve real-world problems and drive measurable business value. I am committed to advancing the field of AI engineering through continuous learning, research, and the development of production-grade intelligent applications.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-semibold text-[var(--foreground)] mb-8 text-center"
        >
          Research Interests
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[
            'Artificial Intelligence Engineering',
            'Machine Learning and Deep Learning',
            'Generative AI and LLM Engineering',
            'RAG Systems and Knowledge Retrieval',
            'Agentic AI and Multi-Agent Architectures',
            'Enterprise AI Applications',
            'Software Architecture and Backend Engineering',
            'MLOps and Production AI',
            'Cloud and Distributed Systems',
            'High-Performance Computing',
            'GPU and Parallel Computing',
            'Scientific Computing and Research',
          ].map((interest) => (
            <div
              key={interest}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 hover:border-[var(--primary)] transition-colors duration-300"
            >
              <p className="text-sm font-medium text-[var(--foreground)]">{interest}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
