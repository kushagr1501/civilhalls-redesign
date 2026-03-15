import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LensBar from './components/LensBar';
import Feed from './components/Feed';
import Comparison from './components/Comparison';
import Architecture from './components/Architecture';
import Communities from './components/Communities';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  const [activeLens, setActiveLens] = useState('all');

  return (
    <div className="min-h-screen bg-deep-space selection:bg-civic-orange/30 overflow-x-hidden font-sans">
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>

        <section id="feed" className="relative z-10 py-24 architectural-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-4 flex flex-col items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-civic-orange to-transparent" />
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight px-4 font-serif italic">
              The Live <span className="text-gradient not-italic font-sans font-bold">Field</span>
            </h2>
            <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/20">A multi-perspective resonance chamber</p>
          </motion.div>

          <LensBar
            activeLens={activeLens}
            onLensChange={setActiveLens}
          />
          <Feed activeLens={activeLens} />
        </section>

        <div id="comparison">
          <Comparison />
        </div>
        <div id="architecture">
          <Architecture />
        </div>
        <div id="communities">
          <Communities />
        </div>
        <div id="process">
          <HowItWorks />
        </div>

      <Footer />
      </main>

      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-overlay">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}

export default App;
