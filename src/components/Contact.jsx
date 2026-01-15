import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, Send, ArrowRight } from 'lucide-react';

const Contact = () => {

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Contact Me</h2>
                    <span className="text-gray-500 dark:text-gray-400">Get in touch</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center md:text-left mb-6">Talk to me</h3>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <Linkedin className="mx-auto text-blue-600 mb-2" size={24} />
                            <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-3">Tejika Singh</span>
                            <a href="https://www.linkedin.com/in/tejika-singh-a965682a9/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-900 dark:text-white font-medium inline-flex items-center hover:text-blue-600 transition-colors">
                                Write me <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <MessageCircle className="mx-auto text-blue-600 mb-2" size={24} />
                            <h4 className="font-semibold text-gray-900 dark:text-white">Whatsapp</h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-3">999-888-777</span>
                            <a href="#" className="text-sm text-gray-900 dark:text-white font-medium inline-flex items-center hover:text-blue-600 transition-colors">
                                Write me <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <MessageCircle className="mx-auto text-blue-600 mb-2" size={24} />
                            <h4 className="font-semibold text-gray-900 dark:text-white">Telegram</h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-3">Tejika Singh</span>
                            <a href="#" className="text-sm text-gray-900 dark:text-white font-medium inline-flex items-center hover:text-blue-600 transition-colors">
                                Write me <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center md:text-left mb-6">Write me your project</h3>

                        {/* Using FormSubmit.co for free unlimited emails */}
                        <form action="https://formsubmit.co/Tejikasingh1702@gmail.com" method="POST" className="space-y-6">

                            {/* Optional: Disable Captcha */}
                            <input type="hidden" name="_captcha" value="false" />

                            {/* Optional: Template */}
                            <input type="hidden" name="_template" value="table" />

                            <div className="space-y-4">
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-300 mb-1">Name</label>
                                    <input type="text" name="name" placeholder="Insert your name" className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" required />
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-300 mb-1">Mail</label>
                                    <input type="email" name="email" placeholder="Insert your email" className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" required />
                                </div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-300 mb-1">Project</label>
                                    <textarea name="project_details" placeholder="Write your project" rows="4" className="w-full bg-transparent outline-none text-gray-900 dark:text-white resize-none placeholder-gray-400 dark:placeholder-gray-500" required></textarea>
                                </div>
                            </div>

                            <button type="submit" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all group">
                                Send Message
                                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
