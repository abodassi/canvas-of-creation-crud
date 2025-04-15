
import { Project, Experience, Testimonial, ContactInfo, PersonalInfo, Vision, Skill, Company } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  bio: "Passionate full stack developer with over 5 years of experience creating beautiful, responsive web applications. Specialized in React, Node.js, and modern web technologies.",
  imageUrl: "/placeholder.svg"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with payment integration, user authentication, and inventory management.",
    imageUrl: "/placeholder.svg",
    projectUrl: "https://example.com/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "An intuitive task management application with real-time updates, team collaboration features, and progress tracking.",
    imageUrl: "/placeholder.svg",
    projectUrl: "https://example.com/taskapp",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "3",
    title: "Health & Fitness Tracker",
    description: "A comprehensive health and fitness tracking application with personalized recommendations and progress visualization.",
    imageUrl: "/placeholder.svg",
    projectUrl: "https://example.com/fitness",
    technologies: ["React Native", "Express", "PostgreSQL", "Chart.js"]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovations Inc.",
    position: "Senior Developer",
    duration: "2021 - Present",
    description: "Lead developer for the company's flagship product, managing a team of 5 developers and implementing major feature enhancements."
  },
  {
    id: "2",
    company: "Digital Solutions Ltd.",
    position: "Web Developer",
    duration: "2018 - 2021",
    description: "Developed and maintained multiple client websites, implemented responsive designs, and improved site performance."
  },
  {
    id: "3",
    company: "StartUp Ventures",
    position: "Junior Developer",
    duration: "2016 - 2018",
    description: "Contributed to front-end development for various startup projects, gained experience with modern JavaScript frameworks."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Williams",
    position: "Project Manager",
    company: "Tech Innovations Inc.",
    quote: "Alex consistently delivers high-quality work ahead of schedule. Their attention to detail and problem-solving skills make them an invaluable team member.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Solutions Ltd.",
    quote: "Working with Alex was a pleasure. They quickly understand complex requirements and transform them into elegant, efficient solutions.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    position: "CEO",
    company: "StartUp Ventures",
    quote: "Alex's contributions were key to our successful product launch. Their technical expertise and dedication to quality set them apart.",
    imageUrl: "/placeholder.svg"
  }
];

export const contactInfo: ContactInfo = {
  email: "alex@example.com",
  phone: "(123) 456-7890",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnson",
  twitter: "https://twitter.com/alexjohnson"
};

export const vision: Vision[] = [
  {
    id: "1",
    title: "Data-Driven Decision Making",
    description: "I believe in transforming raw data into actionable insights that drive strategic business decisions. My vision is to help organizations leverage the power of data science to uncover hidden patterns and create competitive advantages."
  },
  {
    id: "2",
    title: "Ethical AI Development",
    description: "I am committed to developing AI solutions that are transparent, fair, and respectful of privacy. My goal is to create systems that amplify human capabilities while maintaining strong ethical standards."
  },
  {
    id: "3",
    title: "Democratizing Data Science",
    description: "I envision a future where data science tools and knowledge are accessible to everyone. By creating user-friendly solutions and sharing knowledge, I aim to empower individuals across all levels of technical expertise."
  }
];

export const skills: Skill[] = [
  { id: "1", name: "SQL", proficiency: 90, category: "Database" },
  { id: "2", name: "Python", proficiency: 95, category: "Programming" },
  { id: "3", name: "pandas", proficiency: 85, category: "Data Analysis" },
  { id: "4", name: "numpy", proficiency: 80, category: "Data Analysis" },
  { id: "5", name: "TensorFlow", proficiency: 75, category: "Machine Learning" },
  { id: "6", name: "Excel", proficiency: 90, category: "Business Tools" },
  { id: "7", name: "Power BI", proficiency: 85, category: "Visualization" },
  { id: "8", name: "Tableau", proficiency: 80, category: "Visualization" },
  { id: "9", name: "Django", proficiency: 70, category: "Web Development" },
  { id: "10", name: "NLP", proficiency: 65, category: "Machine Learning" }
];

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    description: "A leading technology corporation specializing in cloud solutions.",
    logoUrl: "/placeholder.svg",
    website: "https://example.com/techcorp"
  },
  {
    id: "2",
    name: "DataInsights",
    description: "Innovative data analytics company focused on business intelligence.",
    logoUrl: "/placeholder.svg",
    website: "https://example.com/datainsights"
  },
  {
    id: "3",
    name: "AI Solutions",
    description: "Pioneering artificial intelligence solutions for enterprise clients.",
    logoUrl: "/placeholder.svg",
    website: "https://example.com/aisolutions"
  }
];
