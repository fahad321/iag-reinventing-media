import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ImageText from './ImageText';
import CarouselImages from './CarouselImages';
import Video from './Video';
import TextBlock from './TextBlock';
import Layout from './Layout';

const imageSlides = [
  {
    id: 1,
    src: '/assets/images/PlanningExcellence_Carousel1.png',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: '/assets/images/PlanningExcellence_Carousel2.png',
    alt: 'Image 2',
  },
  {
      id: 3,
      src: '/assets/images/PlanningExcellence_Carousel3.png',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: '/assets/images/PlanningExcellence_Carousel4.png',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: '/assets/images/PlanningExcellence_Carousel5.png',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: '/assets/images/PlanningExcellence_Carousel6.png',
      alt: 'Image 6',
    },
    {
      id: 7,
      src: '/assets/images/PlanningExcellence_Carousel7.png',
      alt: 'Image 7',
    },
    {
      id: 8,
      src: '/assets/images/PlanningExcellence_Carousel8.jpg',
      alt: 'Image 8',
    },
    {
        id: 9,
        src: '/assets/images/PlanningExcellence_Carousel9.png',
        alt: 'Image 9',
      },
      {
        id: 10,
        src: '/assets/images/PlanningExcellence_Carousel10.png',
        alt: 'Image 10',
      },
      {
        id: 11,
        src: '/assets/images/PlanningExcellence_Carousel11.png',
        alt: 'Image 11',
      },
      {
        id: 12,
        src: '/assets/images/PlanningExcellence_Carousel12.png',
        alt: 'Image 12',
      },
      {
          id: 13,
          src: '/assets/images/PlanningExcellence_Carousel13.jpg',
          alt: 'Image 13',
        },
        {
          id: 14,
          src: '/assets/images/PlanningExcellence_Carousel14.png',
          alt: 'Image 14',
        },
        {
          id: 15,
          src: '/assets/images/PlanningExcellence_Carousel15.png',
          alt: 'Image 15',
        },
        {
            id: 16,
            src: '/assets/images/PlanningExcellence_Carousel16.jpg',
            alt: 'Image 16',
          },
          {
            id: 17,
            src: '/assets/images/PlanningExcellence_Carousel17.jpg',
            alt: 'Image 17',
          },
          {
            id: 18,
            src: '/assets/images/PlanningExcellence_Carousel18.png',
            alt: 'Image 18',
          },
          {
              id: 19,
              src: '/assets/images/PlanningExcellence_Carousel19.png',
              alt: 'Image 19',
            },
            {
              id: 20,
              src: '/assets/images/PlanningExcellence_Carousel20.png',
              alt: 'Image 20',
            },
  // ... add more images as needed
];

const PlanningExcellence: React.FC = () => {
  return (
    <Parallax className="" speed={-10}>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >        
        <img className='hero-section--banner-image h-screen' src="assets/images/AFI_Plane.jpg" alt="AFI Plane"/>

      <motion.p 
          className="text-m md:text-m mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Our first campaign was no small feat, in fact it was
        </motion.p>

        <motion.h1 
          className="text-5xl  font-bold mb-6 leading-[1.4] text-[#A800FF]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The Most Complex Media Plan <br></br>
          in Australia’s History.

        </motion.h1>

        <div id="ThreeCircles">
          <div>
            <h1>978</h1>
            <p>ASSETS</p>
          </div> 
          <div>
            <h1>57</h1>
            <p>FORMATS</p>
          </div> 
          <div>
            <h1>4x</h1>
            <p>MEDIA FIRSTS</p>
          </div> 
        </div>

        <ImageText
        imageUrl="assets/images/TheChallenge.png"
        altText="The Challenge"
        title="The Challenge"
        text={["As staunch advocates of Climate Change action, NRMA Insurance partnered with a Hollywood calibre production company to make a compelling documentary showcasing Australia’s response to the Black Summer bushfires.",
        "Our job was to get as many Australians as possible to see the film, take positive climate actions and recruit volunteers for a newly formed NFP The Australian Resilience Corps. Helping the country to insulate itself against future risks."]}
        layout="right"
      />


      <ImageText
        imageUrl="/assets/images/TheMediaStrat.png"
        altText="The Media Strategy"
        title="The Media Strategy"
        text={["Whilst this was funded by a national insurer, our first provocation was that we cannot act like an insurance company. If Aussie’s saw this as marketing its impact would be diluted. So, we set out to act like a film distributer, with an a-list sponsor.",
        "This approach guided every element of our plan, including goal setting, audience segmentation, brokering a national premiere on prime-time TV, orchestrating a cross platform promotional blitz and even down to individual sequential OOH site selection to ensure ‘where there’s A Fire Inside, there’s NRMA Insurance’."]}
        layout="left"
      />

      <ImageText
        imageUrl="/assets/images/TheExecution.png"
        altText="The Execution"
        title="The Execution"
        text={["To drive anticipation and fervour around the film we brokered an in-depth partnership with Nine Entertainment Co. that utilised influential cultural voices and platforms across Radio, TV, Digital and Publishing. This included bespoke content, custom covers, fit-for-format executions and advertorial integrations that didn’t just get the nations attention  but got them talking.",
        "To launch the film, we negotiated a prime-time, main channel, broadcast slot – a market first for branded content. Going one step further, we had network talent - Brooke Boney record a bespoke introduction to play prior to the film giving it the gravitas it deserved. Unbelievably, we even convinced Nine to broadcast the first hour completed ad-free, another market-first.",
        "Planned to perfection, the day after the broadcast we activated an editorial onslaught with journalists across radio, regional and metro TV, as well as digital publishing driving the cultural conversation to fever-pitch – and critically, letting Aussies know what they could do to HELP.",
        "We also brokered the Film to be re-broadcast later in the season, and to be housed in the priority carousel on Nine’s streaming platform across the entire Aussie summer."]}
        layout="right"
      />  

      {/* Carousel Image component */}
      <CarouselImages images={imageSlides} defaultCenterImage={9} />

      <Video
        videoSrc="/assets/videos/nrma_insurance._a_fire_inside (1080p).mp4"
      />
    <div className="mx-40 py-20">
      <Layout cols="grid-cols-4" gap="gap-4">
          <TextBlock
            title='+12M'
            titleSize='text-5xl'
            titleColor='text-[#A800FF]'
            content="AUSTRALIANS REACHED"
            contentColor='text-[#00DCFF]'
          />
          <TextBlock
            title='#1'
            titleSize='text-5xl'
            titleColor='text-[#A800FF]'
            content="AUSTRALIANDOCUMENTARY OF ‘21"
            contentColor='text-[#00DCFF]'
          />
          <TextBlock
            title='+48%'
            titleSize='text-5xl'
            titleColor='text-[#A800FF]'
            content="INTENTION TO HELP DISASTER PREVENTION"
            contentColor='text-[#00DCFF]'
          />
          <TextBlock
            title='#1'
            titleSize='text-5xl'
            titleColor='text-[#A800FF]'
            content="FASTEST GROWING VOLUNTEER GROUP"
            contentColor='text-[#00DCFF]'
          />
        </Layout>
      </div>
      
      </motion.div>

    </Parallax>
  );
};

export default PlanningExcellence;