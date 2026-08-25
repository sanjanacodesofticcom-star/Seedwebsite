'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, MessageCircle, Eye, ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import { getBlogPosts } from '@/sanity/client';
import { fallbackPosts } from '@/data/blogFallback';

export default function BlogSection() {
  const [posts, setPosts] = useState(fallbackPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getBlogPosts();
        if (data && data.length > 0) {
          setPosts(data);
        }
      } catch (err) {
        console.warn('Using fallback posts:', err);
      }
    }
    loadPosts();
  }, []);

  return (
    <section className="section-major bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Soft Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(171,239,6,0.15) 0%, rgba(24,119,242,0.1) 50%, transparent 100%)' }}
      />

      <div className="container-xl relative z-10">
        
        {/* Section Header matching reference style */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-4 border border-[#E2E8F0] shadow-sm">
            <BookOpen size={13} className="text-[#1877F2]" />
            <span>INSIGHTS & STRATEGIES</span>
          </div>

          <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#0B1220] tracking-tight leading-[1.12] mb-3 font-display">
            Your Gateway to Conversational Growth
          </h2>

          <p className="text-[16.5px] sm:text-[18.5px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
            Actionable playbooks, WhatsApp API strategies, and AI automation guides from every corner of the industry.
          </p>
        </div>

        {/* 3-Card Grid matching reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group relative rounded-[28px] overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-4 sm:p-5 border border-[#E2E8F0] bg-[#0B1220] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Full-Bleed Cover Image with subtle zoom on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={post.image || '/images/avatars/avatar-2.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Floating Frosted Glass Card Overlay */}
              <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/70 rounded-[22px] p-5 sm:p-6 shadow-xl text-[#0B1220] transition-all group-hover:bg-white/98">
                
                {/* Top Meta Line: Category Badge + Date + Read Time + Bookmark & Stats */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]/80">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#0B1220] text-white px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[#94A3B8] text-[11.5px] font-medium">•</span>
                    <span className="text-[#64748B] text-[12px] font-medium">
                      {post.publishedAt}
                    </span>
                    <span className="text-[#94A3B8] text-[11.5px] font-medium">•</span>
                    <span className="text-[#64748B] text-[12px] font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Bookmark & Interaction Icons */}
                  <div className="flex items-center gap-3 text-[#64748B]">
                    <Bookmark size={15} className="hover:text-[#0B1220] transition-colors" />
                    <div className="flex items-center gap-1 text-[11.5px] font-mono">
                      <MessageCircle size={13} />
                      <span>{post.commentsCount || 18}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11.5px] font-mono">
                      <Eye size={13} />
                      <span>{post.viewsCount || 420}</span>
                    </div>
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0B1220] leading-snug mt-3 mb-2 font-display group-hover:text-[#1877F2] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-[13px] text-[#475569] leading-relaxed font-medium line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Bottom Row: Read More with Arrow Button */}
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

        {/* Bottom Centered All Articles CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="btn-secondary-brand font-bold text-[14px] shadow-sm inline-flex items-center gap-2"
          >
            <span>View All Insights & Playbooks</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
