// src/components/VideoSection.tsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoSection: React.FC = () => {
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
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 flex items-center justify-center">
      <motion.div 
        ref={ref}
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Our Vision</h2>
        <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/assets/videos/nrma_insurance_cricket_covers.mp4"
            muted
            loop
            playsInline
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoSection;