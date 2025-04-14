
import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import ExperienceSection from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { personalInfo, projects, experiences, testimonials, contactInfo } from '../data/portfolioData';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Introduction personalInfo={personalInfo} />
        <Projects projects={projects} />
        <ExperienceSection experiences={experiences} />
        <Testimonials testimonials={testimonials} />
        <Contact contactInfo={contactInfo} />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
