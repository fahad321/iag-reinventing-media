// src/components/HeroBanner.tsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface HeroBannerProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  textPosition: 'center' | 'left' | 'right';
}

const HeroBanner: React.FC<HeroBannerProps> = ({ videoSrc, title, subtitle, textPosition }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    
    if (inView && videoRef.current) {
      videoRef.current.play();
    }
  }, [inView]);

  const getTextPositionClass = () => {
    switch (textPosition) {
      case 'left':
        return 'items-start text-left pl-8';
      case 'right':
        return 'items-end text-right pr-8';
      default:
        return 'items-center text-center';
    }
  };

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className={`relative z-10 h-full flex flex-col justify-center text-white px-4 ${getTextPositionClass()}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default HeroBanner;