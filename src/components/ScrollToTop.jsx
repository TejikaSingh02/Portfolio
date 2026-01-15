import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg hover:-translate-y-1 transition-all"
            >
                <ArrowUp size={20} />
            </button>
        </div>
    );
};

export default ScrollToTop;
