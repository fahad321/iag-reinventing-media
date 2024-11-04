import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Video from './Video';

const PlanningExcellence: React.FC = () => {
  return (
    <Parallax className="min-h-screen bg-gray-100 flex items-center justify-center px-4" speed={-10}>
      <motion.div 
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Video
        videoSrc="/assets/videos/nrma_insurance_cricket_covers.mp4"
      />
      </motion.div>
    </Parallax>
  );
};

export default PlanningExcellence;