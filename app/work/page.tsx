import PageHero from '@/components/PageHero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        title="Our Works"
        subtitle="A curated selection of our most impactful digital experiences, brand identities, and creative campaigns."
      />
      <div className="pt-12">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
