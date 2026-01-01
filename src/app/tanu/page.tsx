'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RotatingText from '@/components/RotatingText';
import MagicBento, { BentoCardProps } from '@/components/MagicBento';
import { intervalToDuration, isAfter, setYear, getYear } from 'date-fns';

const TANU_BIRTHDAY = { month: 7, day: 14 }; // July 14

export default function TanuPage() {
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0);

  useEffect(() => {
    const calculateBirthday = () => {
      const now = new Date();
      let bday = new Date(getYear(now), TANU_BIRTHDAY.month - 1, TANU_BIRTHDAY.day);
      
      if (isAfter(now, bday)) {
        bday = setYear(bday, getYear(now) + 1);
      }
      
      const diff = bday.getTime() - now.getTime();
      setDaysUntilBirthday(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    };

    calculateBirthday();
    const timer = setInterval(calculateBirthday, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  const tanuCards: BentoCardProps[] = [
    {
      title: "Tanu",
      label: "The Queen",
      description: "A blend of grace, strength, and a little bit of chaos. Managing the world one day at a time.",
      className: "md:row-span-2 md:col-span-1 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(20, 232, 24, 0.1)"
    },
    {
      title: `${daysUntilBirthday} Days`,
      label: "Birthday Countdown",
      description: "Until the next big celebration of the most special person.",
      className: "md:col-span-3",
      color: "rgba(181, 61, 255, 0.1)"
    },
    {
      title: "Our Song",
      label: "Spotify",
      description: (
        <div className="w-full h-full mt-4 rounded-xl overflow-hidden bg-black/40 backdrop-blur-md">
          <iframe 
            src="https://open.spotify.com/embed/track/4u8v8y6z94c28X4uX4Y6nU?utm_source=generator&theme=0" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      ),
      className: "md:col-span-2",
      color: "rgba(1, 126, 213, 0.1)"
    },
    {
      title: "Fav Food & Weather",
      label: "Essentials",
      description: (
        <div className="flex gap-2 h-24 mt-2">
          <div className="flex-1 rounded-lg bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500')] bg-cover bg-center relative group">
            <span className="absolute bottom-1 left-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Pizza</span>
          </div>
          <div className="flex-1 rounded-lg bg-[url('https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=500')] bg-cover bg-center relative group">
            <span className="absolute bottom-1 left-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Rainy</span>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "Paris",
      label: "Fav Travel",
      description: "Dreaming of the Eiffel Tower and cozy cafes.",
      className: "md:col-span-1 bg-[url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "Interstellar",
      label: "Fav Movie",
      description: "Love is the one thing that transcends time and space.",
      className: "md:col-span-1 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "Porsche 911",
      label: "Fav Car",
      description: "Timeless design, unparalleled performance.",
      className: "md:col-span-1 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "A Note from Kichku",
      label: "Partner Note",
      description: (
        <div className="flex flex-col md:flex-row gap-6 mt-4 items-center">
          <p className="flex-1 italic text-lg leading-relaxed text-white/90">
            "You are the light in my life, the peace in my chaos, and the home I always want to come back to. Thank you for being you, for being ours, and for making every moment feel like a lifetime of happiness. I love you more than words can ever capture."
          </p>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute w-32 h-32 rotate-[-12deg] rounded-lg border-4 border-white shadow-xl overflow-hidden bg-slate-800 translate-x-[-20%]">
              <img src="https://images.unsplash.com/photo-1516589174184-c68526514b4f?q=80&w=300" className="w-full h-full object-cover" alt="us" />
            </div>
            <div className="absolute w-32 h-32 rotate-[8deg] rounded-lg border-4 border-white shadow-xl overflow-hidden bg-slate-800 translate-x-[10%] translate-y-[10%] z-10">
              <img src="https://images.unsplash.com/photo-1522673607200-16484837dec5?q=80&w=300" className="w-full h-full object-cover" alt="us" />
            </div>
            <div className="absolute w-32 h-32 rotate-[-4deg] rounded-lg border-4 border-white shadow-xl overflow-hidden bg-slate-800 translate-y-[-10%] translate-x-[5%] z-20">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300" className="w-full h-full object-cover" alt="us" />
            </div>
          </div>
        </div>
      ),
      className: "md:col-span-4",
      color: "rgba(255, 255, 255, 0.05)"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden selection:bg-white/20">
      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Spotlights */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-green-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] bg-purple-500/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Entrance Animation */}
      <section className="h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <RotatingText
              texts={["Den of Tanu", "Den of Aarohi", "Den of Ovi", "Van 83"]}
              mainClassName="text-4xl md:text-7xl font-sans tracking-tighter text-white font-medium"
              staggerDuration={0.06}
              auto
              rotationInterval={3000}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-white/40 tracking-[0.3em] uppercase text-xs md:text-sm font-light"
          >
            Scroll to explore
          </motion.p>
        </div>
      </section>

      {/* Bento Section */}
      <section className="py-20 px-6">
        <MagicBento 
          cards={tanuCards}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          glowColor="20, 232, 24"
        />
      </section>

      {/* Footer Note */}
      <footer className="py-20 text-center text-white/20 text-xs tracking-widest uppercase">
        Built with love for 7to14
      </footer>
    </div>
  );
}
