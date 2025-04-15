
import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Vision from '../components/Vision';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ExperienceSection from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { usePortfolioData } from '../components/DataProvider';

const Index = () => {
  const { personalInfo } = usePortfolioData();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header />
      <main>
        <Introduction />
        <Vision />
        <Skills />
        <Projects />
        <ExperienceSection />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-black bg-opacity-70 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
