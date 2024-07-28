import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {
  const imageVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.9 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="text-center mt-20 p-6 bg-[#171923] text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <p className="text-3xl font-bold mb-6">What have I created?</p>
      <p className="mb-12">
        Creating is always attractive and I tried to never deprive myself of this pleasure, here you can see the projects published by me.
      </p>
      <motion.div
        className="flex flex-wrap justify-center items-start mb-10"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex flex-col items-center p-4"
            variants={projectVariants}
          >
            <motion.div
              className="relative w-full overflow-hidden text-white shadow-lg bg-clip-border rounded-xl"
              variants={imageVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-40 sm:h-56 md:h-64"
              />
            </motion.div>
            <h1 className="text-2xl mt-4 mb-2">{project.title}</h1>
            <p className="mb-4">{project.description}</p>
            <div className="flex gap-2">
              <motion.a
                href={project.livelink}
                target="_blank"
                className="text-sm px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Live
              </motion.a>
              <motion.a
                href={project.githublink}
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

export default Projects;
