import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const iconVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      className="text-center mt-20 p-6 bg-[#171923] text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <p className="text-3xl font-bold mb-6">Contact Information</p>
      <p className="mb-12">Feel free to reach out to me through any of the platforms below.</p>
      <motion.div
        className="flex flex-wrap justify-center items-start mb-10"
        variants={containerVariants}
      >
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center p-4"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:connect.anudeepavula009@gmail.com"
            className="text-lg flex items-center"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="#" alt="Email" className="w-8 h-8 mr-4" />
            connect.anudeepavula009@gmail.com
          </motion.a>
        </motion.div>
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center p-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/anudeep009"
            target="_blank"
            className="text-lg flex items-center"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="#" alt="GitHub" className="w-8 h-8 mr-4" />
            github.com/anudeep009
          </motion.a>
        </motion.div>
        <motion.div
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center p-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/anudeepavula009/"
            target="_blank"
            className="text-lg flex items-center"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="#" alt="LinkedIn" className="w-8 h-8 mr-4" />
            linkedin.com/in/anudeepavula009
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
