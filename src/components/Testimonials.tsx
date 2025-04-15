
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioData } from './DataProvider';
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { testimonials } = usePortfolioData();
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveTestimonial(testimonial.id)}
              onMouseLeave={() => setActiveTestimonial(null)}
            >
              <Card 
                className={`h-full flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transition-all duration-300 ${activeTestimonial === testimonial.id ? 'border-purple-500 shadow-lg shadow-purple-500/20 transform scale-105' : 'hover:border-gray-600'}`}
              >
                <CardContent className="p-6 flex-grow flex flex-col relative">
                  <div className="absolute top-4 right-4 text-purple-400 opacity-30">
                    <Quote size={24} />
                  </div>
                  <div className="mb-6 flex-grow">
                    <blockquote className="text-gray-300 italic relative pl-4 border-l-2 border-purple-500">{testimonial.quote}</blockquote>
                  </div>
                  <div className={`flex items-center transition-transform duration-300 ${activeTestimonial === testimonial.id ? 'transform translate-x-2' : ''}`}>
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-offset-2 ring-offset-gray-800 ring-purple-500">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
