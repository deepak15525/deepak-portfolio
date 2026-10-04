export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  from: string;
  to?: string;
  summary?: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  contact?: { email?: string; linkedin?: string; website?: string };
}
