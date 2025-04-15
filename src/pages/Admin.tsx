
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';
import { personalInfo as defaultPersonalInfo, projects as defaultProjects, experiences as defaultExperiences, 
         testimonials as defaultTestimonials, contactInfo as defaultContactInfo, vision as defaultVision,
         skills as defaultSkills } from '../data/portfolioData';
import { PersonalInfo, Project, Experience, Testimonial, ContactInfo, Vision, Skill } from '../types';

// Import refactored components
import PersonalInfoSection from '../components/admin/PersonalInfoSection';
import VisionSection from '../components/admin/VisionSection';
import SkillsSection from '../components/admin/SkillsSection';
import ProjectsSection from '../components/admin/ProjectsSection';
import ExperienceSection from '../components/admin/ExperienceSection';
import TestimonialsSection from '../components/admin/TestimonialsSection';
import ContactSection from '../components/admin/ContactSection';

const Admin = () => {
  // Initialize state from localStorage or default data
  const [personalData, setPersonalData] = useState<PersonalInfo>(() => {
    const saved = localStorage.getItem('personalInfo');
    return saved ? JSON.parse(saved) : defaultPersonalInfo;
  });
  
  const [projectsData, setProjectsData] = useState<Project[]>(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : defaultProjects;
  });
  
  const [experiencesData, setExperiencesData] = useState<Experience[]>(() => {
    const saved = localStorage.getItem('experiences');
    return saved ? JSON.parse(saved) : defaultExperiences;
  });
  
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : defaultTestimonials;
  });
  
  const [contactData, setContactData] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('contactInfo');
    return saved ? JSON.parse(saved) : defaultContactInfo;
  });
  
  const [visionData, setVisionData] = useState<Vision[]>(() => {
    const saved = localStorage.getItem('vision');
    return saved ? JSON.parse(saved) : defaultVision;
  });
  
  const [skillsData, setSkillsData] = useState<Skill[]>(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : defaultSkills;
  });
  
  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('personalInfo', JSON.stringify(personalData));
  }, [personalData]);
  
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectsData));
  }, [projectsData]);
  
  useEffect(() => {
    localStorage.setItem('experiences', JSON.stringify(experiencesData));
  }, [experiencesData]);
  
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonialsData));
  }, [testimonialsData]);
  
  useEffect(() => {
    localStorage.setItem('contactInfo', JSON.stringify(contactData));
  }, [contactData]);
  
  useEffect(() => {
    localStorage.setItem('vision', JSON.stringify(visionData));
  }, [visionData]);
  
  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skillsData));
  }, [skillsData]);

  // Helper functions
  const generateId = () => Math.random().toString(36).substring(2, 9);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white">Portfolio Admin</h1>
          
          <Tabs defaultValue="personal">
            <TabsList className="mb-6 bg-gray-800 border border-gray-700">
              <TabsTrigger value="personal" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Personal Info</TabsTrigger>
              <TabsTrigger value="vision" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Vision</TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Skills</TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Projects</TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Experience</TabsTrigger>
              <TabsTrigger value="testimonials" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Testimonials</TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-gray-700 text-gray-300 data-[state=active]:text-white">Contact</TabsTrigger>
            </TabsList>
            
            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <PersonalInfoSection 
                personalData={personalData} 
                setPersonalData={setPersonalData} 
              />
            </TabsContent>
            
            {/* Vision Tab */}
            <TabsContent value="vision">
              <VisionSection 
                visionData={visionData} 
                setVisionData={setVisionData} 
                generateId={generateId} 
              />
            </TabsContent>
            
            {/* Skills Tab */}
            <TabsContent value="skills">
              <SkillsSection 
                skillsData={skillsData} 
                setSkillsData={setSkillsData} 
                generateId={generateId} 
              />
            </TabsContent>
            
            {/* Projects Tab */}
            <TabsContent value="projects">
              <ProjectsSection 
                projectsData={projectsData} 
                setProjectsData={setProjectsData} 
                generateId={generateId} 
              />
            </TabsContent>
            
            {/* Experience Tab */}
            <TabsContent value="experience">
              <ExperienceSection 
                experiencesData={experiencesData} 
                setExperiencesData={setExperiencesData} 
                generateId={generateId} 
              />
            </TabsContent>
            
            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <TestimonialsSection 
                testimonialsData={testimonialsData} 
                setTestimonialsData={setTestimonialsData} 
                generateId={generateId} 
              />
            </TabsContent>
            
            {/* Contact Tab */}
            <TabsContent value="contact">
              <ContactSection 
                contactData={contactData} 
                setContactData={setContactData} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
