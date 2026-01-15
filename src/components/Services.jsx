import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code, Smartphone, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            title: 'Product Tech',
            icon: <Layout className="w-8 h-8 text-blue-600" />,
            description: 'Bridging the gap between business requirements and technical implementation.',
            items: ['Technical Product Strategy', 'MVP Development', 'Tech Stack Consultation', 'System Architecture Planning'],
        },
        {
            title: 'Ui/Ux Designer',
            icon: <Code className="w-8 h-8 text-blue-600" />,
            description: 'Designing intuitive and aesthetically pleasing digital experiences.',
            items: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design Systems', 'Interactive Mockups (Figma)'],
        },
        {
            title: 'Web Developer',
            icon: <Smartphone className="w-8 h-8 text-blue-600" />,
            description: 'Building robust, responsive, and high-performance web applications.',
            items: ['Responsive Website Building', 'Frontend Development (React)', 'Backend Integration', 'Performance Optimization'],
        },
    ];

    return (
        <section id="services" className="py-20 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Services</h2>
                    <span className="text-gray-500 dark:text-gray-400">What I Offer</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                            <div className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                                <p className="mb-4">{service.description}</p>
                                <button
                                    onClick={() => setActiveService(index)}
                                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                >
                                    View More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Modal */}
            <AnimatePresence>
                {activeService !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveService(null)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-lg w-full shadow-2xl z-10 mx-4"
                        >
                            <button
                                onClick={() => setActiveService(null)}
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {services[activeService].title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    {services[activeService].description}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {services[activeService].items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
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

export default Services;
