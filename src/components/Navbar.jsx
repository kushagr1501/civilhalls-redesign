import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Feed', id: 'feed' },
  { label: 'Difference', id: 'comparison' },
  { label: 'Architecture', id: 'architecture' },
  { label: 'Communities', id: 'communities' },
  { label: 'Process', id: 'process' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'feed', 'comparison', 'architecture', 'communities', 'process'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-6 px-4 md:px-8 pointer-events-none"
      >
        <div 
          className={`
            pointer-events-auto flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full 
            border transition-all duration-700
            ${scrolled 
              ? 'bg-deep-space/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
              : 'bg-transparent border-transparent'}
          `}
        >
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => scrollTo('home')}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-civic-orange flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_20px_rgba(255,92,0,0.3)] group-hover:shadow-[0_0_30px_rgba(255,92,0,0.6)] transition-all duration-500">
                <span className="text-white font-bold text-xl select-none">C</span>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-civic-orange rounded-full blur-lg opacity-30 -z-10" 
              />
            </div>
            <span className="text-2xl font-medium tracking-tight group-hover:text-civic-orange transition-colors hidden sm:inline">Civic</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full p-1.5 backdrop-blur-md relative overflow-hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`
                  relative px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-black transition-all duration-300
                  ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white/95'}
                `}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.05)] rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {hoveredLink === link.id && activeSection !== link.id && (
                  <motion.div
                    layoutId="hoverNav"
                    className="absolute inset-0 bg-white/[0.05] rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                  />
                )}
                
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 group">
              <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
              <span>Login</span>
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white text-black text-base font-bold hover:bg-civic-orange hover:text-white hover:shadow-[0_0_30px_rgba(255,92,0,0.4)] transition-all duration-500 active:scale-95">
              Join
            </button>
            
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all active:scale-90"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[90] bg-deep-space/80 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.id)}
                  className={`
                    text-3xl font-medium tracking-tight transition-all
                    ${activeSection === link.id ? 'text-civic-orange scale-110' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-col items-center gap-4"
              >
                <button className="px-12 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
                  Join Civic
                </button>
                <button className="text-white/40 font-medium">Already have an account? Login</button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
