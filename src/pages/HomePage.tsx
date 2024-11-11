import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Carousel from '../components/Carousel';
import TextContent from '../components/TextContent';

const HomePage: React.FC = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroBanner
        videoSrc="/assets/videos/nrma_insurance_cricket_covers.mp4"
        title="A Case Study in Reinventing Media"
        textPosition="center"
        imageSrc='/assets/images/Picture 23.png'
        logoSrc='/assets/images/Picture 61.png'
      />
      <TextContent />
      <Carousel />
    </motion.div>
  );
};

export default HomePage;