'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24">
        <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white">
          Selected<br />Works
        </h2>
        <p className="text-white/50 font-mono text-sm uppercase tracking-widest max-w-xs mt-8 md:mt-0">
          A curated selection of our most recent and impactful digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <Link href={`/work/${project.slug}`} className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 block">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-mono text-xs uppercase tracking-widest">
                  {project.id}
                </span>
              </div>
            </Link>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white group-hover:text-[var(--color-neon)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 font-sans mt-2">{project.category}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
