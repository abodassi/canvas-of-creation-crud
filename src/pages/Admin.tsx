import React, { useState } from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { Trash2, Edit, Plus, Save, X, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { personalInfo, projects, experiences, testimonials, contactInfo } from '../data/portfolioData';
import { PersonalInfo, Project, Experience, Testimonial, ContactInfo } from '../types';

const Admin = () => {
  const { toast } = useToast();
  const [personalData, setPersonalData] = useState<PersonalInfo>(personalInfo);
  const [projectsData, setProjectsData] = useState<Project[]>(projects);
  const [experiencesData, setExperiencesData] = useState<Experience[]>(experiences);
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(testimonials);
  const [contactData, setContactData] = useState<ContactInfo>(contactInfo);
  
  // Personal Info editing
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [tempPersonalData, setTempPersonalData] = useState<PersonalInfo>(personalInfo);
  
  // Project editing
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

  // Experience editing
  const [editingExperience, setEditingExperience] = useState<string | null>(null);
  const [tempExperience, setTempExperience] = useState<Experience | null>(null);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [newExperience, setNewExperience] = useState<Experience>({
    id: '',
    company: '',
    position: '',
    duration: '',
    description: ''
  });

  // Testimonial editing
  const [editingTestimonial, setEditingTestimonial] = useState<string | null>(null);
  const [tempTestimonial, setTempTestimonial] = useState<Testimonial | null>(null);
  const [showAddTestimonial, setShowAddTestimonial] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({
    id: '',
    name: '',
    position: '',
    company: '',
    quote: '',
    imageUrl: '/placeholder.svg'
  });

  // Contact Info editing
  const [editingContact, setEditingContact] = useState(false);
  const [tempContactData, setTempContactData] = useState<ContactInfo>(contactInfo);

  // Helper functions
  const generateId = () => Math.random().toString(36).substring(2, 9);
  
  // Personal Info handlers
  const handleSavePersonal = () => {
    setPersonalData(tempPersonalData);
    setEditingPersonal(false);
    toast({
      title: "Personal Info updated",
      description: "Your personal information has been updated successfully."
    });
  };

  // Project handlers
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

  // Experience handlers
  const handleAddExperience = () => {
    const experienceWithId = { ...newExperience, id: generateId() };
    setExperiencesData([...experiencesData, experienceWithId]);
    setShowAddExperience(false);
    setNewExperience({
      id: '',
      company: '',
      position: '',
      duration: '',
      description: ''
    });
    toast({
      title: "Experience added",
      description: "Your new experience has been added successfully."
    });
  };

  const handleEditExperience = (experience: Experience) => {
    setEditingExperience(experience.id);
    setTempExperience({ ...experience });
  };

  const handleUpdateExperience = () => {
    if (!tempExperience) return;
    setExperiencesData(experiencesData.map(e => e.id === tempExperience.id ? tempExperience : e));
    setEditingExperience(null);
    setTempExperience(null);
    toast({
      title: "Experience updated",
      description: "Your experience has been updated successfully."
    });
  };

  const handleDeleteExperience = (id: string) => {
    setExperiencesData(experiencesData.filter(e => e.id !== id));
    toast({
      title: "Experience deleted",
      description: "Your experience has been deleted successfully."
    });
  };

  // Testimonial handlers
  const handleAddTestimonial = () => {
    const testimonialWithId = { ...newTestimonial, id: generateId() };
    setTestimonialsData([...testimonialsData, testimonialWithId]);
    setShowAddTestimonial(false);
    setNewTestimonial({
      id: '',
      name: '',
      position: '',
      company: '',
      quote: '',
      imageUrl: '/placeholder.svg'
    });
    toast({
      title: "Testimonial added",
      description: "Your new testimonial has been added successfully."
    });
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial.id);
    setTempTestimonial({ ...testimonial });
  };

  const handleUpdateTestimonial = () => {
    if (!tempTestimonial) return;
    setTestimonialsData(testimonialsData.map(t => t.id === tempTestimonial.id ? tempTestimonial : t));
    setEditingTestimonial(null);
    setTempTestimonial(null);
    toast({
      title: "Testimonial updated",
      description: "Your testimonial has been updated successfully."
    });
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonialsData(testimonialsData.filter(t => t.id !== id));
    toast({
      title: "Testimonial deleted",
      description: "Your testimonial has been deleted successfully."
    });
  };

  // Contact Info handlers
  const handleSaveContact = () => {
    setContactData(tempContactData);
    setEditingContact(false);
    toast({
      title: "Contact Info updated",
      description: "Your contact information has been updated successfully."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Portfolio Admin</h1>
          
          <Tabs defaultValue="personal">
            <TabsList className="mb-6">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            {/* Personal Info Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and profile picture</CardDescription>
                </CardHeader>
                <CardContent>
                  {editingPersonal ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name"
                          value={tempPersonalData.name} 
                          onChange={(e) => setTempPersonalData({...tempPersonalData, name: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Professional Title</Label>
                        <Input 
                          id="title"
                          value={tempPersonalData.title} 
                          onChange={(e) => setTempPersonalData({...tempPersonalData, title: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio"
                          value={tempPersonalData.bio} 
                          onChange={(e) => setTempPersonalData({...tempPersonalData, bio: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="image">Profile Image URL</Label>
                        <Input 
                          id="image"
                          value={tempPersonalData.imageUrl} 
                          onChange={(e) => setTempPersonalData({...tempPersonalData, imageUrl: e.target.value})} 
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                          <img src={personalData.imageUrl} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{personalData.name}</h3>
                          <p className="text-lg text-gray-700">{personalData.title}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Bio</h4>
                        <p className="text-gray-700">{personalData.bio}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-end">
                  {editingPersonal ? (
                    <div className="space-x-2">
                      <Button variant="outline" onClick={() => {
                        setEditingPersonal(false);
                        setTempPersonalData(personalData);
                      }}>
                        Cancel
                      </Button>
                      <Button onClick={handleSavePersonal}>Save Changes</Button>
                    </div>
                  ) : (
                    <Button onClick={() => setEditingPersonal(true)}>Edit Information</Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Projects Tab */}
            <TabsContent value="projects">
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
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 h-40 bg-gray-100">
                              <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:w-2/3">
                              <div className="flex justify-between items-start">
                                <h3 className="text-lg font-medium">{project.title}</h3>
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
                              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
                              <div className="mt-2">
                                <a 
                                  href={project.projectUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-sm text-primary hover:underline"
                                >
                                  {project.projectUrl}
                                </a>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {project.technologies.map((tech, index) => (
                                  <span 
                                    key={index} 
                                    className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full"
                                  >
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
            </TabsContent>
            
            {/* Experience Tab */}
            <TabsContent value="experience">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Work Experience</CardTitle>
                    <CardDescription>Manage your work history</CardDescription>
                  </div>
                  {!showAddExperience && (
                    <Button onClick={() => setShowAddExperience(true)} size="sm">
                      <Plus className="mr-1 h-4 w-4" /> Add Experience
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  {showAddExperience && (
                    <div className="mb-8 bg-gray-50 p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Add New Experience</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="new-company">Company</Label>
                          <Input 
                            id="new-company"
                            value={newExperience.company} 
                            onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
                            placeholder="Company name" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-position">Position</Label>
                          <Input 
                            id="new-position"
                            value={newExperience.position} 
                            onChange={(e) => setNewExperience({...newExperience, position: e.target.value})} 
                            placeholder="Your job title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-duration">Duration</Label>
                          <Input 
                            id="new-duration"
                            value={newExperience.duration} 
                            onChange={(e) => setNewExperience({...newExperience, duration: e.target.value})} 
                            placeholder="2020 - Present"
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-exp-description">Description</Label>
                          <Textarea 
                            id="new-exp-description"
                            value={newExperience.description} 
                            onChange={(e) => setNewExperience({...newExperience, description: e.target.value})} 
                            placeholder="Describe your responsibilities and achievements"
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <Button variant="outline" onClick={() => setShowAddExperience(false)}>Cancel</Button>
                          <Button onClick={handleAddExperience}>Add Experience</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {experiencesData.map(experience => (
                      <div key={experience.id} className="border rounded-lg p-4">
                        {editingExperience === experience.id && tempExperience ? (
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`company-${experience.id}`}>Company</Label>
                              <Input 
                                id={`company-${experience.id}`}
                                value={tempExperience.company} 
                                onChange={(e) => setTempExperience({...tempExperience, company: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`position-${experience.id}`}>Position</Label>
                              <Input 
                                id={`position-${experience.id}`}
                                value={tempExperience.position} 
                                onChange={(e) => setTempExperience({...tempExperience, position: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`duration-${experience.id}`}>Duration</Label>
                              <Input 
                                id={`duration-${experience.id}`}
                                value={tempExperience.duration} 
                                onChange={(e) => setTempExperience({...tempExperience, duration: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`description-${experience.id}`}>Description</Label>
                              <Textarea 
                                id={`description-${experience.id}`}
                                value={tempExperience.description} 
                                onChange={(e) => setTempExperience({...tempExperience, description: e.target.value})} 
                              />
                            </div>
                            <div className="flex justify-end space-x-2 pt-2">
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setEditingExperience(null);
                                  setTempExperience(null);
                                }}
                              >
                                <X className="mr-1 h-4 w-4" /> Cancel
                              </Button>
                              <Button onClick={handleUpdateExperience}>
                                <Save className="mr-1 h-4 w-4" /> Save
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-medium">{experience.position}</h3>
                                <p className="text-gray-700">{experience.company}</p>
                                <p className="text-sm text-gray-500">{experience.duration}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleEditExperience(experience)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleDeleteExperience(experience.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <p className="mt-3 text-gray-600">{experience.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                    {experiencesData.length === 0 && (
                      <p className="text-center py-8 text-gray-500">No work experience added yet.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Testimonials</CardTitle>
                    <CardDescription>Manage testimonials from colleagues and clients</CardDescription>
                  </div>
                  {!showAddTestimonial && (
                    <Button onClick={() => setShowAddTestimonial(true)} size="sm">
                      <Plus className="mr-1 h-4 w-4" /> Add Testimonial
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  {showAddTestimonial && (
                    <div className="mb-8 bg-gray-50 p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Add New Testimonial</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="new-name">Name</Label>
                          <Input 
                            id="new-name"
                            value={newTestimonial.name} 
                            onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                            placeholder="Person's name" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-position">Position</Label>
                          <Input 
                            id="new-position"
                            value={newTestimonial.position} 
                            onChange={(e) => setNewTestimonial({...newTestimonial, position: e.target.value})} 
                            placeholder="Their job title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-company">Company</Label>
                          <Input 
                            id="new-company"
                            value={newTestimonial.company} 
                            onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})} 
                            placeholder="Their company"
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-quote">Quote</Label>
                          <Textarea 
                            id="new-quote"
                            value={newTestimonial.quote} 
                            onChange={(e) => setNewTestimonial({...newTestimonial, quote: e.target.value})} 
                            placeholder="Their testimonial about you"
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-image">Image URL</Label>
                          <Input 
                            id="new-image"
                            value={newTestimonial.imageUrl} 
                            onChange={(e) => setNewTestimonial({...newTestimonial, imageUrl: e.target.value})} 
                            placeholder="/placeholder.svg"
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <Button variant="outline" onClick={() => setShowAddTestimonial(false)}>Cancel</Button>
                          <Button onClick={handleAddTestimonial}>Add Testimonial</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {testimonialsData.map(testimonial => (
                      <div key={testimonial.id} className="border rounded-lg p-4">
                        {editingTestimonial === testimonial.id && tempTestimonial ? (
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`name-${testimonial.id}`}>Name</Label>
                              <Input 
                                id={`name-${testimonial.id}`}
                                value={tempTestimonial.name} 
                                onChange={(e) => setTempTestimonial({...tempTestimonial, name: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`position-${testimonial.id}`}>Position</Label>
                              <Input 
                                id={`position-${testimonial.id}`}
                                value={tempTestimonial.position} 
                                onChange={(e) => setTempTestimonial({...tempTestimonial, position: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`company-${testimonial.id}`}>Company</Label>
                              <Input 
                                id={`company-${testimonial.id}`}
                                value={tempTestimonial.company} 
                                onChange={(e) => setTempTestimonial({...tempTestimonial, company: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`quote-${testimonial.id}`}>Quote</Label>
                              <Textarea 
                                id={`quote-${testimonial.id}`}
                                value={tempTestimonial.quote} 
                                onChange={(e) => setTempTestimonial({...tempTestimonial, quote: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`image-${testimonial.id}`}>Image URL</Label>
                              <Input 
                                id={`image-${testimonial.id}`}
                                value={tempTestimonial.imageUrl} 
                                onChange={(e) => setTempTestimonial({...tempTestimonial, imageUrl: e.target.value})} 
                              />
                            </div>
                            <div className="flex justify-end space-x-2 pt-2">
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setEditingTestimonial(null);
                                  setTempTestimonial(null);
                                }}
                              >
                                <X className="mr-1 h-4 w-4" /> Cancel
                              </Button>
                              <Button onClick={handleUpdateTestimonial}>
                                <Save className="mr-1 h-4 w-4" /> Save
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-start justify-between">
                              <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 mr-4">
                                  <img 
                                    src={testimonial.imageUrl} 
                                    alt={testimonial.name} 
                                    className="w-full h-full object-cover" 
                                  />
                                </div>
                                <div>
                                  <h3 className="font-medium">{testimonial.name}</h3>
                                  <p className="text-sm text-gray-500">
                                    {testimonial.position}, {testimonial.company}
                                  </p>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleEditTestimonial(testimonial)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <blockquote className="mt-3 italic text-gray-600">"{testimonial.quote}"</blockquote>
                          </div>
                        )}
                      </div>
                    ))}
                    {testimonialsData.length === 0 && (
                      <p className="text-center py-8 text-gray-500">No testimonials added yet.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Contact Tab */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Update your contact details</CardDescription>
                </CardHeader>
                <CardContent>
                  {editingContact ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={tempContactData.email} 
                          onChange={(e) => setTempContactData({...tempContactData, email: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone"
                          value={tempContactData.phone} 
                          onChange={(e) => setTempContactData({...tempContactData, phone: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location"
                          value={tempContactData.location} 
                          onChange={(e) => setTempContactData({...tempContactData, location: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                        <Input 
                          id="linkedin"
                          value={tempContactData.linkedin || ''} 
                          onChange={(e) => setTempContactData({...tempContactData, linkedin: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub URL</Label>
                        <Input 
                          id="github"
                          value={tempContactData.github || ''} 
                          onChange={(e) => setTempContactData({...tempContactData, github: e.target.value})} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter">Twitter URL</Label>
                        <Input 
                          id="twitter"
                          value={tempContactData.twitter || ''} 
                          onChange={(e) => setTempContactData({...tempContactData, twitter: e.target.value})} 
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{contactData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{contactData.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{contactData.location}</p>
                        </div>
                      </div>
                      <div className="pt-4">
                        <p className="text-sm text-gray-500 mb-3">Social Media</p>
                        <div className="flex space-x-4">
                          {contactData.linkedin && (
                            <a 
                              href={contactData.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-primary transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {contactData.github && (
                            <a 
                              href={contactData.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-primary transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {contactData.twitter && (
                            <a 
                              href={contactData.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-primary transition-colors"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-end">
                  {editingContact ? (
                    <div className="space-x-2">
                      <Button variant="outline" onClick={() => {
                        setEditingContact(false);
                        setTempContactData(contactData);
                      }}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveContact}>Save Changes</Button>
                    </div>
                  ) : (
                    <Button onClick={() => setEditingContact(true)}>Edit Contact Info</Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
