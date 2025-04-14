
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { usePortfolioData } from './DataProvider';

const Testimonials = () => {
  const { testimonials } = usePortfolioData();

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="mb-6 flex-grow">
                  <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
