import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Bookmark, MessageCircle } from 'lucide-react';
import { fallbackPosts } from '@/data/blogFallback';
import { getBlogPosts } from '@/sanity/client';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug) || fallbackPosts[0];
  return {
    title: `${post.title} — GetAseed Playbooks`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug) || fallbackPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white">
      {/* Header Banner */}
      <section className="brand-hero-bg pt-12 pb-16 text-[#0B1220] relative border-b border-[#E2E8F0]">
        <div className="container-xl max-w-4xl mx-auto space-y-6 relative z-10">
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#64748B] hover:text-[#0B1220] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-[#0B1220] text-white px-3 py-1 rounded-full font-mono text-[12px] font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-[#64748B] text-[13px] flex items-center gap-1 font-medium">
              <Calendar size={14} />
              {post.publishedAt}
            </span>
            <span className="text-[#64748B] text-[13px] flex items-center gap-1 font-medium">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-[34px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#0B1220] tracking-tight leading-[1.12] font-display">
            {post.title}
          </h1>

          <p className="text-[18px] sm:text-[20px] text-[#475569] font-medium leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="container-xl max-w-4xl mx-auto -mt-8 relative z-20">
        <div className="rounded-[24px] overflow-hidden h-[340px] sm:h-[460px] relative border border-[#E2E8F0] shadow-xl">
          <Image
            src={post.image || '/images/avatars/avatar-2.jpg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="section-major bg-white">
        <div className="container-xl max-w-3xl mx-auto space-y-8 text-[#334155] text-[17px] leading-relaxed font-medium">
          
          {post.content ? (
            <div 
              className="prose prose-lg max-w-none space-y-6 [&>h2]:text-[28px] [&>h2]:font-extrabold [&>h2]:text-[#0B1220] [&>h2]:tracking-tight [&>h3]:text-[22px] [&>h3]:font-bold [&>h3]:text-[#0B1220] [&>ul]:space-y-3 [&>ul]:list-disc [&>ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="space-y-6">
              <p>{post.excerpt}</p>
              <p>Learn how to connect Meta Cloud API, WhatsApp Business catalogs, and AI agents directly to automate conversations with zero markup fees.</p>
            </div>
          )}

          {/* CTA Banner at end of article */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-[#0B1220] text-white space-y-4 mt-12 shadow-xl border border-[#1E293B]">
            <span className="text-[11.5px] font-mono uppercase tracking-wider text-[#ABEF06] font-bold">
              Ready to automate?
            </span>
            <h3 className="text-[24px] sm:text-[30px] font-extrabold text-white tracking-tight">
              Start Free 7-Day WhatsApp & AI Onboarding
            </h3>
            <p className="text-[#94A3B8] text-[15px] font-medium leading-relaxed">
              Connect your Meta Cloud API and scale direct conversions with zero commission markup.
            </p>
            <div className="pt-2">
              <a
                href="https://chat.getaseed.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime text-[14.5px] font-bold"
              >
                <span>GET STARTED FREE</span>
                <span className="arrow-circle-dark">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </article>
  );
}
