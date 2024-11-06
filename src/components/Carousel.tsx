import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './HeroSection';
import PlanningExcellence from './PlanningExcellence';
import DataLed from './DataLed';
import InnovationMediaSection from './InnovationMediaSection';
import InHouseSection from './InHouseSection';
import ProvenEffectivenessSection from './ProvenEffectivenessSection';

const sections = [
    { id: 'herosection', component: HeroSection, title: 'Complex Business' },
    { id: 'planning', component: PlanningExcellence, title: 'Planning Excellence' },
    { id: 'data led', component: DataLed, title: 'Data Lead Geographics' },
    { id: 'innovation', component: InnovationMediaSection, title: 'Innovation Media' },
    { id: 'inhouse', component: InHouseSection, title: 'In-House Collaboration' },
    { id: 'proveneffectiveness', component: ProvenEffectivenessSection, title: 'Proven Effectiveness' }
];

const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Allow null when no section is active
    const sectionRefs = useRef(sections.map(() => React.createRef<HTMLDivElement>()));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport
            let newActiveIndex: number | null = null;

            sectionRefs.current.forEach((ref, index) => {
                const element = ref.current;
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    const elementTop = top + window.scrollY;
                    const elementBottom = bottom + window.scrollY;

                    // Check if section is in the viewport (either partially or fully)
                    if (
                        scrollPosition >= elementTop &&
                        scrollPosition <= elementBottom
                    ) {
                        newActiveIndex = index;
                    }
                }
            });

            // Set activeIndex to null if no section is visible
            setActiveIndex(newActiveIndex);
        };

        // Initial check
        handleScroll();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        className={`w-6 h-6 rounded-full cursor-pointer border-2 border-purple-400 relative group`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            sectionRefs.current[index].current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <motion.div
                            className="absolute inset-0.5 bg-purple-400 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: activeIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <AnimatePresence>
                            <motion.span
                                className="absolute left-full ml-2 text-sm text-white whitespace-nowrap"
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {section.title}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    ref={sectionRefs.current[index]}
                    className="carousel__section--background"
                >
                    {React.createElement(section.component)}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
