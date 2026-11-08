import { Technology, Project, ProjectCategory, Experience, Publication, BlogPost } from '@/types';

export const profile = {
  name: 'Yared Asfaw',
  title: 'Senior AI Engineer | Software Engineer',
  tagline: 'Building Intelligent Systems. Engineering the Future.',
  bio: 'I architect, engineer, and deploy scalable AI solutions that transform complex challenges into intelligent products.',
  email: 'contact@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile',
  googleScholar: 'https://scholar.google.com/citations?user=yourid',
  researchGate: 'https://researchgate.net/profile/yourprofile',
};

export const techCategories = {
  programming: 'Programming Languages',
  ml: 'Machine Learning & Deep Learning',
  genai: 'Generative AI & LLM Engineering',
  rag: 'RAG & Vector Databases',
  agents: 'Agentic AI',
  backend: 'Backend & API Engineering',
  databases: 'Databases & Data Engineering',
  mlops: 'MLOps & DevOps',
  cloud: 'Cloud & Infrastructure',
  hpc: 'High-Performance Computing',
  testing: 'Testing & AI Quality',
} as const;

export const techCategoryDescriptions: Record<keyof typeof techCategories, string> = {
  programming: 'The languages I use to build reliable software, data workflows, and AI products.',
  ml: 'A practical toolkit for preparing data, training models, and delivering machine learning.',
  genai: 'Building and adapting language models for useful, production-ready applications.',
  rag: 'Connecting language models to trusted knowledge through retrieval and vector search.',
  agents: 'Designing tool-using AI systems with clear workflows, safeguards, and evaluation.',
  backend: 'Engineering robust services and APIs that make intelligent products dependable.',
  databases: 'Designing data stores and pipelines that keep application and analytics data useful.',
  mlops: 'Taking models and services from development to repeatable, observable deployments.',
  cloud: 'Running AI workloads and services on scalable cloud and GPU infrastructure.',
  hpc: 'Accelerating compute-heavy workloads with parallel programming and GPU technologies.',
  testing: 'Validating software behavior, system performance, and the quality of AI outputs.',
};

export const technologies: Technology[] = [
  // Programming Languages
  { name: 'Python', category: techCategories.programming, level: 'experienced' },
  { name: 'C', category: techCategories.programming, level: 'proficient' },
  { name: 'C++', category: techCategories.programming, level: 'proficient' },
  { name: 'JavaScript', category: techCategories.programming, level: 'experienced' },
  { name: 'TypeScript', category: techCategories.programming, level: 'experienced' },
  { name: 'SQL', category: techCategories.programming, level: 'experienced' },
  { name: 'Bash', category: techCategories.programming, level: 'proficient' },

  // Machine Learning & Deep Learning
  { name: 'PyTorch', category: techCategories.ml, level: 'experienced' },
  { name: 'TensorFlow', category: techCategories.ml, level: 'proficient' },
  { name: 'Keras', category: techCategories.ml, level: 'proficient' },
  { name: 'Scikit-learn', category: techCategories.ml, level: 'experienced' },
  { name: 'XGBoost', category: techCategories.ml, level: 'proficient' },
  { name: 'NumPy', category: techCategories.ml, level: 'experienced' },
  { name: 'Pandas', category: techCategories.ml, level: 'experienced' },
  { name: 'SciPy', category: techCategories.ml, level: 'proficient' },
  { name: 'Hugging Face', category: techCategories.ml, level: 'experienced' },

  // Generative AI & LLM Engineering
  { name: 'OpenAI', category: techCategories.genai, level: 'experienced' },
  { name: 'Hugging Face Transformers', category: techCategories.genai, level: 'experienced' },
  { name: 'LangChain', category: techCategories.genai, level: 'experienced' },
  { name: 'LangGraph', category: techCategories.genai, level: 'experienced' },
  { name: 'LlamaIndex', category: techCategories.genai, level: 'proficient' },
  { name: 'Ollama', category: techCategories.genai, level: 'proficient' },
  { name: 'vLLM', category: techCategories.genai, level: 'proficient' },
  { name: 'Prompt Engineering', category: techCategories.genai, level: 'experienced' },
  { name: 'Fine-tuning', category: techCategories.genai, level: 'experienced' },
  { name: 'PEFT', category: techCategories.genai, level: 'proficient' },
  { name: 'LoRA', category: techCategories.genai, level: 'proficient' },

  // RAG & Vector Databases
  { name: 'ChromaDB', category: techCategories.rag, level: 'experienced' },
  { name: 'Pinecone', category: techCategories.rag, level: 'proficient' },
  { name: 'Qdrant', category: techCategories.rag, level: 'proficient' },
  { name: 'Weaviate', category: techCategories.rag, level: 'familiar' },
  { name: 'FAISS', category: techCategories.rag, level: 'experienced' },
  { name: 'Milvus', category: techCategories.rag, level: 'familiar' },
  { name: 'PostgreSQL', category: techCategories.rag, level: 'experienced' },
  { name: 'pgvector', category: techCategories.rag, level: 'experienced' },
  { name: 'Elasticsearch', category: techCategories.rag, level: 'proficient' },
  { name: 'Reranking', category: techCategories.rag, level: 'experienced' },

  // Agentic AI
  { name: 'LangGraph', category: techCategories.agents, level: 'experienced' },
  { name: 'CrewAI', category: techCategories.agents, level: 'proficient' },
  { name: 'AutoGen', category: techCategories.agents, level: 'proficient' },
  { name: 'MCP', category: techCategories.agents, level: 'proficient' },
  { name: 'Tool Calling', category: techCategories.agents, level: 'experienced' },
  { name: 'Multi-Agent Systems', category: techCategories.agents, level: 'experienced' },
  { name: 'Agent Evaluation', category: techCategories.agents, level: 'proficient' },
  { name: 'Guardrails', category: techCategories.agents, level: 'proficient' },

  // Backend & API Engineering
  { name: 'Django', category: techCategories.backend, level: 'experienced' },
  { name: 'Django REST Framework', category: techCategories.backend, level: 'experienced' },
  { name: 'FastAPI', category: techCategories.backend, level: 'experienced' },
  { name: 'Flask', category: techCategories.backend, level: 'proficient' },
  { name: 'REST APIs', category: techCategories.backend, level: 'experienced' },
  { name: 'GraphQL', category: techCategories.backend, level: 'proficient' },
  { name: 'Pydantic', category: techCategories.backend, level: 'experienced' },
  { name: 'Celery', category: techCategories.backend, level: 'proficient' },
  { name: 'Redis', category: techCategories.backend, level: 'experienced' },

  // Databases & Data Engineering
  { name: 'PostgreSQL', category: techCategories.databases, level: 'experienced' },
  { name: 'MySQL', category: techCategories.databases, level: 'proficient' },
  { name: 'MongoDB', category: techCategories.databases, level: 'proficient' },
  { name: 'Redis', category: techCategories.databases, level: 'experienced' },
  { name: 'Apache Kafka', category: techCategories.databases, level: 'proficient' },
  { name: 'Apache Airflow', category: techCategories.databases, level: 'proficient' },
  { name: 'ETL Pipelines', category: techCategories.databases, level: 'experienced' },

  // MLOps & DevOps
  { name: 'Docker', category: techCategories.mlops, level: 'experienced' },
  { name: 'Kubernetes', category: techCategories.mlops, level: 'proficient' },
  { name: 'MLflow', category: techCategories.mlops, level: 'proficient' },
  { name: 'DVC', category: techCategories.mlops, level: 'familiar' },
  { name: 'Git', category: techCategories.mlops, level: 'experienced' },
  { name: 'GitHub Actions', category: techCategories.mlops, level: 'experienced' },
  { name: 'CI/CD', category: techCategories.mlops, level: 'experienced' },
  { name: 'Prometheus', category: techCategories.mlops, level: 'proficient' },
  { name: 'Grafana', category: techCategories.mlops, level: 'proficient' },
  { name: 'Nginx', category: techCategories.mlops, level: 'proficient' },
  { name: 'Linux', category: techCategories.mlops, level: 'experienced' },

  // Cloud & Infrastructure
  { name: 'AWS', category: techCategories.cloud, level: 'experienced' },
  { name: 'Google Cloud', category: techCategories.cloud, level: 'proficient' },
  { name: 'Azure', category: techCategories.cloud, level: 'familiar' },
  { name: 'Hugging Face Spaces', category: techCategories.cloud, level: 'experienced' },
  { name: 'GPU Infrastructure', category: techCategories.cloud, level: 'experienced' },
  { name: 'Model Serving', category: techCategories.cloud, level: 'experienced' },

  // High-Performance Computing
  { name: 'CUDA', category: techCategories.hpc, level: 'experienced' },
  { name: 'OpenMP', category: techCategories.hpc, level: 'proficient' },
  { name: 'MPI', category: techCategories.hpc, level: 'proficient' },
  { name: 'NVIDIA GPUs', category: techCategories.hpc, level: 'experienced' },
  { name: 'Parallel Computing', category: techCategories.hpc, level: 'experienced' },
  { name: 'Distributed Computing', category: techCategories.hpc, level: 'proficient' },
  { name: 'HPC', category: techCategories.hpc, level: 'experienced' },
  { name: 'Scientific Computing', category: techCategories.hpc, level: 'experienced' },
  { name: 'SLURM', category: techCategories.hpc, level: 'proficient' },

  // Testing & AI Quality
  { name: 'Pytest', category: techCategories.testing, level: 'experienced' },
  { name: 'Unit Testing', category: techCategories.testing, level: 'experienced' },
  { name: 'Integration Testing', category: techCategories.testing, level: 'experienced' },
  { name: 'API Testing', category: techCategories.testing, level: 'proficient' },
  { name: 'Load Testing', category: techCategories.testing, level: 'proficient' },
  { name: 'AI Evaluation', category: techCategories.testing, level: 'experienced' },
  { name: 'Observability', category: techCategories.testing, level: 'proficient' },
  { name: 'OWASP', category: techCategories.testing, level: 'familiar' },
];

export const projects: Project[] = [
  {
    id: '1',
    category: 'RAG & Knowledge',
    name: 'Enterprise RAG Knowledge Assistant',
    description: 'A production-ready RAG system for enterprise knowledge management',
    problem: 'Organizations struggle to efficiently access and utilize their vast knowledge bases across documents, databases, and internal systems.',
    architecture: 'Built a comprehensive RAG pipeline with document ingestion, chunking, embedding generation, vector storage, hybrid retrieval with reranking, and LLM-powered question answering.',
    technologies: ['LangChain', 'LangGraph', 'ChromaDB', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
    decisions: ['Chose ChromaDB for its flexibility and performance', 'Implemented hybrid search for better accuracy', 'Added query decomposition for complex questions'],
    results: 'Achieved 85% retrieval accuracy and reduced knowledge retrieval time by 70%',
  },
  {
    id: '2',
    category: 'Machine Learning',
    name: 'AI-Powered Prediction System',
    description: 'Machine learning system for predictive analytics and forecasting',
    problem: 'Businesses need accurate predictions for demand forecasting, customer behavior, and resource planning.',
    architecture: 'Developed an end-to-end ML pipeline with data preprocessing, feature engineering, model training, evaluation, and deployment with monitoring.',
    technologies: ['PyTorch', 'Scikit-learn', 'XGBoost', 'MLflow', 'FastAPI', 'Docker', 'Prometheus'],
    decisions: ['Used ensemble methods for improved accuracy', 'Implemented automated retraining pipeline', 'Added drift detection'],
  },
  {
    id: '3',
    category: 'Agentic AI',
    name: 'Intelligent Multi-Agent AI Platform',
    description: 'Multi-agent system for complex task automation and decision making',
    problem: 'Complex workflows require coordination between multiple AI agents with different capabilities.',
    architecture: 'Built a multi-agent framework using LangGraph with specialized agents for research, analysis, writing, and review tasks.',
    technologies: ['LangGraph', 'CrewAI', 'OpenAI', 'FastAPI', 'Redis', 'PostgreSQL'],
    decisions: ['Implemented agent communication protocols', 'Added human-in-the-loop for critical decisions', 'Created agent evaluation framework'],
  },
  {
    id: '4',
    category: 'Generative AI',
    name: 'Production-Ready LLM Application',
    description: 'Scalable LLM application with proper monitoring and guardrails',
    problem: 'Deploying LLMs to production requires careful attention to performance, cost, and safety.',
    architecture: 'Designed a production architecture with request batching, caching, rate limiting, prompt management, and comprehensive monitoring.',
    technologies: ['vLLM', 'OpenAI', 'FastAPI', 'Redis', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
    decisions: ['Used vLLM for efficient inference', 'Implemented semantic caching', 'Added comprehensive logging and tracing'],
  },
  {
    id: '5',
    category: 'High-Performance Computing',
    name: 'High-Performance GPU Computing System',
    description: 'Optimized GPU computing infrastructure for large-scale ML workloads',
    problem: 'Large-scale ML training and inference require efficient GPU resource utilization.',
    architecture: 'Built a GPU computing cluster with CUDA optimization, distributed training, and efficient memory management.',
    technologies: ['CUDA', 'PyTorch', 'Distributed Computing', 'SLURM', 'Docker', 'NVIDIA GPUs'],
    decisions: ['Implemented custom CUDA kernels', 'Used gradient checkpointing for memory efficiency', 'Optimized data loading pipeline'],
  },
  {
    id: '6',
    category: 'Machine Learning',
    name: 'Scientific Machine Learning Application',
    description: 'ML application for scientific computing and research',
    problem: 'Scientific problems require combining domain knowledge with ML techniques.',
    architecture: 'Developed physics-informed neural networks and scientific ML models for research applications.',
    technologies: ['PyTorch', 'NumPy', 'SciPy', 'CUDA', 'JAX', 'Scientific Computing'],
    decisions: ['Incorporated physical constraints into models', 'Used automatic differentiation', 'Implemented uncertainty quantification'],
  },
];

export const projectCategories: ProjectCategory[] = [
  'RAG & Knowledge',
  'Generative AI',
  'Agentic AI',
  'Machine Learning',
  'High-Performance Computing',
];

export const experiences: Experience[] = [
  {
    id: '1',
    organization: 'Tech Company',
    title: 'Senior AI Engineer',
    startDate: 'Jan 2022',
    endDate: 'Present',
    responsibilities: [
      'Lead AI/ML initiatives and architecture decisions',
      'Design and implement RAG systems and agentic AI solutions',
      'Mentor junior engineers and establish best practices',
      'Collaborate with cross-functional teams on AI product development',
    ],
    technologies: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Docker', 'AWS'],
    achievements: [
      'Deployed production RAG system serving 10K+ daily queries',
      'Reduced model inference costs by 40% through optimization',
      'Built multi-agent platform automating complex workflows',
    ],
  },
  {
    id: '2',
    organization: 'Previous Company',
    title: 'Software Engineer',
    startDate: 'Jun 2019',
    endDate: 'Dec 2021',
    responsibilities: [
      'Develop scalable backend services and APIs',
      'Implement ML models in production environments',
      'Design database schemas and data pipelines',
      'Participate in code reviews and architectural discussions',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn', 'Docker', 'CI/CD'],
    achievements: [
      'Built ML-powered recommendation system',
      'Improved API response times by 60%',
      'Established CI/CD pipeline for faster deployments',
    ],
  },
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Advanced Techniques in Retrieval-Augmented Generation',
    authors: 'Your Name, Co-authors',
    venue: 'Conference on AI Systems',
    date: '2024',
    doi: '10.1000/xyz123',
  },
  {
    id: '2',
    title: 'Multi-Agent Systems for Complex Task Automation',
    authors: 'Your Name, Co-authors',
    venue: 'Journal of Artificial Intelligence Research',
    date: '2023',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Production-Ready RAG Systems',
    excerpt: 'A comprehensive guide to architecting and deploying RAG applications at scale.',
    category: 'RAG Architecture',
    date: 'Jan 15, 2024',
    readTime: '12 min read',
    content: '',
  },
  {
    id: '2',
    title: 'Multi-Agent AI: Architecture and Best Practices',
    excerpt: 'Exploring multi-agent systems and how to design effective agent workflows.',
    category: 'Agentic AI',
    date: 'Jan 10, 2024',
    readTime: '10 min read',
    content: '',
  },
  {
    id: '3',
    title: 'Optimizing LLM Inference with vLLM',
    excerpt: 'Techniques for maximizing LLM performance and reducing inference costs.',
    category: 'LLM Engineering',
    date: 'Jan 5, 2024',
    readTime: '8 min read',
    content: '',
  },
  {
    id: '4',
    title: 'CUDA Programming for Deep Learning',
    excerpt: 'Introduction to GPU computing and CUDA optimization for ML workloads.',
    category: 'HPC and CUDA',
    date: 'Dec 20, 2023',
    readTime: '15 min read',
    content: '',
  },
];
