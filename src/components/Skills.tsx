
import React from 'react';
import { usePortfolioData } from './DataProvider';
import { motion } from "framer-motion";
import { Database, Code, Table, BrainCircuit, FileSpreadsheet, BarChart, PieChart, Layers, MessageSquareText } from "lucide-react";

const Skills = () => {
  const { skills } = usePortfolioData();
  
  const getSkillIcon = (skill: string) => {
    const iconProps = { 
      className: "w-8 h-8 mb-2 text-purple-400 group-hover:text-white transition-colors",
      strokeWidth: 1.5
    };
    
    switch (skill.toLowerCase()) {
      case 'sql':
        return <Database {...iconProps} />;
      case 'python':
        return <Code {...iconProps} />;
      case 'pandas':
      case 'numpy':
        return <Table {...iconProps} />;
      case 'tensorflow':
        return <BrainCircuit {...iconProps} />;
      case 'excel':
        return <FileSpreadsheet {...iconProps} />;
      case 'power bi':
      case 'tableau':
        return <PieChart {...iconProps} />;
      case 'django':
        return <Layers {...iconProps} />;
      case 'nlp':
        return <MessageSquareText {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-center">
                {getSkillIcon(skill.name)}
                <h3 className="font-medium text-white">{skill.name}</h3>
                {skill.category && (
                  <span className="text-xs text-gray-400 mt-1">{skill.category}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
