import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-white/10 blur-[100px] rounded-full" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <h1 className="font-display text-[8vw] leading-[0.85] tracking-tighter uppercase font-bold text-white mb-6">
            Digital<br/>Services
          </h1>
          <p className="text-white/70 font-sans max-w-xl text-lg leading-relaxed">
            We are a premier digital agency in London, specializing in high-end web development, immersive brand identities, and SEO-driven growth strategies.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* SEO Section: Why Choose Us */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950">
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-8">
            Why Choose Our Agency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white/80">Data-Driven Results</h3>
              <p className="text-white/60 font-sans leading-relaxed">
                We don&apos;t just build beautiful websites; we engineer digital experiences that convert. Our strategies are backed by analytics and proven SEO methodologies to ensure your brand reaches its target audience effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white/80">Award-Winning Design</h3>
              <p className="text-white/60 font-sans leading-relaxed">
                Our creative team pushes the boundaries of modern web design. From WebGL interactions to seamless animations, we craft bespoke interfaces that leave a lasting impression on your users.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white/80">Technical Excellence</h3>
              <p className="text-white/60 font-sans leading-relaxed">
                Built on modern stacks like Next.js and React, our applications are lightning-fast, highly secure, and infinitely scalable to grow alongside your business.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white/80">Dedicated Support</h3>
              <p className="text-white/60 font-sans leading-relaxed">
                Your success is our priority. We provide ongoing maintenance, continuous optimization, and dedicated account management to ensure your digital presence remains at the forefront of your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations in London */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6">
              Our London Locations
            </h2>
            <p className="text-white/60 font-sans max-w-2xl mx-auto text-lg">
              Strategically positioned across London&apos;s most vibrant creative and tech hubs to serve our global clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location 1 */}
            <div className="group relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/seed/shoreditch/800/600"
                alt="Shoreditch Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-white mb-2">Shoreditch</h3>
                <p className="text-white/70 font-sans text-sm">Tech Hub & Innovation Center</p>
                <p className="text-white/50 font-sans text-xs mt-4">123 Silicon Roundabout<br/>London, EC1V 1AB</p>
              </div>
            </div>

            {/* Location 2 */}
            <div className="group relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/seed/soho/800/600"
                alt="Soho Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-white mb-2">Soho</h3>
                <p className="text-white/70 font-sans text-sm">Creative & Design Studio</p>
                <p className="text-white/50 font-sans text-xs mt-4">45 Creative Square<br/>London, W1D 3QU</p>
              </div>
            </div>

            {/* Location 3 */}
            <div className="group relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/seed/camden/800/600"
                alt="Camden Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-white mb-2">Camden</h3>
                <p className="text-white/70 font-sans text-sm">Media & Production House</p>
                <p className="text-white/50 font-sans text-xs mt-4">88 Lock Market<br/>London, NW1 8AF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section: Our Process */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-12">
            Our Proven Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-left">
            <div className="flex-1 border-t border-white/20 pt-6">
              <span className="text-white/30 font-mono text-xl mb-4 block">01</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Discovery</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">Deep-dive into your brand, market positioning, and target audience to formulate a winning strategy.</p>
            </div>
            <div className="flex-1 border-t border-white/20 pt-6">
              <span className="text-white/30 font-mono text-xl mb-4 block">02</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Design</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">Crafting bespoke, user-centric interfaces that elevate your brand identity and engage your users.</p>
            </div>
            <div className="flex-1 border-t border-white/20 pt-6">
              <span className="text-white/30 font-mono text-xl mb-4 block">03</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Development</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">Building robust, scalable, and high-performance applications using cutting-edge web technologies.</p>
            </div>
            <div className="flex-1 border-t border-white/20 pt-6">
              <span className="text-white/30 font-mono text-xl mb-4 block">04</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Launch & SEO</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">Deploying your project with comprehensive technical SEO optimization to ensure maximum visibility.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
