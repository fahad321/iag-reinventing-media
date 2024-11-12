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
          Reinventing Media<br></br>Drives Business Growth.
        </h2>

        <p className="text-lg text-center mb-4">
        This is a client/agency partnership that trailblazed new ground in media innovation, upstream strategic partnership and in-depth business collaboration. The likes of which the Australian media-market has never before seen.
        </p>

        <p className="text-lg text-center mb-8">
        The work we created across multiple brands, audiences and crafts was not only career defining but has been recognized consistently on the global stage as world class.<br></br>
        What we crated and learned together over this time has forged the foundation of our future partnerships with clients and our ambition for elevating the role media can play in business growth, and the broader communications community.<br></br>
        <br></br>We would like to thank the wonderful people at IAG for their belief, trust and most critically, the opportunity to raise the bar together. Again, and again, and again. 
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#A800FF]">
          **Highest Growth in 10 years**
        </h2>

        {/* <Layout cols="grid-cols-3" gap="gap-8">
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
        </Layout> */}

        <h3 className="text-3xl font-bold text-center mt-16 mb-4 text-[#A800FF]">
          Testimonials from the Top
        </h3>

        <p className="text-lg text-center mb-12">
        Whilst we believe our work should always speak for itself, it’s always good to understand from our clients (past and present) what it’s like working with us to reinvent media.
        </p>

        <Layout cols="grid-cols-2" gap="gap-10">
          <div className="">
            <Video
              videoSrc="/assets/videos/MicrosoftTeams-Brett.mp4"
            />
            <p className="mt-4 text-center text-lg text-[#A800FF]">Brent Smart<br></br>Former IAG Chief Marketing Officer</p>
          </div>
          <div className="">
            <Video
              videoSrc="/assets/videos/MicrosoftTeams-Michelle.mp4"
            />
            <p className="mt-4 text-center text-lg text-[#A800FF]">Michelle Klein<br></br>IAG Chief Customer & Marketing Officer</p>
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