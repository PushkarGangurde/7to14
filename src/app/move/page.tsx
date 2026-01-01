'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { AuroraHearts } from '@/components/AuroraHearts';

export default function MovePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      <AuroraHearts />
      
      <div className="relative z-10 max-w-2xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <Activity className="text-[#00ffff]" size={16} />
            <span className="text-xs font-medium tracking-widest text-slate-400 uppercase">Coming Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans text-white font-light tracking-tight">
            Move.
          </h1>
          
          <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg mx-auto">
            Something beautiful is being prepared for this space. 
            Stay tuned for a new way to move together.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#00ffff1a] to-transparent rounded-full blur-[120px] -z-10" />
    </div>
  );
}
