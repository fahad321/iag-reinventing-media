import React from 'react';
import { motion } from 'framer-motion';
import ImageText from '../components/ImageText';

const HeroSection: React.FC = () => {
  return (
    <motion.div 
      className="column-test min-h-screen bg-gradient-to-r  flex items-center justify-center text-white text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
      <motion.p 
          className="text-m md:text-m mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          To achieve this we bulit a bespoked team powered by
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-5xl font-bold mb-6 text-[#A800FF]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          C-Suite Account Leadership.
        </motion.h1>

        <motion.p 
          className="text-l md:text-l mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          For the first six-months of our relationship, IAG received C-suite talent as their day-to-day team to ensure seamless transition, platinum-tier product delivery and relationship access, to make the impossible, possible.
        </motion.p>

        <div id="container1">
          <div>
            <img src="assets/images/Portrait1.jpg"/>
          </div>
          <div>
            <img src="assets/images/Portrait2.jpg"/>
          </div> 
          <div>
            <img src="assets/images/Portrait3.jpg"/>
          </div> 
          <div>
            <img src="assets/images/Portrait4.jpg"/>
          </div> 
        </div>

        <div id="container1">
          <p className="text-[#A800FF]">90% Initiative CEO<br></br>10% IAG Relationship Lead</p>
          <p className="text-[#A800FF]">50% Initiative Managing Director<br></br>50% IAG Client Director</p>
          <p className="text-[#A800FF]">50% Initiative CSO<br></br>50% IAG Strategy Director</p>
          <p className="text-[#A800FF]">70% Initiative COO<br></br>30% IAG Transition Lead</p>
        </div>


        <motion.p 
          className="text-l md:text-l mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          This was a critical solution for IAG as they were embarking on the most transformative year in the brand’s history. From expanding into new markets, launching entirely new insurance brands to delivering their most creatively ambitious work to date, they needed an ambitious and capable media partner.
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-5xl font-bold mb-6 margin-test text-[#A800FF]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A Fast Start
        </motion.h1>

        <motion.p 
          className="text-m md:text-m mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Emboldened with an ambition to become the ‘mayors of the agency village’ we immediately embedded ourselves as the lead integration agency. A process that began before a finalised contract was even signed. 
        </motion.p>

        <div className="timeline">
          <div className="vl"></div>

        <div id="container">
          <div className="timelineLeft">
            <p className="four-weeks">4<br></br>WEEKS UNTIL<br></br>ONBOARDING</p>
            <hr className="line1"></hr>
            <img src="assets/images/Timeline_AFI.gif"/>
          </div> 
        </div>

        <div id="container">
          <p className="descpLeft">Took over and began rewriting <br></br>the comms strategy to launch <br></br>their most ambitious marketing <br></br>campaign to date.</p>
        </div>

        <div id="container">
          <div className="timelineRight">
            <p className="three-weeks">3<br></br>WEEKS UNTIL<br></br>ONBOARDING</p>
            <hr className="line2"></hr>
            <img src="assets/images/Timeline_CarInsurance.jpg"/>
          </div> 
        </div>

        <div id="container">
          <p className="descpRight">Joined a taskforce responsible <br></br>for building a new youth <br></br>insurance brand (to launch in &lt;6 months).</p>
        </div>

        <div id="container">
          <div className="timelineLeft">
            <p className="four-weeks">2<br></br>WEEKS UNTIL<br></br>ONBOARDING</p>
            <hr className="line1"></hr>
            <img src="assets/images/Timeline_IMCProcess.png"/>
          </div> 
        </div>

        <div id="container">
          <p className="descpLeft">Collaborated on a new bespoke IMC <br></br> process and key artifacts to <br></br>streamline agency village delivery.</p>
        </div>

        <div id="container">
          <div className="timelineRight">
            <p className="one-week">1<br></br>WEEKS UNTIL<br></br>ONBOARDING</p>
            <hr className="line2"></hr>
            <img src="assets/images/Timeline_NRMA.jpg"/>
          </div> 
        </div>

          <div id="container">
            <p className="descpRight">Tasked with launching a legacy brand <br></br> into brand new markets.</p>
          </div>
        </div>

        <motion.h1 
          className="text-5xl md:text-5xl font-bold mb-6 margin-test2 text-[#A800FF]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A Complex Business 
          <br></br>In Need Of Orchestration
        </motion.h1>

        <motion.p 
          className="text-m md:text-m mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
        No annual media strategy, no consistent communications planning architecture, no integrated marketing process, no single source of effectiveness, and uncompetitive marketing investment.
        <br></br>
        <br></br>
        For IAG to achieve newly announced record growth targets they required rapid restructuring of their planning.

        </motion.p>

        <ImageText
        imageUrl="/assets/images/AnnualPortfolioPlanning.png"
        altText="Annual portfolio Planning"
        title="Annual Portfolio Planning"
        text={["In under 3 months we collaborated with IAG’s marketing and in-house media team to build a robust annual media approach for their entire portfolio.",
        "This not only helped prioritise and focus their approach to market, but it spotlighted critical gaps and untapped opportunities – from brand partnerships, digital maturity, media innovation and, most importantly, quantifying marketing’s impact on business growth."]}
        layout="left"
      />

      <ImageText
        imageUrl="assets/images/FullFunnelAnalytics.png"
        altText="Full Funnel Analytics"
        title="Full Funnel Analytics"
        text={["To enable better attribution of marketing performance and forecast investment required for future growth, we built a custom full-funnel modelling suite. Unlike MMM that tends to carry a short-term bias, full funnel modelling helps quantify and calibrate the optimal investment mix across each stage of the funnel.",
        "It also helps quantify the impact of any bottlenecks in the funnel to help strategic task prioritisation. Four independent models were built to cater to NRMA Insurance’s live markets (NSW and QLD) and insurance books (Home and Motor) with a roadmap to expand in line with the brand’s national rollout."]}
        layout="right"
      />


      <ImageText
        imageUrl="/assets/images/CaseforSpendBoardPres.png"
        altText="Case for Spend Board Presentations"
        title="Case for Spend Board Presentations"
        text={["With the brand on the verge of entering new markets for the first time in their 100 year history, diversifying into new categories (single item, home loans) and launching entirely new insurance brands, IAG needed the right marketing investment to match their ambitious growth target.",
        "Using our analytics as a foundation, we collaborated with IAG’s marketing team to build a successful case-for-spend, unlocking an incremental +$32M to invest in the portfolio’s growth."]}
        layout="left"
      />
      </div>
    </motion.div>
  );
};

export default HeroSection;