
import React from 'react';
import { Experience } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and roles I've had over the years.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`relative pl-8 ${index !== experiences.length - 1 ? 'pb-12' : ''}`}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-3.5 top-6 bottom-0 w-px bg-primary/30"></div>
              )}
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>
              <div className="mb-2">
                <span className="text-sm font-medium text-primary">{experience.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
              <p className="text-lg font-medium text-gray-700">{experience.company}</p>
              <p className="mt-3 text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
