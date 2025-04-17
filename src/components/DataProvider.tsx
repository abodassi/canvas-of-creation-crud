
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { PersonalInfo, Project, Experience, Testimonial, ContactInfo, Vision, Skill, Company } from '../types';
import { personalInfo as defaultPersonalInfo, projects as defaultProjects, experiences as defaultExperiences, testimonials as defaultTestimonials, contactInfo as defaultContactInfo, vision as defaultVision, skills as defaultSkills, companies as defaultCompanies } from '../data/portfolioData';

interface PortfolioDataContextType {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  testimonials: Testimonial[];
  contactInfo: ContactInfo;
  vision: Vision[];
  skills: Skill[];
  companies: Company[];
  updateData: (key: string, value: any) => void;
}

const PortfolioDataContext = createContext<PortfolioDataContextType>({
  personalInfo: defaultPersonalInfo,
  projects: defaultProjects,
  experiences: defaultExperiences,
  testimonials: defaultTestimonials,
  contactInfo: defaultContactInfo,
  vision: defaultVision,
  skills: defaultSkills,
  companies: defaultCompanies,
  updateData: () => {}
});

export const usePortfolioData = () => useContext(PortfolioDataContext);

// Setup a custom event for data updates
const DATA_UPDATED_EVENT = 'portfolio_data_updated';

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Omit<PortfolioDataContextType, 'updateData'>>({
    personalInfo: defaultPersonalInfo,
    projects: defaultProjects,
    experiences: defaultExperiences,
    testimonials: defaultTestimonials,
    contactInfo: defaultContactInfo,
    vision: defaultVision,
    skills: defaultSkills,
    companies: defaultCompanies
  });

  useEffect(() => {
    // Load data from localStorage if available
    const loadedPersonalInfo = localStorage.getItem('personalInfo');
    const loadedProjects = localStorage.getItem('projects');
    const loadedExperiences = localStorage.getItem('experiences');
    const loadedTestimonials = localStorage.getItem('testimonials');
    const loadedContactInfo = localStorage.getItem('contactInfo');
    const loadedVision = localStorage.getItem('vision');
    const loadedSkills = localStorage.getItem('skills');
    const loadedCompanies = localStorage.getItem('companies');

    setData({
      personalInfo: loadedPersonalInfo ? JSON.parse(loadedPersonalInfo) : defaultPersonalInfo,
      projects: loadedProjects ? JSON.parse(loadedProjects) : defaultProjects,
      experiences: loadedExperiences ? JSON.parse(loadedExperiences) : defaultExperiences,
      testimonials: loadedTestimonials ? JSON.parse(loadedTestimonials) : defaultTestimonials,
      contactInfo: loadedContactInfo ? JSON.parse(loadedContactInfo) : defaultContactInfo,
      vision: loadedVision ? JSON.parse(loadedVision) : defaultVision,
      skills: loadedSkills ? JSON.parse(loadedSkills) : defaultSkills,
      companies: loadedCompanies ? JSON.parse(loadedCompanies) : defaultCompanies
    });

    // Setup event listener for data updates from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && ['personalInfo', 'projects', 'experiences', 'testimonials', 'contactInfo', 'vision', 'skills', 'companies'].includes(e.key)) {
        if (e.newValue) {
          // Update the specific data that changed
          setData(prevData => ({
            ...prevData,
            [e.key!]: JSON.parse(e.newValue!)
          }));
        }
      }
    };

    // Listen for storage events (when localStorage changes in other tabs)
    window.addEventListener('storage', handleStorageChange);

    // Listen for custom data update events (when localStorage changes in the same tab)
    window.addEventListener(DATA_UPDATED_EVENT, (e: any) => {
      const { key, value } = e.detail;
      if (key && value) {
        setData(prevData => ({
          ...prevData,
          [key]: value
        }));
      }
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(DATA_UPDATED_EVENT, (e: any) => {});
    };
  }, []);

  // Function to update data and sync across tabs
  const updateData = (key: string, value: any) => {
    // Update localStorage
    localStorage.setItem(key, JSON.stringify(value));
    
    // Update local state
    setData(prevData => ({
      ...prevData,
      [key]: value
    }));
    
    // Dispatch a custom event for other components in the same tab
    window.dispatchEvent(new CustomEvent(DATA_UPDATED_EVENT, { 
      detail: { key, value } 
    }));
  };

  return (
    <PortfolioDataContext.Provider value={{ ...data, updateData }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};
