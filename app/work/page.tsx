import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[60vh] w-full flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-white/10 blur-[100px] rounded-full" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="work-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#work-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>
        
        <div className="relative z-10">
          <h1 className="font-display text-[10vw] leading-[0.85] tracking-tighter uppercase font-bold text-white mb-6">
            Our<br/>Works
          </h1>
          <p className="text-white/70 font-sans max-w-md text-sm md:text-base leading-relaxed">
            A curated selection of our most impactful digital experiences, brand identities, and creative campaigns.
          </p>
        </div>
      </section>
      
      <div className="pt-12">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
