// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-scroll';
import SocialIcon from './SocialIcon'; // <-- CORRECTED: Default import (no {})

const Footer = () => {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    // Define social media links and icons
    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/ROHITHJ24', icon: 'FaGithub' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/john-rohith-midhun/', icon: 'FaLinkedin' },
        { name: 'Twitter', href: '#', icon: 'FaTwitter' },
        { name: 'Email', href: 'mailto:johnrohithmidhunn@gmail.com', icon: 'FaEnvelope' },
    ];

    const navLinks = [
        { name: 'Home', target: 'hero' },
        { name: 'About', target: 'about' },
        { name: 'Skills', target: 'skills' },
        { name: 'Projects', target: 'projects' },
        { name: 'Contact', target: 'contact' },
    ];

    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-card transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* 1. Navigation Links */}
                <nav className="flex space-x-6 mb-4 md:mb-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.target}
                            smooth={true}
                            duration={500}
                            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-secondary cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* 2. Social Media Icons */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    {socialLinks.map((link) => (
                        <SocialIcon 
                            key={link.name}
                            href={link.href}
                            iconName={link.icon} // Pass icon name as a prop
                            name={link.name}
                        />
                    ))}
                </div>

                {/* 3. Copyright */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    &copy; {currentYear} John Rohith Midhun J. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;