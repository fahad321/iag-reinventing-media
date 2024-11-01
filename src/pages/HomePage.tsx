import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import VideoSection from '../components/VideoSection';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import TextContent from '../components/TextContent';
import CarouselImages from '../components/CarouselImages';
import Card from '../components/Card';
import ImageText from '../components/ImageText';

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
      </div>
      <ImageText
        imageUrl="/assets/images/AFI_Plane.jpg"
        altText="AFI Plane"
        text="This is a sample text about the AFI Plane."
        layout="left"
      />
      <ImageText
        imageUrl="/assets/images/AFI Ad bundle.png"
        altText="AFI Ad Bundle"
        text="This is a description of the AFI Ad Bundle."
        layout="right"
      />
      <VideoSection />
      <CarouselImages />
      <Footer />
    </motion.div>
  );
};

export default HomePage;