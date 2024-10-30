import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
      <motion.div
        className="w-full max-w-4xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <video className="w-full rounded-lg shadow-2xl" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};

export default VideoSection;