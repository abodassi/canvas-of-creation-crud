
import React, { useState } from 'react';
import { PersonalInfo } from '../../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

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
  );
};

export default PersonalInfoSection;
