
import React, { useState } from 'react';
import { Vision } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

interface VisionSectionProps {
  visionData: Vision[];
  setVisionData: React.Dispatch<React.SetStateAction<Vision[]>>;
  generateId: () => string;
}

const VisionSection = ({ visionData, setVisionData, generateId }: VisionSectionProps) => {
  const { toast } = useToast();
  const [editingVision, setEditingVision] = useState<string | null>(null);
  const [tempVision, setTempVision] = useState<Vision | null>(null);
  const [showAddVision, setShowAddVision] = useState(false);
  const [newVision, setNewVision] = useState<Vision>({
    id: '',
    title: '',
    description: '',
    imageUrl: '/placeholder.svg'
  });

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

  return (
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
  );
};

export default VisionSection;
