import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const COMPARISON_DATA = [
  {
    feature: 'Information Filter',
    twitter: 'Opaque Algorithm',
    reddit: 'Community Moderators',
    civic: 'User-Defined Technical Lenses',
  },
  {
    feature: 'Context Awareness',
    twitter: 'Global Non-Stop Feed',
    reddit: 'Topic-Based Silos',
    civic: 'Lens + Location Architecture',
  },
  {
    feature: 'Communication Style',
    twitter: 'Engagement-Driven',
    reddit: 'Threaded Forums',
    civic: 'Dynamic Multi-Perspective',
  },
  {
    feature: 'Discovery Logic',
    twitter: 'Viral Echo Chambers',
    reddit: 'Manual Sub-Navigation',
    civic: 'Cross-Lens Resonance',
  },
  {
    feature: 'User Identity',
    twitter: 'Monetized Profiles',
    reddit: 'Pseudonymous Userbase',
    civic: 'Encrypted Digital Presence',
  }
];

const Comparison = () => {
  return (
    <section className="py-32 px-6 relative bg-deep-space">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
          >
            Structural <span className="text-gradient font-bold not-italic">Comparison</span>
          </motion.h2>
          <p className="text-white/40 max-w-xl text-sm font-medium">
            How Civic architecturally shifts the social paradigm compared to legacy platforms.
          </p>
        </div>

        {/* Tabular Matrix */}
        <div className="relative overflow-hidden border border-white/10 rounded-3xl bg-[#080808]/50 backdrop-blur-xl">
          {/* Matrix Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10">
            <div className="p-8 text-[11px] uppercase tracking-[0.3em] font-black text-white/30">Architecture</div>
            <div className="p-8 text-[11px] uppercase tracking-[0.3em] font-black text-white/60 border-l border-white/10">Twitter / X</div>
            <div className="p-8 text-[11px] uppercase tracking-[0.3em] font-black text-white/60 border-l border-white/10 hidden md:block">Reddit</div>
            <div className="p-8 text-[11px] uppercase tracking-[0.4em] font-black text-civic-orange border-l border-white/20 bg-civic-orange/5">Civic</div>
          </div>

          {/* Matrix Rows */}
          {COMPARISON_DATA.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="grid grid-cols-2 md:grid-cols-4 group border-b last:border-b-0 border-white/10"
            >
              <div className="p-8 flex items-center bg-white/[0.02]">
                <span className="text-sm font-bold uppercase tracking-widest text-white/80">{row.feature}</span>
              </div>

              <div className="p-8 border-l border-white/10 flex items-center">
                <span className="text-sm font-medium text-white/60">{row.twitter}</span>
              </div>

              <div className="p-8 border-l border-white/10 hidden md:flex items-center">
                <span className="text-sm font-medium text-white/60">{row.reddit}</span>
              </div>

              <div className="p-8 border-l border-white/20 bg-civic-orange/[0.03] flex items-center relative group-hover:bg-civic-orange/[0.05] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-civic-orange/20 flex items-center justify-center border border-civic-orange/40">
                    <Check size={10} className="text-civic-orange" />
                  </div>
                  <span className="text-sm font-black text-white">{row.civic}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Comparison;
