import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 flex items-center justify-center">
      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Our Vision</h2>
        <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoSection;