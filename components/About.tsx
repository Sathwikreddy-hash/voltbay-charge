import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const founders = [
    { name: "Sathwik", role: "Founder", initial: "S", bio: "Engineering the future of smart mobility." },
    { name: "Vinay", role: "Co-Founder", initial: "V", bio: "Optimizing operations for scale." }
  ];

  return (
    <section id="about" className="py-40 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.6em] mb-6">Our Core</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10">
              Honesty is our <br /> <span className="gradient-text">highest value.</span>
            </h3>
            <p className="text-2xl text-slate-500 font-medium leading-tight mb-12">
              We aren't here to build just another app. We are here to fix the broken trust in charging infrastructure through radical transparency.
            </p>
            <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <p className="text-2xl font-bold italic leading-relaxed relative z-10">
                "Zero hype. Just functional, reliable infrastructure for the Indian road."
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-12 rounded-[4rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-emerald-100 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-900 text-white flex items-center justify-center text-4xl font-black mb-8 group-hover:scale-110 transition-transform">
                  {founder.initial}
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">{founder.name}</h4>
                <div className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-6">{founder.role}</div>
                <p className="text-slate-500 font-bold leading-snug">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Stats Concept - High impact rolling animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-slate-100">
          {[
            { label: "Availability", val: "99.9%" },
            { label: "Network nodes", val: "Active" },
            { label: "Infrastructure", val: "Hardened" },
            { label: "Integrity", val: "100%" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter uppercase">{stat.val}</div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};