import React from 'react';
import { motion } from 'framer-motion';
import { companies, institutions } from '../data/data';
import { skills } from '../data/skills';
import EduCard from '../utils/EduCard';
import Heading from '../utils/Heading';
import SkillCap from '../utils/SkiilCap';
import Intro from './Intro';

const About = () => {
    const introVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const techStackVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const educationVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    const introTransition = { duration: 0.6 };
    const techStackTransition = { duration: 0.7 };
    const educationTransition = { duration: 0.8 };

    return (
        <>
            <motion.section
                className='m-4 mt-20 lg:m-20 text-white font-mono'
                initial="hidden"
                animate="visible"
                variants={introVariants}
                transition={introTransition}
            >
                <div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
                    <Intro />
                </div>
            </motion.section>

            <motion.section
                className='m-4 mt-20 lg:m-20'
                initial="hidden"
                animate="visible"
                variants={techStackVariants}
                transition={techStackTransition}
            >
                <Heading text={'Tech Stack'} />
                <div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
                    {skills.map((item) => (
                        <SkillCap key={item.id} {...item} />
                    ))}
                </div>
            </motion.section>

            {/* <motion.section
                className='m-4 lg:m-20'
                initial="hidden"
                animate="visible"
                variants={techStackVariants}
                transition={techStackTransition}
            >
                <Heading text={'Career'} />
                <div className='space-y-4 mt-3 lg:px-5'>
                    {companies.map((edu) => (
                        <EduCard key={edu.id} {...edu} />
                    ))}
                </div>
            </motion.section> */}

            <motion.section
                className='m-4 lg:m-20'
                initial="hidden"
                animate="visible"
                variants={educationVariants}
                transition={educationTransition}
            >
                <Heading text={'Education'} />
                <div className='space-y-4 mt-3 lg:px-5'>
                    {institutions.map((edu) => (
                        <EduCard key={edu.id} {...edu} />
                    ))}
                </div>
            </motion.section>
        </>
    );
};

export default About;
