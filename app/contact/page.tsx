'use client';

import PageHero from '@/components/PageHero';
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
      <PageHero
        title="Say Hello"
        subtitle="Whether you have a project in mind or just want to chat about the future of the web, we'd love to hear from you."
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-2">Direct Contact</h4>
              <a href="mailto:hello@dreadnaught.com" className="text-2xl font-display font-bold uppercase tracking-tighter hover:text-[var(--color-neon)] transition-colors">hello@dreadnaught.com</a>
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
              <p className="text-white/70 font-sans">We'll get back to you as soon as possible.</p>
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
