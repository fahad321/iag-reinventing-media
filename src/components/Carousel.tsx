import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './HeroSection';
import OurBeliefSection from './OurBeliefSection';
import BoldPromiseSection from './BoldPromiseSection';

const sections = [
    { id: 'hero', component: HeroSection, title: 'Hero Section' },
    { id: 'belief', component: OurBeliefSection, title: 'Our Belief' },
    { id: 'promise', component: BoldPromiseSection, title: 'Bold Promise' },
];

const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative flex flex-col items-center justify-center text-center py-20 bg-gray-900 min-h-screen">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={activeIndex}
                    className="text-5xl font-bold text-purple-400 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    {sections[activeIndex].title}
                </motion.h1>
            </AnimatePresence>

            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
                {sections.map((_, index) => (
                    <motion.div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-6 h-6 rounded-full cursor-pointer ${activeIndex === index ? 'bg-purple-400' : 'bg-gray-500'
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    className="w-3/4 bg-gray-800 text-white p-10 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    {React.createElement(sections[activeIndex].component)}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Carousel;