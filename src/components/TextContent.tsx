import React from 'react';
import { motion } from 'framer-motion';
import ScrollingAwards from './ScrollingAwards';

const TextContent: React.FC = () => {
  const awards = [
    { name: 'Spikes', image: '/assets/images/Picture 41.png' },
    { name: 'Spikes', image: '/assets/images/Picture 42.png' },
    { name: 'Spikes', image: '/assets/images/Picture 43.png' },
    { name: 'Spikes', image: '/assets/images/Picture 44.png' },
    { name: 'Spikes', image: '/assets/images/Picture 45.png' },
    { name: 'Spikes', image: '/assets/images/Picture 46.png' },
    { name: 'Spikes', image: '/assets/images/Picture 47.png' },
    { name: 'Spikes', image: '/assets/images/Picture 48.png' },
    { name: 'Spikes', image: '/assets/images/Picture 49.png' },
    { name: 'Spikes', image: '/assets/images/Picture 50.png' },
    { name: 'Spikes', image: '/assets/images/Picture 51.png' },
    { name: 'Spikes', image: '/assets/images/Picture 52.png' },
    { name: 'Spikes', image: '/assets/images/Picture 53.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="mt-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our relationship began with a bold promise.
        </motion.p>
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-12 leading-tight mt-8 text-[#A800FF]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          To Deliver Media as Distinctive as the Creative it Distributes.
        </motion.h1>

        {/* Belief Statement */}
        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We believe in the power of harmonizing creative ideas with creative media
          to deliver compounded effectiveness.
        </motion.p>

        {/* Marketing Team Statement */}
        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          With a marketing team famous for 
          fame-driving creative work, we set out to 
          match their ambition with a promise to create 
          equally effective, fame-driving media thinking or a percentage 
          of our remuneration was at risk.
        </motion.p>

        {/* Delivery Statement */}
        <motion.p
          className="text-2xl md:text-3xl font-bold mb-12 text-[#A800FF]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          …and we immediately delivered….
        </motion.p>

        {/* Awards Section */}
        {/* Awards Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >

          {/* Scrolling Awards */}
          <ScrollingAwards awards={awards} />
        </motion.div>

      </div>
    </div>
  );
};

export default TextContent;