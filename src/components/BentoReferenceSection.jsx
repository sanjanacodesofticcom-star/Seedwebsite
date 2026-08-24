import Image from 'next/image';
import { Sparkles, MessageSquare, ShieldCheck, CheckCircle2, Globe2, Zap } from 'lucide-react';

export default function BentoReferenceSection() {
  const avatars = [
    '/images/avatars/avatar-1.jpg',
    '/images/avatars/avatar-2.jpg',
    '/images/avatars/avatar-3.jpg',
    '/images/avatars/avatar-4.jpg',
  ];

  return (
    <section className="section-major bg-white relative">
      <div className="container-xl">
        
        {/* Eyebrow & Headline with Inline Colorful Badge Elements */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="caption-eyebrow text-[#64748B] mb-3">
            • ABOUT GETASEED •
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#0B1220] tracking-tight leading-[1.15]">
            A global automation partner dedicated to building{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white mx-1.5 align-middle shadow-md shadow-[#1877F2]/20">
              <MessageSquare size={18} className="text-white" />
            </span>
            smarter and{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#25D366] text-white mx-1.5 align-middle shadow-md shadow-[#25D366]/20">
              <Zap size={18} className="text-white" />
            </span>
            more adaptive commerce
          </h2>
        </div>

        {/* 3-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Left Photo Card with 120+ Floating Metric (5 Cols) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[28px] overflow-hidden relative min-h-[380px] lg:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 bg-[#1877F2] text-white shadow-lg group">
            {/* Background Entrepreneur / Team Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/partnership/partnership-startups.png"
                alt="GetAseed Entrepreneur Automation"
                fill
                className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-black/20" />
            </div>

            {/* Top Brand Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[16px] font-extrabold tracking-wider font-mono text-white/90">
                GETASEED
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
            </div>

            {/* Bottom Floating White Card */}
            <div className="relative z-10 bg-white text-[#0B1220] rounded-[20px] p-5 sm:p-6 shadow-xl border border-[#E2E8F0] mt-auto">
              <div className="text-[36px] sm:text-[44px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-1 font-display">
                120+
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#475569] font-medium leading-relaxed">
                Collaborating with leading e-commerce brands, healthcare providers, and growth agencies.
              </p>
            </div>
          </div>

          {/* Card 2: Center 100% Commitment & Testimonial Quote Card (4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 bento-card flex flex-col justify-between bg-white border border-[#E2E8F0]">
            <div>
              <div className="text-[12px] font-mono font-semibold uppercase text-[#64748B] tracking-wider mb-2">
                Commitment to measurable impact
              </div>
              <div className="text-[44px] sm:text-[54px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-6 font-display">
                100%
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0]/80 space-y-4">
              {/* Stacked Client Avatars */}
              <div className="flex items-center -space-x-2">
                {avatars.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm"
                  >
                    <Image src={src} alt="Client avatar" fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed italic">
                "Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless."
              </blockquote>
            </div>
          </div>

          {/* Card 3: Right Dual-Tone Split Stat Card (3 Cols) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-5">
            {/* Top Box: Electric Lime (#ABEF06) */}
            <div className="flex-1 rounded-[24px] bg-[#ABEF06] text-[#0B1220] p-6 sm:p-7 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#0B1220]/70 mb-1">
                  Data Points
                </div>
                <div className="text-[38px] sm:text-[46px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-2 font-display">
                  520k+
                </div>
              </div>
              <p className="text-[13px] font-semibold text-[#0B1220]/80 leading-snug">
                Analyzed monthly to power smarter business conversations.
              </p>
            </div>

            {/* Bottom Box: Deep Ink (#0B1220) */}
            <div className="rounded-[24px] bg-[#0B1220] text-white p-6 shadow-md flex items-center justify-between transition-transform hover:-translate-y-1">
              <div>
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-wider mb-0.5">
                  Global Reach
                </div>
                <div className="text-[14px] font-semibold text-white/90">
                  Countries & Langs
                </div>
              </div>
              <div className="text-[34px] sm:text-[40px] font-extrabold text-[#ABEF06] tracking-tight leading-none font-display">
                20+
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
