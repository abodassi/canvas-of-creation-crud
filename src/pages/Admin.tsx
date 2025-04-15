import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { Trash2, Edit, Plus, Save, X, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { personalInfo as defaultPersonalInfo, projects as defaultProjects, experiences as defaultExperiences, 
         testimonials as defaultTestimonials, contactInfo as defaultContactInfo, vision as defaultVision,
         skills as defaultSkills, companies as defaultCompanies } from '../data/portfolioData';
import { PersonalInfo, Project, Experience, Testimonial, ContactInfo, Vision, Skill, Company } from '../types';

const Admin = () => {
  const { toast } = useToast();
  // Initialize state from localStorage or default data
  const [personalData, setPersonalData] = useState<PersonalInfo>(() => {
    const saved = localStorage.getItem('personalInfo');
    return saved ? JSON.parse(saved) : defaultPersonalInfo;
  });
  
  const [projectsData, setProjectsData] = useState<Project[]>(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : defaultProjects;
  });
  
  const [experiencesData, setExperiencesData] = useState<Experience[]>(() => {
    const saved = localStorage.getItem('experiences');
    return saved ? JSON.parse(saved) : defaultExperiences;
  });
  
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : defaultTestimonials;
  });
  
  const [contactData, setContactData] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('contactInfo');
    return saved ? JSON.parse(saved) : defaultContactInfo;
  });
  
  const [visionData, setVisionData] = useState<Vision[]>(() => {
    const saved = localStorage.getItem('vision');
    return saved ? JSON.parse(saved) : defaultVision;
  });
  
  const [skillsData, setSkillsData] = useState<Skill[]>(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : defaultSkills;
  });
  
  const [companiesData, setCompaniesData] = useState<Company[]>(() => {
    const saved = localStorage.getItem('companies');
    return saved ? JSON.parse(saved) : defaultCompanies;
  });
  
  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('personalInfo', JSON.stringify(personalData));
  }, [personalData]);
  
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectsData));
  }, [projectsData]);
  
  useEffect(() => {
    localStorage.setItem('experiences', JSON.stringify(experiencesData));
  }, [experiencesData]);
  
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonialsData));
  }, [testimonialsData]);
  
  useEffect(() => {
    localStorage.setItem('contactInfo', JSON.stringify(contactData));
  }, [contactData]);
  
  useEffect(() => {
    localStorage.setItem('vision', JSON.stringify(visionData));
  }, [visionData]);
  
  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skillsData));
  }, [skillsData]);
  
  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companiesData));
  }, [companiesData]);
  
  // Personal Info editing
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [tempPersonalData, setTempPersonalData] = useState<PersonalInfo>(personalData);
  
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
  const [tempContactData, setTempContactData] = useState<ContactInfo>(contactData);
  
  // Vision editing
  const [editingVision, setEditingVision] = useState<string | null>(null);
  const [tempVision, setTempVision] = useState<Vision | null>(null);
  const [showAddVision, setShowAddVision] = useState(false);
  const [newVision, setNewVision] = useState<Vision>({
    id: '',
    title: '',
    description: '',
    imageUrl: '/placeholder.svg'
  });

  // Skills editing
  const [editingSkill, setEditingSkill] = useState<string | null>(null);
  const [tempSkill, setTempSkill] = useState<Skill | null>(null);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState<Skill>({
    id: '',
    name: '',
    proficiency: 50,
    category: ''
  });

  // Companies editing
  const [editingCompany, setEditingCompany] = useState<string | null>(null);
  const [tempCompany, setTempCompany] = useState<Company | null>(null);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [newCompany, setNewCompany] = useState<Company>({
    id: '',
    name: '',
    description: '',
    logoUrl: '/placeholder.svg',
    website: ''
  });

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
  
  // Vision handlers
  const handleAddVision = () => {
    const visionWithId = { ...newVision, id: generateId() };
    setVisionData([...visionData, visionWithId]);
    setShowAddVision(false);
    setNewVision({
      id: '',
      title: '',
      description: '',
      imageUrl: '/placeholder.svg'
    });
    toast({
      title: "Vision added",
      description: "Your new vision has been added successfully."
    });
  };

  const handleEditVision = (vision: Vision) => {
    setEditingVision(vision.id);
    setTempVision({ ...vision });
  };

  const handleUpdateVision = () => {
    if (!tempVision) return;
    setVisionData(visionData.map(v => v.id === tempVision.id ? tempVision : v));
    setEditingVision(null);
    setTempVision(null);
    toast({
      title: "Vision updated",
      description: "Your vision has been updated successfully."
    });
  };

  const handleDeleteVision = (id: string) => {
    setVisionData(visionData.filter(v => v.id !== id));
    toast({
      title: "Vision deleted",
      description: "Your vision has been deleted successfully."
    });
  };

  // Skill handlers
  const handleAddSkill = () => {
    const skillWithId = { ...newSkill, id: generateId() };
    setSkillsData([...skillsData, skillWithId]);
    setShowAddSkill(false);
    setNewSkill({
      id: '',
      name: '',
      proficiency: 50,
      category: ''
    });
    toast({
      title: "Skill added",
      description: "Your new skill has been added successfully."
    });
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill.id);
    setTempSkill({ ...skill });
  };

  const handleUpdateSkill = () => {
    if (!tempSkill) return;
    setSkillsData(skillsData.map(s => s.id === tempSkill.id ? tempSkill : s));
    setEditingSkill(null);
    setTempSkill(null);
    toast({
      title: "Skill updated",
      description: "Your skill has been updated successfully."
    });
  };

  const handleDeleteSkill = (id: string) => {
    setSkillsData(skillsData.filter(s => s.id !== id));
    toast({
      title: "Skill deleted",
      description: "Your skill has been deleted successfully."
    });
  };

  // Company handlers
  const handleAddCompany = () => {
    const companyWithId = { ...newCompany, id: generateId() };
    setCompaniesData([...companiesData, companyWithId]);
    setShowAddCompany(false);
    setNewCompany({
      id: '',
      name: '',
      description: '',
      logoUrl: '/placeholder.svg',
      website: ''
    });
    toast({
      title: "Company added",
      description: "Your new company has been added successfully."
    });
  };

  const handleEditCompany = (company: Company) => {
    setEditingCompany(company.id);
    setTempCompany({ ...company });
  };

  const handleUpdateCompany = () => {
    if (!tempCompany) return;
    setCompaniesData(companiesData.map(c => c.id === tempCompany.id ? tempCompany : c));
    setEditingCompany(null);
    setTempCompany(null);
    toast({
      title: "Company updated",
      description: "Your company has been updated successfully."
    });
  };

  const handleDeleteCompany = (id: string) => {
    setCompaniesData(companiesData.filter(c => c.id !== id));
    toast({
      title: "Company deleted",
      description: "Your company has been deleted successfully."
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
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="companies">Companies</TabsTrigger>
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
            
            {/* Vision Tab */}
            <TabsContent value="vision">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Vision</CardTitle>
                    <CardDescription>Manage your vision statements</CardDescription>
                  </div>
                  {!showAddVision && (
                    <Button onClick={() => setShowAddVision(true)} size="sm">
                      <Plus className="mr-1 h-4 w-4" /> Add Vision
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  {showAddVision && (
                    <div className="mb-8 bg-gray-50 p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Add New Vision</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="new-vision-title">Title</Label>
                          <Input 
                            id="new-vision-title"
                            value={newVision.title} 
                            onChange={(e) => setNewVision({...newVision, title: e.target.value})}
                            placeholder="Vision title" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-vision-description">Description</Label>
                          <Textarea 
                            id="new-vision-description"
                            value={newVision.description} 
                            onChange={(e) => setNewVision({...newVision, description: e.target.value})} 
                            placeholder="Vision description"
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <Button variant="outline" onClick={() => setShowAddVision(false)}>Cancel</Button>
                          <Button onClick={handleAddVision}>Add Vision</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {visionData.map(vision => (
                      <div key={vision.id} className="border rounded-lg p-4">
                        {editingVision === vision.id && tempVision ? (
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`title-${vision.id}`}>Title</Label>
                              <Input 
                                id={`title-${vision.id}`}
                                value={tempVision.title} 
                                onChange={(e) => setTempVision({...tempVision, title: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`description-${vision.id}`}>Description</Label>
                              <Textarea 
                                id={`description-${vision.id}`}
                                value={tempVision.description} 
                                onChange={(e) => setTempVision({...tempVision, description: e.target.value})} 
                              />
                            </div>
                            <div className="flex justify-end space-x-2 pt-2">
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setEditingVision(null);
                                  setTempVision(null);
                                }}
                              >
                                <X className="mr-1 h-4 w-4" /> Cancel
                              </Button>
                              <Button onClick={handleUpdateVision}>
                                <Save className="mr-1 h-4 w-4" /> Save
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-medium">{vision.title}</h3>
                              </div>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleEditVision(vision)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleDeleteVision(vision.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <p className="mt-2 text-gray-600">{vision.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                    {visionData.length === 0 && (
                      <p className="text-center py-8 text-gray-500">No vision statements added yet.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Skills Tab */}
            <TabsContent value="skills">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>Manage your professional skills</CardDescription>
                  </div>
                  {!showAddSkill && (
                    <Button onClick={() => setShowAddSkill(true)} size="sm">
                      <Plus className="mr-1 h-4 w-4" /> Add Skill
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  {showAddSkill && (
                    <div className="mb-8 bg-gray-50 p-4 border rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Add New Skill</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="new-skill-name">Skill Name</Label>
                          <Input 
                            id="new-skill-name"
                            value={newSkill.name} 
                            onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                            placeholder="e.g., Python, SQL, etc." 
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-skill-category">Category</Label>
                          <Input 
                            id="new-skill-category"
                            value={newSkill.category || ''} 
                            onChange={(e) => setNewSkill({...newSkill, category: e.target.value})} 
                            placeholder="e.g., Programming, Database, etc."
                          />
                        </div>
                        <div>
                          <Label htmlFor="new-skill-proficiency">
                            Proficiency: {newSkill.proficiency}%
                          </Label>
                          <Input 
                            id="new-skill-proficiency"
                            type="range"
                            min="0"
                            max="100"
                            value={newSkill.proficiency} 
                            onChange={(e) => setNewSkill({...newSkill, proficiency: parseInt(e.target.value)})} 
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <Button variant="outline" onClick={() => setShowAddSkill(false)}>Cancel</Button>
                          <Button onClick={handleAddSkill}>Add Skill</Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {skillsData.map(skill => (
                      <div key={skill.id} className="border rounded-lg p-4">
                        {editingSkill === skill.id && tempSkill ? (
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor={`name-${skill.id}`}>Skill Name</Label>
                              <Input 
                                id={`name-${skill.id}`}
                                value={tempSkill.name} 
                                onChange={(e) => setTempSkill({...tempSkill, name: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`category-${skill.id}`}>Category</Label>
                              <Input 
                                id={`category-${skill.id}`}
                                value={tempSkill.category || ''} 
                                onChange={(e) => setTempSkill({...tempSkill, category: e.target.value})} 
                              />
                            </div>
                            <div>
                              <Label htmlFor={`proficiency-${skill.id}`}>
                                Proficiency: {tempSkill.proficiency}%
                              </Label>
                              <Input 
                                id={`proficiency-${skill.id}`}
                                type="range"
                                min="0"
                                max="100"
                                value={tempSkill.proficiency} 
                                onChange={(e) => setTempSkill({...tempSkill, proficiency: parseInt(e.target.value)})} 
                              />
                            </div>
                            <div className="flex justify-end space-x-2 pt-2">
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setEditingSkill(null);
                                  setTempSkill(null);
                                }}
                              >
                                <X className="mr-1 h-4 w-4" /> Cancel
                              </Button>
                              <Button onClick={handleUpdateSkill}>
                                <Save className="mr-1 h-4 w-4" /> Save
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-medium">{skill.name}</h3>
                                {skill.category && <p className="text-sm text-gray-500">{skill.category}</p>}
                              </div>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleEditSkill(skill)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleDeleteSkill(skill.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="flex justify-between text-sm">
                                <span>Proficiency</span>
                                <span>{skill.proficiency}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ width: `${skill.proficiency}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    {skillsData.length === 0 && (
                      <p className="text-center py-8 text-gray-500">No skills added yet.</p>
                    )}
                  </div>
                </CardContent>
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
