'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const services = [
  {
    title: 'Digital Experience',
    description: 'Immersive websites and web applications that push the boundaries of what is possible on the web.',
  },
  {
    title: 'Brand Identity',
    description: 'Strategic branding that resonates with your audience and stands out in a crowded market.',
  },
  {
    title: 'Motion Design',
    description: 'Dynamic animations and interactions that bring your digital presence to life.',
  },
  {
    title: 'Web3 & Emerging Tech',
    description: 'Innovative solutions leveraging the latest technologies to create future-proof experiences.',
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
        <div className="lg:sticky top-32 self-start">
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-8">
            Our<br />Expertise
          </h2>
          <p className="text-white/50 font-sans max-w-sm mb-12">
            We combine strategic thinking with cutting-edge technology to deliver unparalleled digital solutions.
          </p>
          <Link href="/services" className="inline-block px-8 py-4 rounded-full border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            View All Services
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-b border-white/10 pb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white/50 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-white/50 font-sans max-w-sm text-sm md:text-base group-hover:text-white/80 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
