import React from 'react';
import { motion } from 'framer-motion';

export const Roadmap: React.FC = () => {
  const steps = [
    { phase: "Phase 01", title: "Core Stability", status: "Completed", desc: "Hardening real-time booking engines and station handshake protocols." },
    { phase: "Phase 02", title: "Early Access", status: "Live", desc: "Direct APK rollout for power users in select South Indian hubs." },
    { phase: "Phase 03", title: "Grid Sync", status: "Coming Q3", desc: "Deep integration with utility providers for smart load management." },
    { phase: "Phase 04", title: "National Link", status: "Planned", desc: "Expanding the booking mesh to major highway corridors pan-India." }
  ];

  return (
    <section className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.6em] mb-4 text-center">Development</h2>
          <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none text-center">
            The honest <span className="text-blue-600">path.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100"
            >
              <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4">
                {step.phase}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tighter">{step.title}</h4>
              <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${
                step.status === 'Live' ? 'bg-emerald-500 text-white' : 
                step.status === 'Completed' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'
              }`}>
                {step.status}
              </div>
              <p className="text-slate-500 font-bold leading-tight">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-slate-200 z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};