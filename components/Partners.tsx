import React from 'react';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  const partners = [
    "CleanEnergy Hub", "UrbanGrid", "EcoMotion", "PowerFlow", "SmartRoute", "GreenLink"
  ];

  return (
    <div className="py-12 bg-white border-y border-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-8">
          Integrations & Ecosystem Partners
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <div key={i} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
              {partner.toLowerCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};