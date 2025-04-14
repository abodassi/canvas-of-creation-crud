
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { PersonalInfo, Project, Experience, Testimonial, ContactInfo } from '../types';
import { personalInfo as defaultPersonalInfo, projects as defaultProjects, experiences as defaultExperiences, testimonials as defaultTestimonials, contactInfo as defaultContactInfo } from '../data/portfolioData';

interface PortfolioDataContextType {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  testimonials: Testimonial[];
  contactInfo: ContactInfo;
}

const PortfolioDataContext = createContext<PortfolioDataContextType>({
  personalInfo: defaultPersonalInfo,
  projects: defaultProjects,
  experiences: defaultExperiences,
  testimonials: defaultTestimonials,
  contactInfo: defaultContactInfo
});

export const usePortfolioData = () => useContext(PortfolioDataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PortfolioDataContextType>({
    personalInfo: defaultPersonalInfo,
    projects: defaultProjects,
    experiences: defaultExperiences,
    testimonials: defaultTestimonials,
    contactInfo: defaultContactInfo
  });

  useEffect(() => {
    // Load data from localStorage if available
    const loadedPersonalInfo = localStorage.getItem('personalInfo');
    const loadedProjects = localStorage.getItem('projects');
    const loadedExperiences = localStorage.getItem('experiences');
    const loadedTestimonials = localStorage.getItem('testimonials');
    const loadedContactInfo = localStorage.getItem('contactInfo');

    setData({
      personalInfo: loadedPersonalInfo ? JSON.parse(loadedPersonalInfo) : defaultPersonalInfo,
      projects: loadedProjects ? JSON.parse(loadedProjects) : defaultProjects,
      experiences: loadedExperiences ? JSON.parse(loadedExperiences) : defaultExperiences,
      testimonials: loadedTestimonials ? JSON.parse(loadedTestimonials) : defaultTestimonials,
      contactInfo: loadedContactInfo ? JSON.parse(loadedContactInfo) : defaultContactInfo
    });
  }, []);

  return (
    <PortfolioDataContext.Provider value={data}>
      {children}
    </PortfolioDataContext.Provider>
  );
};
