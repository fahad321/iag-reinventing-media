import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ImageText from './ImageText';
import HeroBanner from './HeroBanner';

const DataLed: React.FC = () => {
  return (
    <Parallax className="min-h-screen bg-gradient-to-r flex items-center justify-center px-4" speed={-10}>
      <motion.div 
        className="text-center max-w-4xl"
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
        
        <HeroBanner
        videoSrc="/assets/videos/nrma_insurance_fifo_fields_updated.mp4"
        title="Expanding NRMA Across Australia."
        subtitle="2021 represented a milestone in NRMA Insurances’ 100 year history as they finally expanded the business into Western and South Australia to become a truly national brand.         "
        textPosition="left"
      />

        <ImageText
        imageUrl="assets/images/Aus_Map.png"
        altText="Map of Australia"
        title="A National Brand, Lived Locally"
        text={["Despite being one of Australia’s most iconic and valuable brands, NRMA Insurance is a nascent brand outside of NSW and QLD. The varying maturity by state requires portfolio style strategy for the Masterbrand (not just the sub-categories such as home, motor, small business etc).",
        "Adding complexity is the fact that Victoria remains a dark market due to a joint venture with RACV. This requires all national media activity to be suppressed or (in special circumstances) bleed needs to be minimised."]}
        layout="right"
      />

        <ImageText
        imageUrl="/assets/images/NRMA_Rollout.png"
        altText="NRMA Rollout"
        title="A Framework Accelerating Relevance"
        text={["To cater to the unique market profiles of NRMA Insurance all annual plans are built state-out, taking into consideration local insights, media consumption nuances and the strategic job to be done.",
        "To maximise total growth and set market weighting priorities, sophisticated customer profiling is conducted at an LGA level to determine NRMA Insurance’s share of high-value audiences and focus activation accordingly (grow/nurture/defend).",
        "Alongside this we built a custom partnership framework to help strategically spotlight key platforms and partners to build awareness and local affinity for the NRMA Insurance brand. This has been critical in delivering some of the most effective media and marketing activations to date – and continues to evolve each year with new opportunities. Some examples spotlighted below: "]}
        layout="left"
      />

      <ImageText
        imageUrl="/assets/images/Rollout_WA.png"
        altText="Western Australia Rollout"
        title="Western Australia"
        text={["Before 2021 NRMA Insurance did not exist in WA, and therefore we needed to rapidly build awareness of the brand, understanding of it’s promise of help and trust in its delivery. Research highlighted WA, more than any state, valued on-ground experience and staff.",
        "To prove we had locals on-ground ready to help we took over and staffed the iconic Telethon call-centre – driving a 23% increase in contacts (vs local insurance benchmarks). We complimented this with local media catering to market nuances such as sky-bound billboards targeting WA’s heavy FIFO population."]}
        layout="right"
      />   

      <ImageText
        imageUrl="assets/images/Rollout_SA.png"
        altText="South Australia Rollout"
        title="South Australia"
        text={["Like WA, NRMA Insurance was a new brand in SA. A community spirited state, research highlighted proving care for the public was key. We identified a small but treasured program serendipitously named The Help Awards – and we partnered with them to make it more anthemic, public and prized.",
        "We also saturated Adelaide (aka the ‘15min city’) one of the most heavily indexed commuter cities in the country with tram takeovers, total OOH buyouts and ‘helpful’ ambient media."]}
        layout="left"
      />

       <ImageText
        imageUrl="/assets/images/Rollout_NSW.png"
        altText="New South Wales Rollout"
        title="New South Wales"
        text={["As NRMA Insurance’s founding market, NSW represents a strong-hold for the brand. However with a constant influx of emerging competitors and rising category investment means they cannot afford to take for granted.",
        "To reinforce their leadership position and instil confidence in NRMA Insurance above all competitors we built a campaign that socially norms the brand and showcases depth of expertise. This didn’t just reverse declines but drove the brand back into growth."]}
        layout="right"
      />

        <ImageText
        imageUrl="assets/images/combined1.png"
        altText="Queensland Rollout"
        title="Queensland"
        text={["Despite being in Queensland for 27 years, and years of enacting textbook growth strategies (eSOV, heavy promotions, and even sponsoring the Broncos) NRMA Insurance is still seen as the ‘outside’ insurance brand with growth stagnant for decades.",
        "Understanding Queenslanders are fiercely pragmatic people, we set out to not just claim help but prove it. Using cultural analytics  we identified the #1 priority Queenslanders wanted help with; fixing the notorious Bruce Highway. Widely recognised in ‘world’s worst roads’ lists and responsible for thousands of incidents and deaths, Queenslanders needed an ally to get the government to take action.",
        "So we partnered with NewsCorp to launch a joint advocacy blitz calling for the Government to ‘Help our Highway’. A state-wide mission, activated with hyper-local relevance, this call to arms was unmissable – every masthead, every news site, every social feed was filled to drive the attention and action required. And to date it’s all working, for Queenslanders and the NRMA Insurance brand.",
        "Two Weeks post campaign the government released vital crash statistics; despite over two decades of petitioning prior.",
        "Half-a-Billion investment committed from Fed and state Govs.",
        "Increase in ”brand that cares about local communities.”",
        "Consideration (after decades of flatlined figures, and the highest ever non-customer consideration in Queensland)."]}
        layout="left"
      />
      
      </motion.div>

    </Parallax>
  );
};

export default DataLed;