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
    <div className="min-h-screen bg-black text-white py-20 px-4 flex items-center justify-center">
      <motion.div
        ref={ref}
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Our Vision</h2>
        
        <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
          {/* Outer frame with corner details */}
          <div className="absolute inset-0 neon-frame">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              src="/assets/videos/nrma_insurance_cricket_covers.mp4"
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoSection;
