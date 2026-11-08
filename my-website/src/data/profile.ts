import { Technology, Project, Experience, BlogPost } from '@/types';

export const profile = {
  name: 'Yared Asfaw',
  title: 'Senior AI Engineer | Software Engineer',
  tagline: 'Building Intelligent Systems. Engineering the Future.',
  bio: 'I architect, engineer, and deploy scalable AI solutions that transform complex challenges into intelligent products.',
  email: 'contact@example.com',
  linkedin: 'https://www.linkedin.com/in/yared-birhanu-442273363/',
  github: 'https://github.com/yourprofile',
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
    id: 'autism-prediction',
    name: 'Web-Based Autism Prediction System',
    description:
      'A web-based machine learning system supporting early autism screening for children in Ethiopia. It combines a guided Q-CHAT-10 questionnaire, instant risk prediction, explainable results, and referral support for clinicians.',
    technologies: ['Python', 'Pandas', 'NumPy', 'PyTorch', 'Pinecone', 'Django', 'Git'],
    image: '/media/projects/autism-prediction-dashboard.jpeg',
    status: 'completed',
    featured: true,
    github: 'https://github.com/Yaredo48/-Web-Based-Autism-Prediction-System-',
  },
  {
    id: 'professional-medical-chatbot',
    name: 'Professional Medical Chatbot',
    description:
      'A Retrieval-Augmented Generation (RAG) medical chatbot built with LLMs, LangChain, Pinecone, and Django. It answers health questions from indexed medical documents, cites its sources, and gives administrators tools to manage the knowledge base and monitor usage.',
    technologies: ['Python', 'Large Language Models (LLMs)', 'LangChain', 'Pinecone', 'Django', 'Git'],
    image: '/media/projects/medical-chatbot-dashboard.jpeg',
    status: 'completed',
    featured: true,
    github: 'https://github.com/Yaredo48/Medical-Chatbot-With-LLMs-Langchain-Pinecone-Django',
  },
  {
    id: 'casesum-ai',
    name: 'CaseSum AI – AI-Powered Medical Case Summarization System',
    description:
      'CaseSum AI explores Artificial Intelligence, Machine Learning, and Natural Language Processing (NLP) to simplify medical information processing, extract essential clinical insights, and support more efficient healthcare workflows.',
    technologies: ['Python', 'Pandas', 'PyTorch', 'Pinecone', 'NumPy', 'TensorFlow', 'Git', 'Django'],
    image: '/media/projects/casesum-ai-dashboard.jpeg',
    status: 'completed',
    featured: true,
    github: 'https://github.com/Yaredo48/Smart-Patient-Case-Summarizer',
  },
  {
    id: 'advanced-rag-platform',
    name: 'Enterprise-Grade Advanced RAG Platform',
    description:
      'A multi-format knowledge platform concept for comparing hybrid retrieval and reranking strategies, evaluating answer quality, and returning source-grounded citations.',
    technologies: ['Python', 'LangChain', 'PostgreSQL', 'Pinecone', 'RAGAS', 'FastAPI', 'Docker'],
    image: '/media/projects/advanced-rag-concept.svg',
    status: 'planned',
    featured: false,
  },
  {
    id: 'multi-agent-research-assistant',
    name: 'Multi-Agent Research Assistant',
    description:
      'An agentic research workflow concept for source discovery, evidence analysis, and concise synthesis, with stateful orchestration, tool use, and human review checkpoints.',
    technologies: ['Python', 'LangGraph', 'LLMs', 'Tool calling', 'Human review', 'FastAPI'],
    image: '/media/projects/multi-agent-research-concept.svg',
    status: 'planned',
    featured: false,
  },
  {
    id: 'document-intelligence',
    name: 'AI-Powered Document Intelligence',
    description:
      'A document-processing service concept for OCR, classification, and structured extraction from complex files, with field validation, review of uncertain results, and semantic search.',
    technologies: ['Python', 'OCR', 'PyTorch', 'Pydantic', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: '/media/projects/document-intelligence-concept.svg',
    status: 'planned',
    featured: false,
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Platform',
    description:
      'A support workflow concept combining knowledge-grounded responses with ticket classification, intelligent routing, human escalation, and operational analytics.',
    technologies: ['Python', 'LLMs', 'RAG', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Redis'],
    image: '/media/projects/customer-support-concept.svg',
    status: 'planned',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 'insa-system-software-engineer',
    organization: 'Information Network Security Administration (INSA)',
    title: 'Senior System Software Engineer',
    startDate: 'September 2025',
    endDate: 'Present',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Engineering the foundation of innovation by designing, optimizing, and building powerful system software that makes technology faster, smarter, and more reliable.',
    responsibilities: [],
    technologies: ['System Software', 'Software Engineering'],
  },
  {
    id: 'insa-hpc-engineer',
    organization: 'Information Network Security Administration (INSA)',
    title: 'High-Performance Computing Engineer and Researcher',
    startDate: '2024',
    endDate: '2025',
    location: 'Addis Ababa, Ethiopia',
    description: 'Researching and developing High-Performance Computing (HPC) solutions.',
    responsibilities: [
      'Research and develop High-Performance Computing solutions.',
      'Work with parallel and distributed computing and scientific computing.',
      'Explore AI, machine learning, and emerging technologies for practical applications.',
      'Work with Linux-based environments and HPC infrastructure.',
    ],
    technologies: ['HPC', 'Parallel Computing', 'Distributed Computing', 'Scientific Computing', 'Linux', 'AI/ML'],
  },
  {
    id: 'innovation-python-full-stack',
    organization: 'Innovation Incubation Center of Germany',
    title: 'Python Full-Stack Developer',
    startDate: 'September 2024',
    endDate: '2025',
    location: 'Cologne, Germany',
    employmentType: 'Remote',
    description:
      'Contributed to Python full-stack software development in a remote working environment, with a focus on building software applications across backend and frontend development.',
    responsibilities: [],
    technologies: ['Python', 'Full-Stack Development', 'Backend Development', 'Frontend Development'],
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
