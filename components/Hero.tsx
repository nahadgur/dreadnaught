'use client';

import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video/Image placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://picsum.photos/seed/abstract/1920/1080?blur=2"
          alt="Abstract Background"
          fill
          className="object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
          priority
        />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="font-display text-[12vw] leading-[0.85] tracking-tighter uppercase font-bold text-white">
              Digital
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex items-center gap-4 md:gap-8"
          >
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
              <ArrowDownRight className="w-8 h-8 md:w-16 md:h-16 text-white" />
            </div>
            <h1 className="font-display text-[12vw] leading-[0.85] tracking-tighter uppercase font-bold text-transparent text-outline">
              Dreadnaught
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xs md:max-w-sm md:absolute md:bottom-0 md:right-0 md:text-right"
        >
          <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed">
            We are an award-winning creative agency crafting immersive digital experiences for the brands of tomorrow.
          </p>
          <div className="mt-6 flex md:justify-end gap-4">
            <Link href="/work" className="px-6 py-3 rounded-full border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
              Our Work
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest hover:bg-white/90 transition-colors duration-300">
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
