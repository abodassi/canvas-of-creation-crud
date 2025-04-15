
import React, { useState } from 'react';
import { Project } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface ProjectsSectionProps {
  projectsData: Project[];
  setProjectsData: React.Dispatch<React.SetStateAction<Project[]>>;
  generateId: () => string;
}

const ProjectsSection = ({ projectsData, setProjectsData, generateId }: ProjectsSectionProps) => {
  const { toast } = useToast();
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [tempProject, setTempProject] = useState<Project | null>(null);
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState<Project>({
    id: '',
    title: '',
    description: '',
    imageUrl: '/placeholder.svg',
    projectUrl: '',
    technologies: []
  });

  const handleAddProject = () => {
    const projectWithId = { ...newProject, id: generateId() };
    setProjectsData([...projectsData, projectWithId]);
    setShowAddProject(false);
    setNewProject({
      id: '',
      title: '',
      description: '',
      imageUrl: '/placeholder.svg',
      projectUrl: '',
      technologies: []
    });
    toast({
      title: "Project added",
      description: "Your new project has been added successfully."
    });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project.id);
    setTempProject({ ...project });
  };

  const handleUpdateProject = () => {
    if (!tempProject) return;
    setProjectsData(projectsData.map(p => p.id === tempProject.id ? tempProject : p));
    setEditingProject(null);
    setTempProject(null);
    toast({
      title: "Project updated",
      description: "Your project has been updated successfully."
    });
  };

  const handleDeleteProject = (id: string) => {
    setProjectsData(projectsData.filter(p => p.id !== id));
    toast({
      title: "Project deleted",
      description: "Your project has been deleted successfully."
    });
  };

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">Projects</CardTitle>
          <CardDescription className="text-gray-400">Manage your portfolio projects</CardDescription>
        </div>
        {!showAddProject && (
          <Button onClick={() => setShowAddProject(true)} size="sm" className="bg-purple-600 hover:bg-purple-500">
            <Plus className="mr-1 h-4 w-4" /> Add Project
          </Button>
        )}
      </CardHeader>
      <CardContent className="text-gray-300">
        {showAddProject && (
          <div className="mb-8 bg-gray-800 p-4 border border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-white">Add New Project</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-title" className="text-gray-300">Title</Label>
                <Input 
                  id="new-title"
                  value={newProject.title} 
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="Project title" 
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="new-description" className="text-gray-300">Description</Label>
                <Textarea 
                  id="new-description"
                  value={newProject.description} 
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})} 
                  placeholder="Project description"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="new-url" className="text-gray-300">Project URL</Label>
                <Input 
                  id="new-url"
                  value={newProject.projectUrl} 
                  onChange={(e) => setNewProject({...newProject, projectUrl: e.target.value})} 
                  placeholder="https://example.com"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <ImageUpload
                currentImageUrl={newProject.imageUrl}
                onImageChange={(newImageUrl) => setNewProject({...newProject, imageUrl: newImageUrl})}
                label="Project Image"
              />
              <div>
                <Label htmlFor="new-technologies" className="text-gray-300">Technologies (comma-separated)</Label>
                <Input 
                  id="new-technologies"
                  value={newProject.technologies.join(', ')} 
                  onChange={(e) => setNewProject({
                    ...newProject, 
                    technologies: e.target.value.split(',').map(tech => tech.trim()).filter(Boolean)
                  })} 
                  placeholder="React, TypeScript, Tailwind"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" onClick={() => setShowAddProject(false)} className="border-gray-600 text-gray-300 hover:bg-gray-700">Cancel</Button>
                <Button onClick={handleAddProject} className="bg-purple-600 hover:bg-purple-500">Add Project</Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {projectsData.map(project => (
            <div key={project.id} className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
              {editingProject === project.id && tempProject ? (
                <div className="p-4 space-y-4">
                  <div>
                    <Label htmlFor={`title-${project.id}`} className="text-gray-300">Title</Label>
                    <Input 
                      id={`title-${project.id}`}
                      value={tempProject.title} 
                      onChange={(e) => setTempProject({...tempProject, title: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${project.id}`} className="text-gray-300">Description</Label>
                    <Textarea 
                      id={`description-${project.id}`}
                      value={tempProject.description} 
                      onChange={(e) => setTempProject({...tempProject, description: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`url-${project.id}`} className="text-gray-300">Project URL</Label>
                    <Input 
                      id={`url-${project.id}`}
                      value={tempProject.projectUrl}
                      onChange={(e) => setTempProject({...tempProject, projectUrl: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <ImageUpload
                    currentImageUrl={tempProject.imageUrl}
                    onImageChange={(newImageUrl) => setTempProject({...tempProject, imageUrl: newImageUrl})}
                    label="Project Image"
                  />
                  <div>
                    <Label htmlFor={`technologies-${project.id}`} className="text-gray-300">Technologies (comma-separated)</Label>
                    <Input 
                      id={`technologies-${project.id}`}
                      value={tempProject.technologies.join(', ')} 
                      onChange={(e) => setTempProject({
                        ...tempProject, 
                        technologies: e.target.value.split(',').map(tech => tech.trim()).filter(Boolean)
                      })} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setEditingProject(null);
                        setTempProject(null);
                      }}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <X className="mr-1 h-4 w-4" /> Cancel
                    </Button>
                    <Button onClick={handleUpdateProject} className="bg-purple-600 hover:bg-purple-500">
                      <Save className="mr-1 h-4 w-4" /> Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start gap-4 p-4">
                    {project.imageUrl && project.imageUrl !== '/placeholder.svg' && (
                      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-700 border border-gray-600">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-white">{project.title}</h3>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleEditProject(project)}
                            className="text-gray-300 hover:bg-gray-700"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteProject(project.id)}
                            className="text-red-500 hover:text-red-400 hover:bg-gray-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-300">{project.description}</p>
                      <div className="mt-3">
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                          {project.projectUrl}
                        </a>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300 border border-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {projectsData.length === 0 && (
            <p className="text-center py-8 text-gray-500">No projects added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
