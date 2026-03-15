import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-white/10 blur-[100px] rounded-full" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        <div className="relative z-10">
          <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-12">
            We are<br/>Dreadnaught
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-xl md:text-3xl font-sans leading-relaxed text-white/80">
              A digital design and engineering agency focused on creating immersive, award-winning experiences for the web.
            </p>
            <p className="text-sm md:text-base font-sans leading-relaxed text-white/50">
              Founded in 2026, we believe that the web is a canvas for art and technology to intersect. Our team of designers, developers, and strategists work together to push the boundaries of what is possible in the browser. We don&apos;t just build websites; we craft digital legacies.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-[60vh] relative mb-24">
        <Image 
          src="https://picsum.photos/seed/agency/1920/1080" 
          alt="Agency Office" 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
          referrerPolicy="no-referrer" 
        />
      </div>
      <Footer />
    </main>
  );
}
