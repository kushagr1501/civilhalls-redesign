import React from 'react';
import { motion } from 'framer-motion';

const Architecture = () => {
  return (
    <section className="py-32 px-6 bg-surface/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-8"
        >
          Civic conversation <span className="text-gradient">architecture</span>
        </motion.h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg mb-20 leading-relaxed font-light">
          A single discussion on Civic can appear across many contexts. Feed profiles combine topics and locations, while communities can import discussions from across the network.
        </p>

        <div className="relative flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-2xl p-6 rounded-2xl border-2 border-civic-orange/50 bg-civic-orange/5 backdrop-blur-md relative z-20 shadow-[0_0_50px_rgba(255,92,0,0.1)]"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-civic-orange">Single Post</span>
            <p className="text-xl mt-2 font-medium opacity-80 italic">"Does technology expand human wisdom or distract from it?"</p>
          </motion.div>

          <div className="h-20 w-[1px] bg-gradient-to-b from-civic-orange to-white/10 relative z-10" />
          <div className="w-full max-w-4xl h-[1px] bg-white/10 relative z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-0">
            <ArchColumn
              title="Lenses"
              items={['Philosophy', 'Technology', 'Society']}
              color="from-civic-orange/20"
            />
            <ArchColumn
              title="Location"
              items={['City (Bangalore)', 'Country (India)', 'Global Scope']}
              color="from-civic-blue/20"
            />
            <ArchColumn
              title="Communities"
              items={['AI Builders', 'Digital Culture', 'City Forum']}
              color="from-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ArchColumn = ({ title, items, color }) => (
  <div className="flex flex-col items-center">
    <div className="h-10 w-[1px] bg-white/10" />
    <div className={`w-full p-6 rounded-2xl border border-white/5 bg-gradient-to-b ${color} to-transparent backdrop-blur-sm`}>
      <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/70 font-bold mb-6">{title}</h4>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Architecture;
