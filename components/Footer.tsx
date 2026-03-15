'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1920/1080?grayscale')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 relative z-10">
        <div className="max-w-xl">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-8">
            Let&apos;s create<br />the future
          </h2>
          <p className="text-white/50 font-sans text-lg mb-12">
            Ready to elevate your digital presence? Get in touch with our team of experts.
          </p>
          <Link href="/contact" className="inline-block text-2xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white hover:text-[var(--color-neon)] transition-colors duration-300 border-b-2 border-transparent hover:border-[var(--color-neon)] pb-2">
            hello@dreadnaught.com
          </Link>
        </div>

        <div className="flex gap-12 mt-16 md:mt-0">
          <div className="flex flex-col gap-4">
            <h4 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-4">Socials</h4>
            <a href="#" className="text-white font-sans text-sm hover:text-[var(--color-neon)] transition-colors">Instagram</a>
            <a href="#" className="text-white font-sans text-sm hover:text-[var(--color-neon)] transition-colors">Twitter</a>
            <a href="#" className="text-white font-sans text-sm hover:text-[var(--color-neon)] transition-colors">LinkedIn</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-4">Offices</h4>
            <span className="text-white font-sans text-sm">New York</span>
            <span className="text-white font-sans text-sm">London</span>
            <span className="text-white font-sans text-sm">Tokyo</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <p className="text-white/30 font-mono text-xs uppercase tracking-widest">
          © 2026 Dreadnaught Digital. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-white/30 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/30 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Massive background text */}
      <div className="absolute bottom-[-10vw] left-0 w-full overflow-hidden pointer-events-none z-0 flex justify-center">
        <h1 className="font-display text-[25vw] font-bold uppercase tracking-tighter text-white/5 whitespace-nowrap">
          Dreadnaught
        </h1>
      </div>
    </footer>
  );
}
