import Link from 'next/link';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <section className="relative flex-grow flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-white/5 blur-[100px] rounded-full" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="404-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#404-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="font-display text-8xl md:text-[12rem] font-bold uppercase tracking-tighter text-white mb-4 leading-none">
            404
          </h1>
          <p className="text-xl md:text-2xl font-sans text-white/50 mb-12 max-w-md">
            The page you are looking for has been moved or no longer exists.
          </p>
          <Link 
            href="/" 
            className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-[var(--color-neon)] transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
