import React from 'react';
import { motion } from 'framer-motion';

const BoldPromiseSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Bold Promise</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          With a marketing team famous for fame-driving creative work, we set out to match their
          ambition with a promise to deliver equally effective fame-driving media thinking or a
          percentage of our remuneration was at risk.
        </p>
        <p className="text-2xl md:text-3xl font-bold text-indigo-600">
          ...and we immediately delivered.
        </p>
      </motion.div>
    </div>
  );
};

export default BoldPromiseSection;