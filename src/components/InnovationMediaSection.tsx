// src/components/InnovativeMediaSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ImageText from './ImageText';
import CarouselImages from './CarouselImages';
import TextBlock from './TextBlock';
import Layout from './Layout';
import Video from './Video';

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
    {
        id: 24,
        src: '/assets/images/Picture 24.png',
        alt: 'Image 24',
    },
    {
        id: 25,
        src: '/assets/images/Picture 25.jpg',
        alt: 'Image 25',
    },
    {
        id: 26,
        src: '/assets/images/Picture 26.png',
        alt: 'Image 26',
    },
    {
        id: 27,
        src: '/assets/images/Picture 27.png',
        alt: 'Image 27',
    },
    {
        id: 28,
        src: '/assets/images/Picture 28.jpg',
        alt: 'Image 28',
    },
    {
        id: 29,
        src: '/assets/images/Picture 29.png',
        alt: 'Image 29',
    },
    {
        id: 31,
        src: '/assets/images/Picture 31.jpg',
        alt: 'Image 31',
    },
    {
        id: 32,
        src: '/assets/images/Picture 32.jpg',
        alt: 'Image 32',
    },
    {
        id: 33,
        src: '/assets/images/Picture 33.jpg',
        alt: 'Image 33',
    },


    {
        id: 34,
        src: '/assets/images/Picture 34.jpg',
        alt: 'Image 34',
    },
    {
        id: 36,
        src: '/assets/images/Picture 36.png',
        alt: 'Image 36',
    },
    {
        id: 38,
        src: '/assets/images/Picture 38.jpg',
        alt: 'Image 38',
    },
    {
        id: 39,
        src: '/assets/images/Picture 39.jpg',
        alt: 'Image 39',
    }

    // ... add more images as needed
];

const InnovativeMediaSection: React.FC = () => {
    return (
        <div className="innovative-media-section">
            {/* Full size image with text overlay */}
            <div className="relative h-screen my-40">
                <img src="/assets/images/Picture 1.png" alt="Innovative Media" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center p-8">
                    <motion.h2
                        className="text-4xl text-white font-bold text-center max-w-3xl"
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
                    "With NRMA Insurance’s expansion into new markets, there was a need to rapidly build awareness and affinity of the brand’s promise of HELP. To achieve this we looked for a national property that had the perfect combination of universal adoration, trust and (of course) strong media impact.",
                    "Through a discovery process we identified, brokered and activated a new naming rights sponsorship of the Australian Test Cricket team, unlocking a great opportunity for the brand but greater challenge for us –  to unrust decades of previous sponsor awareness and earn our right to connect with cricket fans."
                ]}
                layout="right"
            />

            {/* Text on left and image on right */}
            <ImageText
                imageUrl="/assets/images/Picture 3.png"
                altText="Annual Portfolio Planning"
                title='The Media Strategy'
                text={[
                    "To cement the connection between cricket and NRMA Insurance’s help promise, we established a powerfully simple platform ‘Proud Helpers of Australian Cricket’.",
                    "However, our media strategy focused on proving that promise in ownable ways an insurance brand can help – from protecting the players/field to uniting community helpers for a greater good. ",
                    "All whilst ensuring NRMA Insurance received an unfair share of attention through meticulous OESP asset orchestration."

                ]}
                layout="left"
            />

            <ImageText
                imageUrl="/assets/images/Picture 3.png"
                altText="AFI Ad Bundle"
                title="The Execution"
                text={[
                    "Our partnership started by painting the series blue, commanding as much premium partnership inventory to make NRMA Insurance synonymous with the game. ",
                    "We then surrounded all cricket content with public declarations of our support, showcasing why and how NRMA Insurance are Proud Helpers of Australian Cricket. Full page advertisements in sports news, an out-of-home blitz (upweighted around cricket precincts across the nation), innovative integrations in Seven’s cross-platform coverage and even the creation of an entirely new distinctive media device, one left untapped for centuries…"
                ]}
                layout="right"
            />

            <ImageText
                imageUrl="/assets/images/Picture 22.png"
                altText="AFI Ad Bundle"
                text={[
                    "Born from the insight that Australia’s most watched game was also the most washed out (the Sydney Test is the most rain effected game in international cricket) we set out to prove NRMA Insurance’s promise by protecting the pitch itself. ",
                    "This simple act became the talk of the series, and whilst other advertisers chased sporadic 30” ads in cluttered adblocks, NRMA Insurance received over 6hrs of high-definition, in-broadcast coverage…surrounded by swooning commentary about how the marketing play was ‘genius’.",
                    "We aligned this with swapping out all collateral with custom recuts of NRMA Insurance’s hero and even created pink alternate covers in case it rained during the iconic ‘Pink Test’; which it did. ",
                    "All helping NRMA Insurance become synonymous with cricket in just its first year in the game."
                ]}
                layout="right"
            />

            {/* Carousel Image component */}
            <CarouselImages images={imageSlides} defaultCenterImage={3} />
            <Parallax className="py-24 md:py-24 max-w-[1250px] mx-auto" speed={-10}>
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='my-8'>
                        <TextBlock titleSize='text-4xl' titleColor='text-[#A800FF]' title="The Results" />
                    </div>
                    <Layout cols="grid-cols-4" gap="gap-4">
                        <TextBlock
                            title='12.4M'
                            titleSize='text-5xl'
                            titleColor='text-[#A800FF]'
                            content="AUSTRALIANS REACHED(behind 20 yr sponsors CBA/KFC)"
                            contentColor='text-[#00DCFF]'
                        />
                        <TextBlock
                            title='#3'
                            titleSize='text-5xl'
                            titleColor='text-[#A800FF]'
                            content="SPONSOR IN YEAR ONE(behind 20 yr sponsors CBA/KFC)"
                            contentColor='text-[#00DCFF]'
                        />
                        <TextBlock
                            title='21%'
                            titleSize='text-5xl'
                            titleColor='text-[#A800FF]'
                            content="NON-CUSTOMER CONSIDERATION"
                            contentColor='text-[#00DCFF]'
                        />
                        <TextBlock
                            title='+$3M'
                            titleSize='text-5xl'
                            titleColor='text-[#A800FF]'
                            content="EARNED MEDIA EXPOSURE OF COVERS ALONES"
                            contentColor='text-[#00DCFF]'
                        />
                    </Layout>


                    <Video
                        videoSrc="/assets/videos/nrma_insurance_cricket_covers (1080p).mp4"
                    />
                </motion.div>
            </Parallax>
        </div>
    );
};

export default InnovativeMediaSection;