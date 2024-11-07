import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Award {
    name: string;
    image: string;
}

interface ScrollingAwardsProps {
    awards: Award[];
}

const ScrollingAwards: React.FC<ScrollingAwardsProps> = ({ awards }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                x: [0, -1000],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                },
            });
        } else {
            controls.stop();
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="flex overflow-hidden">
            <motion.div className="flex space-x-8" animate={controls}>
                {awards.map((award, index) => (
                    <img
                        key={index}
                        src={award.image}
                        alt={award.name}
                        className="h-16 w-auto object-contain"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ScrollingAwards;