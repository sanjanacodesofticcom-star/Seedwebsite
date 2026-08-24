import Image from 'next/image';
import { Sparkles, MessageSquare, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WhatsAppBrandIcon } from './BrandIcons';

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
        
        {/* Eyebrow & Headline with Inline Round Icon Badges */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1F5F9] text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-4 border border-[#E2E8F0]">
            • ABOUT GETASEED •
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#0B1220] tracking-tight leading-[1.15]">
            A global automation partner dedicated to building{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white mx-1.5 align-middle shadow-md shadow-[#1877F2]/25">
              <MessageSquare size={18} className="text-white" />
            </span>
            smarter and{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#25D366] text-white mx-1.5 align-middle shadow-md shadow-[#25D366]/25">
              <Zap size={18} className="text-white" />
            </span>
            more adaptive commerce
          </h2>
        </div>

        {/* 3-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Left Photo Card with 120+ Floating White Metric Card (5 Cols) */}
          <div className="md:col-span-12 lg:col-span-5 rounded-[28px] overflow-hidden relative min-h-[420px] lg:min-h-[460px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#3894F8] to-[#1877F2] text-white shadow-xl group border border-[#E2E8F0]">
            {/* Background Real Entrepreneur Photo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/avatars/avatar-2.jpg"
                alt="GetAseed Client Success"
                fill
                className="object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-black/20 to-transparent" />
            </div>

            {/* Top Brand Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-[13px] font-extrabold tracking-wider font-mono text-white shadow-sm">
                GETASEED AI
              </span>
              <div className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#ABEF06] shadow-sm">
                <Sparkles size={18} />
              </div>
            </div>

            {/* Bottom Floating White Metric Card */}
            <div className="relative z-10 bg-white text-[#0B1220] rounded-[22px] p-6 shadow-2xl border border-[#E2E8F0] mt-auto">
              <div className="text-[40px] sm:text-[48px] font-black text-[#0B1220] tracking-tight leading-none mb-1 font-display">
                120+
              </div>
              <p className="text-[14px] text-[#334155] font-semibold leading-relaxed">
                Collaborating with leading e-commerce brands, direct-to-consumer stores, and enterprise agencies.
              </p>
            </div>
          </div>

          {/* Card 2: Center 100% Commitment & Testimonial Quote Card (4 Cols) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-[28px] p-8 sm:p-9 bg-white border border-[#E2E8F0] shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="text-[12px] font-mono font-bold uppercase text-[#64748B] tracking-wider mb-2">
                Commitment to measurable impact
              </div>
              <div className="text-[46px] sm:text-[56px] font-black text-[#0B1220] tracking-tight leading-none mb-6 font-display">
                100%
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] space-y-4">
              {/* Stacked Client Avatars */}
              <div className="flex items-center -space-x-2.5">
                {avatars.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="w-11 h-11 rounded-full border-2 border-white overflow-hidden relative shadow-md"
                  >
                    <Image src={src} alt="Client avatar" fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-[14px] sm:text-[15px] text-[#334155] font-medium leading-relaxed italic">
                "Their automation strategy completely reshaped our WhatsApp sales funnel. It's fast, intelligent, and seamless."
              </blockquote>
            </div>
          </div>

          {/* Card 3: Right Dual-Tone Split Stat Card (3 Cols) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-5">
            {/* Top Box: Electric Lime (#ABEF06) */}
            <div className="flex-1 rounded-[28px] bg-[#ABEF06] text-[#0B1220] p-7 sm:p-8 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1 border border-[#9AD800]/50">
              <div>
                <div className="text-[12px] font-mono font-extrabold uppercase tracking-wider text-[#0B1220]/75 mb-1.5">
                  Data Points
                </div>
                <div className="text-[40px] sm:text-[48px] font-black text-[#0B1220] tracking-tight leading-none mb-2 font-display">
                  520k+
                </div>
              </div>
              <p className="text-[13.5px] font-bold text-[#0B1220] leading-snug">
                Analyzed monthly to power smarter business conversations and automated checkouts.
              </p>
            </div>

            {/* Bottom Box: Deep Ink (#0B1220) */}
            <div className="rounded-[28px] bg-[#0B1220] text-white p-7 shadow-md flex items-center justify-between transition-transform hover:-translate-y-1 border border-[#1E293B]">
              <div>
                <div className="text-[11.5px] font-mono text-[#94A3B8] font-bold uppercase tracking-wider mb-0.5">
                  Global Reach
                </div>
                <div className="text-[15px] font-bold text-white">
                  Countries & Langs
                </div>
              </div>
              <div className="text-[36px] sm:text-[44px] font-black text-[#ABEF06] tracking-tight leading-none font-display">
                20+
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
