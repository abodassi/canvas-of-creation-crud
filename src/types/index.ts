
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Vision {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-100
  category?: string;
}

export interface Company {
  id: string;
  name: string;
  description?: string;
  logoUrl: string;
  website?: string;
}
