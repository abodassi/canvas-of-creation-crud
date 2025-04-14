
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { usePortfolioData } from './DataProvider';

const Contact = () => {
  const { contactInfo } = usePortfolioData();

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a href={`tel:${contactInfo.phone.replace(/\D/g,'')}`} className="text-gray-600 hover:text-primary">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-600">{contactInfo.location}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  {contactInfo.linkedin && (
                    <a 
                      href={contactInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {contactInfo.github && (
                    <a 
                      href={contactInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                  {contactInfo.twitter && (
                    <a 
                      href={contactInfo.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Email" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Message"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
