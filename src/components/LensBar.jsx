import React from 'react';
import { motion } from 'framer-motion';

const LENSES = [
  { id: 'all', label: 'All perspectives', icon: 'ALL', code: '00' },
  { id: 'meme', label: 'Culture & Irony', icon: 'MEM', code: '01' },
  { id: 'philosophy', label: 'Pure Reason', icon: 'PHL', code: '02' },
  { id: 'science', label: 'Synthetic Sci', icon: 'SCI', code: '03' },
  { id: 'politics', label: 'Power Dynamics', icon: 'POL', code: '04' },
];

const LensBar = ({ activeLens, onLensChange }) => {
  return (
    <div className="sticky top-20 z-40 bg-deep-space/80 backdrop-blur-md border-b border-white/5 py-4 px-8 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-8">
        <div className="flex gap-2">
          {LENSES.map((lens) => (
            <button
              key={lens.id}
              onClick={() => onLensChange(lens.id)}
              className={`
                relative px-6 py-2 transition-all duration-500 group rounded-xl hover:bg-white/[0.03]
                ${activeLens === lens.id ? 'text-white' : 'text-white/60 hover:text-white/90'}
              `}
            >
              <div className="relative z-10 flex flex-col items-start text-left">
                <span className="text-[9px] font-mono tracking-widest opacity-60 group-hover:opacity-100 mb-1 group-hover:text-civic-orange transition-all">CH_{lens.code}</span>
                <span className={`text-xs font-black uppercase tracking-widest transition-colors ${activeLens === lens.id ? 'text-civic-orange' : ''}`}>{lens.label}</span>
              </div>

              {activeLens === lens.id && (
                <motion.div
                  layoutId="lens-under"
                  className="absolute bottom-[-17px] left-0 right-0 h-[2.5px] bg-civic-orange shadow-[0_0_25px_rgba(255,92,0,0.7)]"
                />
              )}
            </button>
          ))}
        </div>

          <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8">
            <div className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-[0.3em]">Resonance Level:</div>
            <div className="flex gap-1.5 h-4 items-end">
              {[0.4, 0.7, 0.2, 0.9, 0.5, 0.8].map((op, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [10, 16, 8, 14, 10] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                  className="w-1.5 bg-civic-orange rounded-full"
                  style={{ opacity: op + 0.1 }}
                />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default LensBar;
