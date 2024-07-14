import React from 'react';
import { motion } from 'framer-motion';
import contributions from '../data/contributions';

const OpenSource = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="text-center mt-20 p-6 bg-[#171923] text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <p className="text-3xl font-bold mb-6">Open Source Contributions</p>
      <p className="mb-12">Here are some of the open source projects I've contributed to.</p>
      <motion.div
        className="flex flex-wrap justify-center items-start mb-10"
        variants={containerVariants}
      >
        {contributions.map((contribution, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col items-center p-4"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-[#2D3748]"
              whileHover={{ rotate: 3 }}
              whileTap={{ rotate: -3 }}
            >
              <img
                src={contribution.image}
                alt={contribution.title}
                className="object-cover w-full h-40 sm:h-56 md:h-64"
              />
            </motion.div>
            <h1 className="text-2xl mt-4 mb-2">{contribution.title}</h1>
            <p className="text-lg mb-4">{contribution.description}</p>
            <div className="flex gap-2">
              <motion.a
                href={contribution.livelink}
                target="_blank"
                className="text-sm px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Live
              </motion.a>
              <motion.a
                href={contribution.githublink}
                target="_blank"
                className="text-sm px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Source
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OpenSource;
