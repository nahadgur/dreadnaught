'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-[var(--color-neon)] mb-4">
          System Error
        </h2>
        <p className="text-white/50 font-sans mb-8">
          Something went wrong while trying to load this page. We&apos;ve been notified and are looking into it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-[var(--color-neon)] transition-colors duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-white transition-colors duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
