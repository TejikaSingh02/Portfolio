import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, ChevronsDown } from 'lucide-react';

const Skills = () => {
    const skillsData = {
        fullstack: [
            { name: 'HTML', level: 'Intermediate' },
            { name: 'CSS', level: 'Intermediate' },
            { name: 'JavaScript', level: 'Intermediate' },
            { name: 'Git', level: 'Intermediate' },
            { name: 'React', level: 'Intermediate' },
            { name: 'Angular', level: 'Intermediate' },
            { name: 'Nextjs', level: 'Intermediate' },
            { name: 'Node.js', level: 'Intermediate' },
        ],
        backend: [
            { name: 'ExpressJS', level: 'Intermediate' },
            { name: 'NodeJS', level: 'Basic' },
            { name: 'MongoDB', level: 'Intermediate' },
            { name: 'SQL', level: 'Basic' },
            { name: 'Java', level: 'Intermediate' },
        ],
        machineLearning: [
            { name: 'Python', level: 'Intermediate' },
            { name: 'Natural Language Processing', level: 'Basic' },
            { name: 'Jupyter Notebook (Implementation)', level: 'Intermediate' },
            { name: 'Google Colab (Implementation)', level: 'Intermediate' },
            {
                name: 'Algorithms',
                level: 'Intermediate',
                subSkills: [
                    'Linear Regression',
                    'Logistic Regression',
                    'Supervised Learning',
                    'Unsupervised Learning',
                    'Time-series prediction'
                ]
            },
        ]
    };

    const SkillGroup = ({ title, skills }) => (
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-center text-white mb-6">{title}</h3>
            <div className="grid grid-cols-1 gap-y-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-start">
                        <BadgeCheck className="text-white mt-1 flex-shrink-0" size={18} />
                        <div className="ml-3 w-full">
                            <h4 className="font-medium text-white leading-none">{skill.name}</h4>
                            <span className="text-xs text-gray-400 mt-1 block">{skill.level}</span>

                            {/* Render sub-skills if they exist (specifically for Algorithms) */}
                            {skill.subSkills && (
                                <div className="mt-2 pl-2 space-y-1">
                                    {skill.subSkills.map((sub, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <BadgeCheck className="text-white mr-2" size={12} />
                                            <span className="text-xs text-gray-300">{sub}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
                    <span className="text-gray-500 dark:text-gray-400">My technical level</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <SkillGroup title="Fullstack Developer" skills={skillsData.fullstack} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <SkillGroup title="Backend Developer" skills={skillsData.backend} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <SkillGroup title="Machine Learning Developer" skills={skillsData.machineLearning} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
