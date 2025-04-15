
import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Testimonials</CardTitle>
          <CardDescription>Manage testimonials from clients and colleagues</CardDescription>
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
                  placeholder="Job title"
                />
              </div>
              <div>
                <Label htmlFor="new-company">Company</Label>
                <Input 
                  id="new-company"
                  value={newTestimonial.company} 
                  onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})} 
                  placeholder="Company name"
                />
              </div>
              <div>
                <Label htmlFor="new-quote">Testimonial Quote</Label>
                <Textarea 
                  id="new-quote"
                  value={newTestimonial.quote} 
                  onChange={(e) => setNewTestimonial({...newTestimonial, quote: e.target.value})} 
                  placeholder="What they said about you"
                />
              </div>
              <div>
                <Label htmlFor="new-image">Profile Image URL</Label>
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
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
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
                  <blockquote className="mt-4 italic text-gray-700 border-l-4 border-gray-200 pl-4">
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
