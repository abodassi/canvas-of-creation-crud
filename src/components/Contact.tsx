
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { usePortfolioData } from './DataProvider';
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';

const Contact = () => {
  const { contactInfo } = usePortfolioData();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using mailto link for now, which will open the user's email client
      const mailtoLink = `mailto:abu2002assi@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Message sent",
        description: "Your message has been opened in your email client. Please send the email to complete the process.",
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-16 bg-gradient-to-br from-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Contact Me</h2>
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Get in Touch</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="h-5 w-5 text-blue-500 mr-3" />
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 group-hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="h-5 w-5 text-blue-500 mr-3" />
                    <a href={`tel:${contactInfo.phone.replace(/\D/g,'')}`} className="text-gray-300 group-hover:text-white transition-colors">
                      {contactInfo.phone}
                    </a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-300">{contactInfo.location}</span>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-blue-400">Social Media</h3>
                <div className="flex space-x-4">
                  {contactInfo.linkedin && (
                    <motion.a 
                      href="https://www.linkedin.com/in/abd-abuassi/"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ y: -5, color: "#0077B5" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Linkedin className="h-6 w-6" />
                    </motion.a>
                  )}
                  <motion.a
                        href="https://www.linkedin.com/in/abd-abuassi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn Profile"
                        whileHover={{ y: -5, color: "#0077B5" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Linkedin className="h-6 w-6" />
                      </motion.a>
                </div>
              </div>
              
              <div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <motion.button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default Contact;
