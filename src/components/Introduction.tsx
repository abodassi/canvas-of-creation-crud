
import React from 'react';
import { PersonalInfo } from '../types';

interface IntroductionProps {
  personalInfo: PersonalInfo;
}

const Introduction: React.FC<IntroductionProps> = ({ personalInfo }) => {
  return (
    <section id="introduction" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-full aspect-square shadow-xl border-2 border-primary/20">
              <img 
                src={personalInfo.imageUrl} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Hi, I'm {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary/50"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white text-primary border border-primary font-medium rounded-md hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-primary/50"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
