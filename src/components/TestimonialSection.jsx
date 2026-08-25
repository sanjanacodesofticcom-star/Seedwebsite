'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Send, 
  Layers, 
  Zap, 
  BarChart3, 
  Globe2,
  Building2
} from 'lucide-react';
import { getTestimonials } from '@/sanity/client';

const fallbackTestimonials = [
  {
    name: 'Sarah Smith',
    handle: '@sarah.smith',
    role: 'UX Designer',
    avatar: '/images/avatars/avatar-1.jpg',
    testimonial: 'We recovered $42,000 in abandoned carts in our first 30 days using GetAseed\'s WhatsApp Cloud API. 🚀\n\nThe automated recovery flows run on autopilot without extra team overhead!',
    highlightText: '$42,000 in abandoned carts',
    companyName: 'Invoice2go',
    companyLogo: '',
    date: 'Nov 20, 2024'
  },
  {
    name: 'Fig Nelson',
    handle: '@nelson.svg',
    role: 'Co-Founder',
    avatar: '/images/avatars/avatar-2.jpg',
    testimonial: 'Training the AI chatbot with our product catalog and FAQs took less than 10 minutes. It resolves 85% of inquiries instantly. 🔥',
    highlightText: 'product catalog and FAQs',
    companyName: 'veroxfloor',
    companyLogo: '',
    date: 'Jun 24, 2024'
  },
  {
    name: 'Elena Rostova',
    handle: '@elena.growth',
    role: 'Jr. Designer',
    avatar: '/images/avatars/avatar-3.jpg',
    testimonial: 'Our Instagram DM to WhatsApp checkout funnel jumped by 4.2x. The 1-click Shopify catalog sync is seamless. ✨\n\nCustomers love the instant checkout replies. 😇',
    highlightText: 'jumped by 4.2x',
    companyName: 'RPUBLICA',
    companyLogo: '',
    date: 'May 8, 2024'
  },
  {
    name: 'Fletch Skinner',
    handle: '@fletch06',
    role: 'Developer',
    avatar: '/images/avatars/avatar-4.jpg',
    testimonial: 'The direct Meta Cloud API connection with zero markup fees saved our agency over $1,200 every month. 🧡',
    highlightText: 'Meta Cloud API connection',
    companyName: 'Amplitude',
    companyLogo: '',
    date: 'Dec 12, 2024'
  },
  {
    name: 'Alan Fresco',
    handle: '@frescoalan0',
    role: 'Product Manager',
    avatar: '/images/avatars/avatar-5.jpg',
    testimonial: 'Managing WhatsApp, Instagram, and Facebook Messenger from a single unified AI inbox saved our support team 20+ hours weekly. 🎉',
    highlightText: 'a single unified AI inbox',
    companyName: 'XPENG',
    companyLogo: '',
    date: 'Feb 12, 2024'
  },
  {
    name: 'Marcus Chen',
    handle: '@marcus.scale',
    role: 'Accountant',
    avatar: '/images/avatars/avatar-1.jpg',
    testimonial: 'Automated order confirmation and shipping tracking messages achieved an open rate of 97%. 🧡\n\nIt completely outperformed all our legacy SMS campaigns.',
    highlightText: 'open rate of 97%',
    companyName: 'Invoice2go',
    companyLogo: '',
    date: 'Dec 12, 2024'
  }
];

function renderHighlightedText(text, highlight) {
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
  const [items, setItems] = useState(fallbackTestimonials);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const sanityData = await getTestimonials();
        if (sanityData && sanityData.length > 0) {
          setItems(sanityData);
        }
      } catch (e) {
        console.warn('Error loading Sanity testimonials:', e);
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

        {/* 6-Card Grid matching reference card structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, index) => {
            return (
              <div
                key={item.id || index}
                className="bg-white rounded-[26px] p-6 sm:p-7 border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(11,18,32,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(11,18,32,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
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
                    {item.role && (
                      <span className="px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-[11.5px] font-bold shrink-0">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
