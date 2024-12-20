// src/components/CarouselImages.tsx
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


interface CarouselImageProps {
  images: { id: number; src: string; alt: string }[];
  defaultCenterImage: number;
}

const CarouselImages: React.FC<CarouselImageProps> = ({ images, defaultCenterImage }) => {
  const [centerIndex, setCenterIndex] = useState(defaultCenterImage);
  const [isAtStart, setIsAtStart] = useState(defaultCenterImage === 0);
  const [isAtEnd, setIsAtEnd] = useState(defaultCenterImage === images.length - 1);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const getImageIndex = useCallback((index: number) => {
    return (index + images.length) % images.length;
  }, [images.length]);

  const moveLeft = () => {
    if (!isAtStart) {
      const newIndex = getImageIndex(centerIndex - 1);
      setCenterIndex(newIndex);
      setIsAtStart(newIndex === 0);
      setIsAtEnd(false);
    }
    setIsAutoScrolling(false);
  };

  const moveRight = () => {
    if (!isAtEnd) {
      const newIndex = getImageIndex(centerIndex + 1);
      setCenterIndex(newIndex);
      setIsAtEnd(newIndex === images.length - 1);
      setIsAtStart(false);
    }
    setIsAutoScrolling(false);
  };

  useEffect(() => {
    if (inView && isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCenterIndex((prevIndex) => getImageIndex(prevIndex + 1));
      }, 1500); // Auto-scroll every 3 seconds
    } else {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [inView, isAutoScrolling, images.length, getImageIndex]);

  return (
    <div className='px-12' ref={ref}>
      <div className="relative w-full h-[400px] overflow-hidden">
        <AnimatePresence initial={false}>
          {[-1, 0, 1].map((offset) => {
            const index = getImageIndex(centerIndex + offset);
            const image = images[index];
            return (
              <motion.div
                key={image.id}
                className={`absolute top-0 w-1/3 h-full ${offset === 0 ? 'left-1/3' : offset === -1 ? 'left-0' : 'right-0'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: offset === 0 ? 1 : 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        <button
          onClick={moveLeft}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ${isAtStart ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isAtStart}
        >
          &lt;
        </button>
        <button
          onClick={moveRight}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ${isAtEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isAtEnd}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselImages;