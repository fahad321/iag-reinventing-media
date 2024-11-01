import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <motion.div 
      className="column-test min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-center px-4"
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
          className="text-5xl md:text-5xl font-bold mb-6"
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
          For the first six-months of our relationship, IAG received c-suite talent as they’re day-to-day team to ensure seamless transition, platinum tier product delivery and relationship access to make the impossible possible.
        </motion.p>

        <div id="container">
          <div className="portrait1"></div> 
          <div className="portrait2"></div> 
          <div className="portrait3"></div> 
          <div className="portrait4"></div>  
        </div>

        <div id="container">
          <p>90% Initiative CEO<br></br>10% IAG Relationship Lead</p>
          <p>50% Initiative Managing Director<br></br>50% IAG Client Director</p>
          <p>50% Initiative CSO<br></br>50% IAG Strategy Director</p>
          <p>70% Initiative COO<br></br>30% IAG Transition Lead</p>
        </div>


        <motion.p 
          className="text-l md:text-l mb-8 margin-test"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          This was a critical solution for IAG as they were embarking on the most transformative year in the brand’s history. From expanding into new markets, launching entirely new insurance brands to delivering their most creatively ambitious work to date they needed a capable media partner.
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-5xl font-bold mb-6 margin-test"
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
          <hr className="line1"></hr>
          <hr className="line2"></hr>
          <hr className="line3"></hr>
          <hr className="line4"></hr>

        <div id="container">
          <div className="timelineLeft"></div> 
        </div>

        <div id="container">
          <p className="descpLeft">Took over and began rewriting <br></br>the comms strategy to launch <br></br>their most ambitious marketing <br></br>campaign to date.</p>
        </div>

        <div id="container">
          <div className="timelineRight"></div> 
        </div>

        <div id="container">
          <p className="descpRight">Joined a taskforce responsible <br></br>for building a new youth <br></br>insurance brand (to launch in &gt; 6 months).</p>
        </div>

        <div id="container">
          <div className="timelineLeft"></div> 
        </div>

        <div id="container">
          <p className="descpLeft">Collaborated on a new bespoke IMC <br></br> process and key artifacts to <br></br>streamline agency village delivery.</p>
        </div>

        <div id="container">
          <div className="timelineRight"></div> 
        </div>

        <div id="container">
          <p className="descpRight">Tasked with launching a legacy brand <br></br> into brand new markets.</p>
        </div>
        </div>
        <motion.h1 
          className="text-5xl md:text-5xl font-bold mb-6 margin-test2"
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
          No annual plan, no consistent communications planning architecture, no integrated marketing process, non-competitive investment, no single source of effectiveness, entering new markets for the first time in 100 years
          <br></br>
          <br></br>…and a public announcement of record growth targets – public 1m customers.
        </motion.p>

      </div>
    </motion.div>
  );
};

export default HeroSection;