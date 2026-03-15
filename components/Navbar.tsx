'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { siteConfig } from '@/data/site';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const links = siteConfig.mainNav;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
      >
        <Link href="/" className="font-display text-2xl font-bold tracking-tighter uppercase hover-target pointer-events-auto z-50">
          {siteConfig.name}
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-mono text-xs uppercase tracking-widest hover-target transition-colors ${
                pathname === link.path ? 'text-[var(--color-neon)]' : 'text-white hover:text-[var(--color-neon)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden pointer-events-auto z-50 w-8 h-8 flex flex-col justify-center items-center gap-[6px] hover-target"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
            className="w-full h-[2px] bg-white block origin-center"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
            className="w-full h-[2px] bg-white block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
            className="w-full h-[2px] bg-white block origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div key="mobile-menu" className="fixed inset-0 z-30 pointer-events-none">
            {/* Invisible backdrop to close on click outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Right-aligned menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-24 right-6 flex flex-col items-end gap-6 w-[20%] min-w-[150px] pointer-events-auto"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-3xl uppercase tracking-tighter hover-target transition-colors drop-shadow-md ${
                      pathname === link.path ? 'text-[var(--color-neon)]' : 'text-white hover:text-[var(--color-neon)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
