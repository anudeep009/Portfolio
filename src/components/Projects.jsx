'use client';

import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function Projects() {
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

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.9 },
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
        Creating is always attractive, and I tried to never deprive myself of this pleasure. Here you can see the projects published by me.
      </p>
      <motion.div
        className="space-y-12"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-center bg-[#1A202C] text-white rounded-xl overflow-hidden shadow-lg"
            variants={projectVariants}
          >
            
            <div className="w-full md:w-1/3 h-64">
              <img
                src={project.image}
                alt={project.title || 'Project Image'}
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="w-full md:w-2/3 p-6 space-y-4 text-left">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              
             
              {project.techStack && project.techStack.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#2D3748] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">No tech stack specified</p>
              )}

              
              <div className="flex gap-4">
                <motion.a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
