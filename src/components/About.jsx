import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, FileText, Headphones } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
                    <span className="text-gray-500 dark:text-gray-400">My Introduction</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Optional or keep simple */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        {/* Using a placeholder or the same abstract blob but different */}
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <img src="/profile.jpg" alt="Tejika Singh" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <Award className="mx-auto text-blue-600 mb-2" size={24} />
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Experience</h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">1+ Years</span>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <Briefcase className="mx-auto text-blue-600 mb-2" size={24} />
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Completed</h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">10+ Projects</span>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <Headphones className="mx-auto text-blue-600 mb-2" size={24} />
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Support</h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">Online 24/7</span>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Frontend developer, with extensive knowledge and good experience, working in web technologies and UI / UX design, delivering quality work.
                        </p>

                        <a
                            href="/path-to-cv.pdf"
                            download
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Download CV
                            <FileText size={20} className="ml-2" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
