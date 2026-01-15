import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education');

    const toggleTab = (tab) => setActiveTab(tab);

    return (
        <section id="qualification" className="py-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Qualification</h2>
                    <span className="text-gray-500 dark:text-gray-400">My personal journey</span>
                </motion.div>

                <div className="flex justify-center space-x-8 mb-12">
                    <button
                        onClick={() => toggleTab('education')}
                        className={`flex items-center text-xl font-medium transition-colors ${activeTab === 'education' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                    >
                        <GraduationCap className="mr-2" size={24} />
                        Education
                    </button>
                    <button
                        onClick={() => toggleTab('experience')}
                        className={`flex items-center text-xl font-medium transition-colors ${activeTab === 'experience' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}
                    >
                        <Briefcase className="mr-2" size={24} />
                        Experience
                    </button>
                </div>

                <div className="relative">
                    {activeTab === 'education' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            {/* Timeline Item 1 */}
                            <div className="flex gap-4">
                                <div className="w-1/2 text-right">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Computer Science</h3>
                                    <span className="text-gray-500 dark:text-gray-400">GLA University</span>
                                    <div className="flex items-center justify-end text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2023 - 2027
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="flex gap-4">
                                <div className="w-1/2"></div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Intermediate</h3>
                                    <span className="text-gray-500 dark:text-gray-400">Our Lady Of Fatima school</span>
                                    <div className="flex items-center text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2023
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="flex gap-4">
                                <div className="w-1/2 text-right">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">High school</h3>
                                    <span className="text-gray-500 dark:text-gray-400">Our Lady Of Fatima school</span>
                                    <div className="flex items-center justify-end text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2021
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    {/* Last item line can be shorter or hidden if desired */}
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'experience' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            {/* Timeline Item 1 - Operations Head */}
                            <div className="flex gap-4">
                                <div className="w-1/2 text-right">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Operations Head</h3>
                                    <span className="text-gray-500 dark:text-gray-400">Baoiam Innovations Pvt Ltd</span>
                                    <div className="flex items-center justify-end text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2025
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            {/* Timeline Item 2 - Web Developer */}
                            <div className="flex gap-4">
                                <div className="w-1/2"></div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer</h3>
                                    <span className="text-gray-500 dark:text-gray-400">Baoiam Innovations Pvt Ltd</span>
                                    <div className="flex items-center text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2025
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Item 3 - JOVAC-Azure */}
                            <div className="flex gap-4">
                                <div className="w-1/2 text-right">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">JOVAC-Azure with Gen AI</h3>
                                    <span className="text-gray-500 dark:text-gray-400">Certification</span>
                                    <div className="flex items-center justify-end text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> May - July 2025
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            {/* Timeline Item 4 - Infosys */}
                            <div className="flex gap-4">
                                <div className="w-1/2"></div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Infosys certified network programme</h3>
                                    <span className="text-gray-500 dark:text-gray-400">Infosys</span>
                                    <div className="flex items-center text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2024
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Item 5 - IIT Kharagpur */}
                            <div className="flex gap-4">
                                <div className="w-1/2 text-right">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software engineering programme</h3>
                                    <span className="text-gray-500 dark:text-gray-400">IIT Kharagpur</span>
                                    <div className="flex items-center justify-end text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> 2024
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            {/* Timeline Item 6 - Python Developer */}
                            <div className="flex gap-4">
                                <div className="w-1/2"></div>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full z-10"></div>
                                    <div className="w-0.5 h-full bg-blue-200 dark:bg-gray-700 absolute top-3"></div>
                                </div>
                                <div className="w-1/2 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Python developer (virtual)</h3>
                                    <span className="text-gray-500 dark:text-gray-400">InternPe</span>
                                    <div className="flex items-center text-sm text-gray-400 dark:text-gray-400 mt-1">
                                        <Calendar size={14} className="mr-1" /> June - July 2024
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Qualification;
