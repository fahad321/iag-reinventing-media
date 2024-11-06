// src/components/ProvenEffectivenessSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Layout from './Layout';
import TextBlock from './TextBlock';
import ImageText from './ImageText';
import Video from './Video';

const ProvenEffectivenessSection: React.FC = () => {
  return (
    <Parallax className="py-24 md:py-32" speed={-10}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#A800FF]">
          Reinventing Media Drives Business Growth
        </h2>

        <p className="text-lg text-center mb-4">
          We went above-and-beyond what any traditional media agency delivers.
        </p>

        <p className="text-lg text-center mb-8">
          We Identified, negotiated and brokered national naming rights partnerships, broadcast television rights, created new distinctive media assets, out-negotiated previous Olympic broadcast partners, built new insurance brands, launched into new categories (Home Loans, Single Item Insurance, Share-Economy Insurance) , Beyond 3% first major brand to commit 3% of their above-the-line media to first nations audiences as part of NITV's Beyond  3% Initiative.
        </p>

        <Layout cols="grid-cols-3" gap="gap-8">
          <TextBlock
            title="Highest Growth in 10 years"
            titleSize="text-3xl"
            titleColor="text-[#A800FF]"
          />
          <TextBlock
            title="xxxxxxxxxxxxxxx"
            titleSize="text-3xl"
            titleColor="text-[#A800FF]"
          />
          <TextBlock
            title="xxxxxxxxxxxxxxxx"
            titleSize="text-3xl"
            titleColor="text-[#A800FF]"
          />
        </Layout>

        <h3 className="text-3xl font-bold text-center mt-16 mb-4 text-[#A800FF]">
          Testimonials from the Top
        </h3>

        <p className="text-lg text-center mb-12">
          Whilst we believe our work should always speak for itself, it's always good to understand from our clients (past and present) what it's like working with us to reinvent media.
        </p>

        <Layout cols="grid-cols-2" gap="gap-10">
          <div className="">
            <Video
              videoSrc="/assets/videos/nrma_insurance_fifo_fields_updated.mp4"
            />
            <p className="mt-4 text-center text-lg">Brent Smart Former IAG Chief Marketing Officer</p>
          </div>
          <div className="">
            <Video
              videoSrc="/assets/videos/cgu_-_tall_poppy_-_billboard_updated.mp4"
            />
            <p className="mt-4 text-center text-lg">Michelle Klein IAG Chief Customer & Marketing Officer</p>
          </div>
        </Layout>

        <p className="text-lg text-center mt-12">
          For more references, please contact{' '}
          <span className="text-blue-500 hover:underline">Sam.Geer@Accenture.com</span>
        </p>
      </motion.div>
    </Parallax>
  );
};

export default ProvenEffectivenessSection;