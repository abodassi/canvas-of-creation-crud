
import React from 'react';
import { usePortfolioData } from './DataProvider';

const Companies = () => {
  const { companies } = usePortfolioData();

  return (
    <section id="companies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Companies I've Worked With</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center mb-4">
                <img 
                  src={company.logoUrl} 
                  alt={company.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-center">{company.name}</h3>
              {company.description && (
                <p className="text-sm text-center text-gray-600 mt-1">{company.description}</p>
              )}
              {company.website && (
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-primary hover:underline mt-1"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
