import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/60 font-mono text-sm uppercase tracking-widest">
              Project {project.id}
            </span>
            <span className="w-12 h-[1px] bg-white/30"></span>
            <span className="text-white/80 font-mono text-sm uppercase tracking-widest">
              {project.category}
            </span>
          </div>
          <h1 className="font-display text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter uppercase font-bold text-white mb-6">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="mb-12">
                <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-4">Client</h3>
                <p className="text-xl font-medium">{project.title} Corp</p>
              </div>
              <div className="mb-12">
                <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-4">Services</h3>
                <ul className="space-y-2 text-lg">
                  <li>{project.category}</li>
                  <li>UI/UX Design</li>
                  <li>Frontend Development</li>
                </ul>
              </div>
              <div className="mb-12">
                <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-4">Year</h3>
                <p className="text-lg">2026</p>
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 text-white font-mono text-sm uppercase tracking-widest hover:text-white/70 transition-colors">
                Visit Live Site <span className="transform -rotate-45">→</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none font-sans text-white/80 leading-relaxed">
              <p className="text-2xl md:text-3xl text-white/90 font-medium mb-12 leading-relaxed">
                We partnered with {project.title} to reimagine their digital presence, creating an immersive platform that perfectly balances aesthetic innovation with seamless functionality.
              </p>
              
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <div className="my-16 relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={`https://picsum.photos/seed/${project.id}detail1/1200/800`}
                  alt={`${project.title} detail`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mt-16 mb-8">
                The Challenge
              </h2>
              
              <p className="mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src={`https://picsum.photos/seed/${project.id}detail2/800/800`}
                    alt={`${project.title} detail`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src={`https://picsum.photos/seed/${project.id}detail3/800/800`}
                    alt={`${project.title} detail`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mt-16 mb-8">
                The Solution
              </h2>
              
              <p className="mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/10 flex justify-between items-center">
          <Link href="/work" className="text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
            <span>←</span> Back to Work
          </Link>
          
          <Link href="/work" className="text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
            Next Project <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
