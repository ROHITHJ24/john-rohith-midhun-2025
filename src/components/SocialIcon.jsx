// src/components/SocialIcon.jsx
import React from 'react';
import * as FaIcons from 'react-icons/fa'; // Import all Font Awesome icons

/**
 * Renders a clickable social media icon.
 *
 * @param {object} props - Component props.
 * @param {string} props.href - The URL to link to.
 * @param {string} props.iconName - The name of the icon (e.g., 'FaGithub').
 * @param {string} props.name - The accessible name for the link.
 */
const SocialIcon = ({ href, iconName, name }) => {
    // Get the icon component dynamically from the FaIcons object
    const IconComponent = FaIcons[iconName];

    if (!IconComponent) {
        // Fallback for missing icon to prevent crashes
        console.error(`Icon component not found for: ${iconName}`);
        return null;
    }

    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-secondary transition-colors duration-200"
        >
            <IconComponent className="w-6 h-6" />
        </a>
    );
};

// Use a DEFAULT EXPORT to match the import in Footer.jsx
export default SocialIcon;