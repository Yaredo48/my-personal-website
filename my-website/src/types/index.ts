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
  technologies: string[];
  image: string;
  status: 'completed' | 'planned';
  featured: boolean;
  github?: string;
  demo?: string;
}

export interface Experience {
  id: string;
  organization: string;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  employmentType?: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  achievements?: string[];
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
