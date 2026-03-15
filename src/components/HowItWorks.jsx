import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Choose a lens",
      desc: "Pick a perspective like philosophy, technology, science, or politics to explore conversations."
    },
    {
      id: 2,
      title: "Choose a scope",
      desc: "See discussions from your city, your country, or across the world."
    },
    {
      id: 3,
      title: "Join the discussion",
      desc: "Ask questions, share ideas, and explore conversations across perspectives."
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-20 text-center">How Civic <span className="text-gradient">works</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-civic-orange text-white flex items-center justify-center text-3xl font-bold mb-8 shadow-[0_0_30px_rgba(255,92,0,0.5)] border-4 border-deep-space ring-1 ring-civic-orange">
                {step.id}
              </div>
              <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 max-w-5xl mx-auto">
          <div className="p-1 rounded-[40px] bg-gradient-to-tr from-civic-orange/20 via-white/5 to-civic-blue/20">
            <div className="bg-surface rounded-[38px] p-8 md:p-16 text-center">
              <h3 className="text-3xl md:text-5xl font-medium mb-8 italic text-gradient leading-tight">"Civic gradually becomes a place where you explore ideas instead of scrolling endlessly."</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                <Benefit title="Discover new perspectives" desc="Switching lenses reveals discussions you would never encounter in a traditional feed." />
                <Benefit title="Conversations feel grounded" desc="You start noticing how discussions differ between global, national, and local contexts." />
                <Benefit title="Communities stay alive" desc="Instead of empty forums, communities continuously evolve as discussions flow in from across Civic." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefit = ({ title, desc }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
    <h4 className="text-lg font-medium mb-2 group-hover:text-civic-orange transition-colors">{title}</h4>
    <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
  </div>
);

export default HowItWorks;
