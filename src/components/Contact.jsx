"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { socialMedia } from '../data/data.js' 

export default function Contact() {

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  return (
    <div className="flex justify-center items-center min-h-screen dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 rounded-lg shadow-xl bg-gray-800"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Connect with me</h2>
        </div>
        <p className="text-gray-300 mb-6">Find me on these social platforms</p>
        <div className="space-y-4">
          {socialMedia.map(({ id, icon: Icon, label, url }) => (
            <motion.a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center justify-center w-full py-2 px-4 rounded-md text-white bg-gray-700 transition-colors duration-300"
            >
              <Icon className="mr-2 h-5 w-5" />
              {label}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="mailto:connect.anudeepavula009@gmail.com"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center w-full py-2 px-4 mt-6 rounded-md bg-green-600 text-white transition-colors duration-300"
        >
          <Mail className="mr-2 h-5 w-5" />
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  )
}
