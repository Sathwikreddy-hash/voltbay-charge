import React from 'react';
import { motion } from 'framer-motion';

export const Network: React.FC = () => {
  return (
    <section className="py-40 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.6em] mb-4">Coverage</h2>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                A living, breathing <br /> <span className="text-emerald-600">network.</span>
              </h3>
              <p className="text-2xl text-slate-500 font-medium leading-tight max-w-xl">
                We're mapping every corner. From urban hubs to highway stretches, the VoltBay network pulses with real-time data to keep you moving.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime", val: "99.98%" },
                { label: "Active Nodes", val: "Growing" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                   <div className="text-emerald-500 font-black text-3xl tracking-tighter mb-1">{stat.val}</div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[400px] md:h-[600px] flex items-center justify-center">
             {/* Abstract Network SVG */}
             <svg viewBox="0 0 400 400" className="w-full h-full opacity-20 absolute inset-0 text-slate-900">
                <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
             </svg>

             {/* Pulsing Nodes */}
             {[
               { x: '20%', y: '30%', d: 0 },
               { x: '70%', y: '20%', d: 1.5 },
               { x: '50%', y: '50%', d: 0.5 },
               { x: '80%', y: '70%', d: 2 },
               { x: '30%', y: '80%', d: 1 }
             ].map((node, i) => (
               <motion.div
                 key={i}
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true }}
                 style={{ left: node.x, top: node.y }}
                 className="absolute"
               >
                 <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: node.d }}
                      className="absolute inset-0 w-8 h-8 -left-4 -top-4 bg-emerald-500 rounded-full blur-md"
                    />
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                 </div>
               </motion.div>
             ))}

             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="w-full h-full border-2 border-emerald-500/10 rounded-full absolute"
             />
             
             <div className="relative z-10 p-12 glass rounded-full shadow-2xl border-emerald-500/10">
                <svg viewBox="0 0 100 100" className="w-24 h-24">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                  <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};