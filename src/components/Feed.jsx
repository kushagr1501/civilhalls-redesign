import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedItem from './FeedItem';
import { Plus } from 'lucide-react';

const FEED_DATA = [
  {
    id: 1,
    author: 'Marcus Aurelius',
    lens: 'philosophy',
    size: 'tall',
    content: "The happiness of your life depends upon the quality of your thoughts. How we choose to filter the noise defines our path.",
    time: '2h ago',
    likes: '1.2k',
    comments: 84
  },
  {
    id: 2,
    author: 'Synthetic Mind',
    lens: 'science',
    size: 'wide',
    content: "Quantum entanglement proves that isolation is a digital illusion. Every perspective is a node in a larger universal architecture.",
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
    time: '4h ago',
    likes: '3.4k',
    comments: 120
  },
  {
    id: 3,
    author: 'Urban Architect',
    lens: 'all',
    size: 'standard',
    content: "Civic spaces are the lungs of a city. We need designed halls for conversation.",
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    time: '6h ago',
    likes: '890',
    comments: 42
  },
  {
    id: 5,
    author: 'Digital Stoic',
    lens: 'philosophy',
    size: 'standard',
    content: "Minimalism in the feed leads to maximalism in the mind.",
    time: '3h ago',
    likes: '450',
    comments: 12
  },
  {
    id: 4,
    author: 'Cyber Nomad',
    lens: 'meme',
    size: 'wide',
    content: "When the algorithm recommends a life, but you're already in the 4th dimension.",
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    time: '8h ago',
    likes: '12k',
    comments: 430
  },
  {
    id: 6,
    author: 'Tech Prophet',
    lens: 'science',
    size: 'standard',
    content: "The silicon era is just the foundation for the biological compute layer.",
    time: '12h ago',
    likes: '1.1k',
    comments: 89
  },
  {
    id: 7,
    author: 'Design Theory',
    lens: 'all',
    size: 'tall',
    content: "Visual hierarchy is not a choice, it is a biological necessity for information processing.",
    time: '14h ago',
    likes: '2.3k',
    comments: 156
  },
  {
    id: 8,
    author: 'Code Architect',
    lens: 'science',
    size: 'standard',
    content: "Recursive logic in UI design creates a sense of infinite depth.",
    time: '1d ago',
    likes: '920',
    comments: 45
  }
];

const Feed = ({ activeLens }) => {
  const [limit, setLimit] = useState(3);
  const filteredData = activeLens === 'all'
    ? FEED_DATA
    : FEED_DATA.filter(item => item.lens === activeLens);

  const visibleItems = filteredData.slice(0, limit);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeLens}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleItems.map((item, index) => (
            <FeedItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredData.length > limit && (
        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLimit(prev => prev + 3)}
            className="group flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-civic-orange hover:text-white transition-all duration-500 shadow-2xl"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
            <span>Discover More Perspectives</span>
          </motion.button>
        </div>
      )}

      {filteredData.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-white/20 font-mono text-xs uppercase tracking-[0.5em]">No Data Transmission in this Lens</p>
        </div>
      )}
    </div>
  );
};

export default Feed;
