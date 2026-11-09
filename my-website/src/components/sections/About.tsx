'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Code2, GraduationCap, Layers3 } from 'lucide-react';
import Image from 'next/image';
import { Section, SectionTitle } from '@/components/ui/Section';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const strengths = [
  {
    icon: Code2,
    title: 'Python Development',
    detail: 'Building backend services and full-stack applications with Python.',
  },
  {
    icon: Layers3,
    title: 'Full-Stack Engineering',
    detail: 'Connecting frontend experiences with dependable backend systems.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    detail: 'Creating practical solutions with machine learning and generative AI.',
  },
  {
    icon: GraduationCap,
    title: 'Educator & Creator',
    detail: 'Sharing technical knowledge through teaching and creative content.',
  },
];

export const About = () => (
  <Section id="about" className="py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-5xl text-center">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp}>
          <SectionTitle className="mb-0 bg-none bg-clip-border font-heading font-extrabold tracking-[-0.05em] text-[var(--accent-amber)] text-[2.5rem] sm:text-5xl lg:text-6xl">
            Who Am I ?
          </SectionTitle>
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto mt-7 h-48 w-48 sm:mt-8 sm:h-60 sm:w-60">
          <Image
            src="/media/portrait.png"
            alt="Portrait of Yared Asfaw"
            width={853}
            height={1280}
            className="h-full w-full rounded-full border-[3px] border-[var(--primary)] bg-[var(--surface)] object-cover object-[center_20%]"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-4xl text-base leading-[1.8] text-[var(--text-muted)] sm:text-lg"
        >
          Results-driven AI Engineer with 3+ years of experience architecting, training, and
          deploying scalable LLM-powered applications, RAG pipelines, and agentic workflows in
          production. Proficient in Python, PyTorch, LangChain/LlamaIndex, LangGraph, and vector
          databases (Pinecone, pgvector), with deep expertise in Docker and AWS cloud
          infrastructure. Proven track record of reducing latency and cutting operational costs
          by 30%. Adept at bridging core software engineering and machine learning to deliver
          measurable business value.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-4 sm:mt-11 sm:gap-6 lg:grid-cols-4"
      >
        {strengths.map(({ icon: Icon, title, detail }, index) => (
          <motion.article
            key={title}
            custom={index}
            variants={fadeUp}
            className="group flex min-h-40 flex-col items-start rounded-2xl border border-[var(--border)] border-b-[5px] border-b-[var(--primary)] bg-[var(--surface)] p-4 text-left shadow-[0_1px_4px_rgb(0_0_0/_0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:border-b-[var(--primary)] hover:shadow-[0_12px_32px_rgb(0_0_0/_0.08)] sm:min-h-44 sm:p-5"
          >
            <Icon
              className="mb-3 h-7 w-7 text-[var(--primary)] transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-8 sm:w-8"
              aria-hidden="true"
            />
            <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-lg">
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {detail}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </Section>
);
