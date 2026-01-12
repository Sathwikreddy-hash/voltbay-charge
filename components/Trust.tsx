import React from 'react';
import { motion } from 'framer-motion';

export const Trust: React.FC = () => {
  const points = [
    { title: "India Built", desc: "Solving specific local infrastructure gaps." },
    { title: "Pure Testing", desc: "Rigorous field validation in real conditions." },
    { title: "Transparency", desc: "Publicly auditable station health status." },
    { title: "No Fees", desc: "Charging users zero commission currently." },
    { title: "Community Led", desc: "Features prioritised by early adopter feedback." },
    { title: "Hardened Tech", desc: "Minimalist stack for extreme reliability." }
  ];

  return (
    <section className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-4"
          >
            Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
          >
            Built on <span className="text-emerald-600">Integrity.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: '#10b981' }}
              className="p-10 rounded-[3rem] bg-slate-50 border border-transparent transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tighter">{point.title}</h4>
              <p className="text-lg text-slate-500 font-bold leading-snug">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};