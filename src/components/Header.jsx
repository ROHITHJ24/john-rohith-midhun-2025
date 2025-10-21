// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full left-0 w-full bg-white dark:bg-dark-bg shadow-lg lg:hidden z-20"
    >
      <nav className="flex flex-col p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            smooth={true}
            duration={500}
            className="text-lg font-medium hover:text-primary dark:hover:text-secondary p-2 cursor-pointer transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );

  const ThemeToggle = () => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors duration-300"
      aria-label="Toggle Dark/Light Mode"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-indigo-700" />
      )}
    </motion.button>
  );

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo/Name */}
        <h1 className="text-2xl font-bold text-primary dark:text-secondary">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
           JOHN ROHITH MIDHUN J
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-lg font-medium relative group cursor-pointer"
            >
              {item.name}
              <motion.span
                className="absolute left-0 bottom-0 h-0.5 bg-primary dark:bg-secondary w-0 group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </nav>

        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </motion.header>
  );
};

export default Header;