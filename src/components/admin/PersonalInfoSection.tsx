
import React, { useState } from 'react';
import { PersonalInfo } from '../../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import ImageUpload from './ImageUpload';

interface PersonalInfoSectionProps {
  personalData: PersonalInfo;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const PersonalInfoSection = ({ personalData, setPersonalData }: PersonalInfoSectionProps) => {
  const { toast } = useToast();
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [tempPersonalData, setTempPersonalData] = useState<PersonalInfo>(personalData);
  
  const handleSavePersonal = () => {
    setPersonalData(tempPersonalData);
    setEditingPersonal(false);
    toast({
      title: "Personal Info updated",
      description: "Your personal information has been updated successfully."
    });
  };

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Personal Information</CardTitle>
        <CardDescription className="text-gray-400">Update your personal details and profile picture</CardDescription>
      </CardHeader>
      <CardContent className="text-gray-300">
        {editingPersonal ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Full Name</Label>
              <Input 
                id="name"
                value={tempPersonalData.name} 
                onChange={(e) => setTempPersonalData({...tempPersonalData, name: e.target.value})} 
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="title" className="text-gray-300">Professional Title</Label>
              <Input 
                id="title"
                value={tempPersonalData.title} 
                onChange={(e) => setTempPersonalData({...tempPersonalData, title: e.target.value})} 
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="bio" className="text-gray-300">Bio</Label>
              <Textarea 
                id="bio"
                value={tempPersonalData.bio} 
                onChange={(e) => setTempPersonalData({...tempPersonalData, bio: e.target.value})} 
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <ImageUpload
              currentImageUrl={tempPersonalData.imageUrl}
              onImageChange={(newImageUrl) => setTempPersonalData({...tempPersonalData, imageUrl: newImageUrl})}
              label="Profile Image"
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700 border-2 border-purple-500">
                <img src={personalData.imageUrl} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{personalData.name}</h3>
                <p className="text-lg text-gray-300">{personalData.title}</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-200">Bio</h4>
              <p className="text-gray-300">{personalData.bio}</p>
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
            }} className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Cancel
            </Button>
            <Button onClick={handleSavePersonal} className="bg-purple-600 hover:bg-purple-500">Save Changes</Button>
          </div>
        ) : (
          <Button onClick={() => setEditingPersonal(true)} className="bg-purple-600 hover:bg-purple-500">Edit Information</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PersonalInfoSection;
