// src/components/HeroBanner.tsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface HeroBannerProps {
  videoSrc: string;
  imageSrc?: string; // New prop for the image
  title: string;
  subtitle: string;
  textPosition: 'center' | 'left' | 'right';
}

const HeroBanner: React.FC<HeroBannerProps> = ({ videoSrc, imageSrc, title, subtitle, textPosition }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setShowVideo(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 500);
    }
  }, [inView]);

  return (
    <div className="relative h-screen">
      {/* Image Background */}
      <div className={`absolute inset-0 overflow-hidden ${showVideo ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt="Background"
        />
      </div>

      {/* Video Background */}
      <div className={`absolute inset-0 overflow-hidden ${showVideo ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <motion.div
        ref={ref}
        className={`relative z-10 h-full flex flex-col justify-center ${textPosition === 'left' ? 'items-start' :
            textPosition === 'right' ? 'items-end' :
              'items-center'
          } text-white px-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${textPosition === 'center' ? 'text-center' :
            textPosition === 'left' ? 'text-left' :
              'text-right'
          }`}>
          {title}
        </h1>
        <p className={`text-xl md:text-2xl max-w-2xl ${textPosition === 'center' ? 'text-center' :
            textPosition === 'left' ? 'text-left' :
              'text-right'
          }`}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default HeroBanner;