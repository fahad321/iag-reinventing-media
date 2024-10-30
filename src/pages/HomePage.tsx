import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import VideoSection from '../components/VideoSection';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const HomePage: React.FC = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div id="hero"><HeroBanner /></div>
      <div id="parallax"><ParallaxSection /></div>
      <Carousel />
      <VideoSection />
      <Footer />
    </motion.div>
  );
};

export default HomePage;