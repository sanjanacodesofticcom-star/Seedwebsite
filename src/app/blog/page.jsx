import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, MessageCircle, Eye, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { getBlogPosts } from '@/sanity/client';
import { fallbackPosts } from '@/data/blogFallback';

export const metadata = {
  title: 'Blog & Playbooks — Conversational Commerce Insights | GetAseed',
  description: 'Actionable WhatsApp automation strategies, AI chatbot tutorials, and direct Meta Cloud API playbooks.',
};

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="brand-hero-bg pt-14 pb-20 text-[#0B1220] relative">
        <div className="container-xl max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#0B1220]">
              <BookOpen size={14} className="text-[#1877F2]" />
              <span className="text-[12.5px] font-mono font-bold tracking-wide uppercase text-[#0B1220]">
                GetAseed Journal & Playbooks
              </span>
            </div>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-extrabold text-[#0B1220] tracking-tight leading-[1.08] font-display">
            Your Gateway to Conversational Commerce
          </h1>

          <p className="text-[17px] sm:text-[20px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
            Breaking strategies, WhatsApp marketing tactics, and AI automation guides from industry leaders.
          </p>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section className="section-major bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative rounded-[28px] overflow-hidden min-h-[480px] flex flex-col justify-end p-5 border border-[#E2E8F0] bg-[#0B1220] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Cover Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={post.image || '/images/avatars/avatar-2.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Frosted Glass Overlay */}
                <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/70 rounded-[22px] p-6 shadow-xl text-[#0B1220] transition-all group-hover:bg-white/98">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]/80">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-[#0B1220] text-white px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[#94A3B8] text-[11.5px]">•</span>
                      <span className="text-[#64748B] text-[12px] font-medium">
                        {post.publishedAt}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[#64748B]">
                      <Bookmark size={15} />
                      <div className="flex items-center gap-1 text-[11.5px] font-mono">
                        <MessageCircle size={13} />
                        <span>{post.commentsCount || 18}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[19px] font-bold text-[#0B1220] leading-snug mt-3 mb-2 font-display group-hover:text-[#1877F2] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[13.5px] text-[#475569] leading-relaxed font-medium line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]/80">
                    <span className="text-[13px] font-bold text-[#0B1220] group-hover:text-[#1877F2] transition-colors">
                      Read Article
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0B1220] text-white group-hover:bg-[#ABEF06] group-hover:text-[#0B1220] flex items-center justify-center transition-all shadow-sm">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
