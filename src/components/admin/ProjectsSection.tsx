
import React, { useState } from 'react';
import { Project } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Manage your portfolio projects</CardDescription>
        </div>
        {!showAddProject && (
          <Button onClick={() => setShowAddProject(true)} size="sm">
            <Plus className="mr-1 h-4 w-4" /> Add Project
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {showAddProject && (
          <div className="mb-8 bg-gray-50 p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Add New Project</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-title">Title</Label>
                <Input 
                  id="new-title"
                  value={newProject.title} 
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="Project title" 
                />
              </div>
              <div>
                <Label htmlFor="new-description">Description</Label>
                <Textarea 
                  id="new-description"
                  value={newProject.description} 
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})} 
                  placeholder="Project description"
                />
              </div>
              <div>
                <Label htmlFor="new-url">Project URL</Label>
                <Input 
                  id="new-url"
                  value={newProject.projectUrl} 
                  onChange={(e) => setNewProject({...newProject, projectUrl: e.target.value})} 
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <Label htmlFor="new-image">Image URL</Label>
                <Input 
                  id="new-image"
                  value={newProject.imageUrl} 
                  onChange={(e) => setNewProject({...newProject, imageUrl: e.target.value})} 
                  placeholder="/placeholder.svg"
                />
              </div>
              <div>
                <Label htmlFor="new-technologies">Technologies (comma-separated)</Label>
                <Input 
                  id="new-technologies"
                  value={newProject.technologies.join(', ')} 
                  onChange={(e) => setNewProject({
                    ...newProject, 
                    technologies: e.target.value.split(',').map(tech => tech.trim()).filter(Boolean)
                  })} 
                  placeholder="React, TypeScript, Tailwind"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" onClick={() => setShowAddProject(false)}>Cancel</Button>
                <Button onClick={handleAddProject}>Add Project</Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {projectsData.map(project => (
            <div key={project.id} className="border rounded-lg overflow-hidden">
              {editingProject === project.id && tempProject ? (
                <div className="p-4 space-y-4">
                  <div>
                    <Label htmlFor={`title-${project.id}`}>Title</Label>
                    <Input 
                      id={`title-${project.id}`}
                      value={tempProject.title} 
                      onChange={(e) => setTempProject({...tempProject, title: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${project.id}`}>Description</Label>
                    <Textarea 
                      id={`description-${project.id}`}
                      value={tempProject.description} 
                      onChange={(e) => setTempProject({...tempProject, description: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`url-${project.id}`}>Project URL</Label>
                    <Input 
                      id={`url-${project.id}`}
                      value={tempProject.projectUrl}
                      onChange={(e) => setTempProject({...tempProject, projectUrl: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`image-${project.id}`}>Image URL</Label>
                    <Input 
                      id={`image-${project.id}`}
                      value={tempProject.imageUrl} 
                      onChange={(e) => setTempProject({...tempProject, imageUrl: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`technologies-${project.id}`}>Technologies (comma-separated)</Label>
                    <Input 
                      id={`technologies-${project.id}`}
                      value={tempProject.technologies.join(', ')} 
                      onChange={(e) => setTempProject({
                        ...tempProject, 
                        technologies: e.target.value.split(',').map(tech => tech.trim()).filter(Boolean)
                      })} 
                    />
                  </div>
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setEditingProject(null);
                        setTempProject(null);
                      }}
                    >
                      <X className="mr-1 h-4 w-4" /> Cancel
                    </Button>
                    <Button onClick={handleUpdateProject}>
                      <Save className="mr-1 h-4 w-4" /> Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium">{project.title}</h3>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditProject(project)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-4">
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        View Project
                      </a>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
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
