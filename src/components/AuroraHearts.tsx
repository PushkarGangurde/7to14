'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const COLORS = ['#14e818', '#017ed5', '#b53dff'];

interface HeartData {
  id: number;
  x: string;
  targetX: string;
  size: number;
  scale: number;
  duration: number;
  delay: number;
  color: string;
}

export const AuroraHearts = () => {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    // Generate hearts on the client side only to avoid hydration mismatch
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      targetX: `${Math.random() * 100}%`,
      size: Math.random() * 30 + 15,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 20,
      color: COLORS[i % COLORS.length]
    }));
    setHearts(newHearts);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{ 
            x: heart.x, 
            y: '110vh', 
            opacity: 0,
            scale: heart.scale
          }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.2, 0.3, 0.2, 0],
            x: [heart.x, heart.targetX],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ 
            duration: heart.duration, 
            repeat: Infinity, 
            delay: heart.delay,
            ease: "easeInOut"
          }}
        >
          <Heart 
            size={heart.size} 
            fill={heart.color} 
            color={heart.color}
            className="filter blur-[1px] drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </motion.div>
      ))}
    </div>
  );
};
