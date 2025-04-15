
import React from 'react';
import { usePortfolioData } from './DataProvider';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Vision = () => {
  const { vision } = usePortfolioData();

  return (
    <section id="vision" className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">My Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vision.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group h-full">
                {item.imageUrl && item.imageUrl !== '/placeholder.svg' && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
