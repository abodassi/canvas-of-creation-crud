
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioData } from './DataProvider';

const Experience = () => {
  const { experiences } = usePortfolioData();

  return (
    <section 
      id="experience" 
      className="py-16 bg-gradient-to-br from-[#222222] to-[#000000e6]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Work Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((experience) => (
            <Card 
              key={experience.id} 
              className="border-l-4 border-l-primary bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                  <span className="text-gray-300">{experience.duration}</span>
                </div>
                <h4 className="text-primary text-lg mb-3">{experience.company}</h4>
                <p className="text-gray-200">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
