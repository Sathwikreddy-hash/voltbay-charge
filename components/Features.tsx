import React from 'react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  const cards = [
    {
      title: "For EV Drivers",
      subtitle: "Predictable journeys start here.",
      items: ["Real-time availability", "Instant slot booking", "Zero-friction payments"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14H11V21L20 10H13Z" />
        </svg>
      ),
      theme: "emerald"
    },
    {
      title: "For Station Partners",
      subtitle: "Maximize your uptime.",
      items: ["Demand management", "Smart load balancing", "Partner dashboard"],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      theme: "blue"
    }
  ];

  return (
    <section id="features" className="py-40 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-emerald-600 uppercase tracking-[0.6em] mb-4"
          >
            The Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none"
          >
            Charging, redefined.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className={`p-12 rounded-[4rem] bg-white border border-slate-100 shadow-xl transition-all duration-500 group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${card.theme}-50 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150 opacity-50`} />
              
              <div className={`w-24 h-24 rounded-3xl bg-${card.theme}-600 text-white flex items-center justify-center mb-10 shadow-2xl relative z-10 transition-transform group-hover:rotate-12`}>
                {card.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{card.title}</h3>
                <p className="text-xl text-slate-500 font-medium mb-12">{card.subtitle}</p>
                
                <ul className="space-y-6">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xl font-bold text-slate-700 group/item">
                      <div className={`w-8 h-8 rounded-full bg-${card.theme}-100 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-${card.theme}-600 group-hover/item:text-white`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};