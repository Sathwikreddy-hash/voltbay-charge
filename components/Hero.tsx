import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-100 rounded-full blur-[140px]" 
        />
      </div>

      <motion.div 
        style={{ y: yParallax, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 relative inline-block"
        >
          <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-20 animate-pulse"></div>
          <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl relative">
            <motion.circle 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="240 40" strokeLinecap="round" 
            />
            <motion.path 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              d="M75 35 L85 25 M78 32 L82 28" stroke="#10b981" strokeWidth="4" strokeLinecap="round" 
            />
            <motion.path 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" 
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-900 tracking-tighter leading-[0.8] mb-8">
            VoltBay
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-slate-400 tracking-tight mb-12">
            Infrastructure for <span className="text-slate-900">India's electric transition.</span>
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Highlighted Founder Attribution Block */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 shadow-2xl shadow-emerald-500/20">
              <div className="px-10 py-6 bg-white rounded-[2.4rem] flex flex-col items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-3 relative z-10">
                  Visionary Leadership
                </p>
                <p className="text-base md:text-xl font-black text-slate-900 tracking-widest uppercase text-center leading-relaxed relative z-10">
                  BUILT BY <span className="text-emerald-600">SATHWIK REDDY</span> <span className="text-slate-400 text-xs font-bold">(FOUNDER)</span> <span className="text-slate-300 mx-2">&</span> <span className="text-blue-600">VINAY</span> <span className="text-slate-400 text-xs font-bold">(CO-FOUNDER)</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlighted APK Status Block */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-1 bg-emerald-500 blur-lg rounded-full"
            />
            <div className="relative px-8 py-3 bg-emerald-600 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] flex items-center space-x-3 shadow-xl">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>APK IS READY — SCROLL DOWN TO DOWNLOAD</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 opacity-30"
        >
          <p className="text-xs font-black uppercase tracking-[0.5em] mb-4">Scroll to discover</p>
          <div className="w-px h-12 bg-slate-900 mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};