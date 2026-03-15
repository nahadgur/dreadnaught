import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-white/60 font-mono text-xs uppercase tracking-widest">
              {post.date}
            </span>
          </div>
          <h1 className="font-display text-[6vw] md:text-[4vw] leading-[1] tracking-tighter uppercase font-bold text-white mb-6">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="prose prose-invert prose-lg max-w-none font-sans text-white/80 leading-relaxed">
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 leading-relaxed">
              {post.excerpt}
            </p>
            
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mt-16 mb-8">
              The Evolution of Digital Experiences
            </h2>
            
            <p className="mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <blockquote className="border-l-4 border-white/30 pl-6 py-2 my-12 text-2xl font-display italic text-white/90">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            
            <p className="mb-8">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
            <Link href="/blog" className="text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
              <span>←</span> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
