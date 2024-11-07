// src/components/ImageText.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

interface ImageTextProps {
  imageUrl: string;
  altText: string;
  title?: string;
  text: string[];
  layout: 'left' | 'right' | 'top' | 'bottom';
}

const ImageText: React.FC<ImageTextProps> = ({ imageUrl, altText, title, text, layout }) => {
  const containerClasses = {
    left: 'flex flex-row',
    right: 'flex flex-row-reverse',
    top: 'flex flex-col',
    bottom: 'flex flex-col-reverse',
  };

  const imageClasses = 'w-1/2 object-contain';
  const textClasses = 'w-1/2 p-6 flex flex-col justify-left text-left';

  return (
    <div className='my-40'>
    <Parallax className={`${containerClasses[layout]} my-8 max-w-[1450px]  mx-auto px-14`} speed={-10}>
      <motion.img 
        src={imageUrl} 
        alt={altText} 
        className={imageClasses}
        initial={{ opacity: 0, x: layout === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className={textClasses}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        {text.map((paragraph, index) => (
          <motion.p 
            key={index} 
            className="text-wt mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </Parallax>
    </div>
  );
};

export default ImageText;