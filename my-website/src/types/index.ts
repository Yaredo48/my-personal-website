export interface Technology {
  name: string;
  category: string;
  level: 'experienced' | 'proficient' | 'familiar' | 'learning';
  logo?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  architecture: string;
  technologies: string[];
  decisions: string[];
  results?: string;
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  id: string;
  organization: string;
  title: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  doi?: string;
  url?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}
