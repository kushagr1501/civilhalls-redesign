import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative bg-deep-space">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight mb-4"
          >
            Structural <span className="text-gradient font-bold not-italic">Comparison</span>
          </motion.h2>
          <p className="text-white/40 max-w-xl text-sm font-medium">
            How Civic architecturally shifts the social paradigm compared to legacy platforms.
          </p>
        </div>

        {/* Desktop Table (md+) */}
        <div className="relative overflow-hidden border border-white/10 rounded-3xl bg-[#080808]/50 backdrop-blur-xl hidden md:block">
          <div className="grid grid-cols-4 border-b border-white/10">
            <div className="p-6 lg:p-8 text-[11px] uppercase tracking-[0.3em] font-black text-white/30">Architecture</div>
            <div className="p-6 lg:p-8 text-[11px] uppercase tracking-[0.3em] font-black text-white/60 border-l border-white/10">Twitter / X</div>
            <div className="p-6 lg:p-8 text-[11px] uppercase tracking-[0.3em] font-black text-white/60 border-l border-white/10">Reddit</div>
            <div className="p-6 lg:p-8 text-[11px] uppercase tracking-[0.4em] font-black text-civic-orange border-l border-white/20 bg-civic-orange/5">Civic</div>
          </div>

          {COMPARISON_DATA.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="grid grid-cols-4 group border-b last:border-b-0 border-white/10"
            >
              <div className="p-6 lg:p-8 flex items-center bg-white/[0.02]">
                <span className="text-sm font-bold uppercase tracking-widest text-white/80">{row.feature}</span>
              </div>
              <div className="p-6 lg:p-8 border-l border-white/10 flex items-center">
                <span className="text-sm font-medium text-white/60">{row.twitter}</span>
              </div>
              <div className="p-6 lg:p-8 border-l border-white/10 flex items-center">
                <span className="text-sm font-medium text-white/60">{row.reddit}</span>
              </div>
              <div className="p-6 lg:p-8 border-l border-white/20 bg-civic-orange/[0.03] flex items-center relative group-hover:bg-civic-orange/[0.05] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-civic-orange/20 flex items-center justify-center border border-civic-orange/40 shrink-0">
                    <Check size={10} className="text-civic-orange" />
                  </div>
                  <span className="text-sm font-black text-white">{row.civic}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards (below md) */}
        <div className="md:hidden space-y-4">
          {COMPARISON_DATA.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#080808]/50 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-5 py-4 bg-white/[0.02] border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">{row.feature}</span>
              </div>
              <div className="px-5 py-3 border-b border-white/5 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30">Twitter / X</span>
                <span className="text-xs font-medium text-white/60 text-right">{row.twitter}</span>
              </div>
              <div className="px-5 py-3 border-b border-white/5 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30">Reddit</span>
                <span className="text-xs font-medium text-white/60 text-right">{row.reddit}</span>
              </div>
              <div className="px-5 py-3 bg-civic-orange/[0.03] flex justify-between items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-civic-orange shrink-0">Civic</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-civic-orange/20 flex items-center justify-center border border-civic-orange/40 shrink-0">
                    <Check size={8} className="text-civic-orange" />
                  </div>
                  <span className="text-xs font-black text-white text-right">{row.civic}</span>
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
