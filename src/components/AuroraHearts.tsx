'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const COLORS = ['#14e818', '#017ed5', '#b53dff'];

export const AuroraHearts = () => {
  const hearts = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: '110vh', 
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.2, 0.2, 0],
            x: [`${Math.random() * (100)}%`, `${Math.random() * 100}%`],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          <Heart 
            size={Math.random() * 40 + 20} 
            fill={COLORS[i % COLORS.length]} 
            color={COLORS[i % COLORS.length]}
            className="filter blur-[1px]"
          />
        </motion.div>
      ))}
    </div>
  );
};
