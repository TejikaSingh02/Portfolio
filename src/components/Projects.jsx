import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Code, Terminal, Brain, CheckCircle2 } from 'lucide-react';

const Projects = () => {
    const [activeCard, setActiveCard] = useState(null);

    const knowledgeArea = [
        {
            title: 'Web Developer',
            icon: <Code className="w-8 h-8 text-blue-500" />,
            description: 'Services like Full stack web developement projects',
            items: [
                'I develop full stack web application using MERN stack named Titanic survey Prediction website.',
                'Made E-commerce Website.',
                'I develop a chat application brushing up my MERN stack skills.',
                'Contributed to Baoiam Innovations Pvt Ltd website.'
            ]
        },
        {
            title: 'AIML Enthusiast',
            icon: <Brain className="w-8 h-8 text-blue-500" />,
            description: 'Services like Full stack web developement projects',
            items: [
                'I develop full stack web application using MERN stack named Titanic survey prediction.',
                'Actively studying Data Science methodologies.',
                'I develop a chat application brushing up my MERN stack skills.'
            ]
        },
        {
            title: 'Programmer',
            icon: <Terminal className="w-8 h-8 text-blue-500" />,
            description: 'Object-oriented Programming',
            items: [
                'Data Structures and Algorithm.',
                'Solved 200+ problems on coding platforms like LeetCode, HackerRank, CodeForces.',
                'Currently learning new things to boost my skills.'
            ]
        },
    ];

    return (
        <section id="portfolio" className="py-20 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Current Knowledge</h2>
                    <span className="text-gray-500 dark:text-gray-400">Always ready to learn new things!!👍</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {knowledgeArea.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 hover:shadow-2xl transition-all duration-300 group cursor-pointer h-64 flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            </div>

                            <button
                                onClick={() => setActiveCard(index)}
                                className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors mt-auto"
                            >
                                View More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeCard !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveCard(null)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-slate-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl z-10 mx-4 border border-slate-700"
                        >
                            <button
                                onClick={() => setActiveCard(null)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {knowledgeArea[activeCard].title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {knowledgeArea[activeCard].description}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {knowledgeArea[activeCard].items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
