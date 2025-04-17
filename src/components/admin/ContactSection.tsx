
import React, { useState } from 'react';
import { ContactInfo } from '../../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

interface ContactSectionProps {
  contactData: ContactInfo;
  setContactData: React.Dispatch<React.SetStateAction<ContactInfo>>;
}

const ContactSection = ({ contactData, setContactData }: ContactSectionProps) => {
  const { toast } = useToast();
  const [editingContact, setEditingContact] = useState(false);
  const [tempContactData, setTempContactData] = useState<ContactInfo>(contactData);

  const handleSaveContact = () => {
    setContactData(tempContactData);
    setEditingContact(false);
    toast({
      title: "Contact Info updated",
      description: "Your contact information has been updated successfully."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Update your contact details and social media links</CardDescription>
      </CardHeader>
      <CardContent>
        {editingContact ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                value={tempContactData.email} 
                onChange={(e) => setTempContactData({...tempContactData, email: e.target.value})} 
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone"
                value={tempContactData.phone} 
                onChange={(e) => setTempContactData({...tempContactData, phone: e.target.value})} 
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location"
                value={tempContactData.location} 
                onChange={(e) => setTempContactData({...tempContactData, location: e.target.value})} 
                placeholder="City, State"
              />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input 
                id="linkedin"
                value={tempContactData.linkedin || ''} 
                onChange={(e) => setTempContactData({...tempContactData, linkedin: e.target.value})} 
                placeholder="https://linkedin.com/in/yourusername"
              />
            </div>
            <div>
              <Label htmlFor="github">GitHub URL</Label>
              <Input 
                id="github"
                value={tempContactData.github || ''} 
                onChange={(e) => setTempContactData({...tempContactData, github: e.target.value})} 
                placeholder="https://github.com/yourusername"
              />
            </div>
            <div>
              <Label htmlFor="twitter">Twitter URL</Label>
              <Input 
                id="twitter"
                value={tempContactData.twitter || ''} 
                onChange={(e) => setTempContactData({...tempContactData, twitter: e.target.value})} 
                placeholder="https://twitter.com/yourusername"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>{contactData.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>{contactData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{contactData.location}</span>
            </div>
            {contactData.linkedin && (
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            )}
            {contactData.github && (
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub Profile
                </a>
              </div>
            )}
            {contactData.twitter && (
              <div className="flex items-center gap-3">
                <Twitter className="h-5 w-5 text-primary" />
                <a href={contactData.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Twitter Profile
                </a>
              </div>
            )}
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
          <Button onClick={() => setEditingContact(true)}>Edit Information</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ContactSection;
