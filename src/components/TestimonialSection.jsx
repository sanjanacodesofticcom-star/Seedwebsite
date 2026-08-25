'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  Send, 
  Layers, 
  Zap, 
  BarChart3, 
  Globe2,
  Building2,
  Star,
  ArrowUpRight
} from 'lucide-react';
import { getTestimonials } from '@/sanity/client';

function renderHighlightedText(text, highlight) {
  if (!text) return null;
  if (!highlight || !text.includes(highlight)) {
    return (
      <span className="whitespace-pre-line">
        {text}
      </span>
    );
  }

  const parts = text.split(highlight);
  return (
    <span className="whitespace-pre-line">
      {parts[0]}
      <strong className="text-[#0B1220] font-bold">{highlight}</strong>
      {parts.slice(1).join(highlight)}
    </span>
  );
}

export default function TestimonialSection() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      setIsLoading(true);
      try {
        const sanityData = await getTestimonials();
        if (sanityData && Array.isArray(sanityData)) {
          setItems(sanityData);
        } else {
          setItems([]);
        }
      } catch (e) {
        console.error('Error loading Sanity testimonials:', e);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  return (
    <section className="section-major bg-[#FAF7F2] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Soft Ambient Warm Glow matching reference UI */}
      <div 
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(251,207,232,0.6) 0%, rgba(244,228,219,0.3) 50%, transparent 100%)'
        }}
      />

      <div className="container-xl relative z-10">
        
        {/* Top Header Row matching reference layout: Eyebrow + Title on left, Subtitle in center, CTA on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Left: Eyebrow + Title */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#475569] font-mono text-[12px] font-bold tracking-wide mb-3 border border-[#E2E8F0] shadow-sm">
              <span>Client Stories</span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#0B1220] tracking-tight leading-[1.1] font-display">
              What are they <br />
              saying about us?
            </h2>
          </div>

          {/* Center: Subtitle description */}
          <div className="max-w-md">
            <p className="text-[15.5px] sm:text-[17px] text-[#475569] font-medium leading-relaxed">
              Real feedback from e-commerce brands, marketing leaders, and founders scaling on WhatsApp and AI.
            </p>
          </div>

          {/* Right: Try Now Button */}
          <div className="shrink-0">
            <a
              href="https://chat.getaseed.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1220] text-white hover:bg-[#1E293B] text-[14px] font-bold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Sparkles size={15} className="text-[#ABEF06]" />
              <span>Try Now</span>
            </a>
          </div>
        </div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-[26px] p-7 border border-[#E2E8F0] h-[260px] animate-pulse flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#E2E8F0]"></div>
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-[#E2E8F0] rounded"></div>
                    <div className="w-16 h-3 bg-[#E2E8F0] rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 my-4">
                  <div className="w-full h-4 bg-[#E2E8F0] rounded"></div>
                  <div className="w-4/5 h-4 bg-[#E2E8F0] rounded"></div>
                </div>
                <div className="h-4 bg-[#E2E8F0] rounded w-1/3"></div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State if 0 testimonials in Sanity Studio */}
        {!isLoading && items.length === 0 && (
          <div className="text-center py-16 bg-white rounded-[28px] border border-[#E2E8F0] p-8 max-w-xl mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#101B33] flex items-center justify-center mx-auto mb-4 text-[#ABEF06]">
              <Sparkles size={24} />
            </div>
            <h3 className="text-[22px] font-extrabold text-[#0B1220] mb-2 font-display">
              No Published Testimonials Yet
            </h3>
            <p className="text-[15px] text-[#64748B] mb-6 leading-relaxed font-medium">
              Open Sanity Studio to add and publish customer reviews, founder avatars, and ratings.
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

        {/* 6-Card Grid rendering strictly Sanity Testimonials */}
        {!isLoading && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[26px] p-6 sm:p-7 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(11,18,32,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(11,18,32,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Optional Featured Pill on top right */}
                {item.featured && (
                  <div className="absolute top-3 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ABEF06]/30 text-[#0B1220] text-[10.5px] font-bold border border-[#ABEF06]">
                      <Star size={10} fill="#0B1220" />
                      <span>Featured</span>
                    </span>
                  </div>
                )}

                {/* 1. Card Top: Avatar + Name & Handle + Role Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden relative border border-[#E2E8F0] shrink-0 bg-[#F1F5F9]">
                        <Image
                          src={item.avatar || '/images/avatars/avatar-1.jpg'}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-extrabold text-[#0B1220] leading-snug">
                          {item.name}
                        </h4>
                        {item.handle && (
                          <span className="text-[12px] text-[#94A3B8] font-mono">
                            {item.handle}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Role Pill Badge */}
                    {item.role && !item.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-[11.5px] font-bold shrink-0">
                        {item.role}
                      </span>
                    )}
                    {item.role && item.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-[11.5px] font-bold shrink-0 mt-5 sm:mt-0">
                        {item.role}
                      </span>
                    )}
                  </div>

                  {/* 2. Card Middle: Testimonial Text with optional Highlight */}
                  <div className="text-[14.5px] text-[#475569] leading-relaxed font-medium mb-6">
                    {renderHighlightedText(item.testimonial, item.highlightText)}
                  </div>
                </div>

                {/* 3. Card Bottom: Company Name + Icon/Logo Tag + Date */}
                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-[#64748B]">
                  <div className="flex items-center gap-2">
                    {item.companyLogo ? (
                      <div className="w-4 h-4 relative shrink-0">
                        <Image
                          src={item.companyLogo}
                          alt={item.companyName}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Send size={14} className="text-[#0B1220]" />
                    )}
                    <span className="text-[13px] font-extrabold text-[#0B1220] tracking-tight font-display">
                      {item.companyName}
                    </span>
                  </div>

                  <span className="text-[12px] font-medium text-[#94A3B8]">
                    {item.date}
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
