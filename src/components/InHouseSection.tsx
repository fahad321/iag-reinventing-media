// src/components/InHouseSection.tsx
import React from 'react';
import TextBlock from './TextBlock';
import Layout from './Layout';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import ImageBlock from './ImageBlock';
import ImageText from './ImageText';

interface OptimizationPoint {
    title: string;
    content: string;
}

const InHouseSection: React.FC = () => {
    const optimizationPoints: OptimizationPoint[] = [
        {
            title: "Account Leadership Transition",
            content: "As mentioned, we provided c-suite account leadership for first six months of the contract. Whilst highly beneficial, this created an ‘end point’ where the volume of visibility switched to day-to-day team. This switch required an adjustment period, to avoid this in the future we plan to hire Group Account Directors earlier in the process and co-pilot leadership to maintain momentum post transition."
        },
        {
            title: "Cloud-Based Collaboration",
            content: "Originally collaboration was highly manual; static PowerPoint documents, weekly integration meetings and physical brainstorming sessions. Over time we transitioned to cloud-based collaboration working in secure sharepoint systems to build recommendations together in real time. Whilst far more efficient there was still a gap around collaborating in the media platforms and media plan itself; which we will address at Accenture."
        },
        {
            title: "Siloed Budget Setting",
            content: "By nature of IPG holding the rates and the media planning tools, budget setting was established by us and cascaded to the in-house teams. Whilst every effort to collaborate and sense check budgets was made, friction was created via this process (especially with in-flight optimisations). Open access to planning tools and an integrated view of performance will be core to the Accenture proposition to avoid such challenges."
        },
        {
            title: "Expand Beyond Marketing",
            content: "Finally, whilst we established deep working relationship with the in-house performance team and broader marketing unit (e.g. customer analytics) our opportunity to impact the broader business was limited. Over time we built enough trust to be invited into NPD projects and business growth forums, but it wasn’t until 2023/4 where exposure to the broader business became standard… with the appointment of Accenture Song as end-to-end experience leads."
        }
    ];
    return (
        <div className="in-house-section ">
            {/* Full size image with text overlay */}
            <div className="relative h-screen flex flex-col my-8">
                {/* Image Section - Half Height */}
                <div className="relative h-1/2">
                    <img
                        src="/assets/images/Picture 12.png"
                        alt="Innovative Media"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay that bleeds into the bottom text section */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
                </div>

                {/* Text Section with Background */}
                <div className="relative h-1/2 bg-black flex items-center justify-center">
                    <div className="px-8 md:px-16 max-w-3xl text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl text-white font-bold mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Reinventing Media Takes a Village
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Working in a hybrid structure with an 
                            in-house media and production team is 
                            fast becoming the operational norm in modern business. 
                            Our relationship with IAG’s client-side media 
                            team represents best practice to get the most 
                            out of collective efforts while minimising inefficiency. 
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className='my-16 mx-20'>
            <TextBlock titleSize='text-5xl' titleColor='text-[#A800FF]' title="One Team, One Dream." content='Below are a few ways we ensured seamless delivery of a truly integrated experience.' />
            </div>
            <div className='max-w-[1480px] mx-auto px-16'>
            <Layout cols="grid-cols-3" gap="gap-8">
                <TextBlock
                    title='IMC PROCESS OVERHAUL'
                    titleSize='text-3xl'
                    titleColor='text-[#A800FF]'
                    content="Custom-built an integrated process,
                    from group briefing sessions, stages andkey approval gates and integrated response and optimisation forums."
                />
                <TextBlock
                    title='INTEGRATED TEMPLATES'
                    titleSize='text-2xl'
                    titleColor='text-[#A800FF]'
                    content="Co-created a bank of templates and frame-
                    works to encourage active collaboration
                    at every stage of our process; resulting in
                    seamless, not ‘baton passed’, outputs."
                />
                <TextBlock
                    title='UNIFIED MEASUREMENT'
                    titleSize='text-2xl'
                    titleColor='text-[#A800FF]'
                    content="Worked with IAG’s customer analyticsand in-house media team to builda single-source-of-truth measurementframework to unify business & media goals."
                />
                <TextBlock
                    title='CO-HIRING OF TALENT'
                    titleSize='text-2xl'
                    titleColor='text-[#A800FF]'
                    content="We co-wrote job descriptions and ledthe recruitment process of IAG mediatalent; and IAG were as involved in our team hiring to ensure aligned values."
                />

                <TextBlock
                    title='OPEN-SOURCED TRAINING'
                    titleSize='text-2xl'
                    titleColor='text-[#A800FF]'
                    content='Built a unified learning & development
                    program covering platform best practice,
                    accreditation and inspiration forums toensure the whole village is skilled.'
                />
                <TextBlock
                    title='MEDIA VISIBILITY'
                    titleSize='text-2xl'
                    titleColor='text-[#A800FF]'
                    content='Unlike other agencies who safeguardrelationships, IAG’s in-house mediateam were invited to all publisher briefing sessions & workshops.'
                />
            </Layout>
            </div>
            <div className="in-house-section  text-white my-8">
                <Parallax className="py-24 md:py-24 px-8 md:px-16" speed={-10}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <TextBlock
                            titleSize='text-4xl'
                            titleColor='text-[#A800FF]'
                            title="Reinvention is Iterative."
                        />

                        <p className="text-lg mb-12 text-gray-300 mt-6">
                        Whilst we’re incredibly proud of the collaboration we built, we also identified several key optimisations to push the possibilities further. A few examples include:
                        </p>

                        <div className="space-y-12">
                            {optimizationPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="border-l-4 border-[#A800FF] pl-6"
                                >
                                    <h3 className="text-2xl font-bold text-[#00DCFF] mb-4">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {point.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Parallax>
            </div>
            <ImageBlock src="/assets/images/Picture 11.jpg" alt="Phase Planning" />
            <ImageText
                imageUrl="/assets/images/Picture 13.png"
                altText="AFI Ad Bundle"
                title="New Leadership"
                text={[
                    "In 2023 IAG welcomed in a new Chief Customer and Marketing Officer, with a vastly expanded remit. This required significant change management on both the client and agency side and reset the scoreboard on the impact we had on their business thus far."
                ]}
                layout="right"
            />
            <ImageText
                imageUrl="/assets/images/Picture 14.png"
                altText="AFI Ad Bundle"
                title="New(ish) Village"
                text={[
                    "With a new vision and approach to marketing, the first external move IAG made was to appoint Accenture Song as their end-to-end customer experience agency. Previously agencies were responsible for making ads and placing them, whereas now they are tasked with digital maturity acceleration, customer marketing, CX strategy and innovation road-mapping to name a few.",
                    "This deepens our collaboration with IAG, going beyond just their in-house media team to every single function of their business."
                ]}
                layout="left"
            />
            <ImageText
                imageUrl="/assets/images/Picture 15.png"
                altText="AFI Ad Bundle"
                title="New Identity"
                text={[
                    "In 2024 NRMA Insurance not only launched a new brand campaign but an entirely new business identity. This reflects a stepchange in the business to become a leader in HELP not just insurance.",
                    "To propel this new proposition into the collective conscience of Australia we helped NRMA Insurance become official broadcast sponsors of the Paris Olympic Games – out-negotiating (not simply outspending) IOC partners Allianz and previous tier one broadcast sponsors Suncorp. This was alongside a multi-channel marketing blitz that saw A Help Company become the highest performing brand relaunch to date."]}
                layout="right"
            />
        </div>
    );
};

export default InHouseSection;