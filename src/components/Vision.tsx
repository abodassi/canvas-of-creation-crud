
import React from 'react';
import { usePortfolioData } from './DataProvider';
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  const { vision } = usePortfolioData();

  return (
    <section id="vision" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vision.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
