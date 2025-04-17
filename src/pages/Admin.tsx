
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { personalInfo as defaultPersonalInfo, projects as defaultProjects, experiences as defaultExperiences, 
         testimonials as defaultTestimonials, contactInfo as defaultContactInfo, vision as defaultVision,
         skills as defaultSkills } from '../data/portfolioData';
import { PersonalInfo, Project, Experience, Testimonial, ContactInfo, Vision, Skill } from '../types';
import { usePortfolioData } from '../components/DataProvider';

// Import refactored components
import PersonalInfoSection from '../components/admin/PersonalInfoSection';
import VisionSection from '../components/admin/VisionSection';
import SkillsSection from '../components/admin/SkillsSection';
import ProjectsSection from '../components/admin/ProjectsSection';
import ExperienceSection from '../components/admin/ExperienceSection';
import TestimonialsSection from '../components/admin/TestimonialsSection';
import ContactSection from '../components/admin/ContactSection';

const Admin = () => {
  const { 
    personalInfo: dataPersonalInfo, 
    projects: dataProjects, 
    experiences: dataExperiences, 
    testimonials: dataTestimonials, 
    contactInfo: dataContactInfo, 
    vision: dataVision, 
    skills: dataSkills,
    updateData 
  } = usePortfolioData();

  // Initialize state from context data
  const [personalData, setPersonalData] = useState<PersonalInfo>(dataPersonalInfo);
  const [projectsData, setProjectsData] = useState<Project[]>(dataProjects);
  const [experiencesData, setExperiencesData] = useState<Experience[]>(dataExperiences);
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(dataTestimonials);
  const [contactData, setContactData] = useState<ContactInfo>(dataContactInfo);
  const [visionData, setVisionData] = useState<Vision[]>(dataVision);
  const [skillsData, setSkillsData] = useState<Skill[]>(dataSkills);

  // Update context data when local state changes
  useEffect(() => {
    updateData('personalInfo', personalData);
  }, [personalData, updateData]);
  
  useEffect(() => {
    updateData('projects', projectsData);
  }, [projectsData, updateData]);
  
  useEffect(() => {
    updateData('experiences', experiencesData);
  }, [experiencesData, updateData]);
  
  useEffect(() => {
    updateData('testimonials', testimonialsData);
  }, [testimonialsData, updateData]);
  
  useEffect(() => {
    updateData('contactInfo', contactData);
  }, [contactData, updateData]);
  
  useEffect(() => {
    updateData('vision', visionData);
  }, [visionData, updateData]);
  
  useEffect(() => {
    updateData('skills', skillsData);
  }, [skillsData, updateData]);

  // Update local state when context data changes
  useEffect(() => {
    setPersonalData(dataPersonalInfo);
  }, [dataPersonalInfo]);
  
  useEffect(() => {
    setProjectsData(dataProjects);
  }, [dataProjects]);
  
  useEffect(() => {
    setExperiencesData(dataExperiences);
  }, [dataExperiences]);
  
  useEffect(() => {
    setTestimonialsData(dataTestimonials);
  }, [dataTestimonials]);
  
  useEffect(() => {
    setContactData(dataContactInfo);
  }, [dataContactInfo]);
  
  useEffect(() => {
    setVisionData(dataVision);
  }, [dataVision]);
  
  useEffect(() => {
    setSkillsData(dataSkills);
  }, [dataSkills]);

  // Helper functions
  const generateId = () => Math.random().toString(36).substring(2, 9);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Portfolio Admin</h1>
          
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
