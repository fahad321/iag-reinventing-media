// src/components/HeroBanner.tsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroBanner: React.FC = () => {
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

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/assets/videos/nrma_insurance_cricket_covers.mp4"
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
        className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to IAG Media
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          Delivering distinctive media solutions that drive creative excellence
        </p>
      </motion.div>
    </div>
  );
};

export default HeroBanner;