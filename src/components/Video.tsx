// src/components/Video.tsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface VideoProps {
  title?: string;
  videoSrc: string;
}

const Video: React.FC<VideoProps> = ({ title, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
    } else if (!inView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    <div className="text-white py-8 px-4 flex items-center justify-center">
      <motion.div
        ref={ref}
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title && <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>}
        <div className="relative w-full aspect-video">
          <div className="absolute inset-0 neon-frame">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              src={videoSrc}
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

export default Video;