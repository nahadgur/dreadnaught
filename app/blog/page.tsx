import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        title="Insights & Ideas"
        subtitle="Thoughts, perspectives, and deep dives into design, technology, and the future of digital experiences."
      />


      {/* Blog Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="group flex flex-col hover-target">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-white/40 font-mono text-xs uppercase tracking-widest mb-3">{post.date}</span>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tighter text-white mb-4 group-hover:text-white/70 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/60 font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform duration-300">
                  Read Article <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
