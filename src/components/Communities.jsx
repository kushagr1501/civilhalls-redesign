import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ArrowRight, ArrowLeft, Plus } from 'lucide-react';

const COMMUNITY_DATA = [
  {
    name: 'AI Builders',
    lens: 'Technology',
    scope: 'Global',
    posts: [
      { author: '@mlengineer', content: 'Transformers still dominate — but what replaces them?', source: 'Imported from Global Technology' },
      { author: '@devlab', content: 'Open-source AI agents are becoming a real ecosystem.', source: 'Imported from Global' }
    ]
  },
  {
    name: 'Philosophy Club',
    lens: 'Philosophy',
    scope: 'Global',
    posts: [
      { author: '@thinker', content: 'How does digital presence affect the sense of self?', source: 'Imported from Global Philosophy' },
      { author: '@stoic', content: 'Focus on what you can control in the feed.', source: 'Imported from Community' }
    ]
  },
  {
    name: 'City Forum',
    lens: 'Local',
    scope: 'Bangalore',
    posts: [
      { author: '@citizen', content: 'New public park opening near the library tonight.', source: 'Posted in Local' },
      { author: '@traffic_bot', content: 'Road closures on Silk Board junction.', source: 'Imported from City Lens' }
    ]
  }
];

const Communities = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % COMMUNITY_DATA.length);
  const prev = () => setIndex((index - 1 + COMMUNITY_DATA.length) % COMMUNITY_DATA.length);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight mb-4 sm:mb-6"
            >
              Communities that <br />
              <span className="text-gradient">evolve automatically</span>
            </motion.h2>
            <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
              Civic communities don't stay empty. They can import relevant discussions happening across the platform based on topics and location.
            </p>
          </div>

          <div className="flex gap-4">
            <NavBtn icon={<ArrowLeft size={20} />} onClick={prev} />
            <NavBtn icon={<ArrowRight size={20} />} onClick={next} />
          </div>
        </div>

        <div className="relative min-h-[480px] sm:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-2xl sm:rounded-[32px] border border-white/5 bg-surface p-5 sm:p-8 md:p-12 overflow-hidden group shadow-2xl"
            >
              <div className="flex flex-col md:flex-row justify-between h-full gap-8 sm:gap-12 relative z-10">
                <div className="flex flex-col justify-between gap-6 md:max-w-sm shrink-0">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium mb-2">{COMMUNITY_DATA[index].name}</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <Tag label={`Lens: ${COMMUNITY_DATA[index].lens}`} />
                      <Tag label={`Scope: ${COMMUNITY_DATA[index].scope}`} />
                    </div>
                  </div>

                  <button className="w-fit flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-civic-orange hover:text-white transition-all group/btn">
                    <span>Join Community</span>
                    <Plus size={16} className="group-hover/btn:rotate-90 transition-transform duration-500" />
                  </button>
                </div>

                <div className="flex-1 space-y-3 sm:space-y-4 overflow-y-auto">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Active Dynamics</span>
                  {COMMUNITY_DATA[index].posts.map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <span className="font-bold text-sm text-white/80">{post.author}</span>
                        <p className="text-base sm:text-lg opacity-80">{post.content}</p>
                        <span className="text-[10px] uppercase tracking-widest text-civic-orange/60 font-medium">{post.source}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-civic-orange to-orange-600 text-white font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,92,0,0.3)]">
            Create your own community
          </button>
        </div>
      </div>
    </section>
  );
};

const Tag = ({ label }) => (
  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/80 uppercase tracking-widest font-bold">
    {label}
  </span>
);

const NavBtn = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all active:scale-90"
  >
    {icon}
  </button>
);

export default Communities;
