import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-[#020202] pt-20 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-8 border-t border-white/[0.03] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-20 mb-16 sm:mb-32">
          <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-6 sm:mb-8 cursor-pointer group" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 rounded-full bg-civic-orange flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(255,92,0,0.2)]">C</div>
              <span className="text-2xl font-medium tracking-tight text-white group-hover:text-civic-orange transition-colors">Civic</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/70 leading-tight">
              Conversations are the building blocks of civilization. We design the halls where they happen.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Discover</h4>
            <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 text-sm font-light text-white/80">
              <FooterLink label="Global Feed" onClick={() => scrollTo('feed')} />
              <FooterLink label="Architecture" onClick={() => scrollTo('architecture')} />
              <FooterLink label="Communities" onClick={() => scrollTo('communities')} />
              <FooterLink label="Process" onClick={() => scrollTo('process')} />
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Governance</h4>
            <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 text-sm font-light text-white/80">
              <FooterLink label="Privacy Architecture" />
              <FooterLink label="Community Guidelines" />
              <FooterLink label="Terms of Engagement" />
              <FooterLink label="Architecture Notes" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 sm:pt-12 border-t border-white/[0.03] gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-white/30">Civic Hall Architecture © 2026</span>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <span className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-white/30">Built for the public domain</span>
          </div>
          
          <div className="flex items-center gap-8 sm:gap-12 text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-white/50">
            <a href="#" className="hover:text-civic-orange transition-colors">Twitter // X</a>
            <a href="#" className="hover:text-civic-orange transition-colors">Discord</a>
            <a href="#" className="hover:text-civic-orange transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full architectural-grid opacity-10 -z-10" />
    </footer>
  );
};

const FooterLink = ({ label, onClick }) => (
  <button onClick={onClick} className="hover:text-civic-orange transition-colors duration-500 w-fit cursor-pointer text-left">
    {label}
  </button>
);

export default Footer;
