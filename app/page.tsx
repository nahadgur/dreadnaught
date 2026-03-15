import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      <Hero />
      <Marquee />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}
