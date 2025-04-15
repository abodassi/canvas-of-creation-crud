
import React, { useState } from 'react';
import { Vision } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X, Image } from 'lucide-react';
import ImageUpload from './ImageUpload';

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
    <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">Vision</CardTitle>
          <CardDescription className="text-gray-400">Manage your vision statements</CardDescription>
        </div>
        {!showAddVision && (
          <Button onClick={() => setShowAddVision(true)} size="sm" className="bg-purple-600 hover:bg-purple-500">
            <Plus className="mr-1 h-4 w-4" /> Add Vision
          </Button>
        )}
      </CardHeader>
      <CardContent className="text-gray-300">
        {showAddVision && (
          <div className="mb-8 bg-gray-800 p-4 border border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-white">Add New Vision</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-vision-title" className="text-gray-300">Title</Label>
                <Input 
                  id="new-vision-title"
                  value={newVision.title} 
                  onChange={(e) => setNewVision({...newVision, title: e.target.value})}
                  placeholder="Vision title" 
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="new-vision-description" className="text-gray-300">Description</Label>
                <Textarea 
                  id="new-vision-description"
                  value={newVision.description} 
                  onChange={(e) => setNewVision({...newVision, description: e.target.value})} 
                  placeholder="Vision description"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <ImageUpload
                currentImageUrl={newVision.imageUrl || '/placeholder.svg'}
                onImageChange={(newImageUrl) => setNewVision({...newVision, imageUrl: newImageUrl})}
                label="Vision Image"
              />
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" onClick={() => setShowAddVision(false)} className="border-gray-600 text-gray-300 hover:bg-gray-700">Cancel</Button>
                <Button onClick={handleAddVision} className="bg-purple-600 hover:bg-purple-500">Add Vision</Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {visionData.map(vision => (
            <div key={vision.id} className="border border-gray-700 rounded-lg p-4 bg-gray-800">
              {editingVision === vision.id && tempVision ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`title-${vision.id}`} className="text-gray-300">Title</Label>
                    <Input 
                      id={`title-${vision.id}`}
                      value={tempVision.title} 
                      onChange={(e) => setTempVision({...tempVision, title: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${vision.id}`} className="text-gray-300">Description</Label>
                    <Textarea 
                      id={`description-${vision.id}`}
                      value={tempVision.description} 
                      onChange={(e) => setTempVision({...tempVision, description: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <ImageUpload
                    currentImageUrl={tempVision.imageUrl || '/placeholder.svg'}
                    onImageChange={(newImageUrl) => setTempVision({...tempVision, imageUrl: newImageUrl})}
                    label="Vision Image"
                  />
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setEditingVision(null);
                        setTempVision(null);
                      }}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <X className="mr-1 h-4 w-4" /> Cancel
                    </Button>
                    <Button onClick={handleUpdateVision} className="bg-purple-600 hover:bg-purple-500">
                      <Save className="mr-1 h-4 w-4" /> Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      {vision.imageUrl && vision.imageUrl !== '/placeholder.svg' ? (
                        <div className="w-16 h-16 rounded overflow-hidden bg-gray-700 border border-gray-600">
                          <img 
                            src={vision.imageUrl} 
                            alt={vision.title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center rounded bg-gray-700 border border-gray-600">
                          <Image className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-white">{vision.title}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditVision(vision)}
                        className="text-gray-300 hover:bg-gray-700"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteVision(vision.id)}
                        className="text-red-500 hover:text-red-400 hover:bg-gray-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-300">{vision.description}</p>
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
