'use client';

import React from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, Server, GitBranch, Activity, Zap } from 'lucide-react';

export const Architecture = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const flowSteps = [
    { icon: Database, label: 'Data Sources', color: 'text-[var(--accent-teal)]' },
    { icon: Server, label: 'Data Ingestion', color: 'text-[var(--primary)]' },
    { icon: Cpu, label: 'Processing', color: 'text-[var(--secondary)]' },
    { icon: Database, label: 'Embeddings', color: 'text-[var(--accent-emerald)]' },
    { icon: Database, label: 'Vector DB', color: 'text-[var(--accent-teal)]' },
    { icon: GitBranch, label: 'Retrieval', color: 'text-[var(--primary)]' },
    { icon: Zap, label: 'LLM', color: 'text-[var(--secondary)]' },
    { icon: Server, label: 'API', color: 'text-[var(--accent-emerald)]' },
    { icon: Activity, label: 'Monitoring', color: 'text-[var(--accent-amber)]' },
  ];

  return (
    <Section id="architecture">
      <SectionHeader>
        <SectionTitle>Engineering Architecture</SectionTitle>
        <SectionSubtitle>
          End-to-end AI system design from data to production
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <Card>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6 text-center">
              RAG System Architecture
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {flowSteps.map((step, index) => (
                <React.Fragment key={step.label}>
                  <motion.div variants={itemVariants} className="flex flex-col items-center">
                    <div className={`p-4 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] ${step.color}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-[var(--foreground)] mt-2 text-center">
                      {step.label}
                    </p>
                  </motion.div>
                  {index < flowSteps.length - 1 && (
                    <motion.div variants={itemVariants} className="text-[var(--text-muted)]">
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hover>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Scalable Backend
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                High-performance APIs with FastAPI, Django REST Framework, and GraphQL for seamless integration.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-[var(--secondary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Vector Databases
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                ChromaDB, Pinecone, and pgvector for efficient semantic search and retrieval.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-[var(--accent-teal)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Agentic AI
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Multi-agent systems with LangGraph, CrewAI, and AutoGen for complex task automation.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-emerald)]/10 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-[var(--accent-emerald)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Model Deployment
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                vLLM, Docker, and Kubernetes for scalable model serving and inference optimization.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-amber)]/10 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-[var(--accent-amber)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                MLOps Pipeline
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                MLflow, DVC, and CI/CD for continuous integration, deployment, and monitoring.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                High-Performance Computing
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                CUDA, parallel computing, and GPU optimization for large-scale ML workloads.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
};
