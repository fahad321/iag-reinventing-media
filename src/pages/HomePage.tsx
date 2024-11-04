import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Video from '../components/Video';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import TextContent from '../components/TextContent';
import CarouselImages from '../components/CarouselImages';
import Card from '../components/Card';
import ImageText from '../components/ImageText';
import SlideExample from '../components/SlideExample';

const imageSlides = [
  {
    id: 1,
    src: '/assets/images/AFI_Plane.jpg',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: '/assets/images/AFI Ad bundle.png',
    alt: 'Image 2',
  },
  // ... add more images as needed
];

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
        title="Welcome to IAG Media"
        subtitle="Delivering distinctive media solutions that drive creative excellence"
        textPosition="center"
      />
      <div id="parallax"><ParallaxSection /></div>
      <TextContent />
      <Carousel />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <Card size="small">
          <h2 className="text-xl font-bold mb-2">Small Card</h2>
          <p>This is a small card with custom content.</p>
        </Card>
        <Card size="medium">
          <h2 className="text-2xl font-bold mb-4">Medium Card</h2>
          <p>This is a medium card with more content.</p>
        </Card>
        <Card size="large">
          <h2 className="text-3xl font-bold mb-6">Large Card</h2>
          <p>This is a large card with even more content and space.</p>
        </Card>
        <Card size="small" className="custom-card-style">
          <h2 className="text-xl font-bold mb-2">Small Card</h2>
          <p>This is a small card with custom content.</p>
        </Card>
      </div>

      tsx
      <Video
        title="Our Vision"
        videoSrc="/assets/videos/nrma_insurance_cricket_covers.mp4"
      />
      <SlideExample />
      <CarouselImages images={imageSlides} defaultCenterImage={0} />
    </motion.div>
  );
};

export default HomePage;