import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import convoxImg from '../assets/convox.png';
import titanicImg from '../assets/titanic.png';
import baoiamImg from '../assets/baoiam.png';
import luminaImg from '../assets/lumina.png';

const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'ConvoX',
            link: 'https://github.com/TejikaSingh02/ConvoX',
            description: 'Modern real-time chat application featuring a sleek dark pastel UI, typing indicators, and message persistence.',
            image: convoxImg
        },
        {
            id: 2,
            title: 'Titanic Survey Prediction',
            link: 'https://github.com/TejikaSingh02/Titanic-Survey-Prediction',
            description: 'Interactive machine learning application that predicts passenger survival probability using advanced data analysis.',
            image: titanicImg
        },
        {
            id: 3,
            title: 'Baoiam Innovations',
            link: 'http://www.baoiam.com/',
            description: 'Official website for Baoiam Innovations, an ed-tech company shaping the future of learning and innovation.',
            image: baoiamImg
        },
        {
            id: 4,
            title: 'Lumina E-commerce Website',
            link: 'https://github.com/TejikaSingh02/Lumina',
            description: 'A responsive static E-commerce website featuring a modern UI, product listings, and a seamless shopping experience.',
            image: luminaImg
        }
    ];

    return (
        <section id="work" className="py-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
                    <span className="text-gray-500 dark:text-gray-400">My recent work</span>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 max-w-2xl mx-auto w-full group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 text-center space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Topic: <span className="text-white normal-case text-lg">{project.title}</span></h3>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                    <span className="font-semibold text-gray-400">Link:</span>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="break-all border-b border-blue-400/30 hover:border-blue-400"
                                    >
                                        {project.link}
                                    </a>
                                    <ExternalLink size={14} />
                                </div>

                                <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">
                                    <span className="font-semibold text-gray-300">Description:</span> {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
