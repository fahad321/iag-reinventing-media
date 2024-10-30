import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const ParallaxSection: React.FC = () => {
  return (
    <Parallax className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center" speed={-20}>
      <motion.h2
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ scale: 1.1 }}
        viewport={{ once: false, amount: 0.8 }}
      >
        Innovative Media Solutions
      </motion.h2>
    </Parallax>
  );
};

export default ParallaxSection;