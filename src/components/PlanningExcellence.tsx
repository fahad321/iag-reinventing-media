import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ImageText from './ImageText';

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
        {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Belief</h2>
        <p className="text-xl md:text-2xl text-gray-600">
          We believe in the power of harmonizing creative ideas with creative media
          to deliver compounded effectiveness.
        </p> */}
        
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
          className="text-5xl  font-bold mb-6 leading-[1.4]"
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
            <h1>4X</h1>
            <p>MEDIA FIRSTS</p>
          </div> 
        </div>

        <ImageText
        imageUrl="assets/images/TheChallenge.png"
        altText="The Challenge"
        title="The Challenge"
        text={["As staunch advocates of Climate Change action, NRMA Insurance partnered with Hollywood calibre production company to make a compelling documentary showcasing Australia’s response to the Black Summer bushfires.",
        "Our job was to get as many Australians to see the film and take positive climate actions and recruit volunteers for a newly formed NFP The Australian Resilience Corps to arm the country with the help they need to insulate themselves against future risk."]}
        layout="right"
      />


      <ImageText
        imageUrl="/assets/images/TheMediaStrat.png"
        altText="The Media Strategy"
        title="The Media Strategy"
        text={["Whilst this was funded by a national insurer, our first provocation is we cannot act like an insurance company. If Aussie’s saw this as marketing its impact would be diluted. So we set out to act like a film distributer, with an a-list sponsor.",
        "This approach guided every element of our plan, from goal setting, audience segmentation, brokering a national premiere on prime-time TV, orchestrated an omnipresent cross platform promotional blitz and even down to individual sequential ooh site selection to ensure ‘where there’s A Fire Inside, there’s NRMA Insurance’."]}
        layout="left"
      />

      <ImageText
        imageUrl="/assets/images/TheExecution.png"
        altText="The Execution"
        title="The Execution"
        text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, qua."]}
        layout="right"
      />  
      
      </motion.div>

    </Parallax>
  );
};

export default PlanningExcellence;