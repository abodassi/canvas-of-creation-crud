
import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface TestimonialsSectionProps {
  testimonialsData: Testimonial[];
  setTestimonialsData: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  generateId: () => string;
}

const TestimonialsSection = ({ testimonialsData, setTestimonialsData, generateId }: TestimonialsSectionProps) => {
  const { toast } = useToast();
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

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">Testimonials</CardTitle>
          <CardDescription className="text-gray-400">Manage testimonials from clients and colleagues</CardDescription>
        </div>
        {!showAddTestimonial && (
          <Button onClick={() => setShowAddTestimonial(true)} size="sm" className="bg-purple-600 hover:bg-purple-500">
            <Plus className="mr-1 h-4 w-4" /> Add Testimonial
          </Button>
        )}
      </CardHeader>
      <CardContent className="text-gray-300">
        {showAddTestimonial && (
          <div className="mb-8 bg-gray-800 p-4 border border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-white">Add New Testimonial</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-name" className="text-gray-300">Name</Label>
                <Input 
                  id="new-name"
                  value={newTestimonial.name} 
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                  placeholder="Person's name" 
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="new-position" className="text-gray-300">Position</Label>
                <Input 
                  id="new-position"
                  value={newTestimonial.position} 
                  onChange={(e) => setNewTestimonial({...newTestimonial, position: e.target.value})} 
                  placeholder="Job title"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="new-company" className="text-gray-300">Company</Label>
                <Input 
                  id="new-company"
                  value={newTestimonial.company} 
                  onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})} 
                  placeholder="Company name"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="new-quote" className="text-gray-300">Testimonial Quote</Label>
                <Textarea 
                  id="new-quote"
                  value={newTestimonial.quote} 
                  onChange={(e) => setNewTestimonial({...newTestimonial, quote: e.target.value})} 
                  placeholder="What they said about you"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <ImageUpload
                currentImageUrl={newTestimonial.imageUrl}
                onImageChange={(newImageUrl) => setNewTestimonial({...newTestimonial, imageUrl: newImageUrl})}
                label="Person's Image"
              />
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" onClick={() => setShowAddTestimonial(false)} className="border-gray-600 text-gray-300 hover:bg-gray-700">Cancel</Button>
                <Button onClick={handleAddTestimonial} className="bg-purple-600 hover:bg-purple-500">Add Testimonial</Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="border border-gray-700 rounded-lg p-4 bg-gray-800">
              {editingTestimonial === testimonial.id && tempTestimonial ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`name-${testimonial.id}`} className="text-gray-300">Name</Label>
                    <Input 
                      id={`name-${testimonial.id}`}
                      value={tempTestimonial.name} 
                      onChange={(e) => setTempTestimonial({...tempTestimonial, name: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`position-${testimonial.id}`} className="text-gray-300">Position</Label>
                    <Input 
                      id={`position-${testimonial.id}`}
                      value={tempTestimonial.position} 
                      onChange={(e) => setTempTestimonial({...tempTestimonial, position: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`company-${testimonial.id}`} className="text-gray-300">Company</Label>
                    <Input 
                      id={`company-${testimonial.id}`}
                      value={tempTestimonial.company} 
                      onChange={(e) => setTempTestimonial({...tempTestimonial, company: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`quote-${testimonial.id}`} className="text-gray-300">Quote</Label>
                    <Textarea 
                      id={`quote-${testimonial.id}`}
                      value={tempTestimonial.quote} 
                      onChange={(e) => setTempTestimonial({...tempTestimonial, quote: e.target.value})} 
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <ImageUpload
                    currentImageUrl={tempTestimonial.imageUrl}
                    onImageChange={(newImageUrl) => setTempTestimonial({...tempTestimonial, imageUrl: newImageUrl})}
                    label="Person's Image"
                  />
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setEditingTestimonial(null);
                        setTempTestimonial(null);
                      }}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <X className="mr-1 h-4 w-4" /> Cancel
                    </Button>
                    <Button onClick={handleUpdateTestimonial} className="bg-purple-600 hover:bg-purple-500">
                      <Save className="mr-1 h-4 w-4" /> Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 border border-purple-500">
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditTestimonial(testimonial)}
                        className="text-gray-300 hover:bg-gray-700"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteTestimonial(testimonial.id)}
                        className="text-red-500 hover:text-red-400 hover:bg-gray-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <blockquote className="mt-4 italic text-gray-300 border-l-4 border-purple-500 pl-4">
                    "{testimonial.quote}"
                  </blockquote>
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
  );
};

export default TestimonialsSection;
