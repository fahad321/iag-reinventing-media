// src/components/Video.tsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface VideoProps {
  title?: string;
  videoSrc: string;
}

const Video: React.FC<VideoProps> = ({ title, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (!inView && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView, isPlaying]);

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
              onClick={togglePlay}
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="11" fill="black" opacity="0.7" />
                  <path d="M8 5v14l11-7z" fill="white" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Video;