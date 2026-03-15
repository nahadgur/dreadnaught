import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        title="We Are Dreadnaught"
        subtitle="A digital design and engineering agency focused on creating immersive, award-winning experiences for the web."
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-xl md:text-3xl font-sans leading-relaxed text-white/80">
            A digital design and engineering agency focused on creating immersive, award-winning experiences for the web.
          </p>
          <p className="text-sm md:text-base font-sans leading-relaxed text-white/50">
            Founded in 2026, we believe that the web is a canvas for art and technology to intersect. Our team of designers, developers, and strategists work together to push the boundaries of what is possible in the browser. We don&apos;t just build websites; we craft digital legacies.
          </p>
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
