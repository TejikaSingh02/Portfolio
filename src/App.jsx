import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300 font-[Poppins]">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
