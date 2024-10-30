import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const OurBeliefSection: React.FC = () => {
  return (
    <Parallax className="min-h-screen bg-gray-100 flex items-center justify-center px-4" speed={-10}>
      <motion.div 
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Belief</h2>
        <p className="text-xl md:text-2xl text-gray-600">
          We believe in the power of harmonizing creative ideas with creative media
          to deliver compounded effectiveness.
        </p>
      </motion.div>
    </Parallax>
  );
};

export default OurBeliefSection;