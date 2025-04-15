
import React, { useState } from 'react';
import { Skill } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

interface SkillsSectionProps {
  skillsData: Skill[];
  setSkillsData: React.Dispatch<React.SetStateAction<Skill[]>>;
  generateId: () => string;
}

const SkillsSection = ({ skillsData, setSkillsData, generateId }: SkillsSectionProps) => {
  const { toast } = useToast();
  const [editingSkill, setEditingSkill] = useState<string | null>(null);
  const [tempSkill, setTempSkill] = useState<Skill | null>(null);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState<Skill>({
    id: '',
    name: '',
    proficiency: 50,
    category: ''
  });

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
  
  return (
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
  );
};

export default SkillsSection;
