import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Social Links (Left Column on Desktop) */}
                    <div className="md:col-span-1 flex md:flex-col justify-center space-x-6 md:space-x-0 md:space-y-6 order-3 md:order-1">
                        <a href="https://github.com/TejikaSingh02" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/tejika-singh-a965682a9/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:Tejikasingh1702@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>

                    {/* Text Content (Middle) */}
                    <div className="md:col-span-6 order-2 md:order-2 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Hi, I'm <br />
                            <span className="text-blue-600">Tejika Singh</span>
                        </motion.h1>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
                        >
                            Fullstack Developer
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
                        >
                            I design and code beautifully simple things, and I love what I do. Just simple like that!
                        </motion.p>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group"
                        >
                            Say Hello
                            <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>

                    {/* Profile Image (Right) */}
                    <div className="md:col-span-5 order-1 md:order-3 flex justify-center relative">
                        {/* Abstract Background Glow */}
                        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full transform scale-110"></div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-72 h-72 md:w-96 md:h-96"
                        >
                            {/* Aesthetic Gradient Border Frame */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1 shadow-2xl animate-spin-slow">
                                <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 border-4 border-transparent bg-clip-content"></div>
                            </div>

                            {/* Image Container */}
                            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-inner bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                <img src="/hero-profile.png" alt="Tejika Singh" className="w-full h-full object-cover" />
                            </div>

                            {/* Floating Badge (Optional Realistic Detail) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
                            >
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Open to Work</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Removed the blob style block as it's no longer needed */}
        </section>
    );
};

export default Hero;
