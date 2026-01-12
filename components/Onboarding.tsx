import React from 'react';
import { motion } from 'framer-motion';

export const Onboarding: React.FC = () => {
  return (
    <section className="py-40 bg-slate-900 relative overflow-hidden">
      {/* Cinematic grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark p-16 md:p-24 rounded-[4rem] text-center border-emerald-500/20"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-[0.4em] mb-12 border border-emerald-500/20"
          >
            Exclusive Access
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-none">
            Invite-Only <br /> <span className="text-emerald-500">Infrastructure.</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-2xl text-slate-400 font-medium leading-tight">
              To maintain absolute reliability, station onboarding is strictly controlled. Every partner is manually vetted to ensure your journey is never compromised.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                { label: "Vetting", val: "Manual verification of every station hardware." },
                { label: "Quality", val: "Strict adherence to 99.9% uptime standards." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-black uppercase tracking-widest text-xs mb-4">{item.label}</div>
                  <div className="text-white text-lg font-bold">{item.val}</div>
                </div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="pt-8"
            >
              <a href="mailto:myvoltbay@gmail.com" className="text-emerald-400 font-black uppercase tracking-[0.3em] text-sm border-b-2 border-emerald-500/30 pb-2 hover:border-emerald-400 transition-colors">
                Apply for Partnership
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};