
import React from 'react';
import { usePortfolioData } from './DataProvider';

const Introduction = () => {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto">
              <img src={personalInfo.imageUrl} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
            <h2 className="text-2xl text-primary mb-6">{personalInfo.title}</h2>
            <p className="text-lg text-gray-600">{personalInfo.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
