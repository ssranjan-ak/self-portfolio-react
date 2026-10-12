export type Tab = 'about' | 'contact' | 'loupe';

export interface Experience {
  company: string;
  subtext: string;
  location: string;
  role: string;
  duration: string;
  current: boolean;
  skills: string[];
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}
