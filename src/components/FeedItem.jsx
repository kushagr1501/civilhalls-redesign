import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreHorizontal, ArrowUpRight, Compass } from 'lucide-react';
import gsap from 'gsap';

const FeedItem = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: index * 0.1, ease: 'power4.out' }
    );
  }, []);

  const spanClass = item.size === 'wide' ? 'md:col-span-2' : item.size === 'tall' ? 'md:row-span-2' : '';

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
      className={`relative group bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-500 hover:border-civic-orange/60 ${spanClass} industrial-border backdrop-blur-sm`}
    >
      <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="text-[10px] font-mono tracking-tighter text-civic-orange">REF_{item.id.toString().padStart(4, '0')}</div>
      </div>

      <div className="flex flex-col h-full">
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-surface border border-white/10 flex items-center justify-center overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=${item.author}`} alt="author" className="w-full h-full scale-125" />
            </div>
            <div>
              <div className="text-xs font-bold leading-none mb-1 uppercase tracking-tight">{item.author}</div>
              <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">{item.lens} // {item.time}</div>
            </div>
          </div>
          <div className="p-2 bg-white/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={14} className="text-civic-orange" />
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-center">
          <p className={`${item.size === 'wide' ? 'text-2xl' : 'text-lg'} font-serif italic text-white leading-snug group-hover:text-white transition-colors`}>
            {item.content}
          </p>
        </div>

        {item.image && (
          <div className={`relative ${item.size === 'wide' ? 'aspect-[21/9]' : 'aspect-square'} overflow-hidden border-t border-white/10`}>
            <img
              src={item.image}
              alt="context"
              className="w-full h-full object-cover grayscale-[0.3] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="p-5 border-t border-white/5 flex items-center justify-between mt-auto">
          <div className="flex gap-4">
            <FooterBtn icon={<Heart size={14} />} val={item.likes} />
            <FooterBtn icon={<MessageCircle size={14} />} val={item.comments} />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-[1px] w-8 bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-civic-orange animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-1000 architectural-grid" />
    </motion.div>
  );
};

const FooterBtn = ({ icon, val }) => (
  <button className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 hover:text-civic-orange transition-colors">
    {icon}
    {val && <span>{val}</span>}
  </button>
);

export default FeedItem;
