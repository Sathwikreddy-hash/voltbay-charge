import React from 'react';
import { motion } from 'framer-motion';

export const AppDownload: React.FC = () => {
  return (
    <section id="app" className="py-40 bg-white relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.6em] mb-6">Mobile First</h2>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                The charging <br /> <span className="text-blue-600">command center.</span>
              </h3>
              <p className="text-2xl text-slate-500 font-medium leading-tight max-w-xl">
                Real-time booking, station health checks, and seamless navigation. Built to be the fastest tool in your EV toolkit.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1n58OZPh9hfD9xftpmr1hIKSLWBdnJYFR/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-12 py-6 bg-slate-900 text-white rounded-3xl flex items-center shadow-2xl shadow-slate-900/40"
              >
                <div className="w-12 h-12 mr-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                    <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-1">Available Now</div>
                  <div className="text-xl font-black tracking-tight">Download APK</div>
                </div>
              </motion.a>
              
              <div className="flex items-center space-x-6 text-slate-400 font-bold text-sm uppercase tracking-widest">
                 <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
                    Direct Install
                 </div>
                 <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    Zero Cost
                 </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Phone Mockup Frame */}
            <motion.div 
              initial={{ rotate: 10, y: 100, opacity: 0 }}
              whileInView={{ rotate: -5, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative z-10 mx-auto w-80 h-[650px] bg-slate-900 rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[10px] border-slate-800"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center relative p-8">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-24 h-24 mb-8"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                    <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                  </svg>
                </motion.div>
                <div className="space-y-4 w-full">
                  <div className="h-12 w-full bg-slate-50 rounded-2xl"></div>
                  <div className="h-12 w-full bg-slate-50 rounded-2xl"></div>
                  <div className="h-12 w-full bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/20"></div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-200 rounded-full"></div>
              </div>
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-400 blur-[150px] opacity-20 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};