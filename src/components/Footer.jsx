import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-blue-600 dark:bg-gray-900 text-white pt-12 pb-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Tejika</h2>
                <p className="text-blue-100 mb-8">Fullstack Developer</p>

                <ul className="flex justify-center space-x-8 mb-8">
                    <li>
                        <Link to="about" smooth={true} duration={500} className="hover:text-blue-200 cursor-pointer transition-colors">About</Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500} className="hover:text-blue-200 cursor-pointer transition-colors">Projects</Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500} className="hover:text-blue-200 cursor-pointer transition-colors">Services</Link>
                    </li>
                </ul>

                <div className="flex justify-center space-x-6 mb-12">
                    <a href="https://github.com/TejikaSingh02" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-white hover:text-blue-600 p-2 rounded-lg transition-all">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/tejika-singh-a965682a9/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-white hover:text-blue-600 p-2 rounded-lg transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:Tejikasingh1702@gmail.com" className="bg-blue-700 hover:bg-white hover:text-blue-600 p-2 rounded-lg transition-all">
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-sm text-blue-200">
                    © {new Date().getFullYear()} Tejika Singh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
