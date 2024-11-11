import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ImageText from './ImageText';
import HeroBanner from './HeroBanner';
import CarouselImages from './CarouselImages';
import Video from '../components/Video';

const imageSlides = [
    {
      id: 1,
      src: '/assets/images/B2B_Carousel1.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/assets/images/B2B_Carousel3.jpg',
      alt: 'Image 2',
    },
    {
        id: 3,
        src: '/assets/images/B2B_Carousel4.png',
        alt: 'Image 3',
      },
      {
        id: 4,
        src: '/assets/images/B2B_Carousel5.gif',
        alt: 'Image 4',
      },
      {
        id: 5,
        src: '/assets/images/B2B_Carousel7.png',
        alt: 'Image 5',
      },
      {
        id: 6,
        src: '/assets/images/B2B_Carousel8.png',
        alt: 'Image 6',
      },
      {
        id: 7,
        src: '/assets/images/B2B_Carousel9.jpg',
        alt: 'Image 7',
      },
      {
        id: 8,
        src: '/assets/images/B2B_Carousel10.jpg',
        alt: 'Image 8',
      },
      {
          id: 9,
          src: '/assets/images/B2B_Carousel11.png',
          alt: 'Image 9',
        },
        {
          id: 10,
          src: '/assets/images/B2B_Carousel12.png',
          alt: 'Image 10',
        },
        {
          id: 11,
          src: '/assets/images/B2B_Carousel13.png',
          alt: 'Image 11',
        },
        {
          id: 12,
          src: '/assets/images/B2B_Carousel14.png',
          alt: 'Image 12',
        },
        {
            id: 13,
            src: '/assets/images/B2B_Carousel15.png',
            alt: 'Image 13',
          },
    // ... add more images as needed
  ];

const B2bBrillance: React.FC = () => {
  return (
    <Parallax className="" speed={-10}>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
<div className='my-40'>
        <HeroBanner
        videoSrc="/assets/videos/cgu_-_tall_poppy_-_billboard_updated.mp4"
        title="Big Brand Thinking, in B2B Marketing"
        subtitle="B2B marketing is famously functional, hyper-precise and filled with industry jargon. Backed by IPA research that indicated the conventions of effective B2C communications apply to B2B, we set out to prove this by bringing the most creatively ambitious B2B campaign Australia has seen to market."
        textPosition="left"
      />

        
        <ImageText
        imageUrl="/assets/images/B2B_TheChallenge.png"
        altText="The Challenge"
        title="The Challenge"
        text={["CGU is a leading commercial, rural and personal lines insurer, and therefore has relied on broker-based distribution for its 160 years in operation. However, a recent strategy change saw the brand open direct-to-consumer channels in a bid to gain greater share.",
        "Unfortunately, this move created disharmony with the broker community. We needed to create a campaign to rebuild their relationship with brokers – by proving we’re a business partner committed to not just servicing their business but driving it."]}
        layout="right"
      />

        <ImageText
        imageUrl="/assets/images/B2B_TheMediaStrat.png"
        altText="The Media Strategy"
        title="The Media Strategy"
        text={["We inherited a 5minute cinematic film made in partnership with Jim Henson Studios. ‘Tall Poppy’ was a powerful story showing the fragility of ambition and how important it is to insure it.",
        "It also showed the meaningful role brokers play in that endeavour.",
        "Our strategy was to personify Poppy in culture via ambitious public media to drive Aussie businesses to their broker and bring ‘Big-Poppy Energy’ in broker trade channels to cement our commitment to their industry…reinventing the B2B playbook in the process."]}
        layout="left"
      />

        <ImageText
        imageUrl="/assets/images/B2B_TheExecution.png"
        altText="The Execution"
        title="The Execution"
        text={["To propel Poppy into culture we ensured as many Australians as possible saw the full five-minute film. Looking at reach, influence and broker consumption indexing we identified 60Minutes as a perfect environment to drive attention. So, in a genuine media-first we turned 60Minutes into 55, and broadcast our 5 minute film in a solus ad-break, driving over half-a-million views of our full ad on night one.",
        "This was underpinned by a sophisticated screens strategy to sweat the 5minute film across TV, BVOD, OLV, social and streaming.",
        "Alongside this we used media to break media fourth walls to show Tall Poppy breaking out of conventional barriers – this included the Southern Hemisphere’s first ever 3D Anthropomorphic full motion billboard (since used by dozens of brands).",
        "To ensure Poppy’s mission was lived across the CGU organisation we meticulously mapped and redesigned the brand’s owned media ecosystem – from site-design and experience overhaul, signatures, stationary, social handles, and physical policy collateral.",
        "All this activity was underpinned with a targeted broker media blitz, featuring big-brand tactics like homepage takeovers (first ever for Insurance News), flip cover feature in NIBA magazine, Tall Poppy collateral for broker conferences and even sending video-embedded direct mail to the personal addresses of the country’s top 8,000 brokers.",
      ]}
        layout="right"
      />

      {/* Carousel Image component */}
      <CarouselImages images={imageSlides} defaultCenterImage={3} />

      <Video
        title=""
        videoSrc="/assets/videos/cgu_tall_poppy.mp4"
      />
      <div className='container max-w-[100%]'>
        <img className='w-[100%]' src="assets/images/B2B_TheResults.png" alt="B2B The Results"/>
        <div className="max-w-[1440px] mx-auto">
        <p className='text-5xl md:text-5xl top-left'>The Results</p>
        <div className="text-container">
            <div className="first-col">
                <p className="text-6xl md:text-6xl">&gt;500K</p>
                <p className="text-xs md:text-xs py-2">WATCHED FULL 5 MINUTE<br></br>PREMIERE IN 60MINUTES</p>
            </div>
            <div className="second-col">
                <p className="text-6xl md:text-6xl">60%</p>
                <p className="text-xs md:text-xs py-2">OF AUSTRALIANS REACHED<br></br>VIA EARNED</p>
            </div>
            <div className="third-col">
                <p className="text-6xl md:text-6xl">+46%</p>
                <p className="text-xs md:text-xs py-2">BROKERCONSIDERATION<br></br>(4x ORIGINAL GOAL)</p>
            </div>
            <div className="fourth-col">
                <p className="text-6xl md:text-6xl">+12.7pt</p>
                <p className="text-xs md:text-xs py-2">GROWTH IN BROKER NPS</p>
            </div>
        </div>
        </div>
        <div className="spacer1"></div>
        <div className="spacer2"></div>
        <div className="spacer3"></div>
      </div>
      </div>

      </motion.div>

    </Parallax>
  );
};

export default B2bBrillance;