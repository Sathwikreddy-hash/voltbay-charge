import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#features' },
    { name: 'Early Access', href: '#app' },
    { name: 'Mission', href: '#about' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-7xl glass rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl"
      >
        <div className="px-4 md:px-8 flex justify-between h-16 md:h-20 items-center">
          {/* Brand & Status */}
          <div 
            className="flex items-center space-x-2 md:space-x-3 group cursor-pointer" 
            onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
              setIsOpen(false);
            }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
              </svg>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">VoltBay</span>
              <div className="flex items-center space-x-1 px-1.5 md:px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 flex-shrink-0">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[8px] md:text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-black text-slate-500 uppercase tracking-widest">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-emerald-600 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="mailto:myvoltbay@gmail.com" className="px-8 py-3 bg-slate-900 text-white rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10">
              Get Support
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 md:hidden bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <div className="w-full flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-black text-slate-900 tracking-tighter uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                href="mailto:myvoltbay@gmail.com"
                className="mx-auto px-10 py-5 bg-slate-900 text-white rounded-3xl text-xl font-black tracking-tighter uppercase shadow-2xl shadow-slate-900/20"
              >
                Get Support
              </motion.a>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-12 p-4 text-slate-400 font-black uppercase tracking-[0.3em] text-xs"
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};