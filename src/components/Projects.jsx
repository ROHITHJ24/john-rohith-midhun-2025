// src/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';
import buildMyRig from '../assets/buildMyRig.jpg';
import ReconAI from '../assets/ReconAI.png';
import ExpenseTracker from '../assets/ExpenseTracker.png';
import WeatherApp from '../assets/WeatherApp.png';

const projectsData = [
  {
    title: 'Build My Rig',
    description: 'PC building website with compatibility check, a personal project currently under development.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Firebase'],
    demoLink: 'https://build-my-rig-rohith.netlify.app/',
    githubLink: 'https://github.com/ROHITHJ24/build-my-rig',
    image: buildMyRig
},
  {
    title: 'RECON AI OSINT Tool',
    description: 'It is an AI-powered OSINT tool for gathering information from various online sources.',
    technologies: ['React.js', 'Tailwind CSS', 'Python', 'Certificate Transparency Log', 'Firebase'],
    demoLink: 'https://recon-osint.netlify.app/',
    githubLink: '',
    image: ReconAI
},
  {
    title: 'Expense Tracker',
    description: 'A robust expense tracker for students and working professionals to manage finances.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    demoLink: 'https://ai-expense-tracker-rohith.netlify.app/',
    githubLink: 'https://github.com/ROHITHJ24/codezap25-Team-Zenitsu',
    image: ExpenseTracker
},
  {
    title: 'Weather App',
    description: 'A responsive weather application using the OpenWeather API to display current conditions.',
    technologies: ['React.js', 'Tailwind CSS', 'OpenWeather API'],
    demoLink: 'https://weatherapp-john-rohith-midhun.netlify.app/',
    githubLink: 'https://github.com/ROHITHJ24/WeartherApp2',
    image: WeatherApp
    },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white dark:bg-dark-card rounded-xl shadow-xl overflow-hidden group border border-gray-100 dark:border-gray-700"
    >
      {/* Image Container with Hover Effect */}
      <div className="h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-primary dark:text-secondary">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs font-medium px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            <ExternalLinkIcon className="w-5 h-5" />
            <span>Live Demo</span>
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 border-2 border-primary dark:border-secondary text-primary dark:text-secondary font-semibold rounded-lg hover:bg-primary/10 dark:hover:bg-secondary/10 transition-colors duration-300"
          >
            <CodeIcon className="w-5 h-5" />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-card transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;