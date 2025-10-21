// src/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaJava, FaCss3Alt, FaTrello, FaGitAlt, FaClipboardList, FaChartLine, FaRobot } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiFirebase, SiMysql } from 'react-icons/si';

const skillsData = [
    {
        category: 'Front-end',
        skills: [
            { name: 'React.js', icon: FaReact, color: 'text-blue-500' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
            { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
            { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-700' },
            { name: 'Java Swing', icon: FaJava, color: 'text-red-600' }
        ],
    },
    {
        category: 'Back-end',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
        ],
    },
    {
        category: 'Languages',
        skills: [
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
            { name: 'Java', icon: FaJava, color: 'text-red-600' }
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
            { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        ],
    },
    {
        category: 'Tools & Platforms',
        skills: [
            { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-500' },
            { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-600' },
            { name: 'Trello', icon: FaTrello, color: 'text-blue-400' },
            { name: 'Jira', icon: FaClipboardList, color: 'text-blue-600' }
        ],
    },
    // Added a placeholder for Methodologies/Practices
    {
        category: 'Methodologies & Practices',
        skills: [
            { name: 'Agile (Scrum)', icon: FaTrello, color: 'text-green-500' },
            { name: 'ICE Framework', icon: FaChartLine, color: 'text-yellow-600' },
            { name: 'Prompt Engineering', icon: FaRobot, color: 'text-indigo-500' },
        ],
    },
];

const SkillCard = ({ name, Icon, color }) => (
    <motion.div
        className="flex flex-col items-center p-4 bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default border border-gray-100 dark:border-gray-700"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
        {typeof Icon === 'function' ? (
            <Icon className={`w-10 h-10 ${color} mb-2`} />
        ) : (
            <div className={`w-10 h-10 flex items-center justify-center text-3xl font-bold rounded-lg ${color} bg-opacity-10 mb-2`}>{Icon}</div>
        )}
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{name}</p>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                >
                    Technical Skills
                </motion.h2>

                <div className="space-y-12">
                    {skillsData.map((category) => (
                        <div key={category.category}>
                            <h3 className="text-2xl font-semibold mb-6 border-b-2 border-primary/50 dark:border-secondary/50 pb-2">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                                {category.skills.map((skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        name={skill.name}
                                        Icon={skill.icon}
                                        color={skill.color}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;