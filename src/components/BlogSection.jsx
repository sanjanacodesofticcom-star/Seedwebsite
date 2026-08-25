'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, MessageCircle, Eye, ArrowUpRight, BookOpen, Star, Sparkles } from 'lucide-react';
import { getBlogPosts } from '@/sanity/client';

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSanityPosts() {
      setIsLoading(true);
      try {
        const data = await getBlogPosts();
        if (data && Array.isArray(data)) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (err) {
        console.error('Failed to load Sanity posts:', err);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadSanityPosts();
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

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-[28px] bg-white border border-[#E2E8F0] p-6 h-[460px] animate-pulse flex flex-col justify-end">
                <div className="h-4 bg-[#E2E8F0] rounded w-2/3 mb-3"></div>
                <div className="h-6 bg-[#E2E8F0] rounded w-full mb-2"></div>
                <div className="h-4 bg-[#E2E8F0] rounded w-4/5"></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State if 0 posts in Sanity */}
        {!isLoading && posts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-[28px] border border-[#E2E8F0] p-8 max-w-xl mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#101B33] flex items-center justify-center mx-auto mb-4 text-[#ABEF06]">
              <Sparkles size={24} />
            </div>
            <h3 className="text-[22px] font-extrabold text-[#0B1220] mb-2 font-display">
              No Published Blogs Yet
            </h3>
            <p className="text-[15px] text-[#64748B] mb-6 leading-relaxed font-medium">
              Open Sanity Studio to create and publish your first article with images, categories, and tags.
            </p>
            <Link
              href="/studio"
              className="btn-lime text-[14.5px] font-bold inline-flex items-center gap-2"
            >
              <span>OPEN SANITY STUDIO</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

        {/* 3-Card Grid rendering ONLY Sanity Posts */}
        {!isLoading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.id || post.slug}
                href={`/blog/${post.slug}`}
                className="group relative rounded-[28px] overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-4 sm:p-5 border border-[#E2E8F0] bg-[#0B1220] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Full-Bleed Featured Cover Image from Sanity with subtle zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={post.featuredImage || post.image || '/images/avatars/avatar-2.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                </div>

                {/* Optional Featured Blog Pill Tag on Top Right */}
                {post.featuredBlog && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ABEF06] text-[#0B1220] font-bold text-[11.5px] shadow-lg border border-black/10">
                      <Star size={12} fill="#0B1220" />
                      <span>Featured</span>
                    </span>
                  </div>
                )}

                {/* Floating Frosted Glass Card Overlay */}
                <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/70 rounded-[22px] p-5 sm:p-6 shadow-xl text-[#0B1220] transition-all group-hover:bg-white/98">
                  
                  {/* Top Meta Line: Category + Published Date + Read Time + Bookmark & Stats */}
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
                      {post.showBookmark !== false && (
                        <Bookmark size={15} className="hover:text-[#0B1220] transition-colors" />
                      )}
                      {post.commentsCount !== undefined && (
                        <div className="flex items-center gap-1 text-[11.5px] font-mono">
                          <MessageCircle size={13} />
                          <span>{post.commentsCount}</span>
                        </div>
                      )}
                      {post.viewsCount !== undefined && (
                        <div className="flex items-center gap-1 text-[11.5px] font-mono">
                          <Eye size={13} />
                          <span>{post.viewsCount}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Post Title from Sanity */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0B1220] leading-snug mt-3 mb-2 font-display group-hover:text-[#1877F2] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt from Sanity */}
                  <p className="text-[13px] text-[#475569] leading-relaxed font-medium line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Bottom Row: CTA Text with Arrow Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]/80">
                    <span className="text-[13px] font-bold text-[#0B1220] group-hover:text-[#1877F2] transition-colors">
                      {post.ctaText || 'Read Article'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0B1220] text-white group-hover:bg-[#ABEF06] group-hover:text-[#0B1220] flex items-center justify-center transition-all shadow-sm">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom Centered All Articles CTA */}
        {!isLoading && posts.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="btn-secondary-brand font-bold text-[14px] shadow-sm inline-flex items-center gap-2"
            >
              <span>View All Insights & Playbooks</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
