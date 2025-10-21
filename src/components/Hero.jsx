// src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import profile from '../assets/rohith-profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-dark-bg transition-colors duration-500">
      <motion.div
        className="container mx-auto text-center lg:flex lg:text-left lg:items-center lg:space-x-12 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image/Avatar */}
        <motion.div variants={itemVariants} className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/3 flex justify-center">
          <motion.img
            src={profile}
            alt="John Rohith Midhun J Avatar"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-primary dark:border-secondary"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="lg:w-2/3">
          <motion.p variants={itemVariants} className="text-xl text-primary dark:text-secondary font-semibold mb-2">
            Hello, I'm
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-white">
            John Rohith Midhun J
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-light text-gray-700 dark:text-gray-300 mb-6">
            MERN Stack Developer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 mb-10">
            "Building dynamic, responsive web experiences with React and the MERN stack."
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <Link to="projects" smooth={true} duration={500}>
                View Projects
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-primary dark:text-secondary border-2 border-primary dark:border-secondary rounded-lg hover:bg-primary/10 dark:hover:bg-secondary/10 transition-colors duration-300"
            >
              <Link to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;