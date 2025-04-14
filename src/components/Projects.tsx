
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from './DataProvider';

const Projects = () => {
  const { projects } = usePortfolioData();

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
