import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Features } from './components/Features';
import { AppDownload } from './components/AppDownload';
import { Network } from './components/Network';
import { Onboarding } from './components/Onboarding';
import { Roadmap } from './components/Roadmap';
import { About } from './components/About';
import { Trust } from './components/Trust';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-emerald-500 selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-emerald-500 to-blue-500 origin-left z-[70] shadow-[0_0_20px_rgba(16,185,129,0.5)]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Features />
        <AppDownload />
        <Network />
        <Onboarding />
        <Roadmap />
        <About />
        <Trust />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;