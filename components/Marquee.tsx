'use client';

import { motion } from 'motion/react';

export default function Marquee() {
  const text = "Creative Development • Interactive Design • Web3 Experiences • Motion Graphics • Brand Identity • ";
  
  return (
    <section className="py-24 overflow-hidden bg-black border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter text-transparent text-outline mr-8">
            {text}
          </h2>
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter text-transparent text-outline mr-8">
            {text}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
