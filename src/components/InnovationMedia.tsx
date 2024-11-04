// src/components/InnovativeMediaSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ImageText from './ImageText';
import CarouselImages from './CarouselImages';
import Layout from './Layout';

const imageSlides = [
    {
      id: 1,
      src: '/assets/images/Picture 4.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/assets/images/Picture 5.png',
      alt: 'Image 2',
    },
    {
        id: 3,
        src: '/assets/images/Picture 6.png',
        alt: 'Image 3',
      },
      {
        id: 4,
        src: '/assets/images/Picture 7.png',
        alt: 'Image 4',
      },
      {
        id: 5,
        src: '/assets/images/Picture 8.jpg',
        alt: 'Image 5',
      },
      {
        id: 6,
        src: '/assets/images/Picture 9.jpg',
        alt: 'Image 6',
      },
    // ... add more images as needed
  ];

const InnovativeMediaSection: React.FC = () => {
    return (
        <div className="innovative-media-section">
            {/* Full size image with text overlay */}
            <div className="relative h-screen">
                <img src="/assets/images/Picture 1.png" alt="Innovative Media" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-8">
                    <motion.h2
                        className="text-4xl text-white font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Helping a Newly National Brand,
                        Establish a National Connection
                    </motion.h2>
                </div>
            </div>

            {/* Text on left and image on right */}
            <ImageText
                imageUrl="/assets/images/Picture 2.png"
                altText="AFI Ad Bundle"
                title="The Challenge"
                text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ]}
                layout="right"
            />

            {/* Text on right */}
            <Layout cols="grid-cols-2" gap="gap-8">
                <div></div>
                <motion.div
                    className="p-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold mb-4">The Media Strategy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </motion.div>
            </Layout>

            {/* Text on left and image on right */}
            <ImageText
                imageUrl="/assets/images/Picture 3.png"
                altText="Annual Portfolio Planning"
                title='The Execution'
                text={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ]}
                layout="right"
            />

            {/* Text on left */}
            <Layout cols="grid-cols-2" gap="gap-8">
                <motion.div
                    className="p-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                
                </motion.div>
                <div></div>
            </Layout>

            {/* Carousel Image component */}
            <CarouselImages images={imageSlides} defaultCenterImage={3} />
     
        </div>
    );
};

export default InnovativeMediaSection;