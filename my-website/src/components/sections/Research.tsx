'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Section, SectionLabel } from '@/components/ui/Section';
import { cn } from '@/lib/utils';

const researchTopics = [
  {
    id: 'medical-rag-retrieval',
    type: 'Proposed topic',
    title: 'Improving Medical Question Answering with Hybrid Retrieval and Reranking',
    abstract:
      'Medical question-answering systems built with retrieval-augmented generation can produce fluent responses while still retrieving incomplete or weakly relevant evidence. This proposed study will examine a hybrid retrieval pipeline that combines lexical search with dense vector retrieval, followed by a reranking stage for medical documents. The evaluation will compare retrieval configurations using a curated set of domain-specific questions and judged relevant passages. Retrieval quality will be measured with ranking metrics, while generated responses will be assessed for evidence relevance, citation support, and clarity. The work will also consider questions that cannot be answered from the available collection, measuring whether the system communicates insufficient evidence rather than presenting unsupported claims. This is a proposed research direction; no experiments or results are claimed.',
  },
  {
    id: 'rag-grounding',
    type: 'Proposed topic',
    title: 'Evaluating Citation Grounding in Domain-Specific RAG Systems',
    abstract:
      'Retrieval-augmented generation systems often display citations, but the presence of a citation does not guarantee that the cited source supports the associated claim. This proposed work will develop an evaluation approach for citation grounding in domain-specific question-answering systems. It will distinguish retrieval relevance, claim-level support, citation completeness, and answerability, then explore how these dimensions can be assessed with a combination of reference judgments and automated checks. The evaluation will include answerable and unanswerable queries to examine whether systems appropriately abstain when evidence is missing. The goal is to make RAG evaluation more informative than answer-level similarity alone and to identify failure patterns that can guide system improvements. The study is a working proposal; evaluation data, experiments, and findings remain to be produced.',
  },
  {
    id: 'explainable-screening',
    type: 'Proposed topic',
    title: 'Explainable Machine Learning for Early Autism Screening in Resource-Constrained Settings',
    abstract:
      'Early screening tools may help organize information for clinical follow-up, but their use requires careful attention to interpretability, data quality, and the limits of automated predictions. This proposed study will investigate explainable machine-learning approaches for questionnaire-based autism screening in resource-constrained settings, with a focus on the needs of children and care providers in Ethiopia. Candidate models will be compared using appropriate predictive metrics and subgroup analyses, while explanation methods will be examined for consistency and usefulness to intended users. The study will treat model output as decision support rather than diagnosis and will consider how uncertainty, referral guidance, and local context should be communicated. Any future evaluation would require suitable ethical review and validated data. This abstract describes a proposed direction and reports no completed study or results.',
  },
  {
    id: 'efficient-llm-adaptation',
    type: 'Proposed topic',
    title: 'Efficient Adaptation of Large Language Models for Specialized Knowledge Tasks',
    abstract:
      'Adapting large language models to specialized knowledge tasks involves trade-offs among answer quality, data availability, inference cost, and operational complexity. This proposed study will compare practical adaptation strategies, such as prompt-based methods, retrieval augmentation, and parameter-efficient fine-tuning, across a defined domain task. The evaluation will consider task performance alongside evidence use, robustness to out-of-scope questions, latency, and resource requirements. A reproducible benchmark and consistent evaluation protocol will be used to distinguish gains attributable to additional context from gains attributable to model adaptation. The intended outcome is a decision framework that helps practitioners select an approach appropriate to their data and deployment constraints. This is a proposed abstract only; no model comparisons or empirical findings are claimed.',
  },
  {
    id: 'distributed-scientific-computing',
    type: 'Proposed topic',
    title: 'Optimizing Distributed Workloads for High-Performance Scientific Computing',
    abstract:
      'Scientific workloads can benefit from distributed execution, yet observed performance depends on workload characteristics, communication costs, and the available computing environment. This proposed study will examine scalability and performance trade-offs for representative scientific workloads in Linux-based high-performance computing environments. It will define repeatable workload and measurement procedures, then investigate how parallelization choices and communication patterns affect runtime and resource utilization as compute resources increase. The analysis will emphasize reproducibility and distinguish measured results from environment-specific observations. The work aims to produce practical guidance for identifying bottlenecks and selecting suitable execution strategies rather than assuming that additional resources always improve performance. This is a research proposal; benchmarks, experiments, and results have not yet been completed.',
  },
];

export const Research = () => {
  return (
    <Section id="research" background="secondary">
      <header className="mb-9 md:mb-11">
        <SectionLabel>Research &amp; Publications</SectionLabel>
        <h2 className="mb-4 text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
          Publications
        </h2>
        <p className="max-w-2xl text-base leading-[1.75] text-[var(--text-muted)] sm:text-lg">
          Selected research directions and proposed studies. These working ideas are not
          published papers.
        </p>
      </header>

      <div id="proposed-topics-panel">
        <section aria-labelledby="research-list-heading" className="pt-2">
          <h3
            id="research-list-heading"
            className="border-b border-[var(--border-strong)] pb-3 text-lg font-semibold uppercase tracking-[0.08em] text-[var(--foreground)] sm:text-xl"
          >
            Research topics
          </h3>
          <div className="grid sm:grid-cols-2">
            {researchTopics.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.25, delay: index * 0.035 }}
                className={cn(
                  'min-w-0 border-b border-[var(--border-strong)] py-5 sm:px-5 sm:py-6',
                  index % 2 === 0 && 'sm:border-r sm:border-[var(--border-strong)] sm:pl-0',
                  index % 2 === 1 && 'sm:pr-0'
                )}
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                  {item.type}
                </p>
                <h4 className="text-lg font-semibold leading-snug tracking-[-0.015em] text-[var(--foreground)] sm:text-xl">
                  {item.title}
                </h4>
                <details className="group mt-3">
                  <summary className="flex min-h-10 cursor-pointer list-none items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">Show Abstract</span>
                    <span className="hidden group-open:inline">Hide Abstract</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="mt-2 border-l-2 border-[var(--primary)]/40 pl-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-subtle)]">
                      Draft abstract · proposed research
                    </p>
                    <p className="text-sm leading-[1.75] text-[var(--text-muted)] sm:text-base">
                      {item.abstract}
                    </p>
                  </div>
                </details>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
};
