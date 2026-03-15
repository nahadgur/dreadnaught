'use client';

import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-white/10 blur-[100px] rounded-full" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-8">
              Say<br/>Hello
            </h1>
            <p className="text-white/50 font-sans max-w-md mb-12">
              Whether you have a project in mind or just want to chat about the future of the web, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-4">
              <h4 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-2">Direct Contact</h4>
              <a href="mailto:hello@vanguard.com" className="text-2xl font-display font-bold uppercase tracking-tighter hover:text-[var(--color-neon)] transition-colors">hello@vanguard.com</a>
              <a href="tel:+1234567890" className="text-2xl font-display font-bold uppercase tracking-tighter hover:text-[var(--color-neon)] transition-colors">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-24"
            >
              <h3 className="font-display text-4xl font-bold uppercase tracking-tighter text-[var(--color-neon)] mb-4">Message Sent</h3>
              <p className="text-white/70 font-sans">We&apos;ll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-white/50">Your Name</label>
                <input type="text" id="name" required className="bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-[var(--color-neon)] transition-colors rounded-none" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-white/50">Email Address</label>
                <input type="email" id="email" required className="bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-[var(--color-neon)] transition-colors rounded-none" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-white/50">Project Details</label>
                <textarea id="message" required rows={4} className="bg-transparent border-b border-white/20 pb-2 text-white font-sans focus:outline-none focus:border-[var(--color-neon)] transition-colors resize-none rounded-none" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button type="submit" className="mt-4 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-[var(--color-neon)] transition-colors duration-300 self-start">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      </section>
      <Footer />
    </main>
  );
}
