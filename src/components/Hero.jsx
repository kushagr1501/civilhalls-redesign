import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden architectural-grid">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-civic-orange/5 via-transparent to-transparent opacity-50" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-full h-[100vw] bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.05)_0%,transparent_70%)] blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-6xl px-4 relative"
      >

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-medium tracking-tight leading-[1.05] sm:leading-[0.9] mb-8 font-sans">
          Conversations <br />
          <span className="text-gradient italic">
            re-architected.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Civic organizes discussions around perspectives, not engagement metrics.
          Stop scrolling. Start exploring.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,92,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('feed')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white text-black font-bold text-base sm:text-lg overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore Global Feed</span>
            <div className="absolute inset-0 bg-civic-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.button>

          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-deep-space bg-surface overflow-hidden hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-black/50">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 567}`} alt="avatar" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-deep-space bg-white/5 flex items-center justify-center text-[10px] font-bold backdrop-blur-sm">
                +12k
              </div>
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Joining 12,432 perspectives today</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore Architecture</span>
      </motion.div>
    </section>
  );
};

export default Hero;
