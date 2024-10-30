import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A Case Study in Reinventing Media
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          To Deliver Media as Distinctive as the Creative it Distributes.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSection;