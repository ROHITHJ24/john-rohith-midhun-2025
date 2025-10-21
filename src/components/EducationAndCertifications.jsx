// src/sections/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BadgeCheckIcon } from '@heroicons/react/outline';

const educationData = [
  {
    title: 'B.E. in Computer Science',
    institution: 'KSR Institute for Engineering and Technology',
    years: '2022 – 2026',
    icon: AcademicCapIcon,
  },
];

const certificationsData = [
  { name: 'Zscaler', source: 'Zscaler', icon: BadgeCheckIcon },
  { name: 'Google DSC Gen AI Study Jam', source: 'Google DSC', icon: BadgeCheckIcon },
  { name: 'Cybersecurity & Ethical Hacking Workshop', source: 'AICTE', icon: BadgeCheckIcon },
];

const Card = ({ title, institution, years, icon: Icon, source }) => {
  const isCert = !!source;
  
  return (
    <motion.div
      className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg border-t-4 border-primary dark:border-secondary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start space-x-4">
        <Icon className="w-8 h-8 text-primary dark:text-secondary flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{title}</h3>
          {isCert ? (
            <p className="text-gray-600 dark:text-gray-400 font-medium">Issued by: {source}</p>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{years}</p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const EducationAndCertifications = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Education & Certifications
        </motion.h2>

        {/* Education Section */}
        <div id="education-content" className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 border-b-2 border-primary/50 dark:border-secondary/50 pb-2">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <Card key={index} {...edu} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div id="certifications">
          <h3 className="text-3xl font-semibold mb-6 border-b-2 border-primary/50 dark:border-secondary/50 pb-2">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <Card key={index} {...cert} title={cert.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertifications;