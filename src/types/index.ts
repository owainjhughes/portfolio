export interface Skill {
  src: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  site?: string;
  github: string;
}