import { motion } from 'framer-motion';

const HeroBanner: React.FC = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center text-center relative overflow-hidden"
      style={{ backgroundImage: "url('https://picsum.photos/1200/800')" }}>
      <motion.h1
        className="text-white text-7xl font-bold z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Reinventing Media for IAG
      </motion.h1>
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

export default HeroBanner;