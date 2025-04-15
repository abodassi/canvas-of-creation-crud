
import React from 'react';
import { usePortfolioData } from './DataProvider';
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const { skills } = usePortfolioData();
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
