
import React, { useState, useEffect } from 'react';
import { usePortfolioData } from './DataProvider';
import { motion } from "framer-motion";
import { LightbulbIcon, GraduationCap, Linkedin } from 'lucide-react';

const Introduction = () => {
  const { personalInfo, vision, skills } = usePortfolioData();
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Abdelrahman Abuassi";
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const nameTimeout = setTimeout(() => {
      setIsComplete(false);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedName(fullName.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, 150); // Speed of typing animation
      
      return () => clearInterval(typingInterval);
    }, 500); // Delay before animation starts

    return () => clearTimeout(nameTimeout);
  }, []);

  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto">
              <img src={personalInfo.imageUrl} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.linkedin.com/in/abd-abuassi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 overflow-hidden relative">
              {displayedName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: index * 0.1,
                      duration: 0.3
                    }
                  }}
                  className="inline-block"
                  style={{ 
                    color: '#8B5CF6',
                    textShadow: '0 0 8px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {isComplete && (
                <motion.span 
                  className="absolute -bottom-6 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: '100%',
                    transition: { 
                      delay: 0.5,
                      duration: 0.8,
                      ease: "easeOut" 
                    }
                  }}
                />
              )}
            </h1>
            <h2 className="text-2xl text-primary mb-6">{personalInfo.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{personalInfo.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-600">
                  <LightbulbIcon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Vision</h3>
                </div>
                <ul className="space-y-2">
                  {vision.slice(0, 2).map((item) => (
                    <li key={item.id} className="text-gray-600">
                      • {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Top Skills</h3>
                </div>
                <ul className="space-y-2">
                  {skills
                    .filter(skill => skill.category === "General")
                    .slice(0, 3)
                    .map((skill) => (
                      <li key={skill.id} className="flex items-center justify-between text-gray-600">
                        <span>{skill.name}</span>
                        <span className="text-purple-600">{skill.proficiency}%</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
