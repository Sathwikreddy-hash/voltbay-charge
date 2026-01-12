import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative inline-block mb-16"
        >
          <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-10 animate-pulse"></div>
          <h2 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter relative z-10">
            Let's <span className="gradient-text">talk.</span>
          </h2>
        </motion.div>
        
        <p className="text-2xl md:text-3xl text-slate-500 font-medium mb-20 max-w-3xl mx-auto tracking-tight leading-tight">
          Whether you're a driver with feedback or a station owner ready for the future, we're one email away.
        </p>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block group"
        >
          <div className="absolute -inset-4 bg-emerald-500 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <a 
            href="mailto:myvoltbay@gmail.com" 
            className="relative px-16 py-8 bg-slate-900 text-white rounded-[2rem] flex flex-col md:flex-row items-center gap-6 shadow-2xl transition-all group-hover:bg-emerald-600"
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:text-white transition-colors">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </div>
            <div className="text-left">
               <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-1">Direct Communication</div>
               <div className="text-2xl md:text-4xl font-black tracking-tighter">myvoltbay@gmail.com</div>
            </div>
          </a>
        </motion.div>
        
        <div className="mt-32 flex justify-center items-center space-x-4">
           <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                  <div className={`w-full h-full ${i === 1 ? 'bg-emerald-100' : i === 2 ? 'bg-blue-100' : 'bg-slate-200'}`}></div>
                </div>
              ))}
           </div>
           <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Global Support Team</span>
        </div>
      </div>
    </section>
  );
};