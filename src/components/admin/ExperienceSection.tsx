
import React, { useState } from 'react';
import { Experience } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

interface ExperienceSectionProps {
  experiencesData: Experience[];
  setExperiencesData: React.Dispatch<React.SetStateAction<Experience[]>>;
  generateId: () => string;
}

const ExperienceSection = ({ experiencesData, setExperiencesData, generateId }: ExperienceSectionProps) => {
  const { toast } = useToast();
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

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Experience</CardTitle>
          <CardDescription>Manage your work experiences</CardDescription>
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
                  placeholder="Job title"
                />
              </div>
              <div>
                <Label htmlFor="new-duration">Duration</Label>
                <Input 
                  id="new-duration"
                  value={newExperience.duration} 
                  onChange={(e) => setNewExperience({...newExperience, duration: e.target.value})} 
                  placeholder="e.g. 2018 - 2020"
                />
              </div>
              <div>
                <Label htmlFor="new-exp-description">Description</Label>
                <Textarea 
                  id="new-exp-description"
                  value={newExperience.description} 
                  onChange={(e) => setNewExperience({...newExperience, description: e.target.value})} 
                  placeholder="Job description"
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
                      <h3 className="text-lg font-medium">{experience.company}</h3>
                      <p className="text-gray-600">{experience.position}</p>
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
                  <p className="mt-2 text-gray-600">{experience.description}</p>
                </div>
              )}
            </div>
          ))}
          {experiencesData.length === 0 && (
            <p className="text-center py-8 text-gray-500">No experiences added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
