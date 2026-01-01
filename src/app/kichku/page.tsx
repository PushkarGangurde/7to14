'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RotatingText from '@/components/RotatingText';
import MagicBento, { BentoCardProps } from '@/components/MagicBento';
import { isAfter, setYear, getYear } from 'date-fns';

const KICHKU_BIRTHDAY = { month: 8, day: 20 }; // Placeholder: August 20

export default function KichkuPage() {
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0);

  useEffect(() => {
    const calculateBirthday = () => {
      const now = new Date();
      let bday = new Date(getYear(now), KICHKU_BIRTHDAY.month - 1, KICHKU_BIRTHDAY.day);
      
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

  const kichkuCards: BentoCardProps[] = [
    {
      title: "Kichku",
      label: "The King",
      description: "A visionary, a builder, and the calm in every storm. Always looking towards the next horizon.",
      className: "md:row-span-2 md:col-span-1 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(132, 0, 255, 0.1)"
    },
    {
      title: `${daysUntilBirthday} Days`,
      label: "Birthday Countdown",
      description: "Counting down to the day the world got a little brighter.",
      className: "md:col-span-3",
      color: "rgba(1, 126, 213, 0.1)"
    },
    {
      title: "Our Vibe",
      label: "Spotify",
      description: (
        <div className="w-full h-full mt-4 rounded-xl overflow-hidden bg-black/40 backdrop-blur-md">
          <iframe 
            src="https://open.spotify.com/embed/track/2I96Sqc0mZ7u7Yy979T9v2?utm_source=generator&theme=0" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      ),
      className: "md:col-span-2",
      color: "rgba(20, 232, 24, 0.1)"
    },
    {
      title: "Fav Food & Weather",
      label: "Essentials",
      description: (
        <div className="flex gap-2 h-24 mt-2">
          <div className="flex-1 rounded-lg bg-[url('https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=500')] bg-cover bg-center relative group">
            <span className="absolute bottom-1 left-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Burger</span>
          </div>
          <div className="flex-1 rounded-lg bg-[url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=500')] bg-cover bg-center relative group">
            <span className="absolute bottom-1 left-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Sunny</span>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "Japan",
      label: "Fav Travel",
      description: "Fascinated by the culture, technology, and the neon lights of Tokyo.",
      className: "md:col-span-1 bg-[url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "Inception",
      label: "Fav Movie",
      description: "Dreams within dreams. Reality is whatever we make it.",
      className: "md:col-span-1 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "Audi RS6",
      label: "Fav Car",
      description: "The ultimate sleeper. Power meets practicality.",
      className: "md:col-span-1 bg-[url('https://images.unsplash.com/photo-1606148332468-f99da6f23902?q=80&w=1000')] bg-cover bg-center",
      color: "rgba(255, 255, 255, 0.05)"
    },
    {
      title: "A Note from Tanu",
      label: "Partner Note",
      description: (
        <div className="flex flex-col md:flex-row gap-6 mt-4 items-center">
          <p className="flex-1 italic text-lg leading-relaxed text-white/90">
            "To my favorite person, my partner in crime, and the love of my life. You make every day feel like an adventure. I am so proud of the man you are and the dreams you're building. I'll always be by your side, cheering you on. I love you endlessly."
          </p>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute w-32 h-32 rotate-[-8deg] rounded-lg border-4 border-white shadow-xl overflow-hidden bg-slate-800 translate-x-[-15%]">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=300" className="w-full h-full object-cover" alt="us" />
            </div>
            <div className="absolute w-32 h-32 rotate-[12deg] rounded-lg border-4 border-white shadow-xl overflow-hidden bg-slate-800 translate-x-[15%] translate-y-[5%] z-10">
              <img src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=300" className="w-full h-full object-cover" alt="us" />
            </div>
            <div className="absolute w-32 h-32 rotate-[-2deg] rounded-lg border-4 border-white shadow-xl overflow-hidden bg-slate-800 translate-y-[-5%] translate-x-[0%] z-20">
              <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300" className="w-full h-full object-cover" alt="us" />
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
      <div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-purple-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vh] bg-blue-500/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Entrance Animation */}
      <section className="h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <RotatingText
              texts={["Den of Kichku", "Den of Parth", "Van 83"]}
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
          cards={kichkuCards}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          glowColor="132, 0, 255"
        />
      </section>

      {/* Footer Note */}
      <footer className="py-20 text-center text-white/20 text-xs tracking-widest uppercase">
        Built with love for 7to14
      </footer>
    </div>
  );
}
