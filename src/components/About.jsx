// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import aboutProfile from '../assets/about-me-profile.jpg';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-card transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image */}
          <motion.div 
            variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
            className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
          >
            <motion.img
              src={aboutProfile}
              alt="Coding setup illustration"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
            className="lg:w-2/3 text-lg space-y-4"
          >
            <p>
              I am <strong className='text-primary dark:text-secondary'>John Rohith Midhun J</strong>, a passionate <strong className='text-primary dark:text-secondary'>MERN Stack Developer</strong> with experience in building dynamic web applications. I enjoy creating intuitive and responsive user interfaces while ensuring efficient backend functionality.
            </p>
            <p>
              My journey involves working across the full stack—from designing pixel-perfect UIs with <strong className='font-semibold'>React.js</strong> and <strong className='font-semibold'>Tailwind CSS</strong> to developing robust APIs with <strong className='font-semibold'>Node.js</strong> and <strong className='font-semibold'>Express.js</strong>, backed by <strong className='font-semibold'>MongoDB</strong>.
            </p>
            <p>
              I am currently pursuing a B.E. in Computer Science and constantly seek opportunities to learn new technologies and contribute to challenging projects. Let's build something amazing!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;