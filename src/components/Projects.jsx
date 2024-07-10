import React from 'react';
import { motion } from 'framer-motion';
import ButtonComponent from '../utils/ButtonComponent';
import projects from '../data/projects';

const ProjectCard = ({ title, description, image }) => (
  <motion.div
    className="relative flex flex-col mt-6 text-white bg-gray-800 shadow-md bg-clip-border rounded-xl w-96 mx-auto"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="p-6">
      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h5>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {description}
      </p>
    </div>
    <div className="p-6 pt-0">
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Live link
      </button>
      <button
        className="ml-4 lign-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Github Link
      </button>
    </div>
  </motion.div>
);

const Projects = () => (
  <div className="mt-20 p-6 bg-[#171923] text-center text-white">
    <h1 className="text-3xl font-bold mb-6">What have I created?</h1>
    <p className="mb-12">Creating is always attractive and I tried to never deprive myself of this pleasure, here you can see the projects published by me.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
