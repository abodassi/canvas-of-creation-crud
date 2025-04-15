
import React, { useState } from 'react';
import { Company } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';

interface CompaniesSectionProps {
  companiesData: Company[];
  setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>;
  generateId: () => string;
}

const CompaniesSection = ({ companiesData, setCompaniesData, generateId }: CompaniesSectionProps) => {
  const { toast } = useToast();
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Companies</CardTitle>
          <CardDescription>Manage your associated companies</CardDescription>
        </div>
        {!showAddCompany && (
          <Button onClick={() => setShowAddCompany(true)} size="sm">
            <Plus className="mr-1 h-4 w-4" /> Add Company
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {showAddCompany && (
          <div className="mb-8 bg-gray-50 p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Add New Company</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-company-name">Company Name</Label>
                <Input 
                  id="new-company-name"
                  value={newCompany.name} 
                  onChange={(e) => setNewCompany({...newCompany, name: e.target.value})}
                  placeholder="Company name" 
                />
              </div>
              <div>
                <Label htmlFor="new-company-description">Description</Label>
                <Textarea 
                  id="new-company-description"
                  value={newCompany.description || ''} 
                  onChange={(e) => setNewCompany({...newCompany, description: e.target.value})} 
                  placeholder="Company description"
                />
              </div>
              <div>
                <Label htmlFor="new-company-logo">Logo URL</Label>
                <Input 
                  id="new-company-logo"
                  value={newCompany.logoUrl} 
                  onChange={(e) => setNewCompany({...newCompany, logoUrl: e.target.value})} 
                  placeholder="/placeholder.svg"
                />
              </div>
              <div>
                <Label htmlFor="new-company-website">Website</Label>
                <Input 
                  id="new-company-website"
                  value={newCompany.website || ''} 
                  onChange={(e) => setNewCompany({...newCompany, website: e.target.value})} 
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" onClick={() => setShowAddCompany(false)}>Cancel</Button>
                <Button onClick={handleAddCompany}>Add Company</Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {companiesData.map(company => (
            <div key={company.id} className="border rounded-lg p-4">
              {editingCompany === company.id && tempCompany ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`name-${company.id}`}>Company Name</Label>
                    <Input 
                      id={`name-${company.id}`}
                      value={tempCompany.name} 
                      onChange={(e) => setTempCompany({...tempCompany, name: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${company.id}`}>Description</Label>
                    <Textarea 
                      id={`description-${company.id}`}
                      value={tempCompany.description || ''} 
                      onChange={(e) => setTempCompany({...tempCompany, description: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`logo-${company.id}`}>Logo URL</Label>
                    <Input 
                      id={`logo-${company.id}`}
                      value={tempCompany.logoUrl} 
                      onChange={(e) => setTempCompany({...tempCompany, logoUrl: e.target.value})} 
                    />
                  </div>
                  <div>
                    <Label htmlFor={`website-${company.id}`}>Website</Label>
                    <Input 
                      id={`website-${company.id}`}
                      value={tempCompany.website || ''} 
                      onChange={(e) => setTempCompany({...tempCompany, website: e.target.value})} 
                    />
                  </div>
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setEditingCompany(null);
                        setTempCompany(null);
                      }}
                    >
                      <X className="mr-1 h-4 w-4" /> Cancel
                    </Button>
                    <Button onClick={handleUpdateCompany}>
                      <Save className="mr-1 h-4 w-4" /> Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                        <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{company.name}</h3>
                        {company.website && (
                          <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                            Visit Website
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditCompany(company)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteCompany(company.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {company.description && <p className="mt-2 text-gray-600">{company.description}</p>}
                </div>
              )}
            </div>
          ))}
          {companiesData.length === 0 && (
            <p className="text-center py-8 text-gray-500">No companies added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompaniesSection;
