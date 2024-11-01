import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ size = 'medium', children }) => {
  const sizeClasses = {
    small: 'w-64 min-h-40',
    medium: 'w-80 min-h-48',
    large: 'w-96 min-h-56',
  };

  return (
    <motion.div
      className={`bg-purple-600 text-white rounded-lg shadow-lg p-6 ${sizeClasses[size]} transition-all duration-300 hover:bg-purple-700 hover:shadow-xl`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;