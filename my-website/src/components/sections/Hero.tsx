'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Code, Linkedin as LinkedIn, Mail, ArrowRight, Download, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 md:px-8 lg:px-16 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                  Senior AI Engineer
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20">
                  Software Engineer
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border border-[var(--accent-teal)]/20">
                  AI Systems Architect
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
                Building Intelligent Systems.
                <br />
                <span className="text-[var(--primary)]">Engineering the Future.</span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl">
                I architect, engineer, and deploy scalable AI solutions that transform complex challenges into intelligent products.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button size="lg" className="flex items-center gap-2">
                Explore My Work
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Code className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--background-secondary)] rounded-xl p-4 border border-[var(--border)]">
                    <Cpu className="w-8 h-8 text-[var(--primary)] mb-2" />
                    <p className="text-sm font-medium text-[var(--foreground)]">ML & Deep Learning</p>
                  </div>
                  <div className="bg-[var(--background-secondary)] rounded-xl p-4 border border-[var(--border)]">
                    <Database className="w-8 h-8 text-[var(--secondary)] mb-2" />
                    <p className="text-sm font-medium text-[var(--foreground)]">RAG Systems</p>
                  </div>
                  <div className="bg-[var(--background-secondary)] rounded-xl p-4 border border-[var(--border)]">
                    <Zap className="w-8 h-8 text-[var(--accent-teal)] mb-2" />
                    <p className="text-sm font-medium text-[var(--foreground)]">Agentic AI</p>
                  </div>
                  <div className="bg-[var(--background-secondary)] rounded-xl p-4 border border-[var(--border)]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-2" />
                    <p className="text-sm font-medium text-[var(--foreground)]">LLM Engineering</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--text-muted)] text-center">
                    End-to-End AI Solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
