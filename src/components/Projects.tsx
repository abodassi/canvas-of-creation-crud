
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from './DataProvider';
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const { projects } = usePortfolioData();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="h-full"
            >
              <Card className="overflow-hidden flex flex-col h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-80' : 'opacity-30'}`}></div>
                </div>
                <CardContent className="pt-6 flex-grow text-white">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-500/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-500 transition-colors">
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
