import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px] -mr-48 -mb-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-8">
            <div 
              className="flex items-center space-x-3 group cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="w-12 h-12 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                  <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                </svg>
              </div>
              <span className="text-3xl font-black text-slate-900 tracking-tighter">VoltBay</span>
            </div>
            <p className="text-xl text-slate-400 font-bold max-w-sm leading-tight tracking-tight">
              Engineering honest infrastructure for the electric age.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
            <div className="space-y-6">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Ecosystem</div>
              <ul className="space-y-4 text-sm font-black text-slate-900 uppercase tracking-widest">
                <li><a href="#features" className="hover:text-emerald-600 transition-colors">Drivers</a></li>
                <li><a href="#features" className="hover:text-emerald-600 transition-colors">Partners</a></li>
                <li><a href="#app" className="hover:text-emerald-600 transition-colors">Download</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Company</div>
              <ul className="space-y-4 text-sm font-black text-slate-900 uppercase tracking-widest">
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">Mission</a></li>
                <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Support</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Status</div>
              <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-xs font-black text-slate-900 uppercase tracking-widest">v1.0.4 Live</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            Built with Integrity in India • © 2026 VoltBay
          </p>
          <div className="flex space-x-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};