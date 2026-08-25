'use client';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  Zap,
  Activity,
  Bot
} from 'lucide-react';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon, MetaBrandIcon } from './BrandIcons';

export default function HeroReferenceSection() {
  const cardsData = [
    {
      id: 'performance',
      type: 'light',
      title: 'Performance',
      accentColor: '#25D366',
      stat: '49%',
      substat: 'Faster Response Time',
      details: [
        { label: 'Storage', val: '24/7 Cloud Sync', highlight: false },
        { label: 'Auto-reply', val: 'Active AI', highlight: true, color: '#25D366' }
      ]
    },
    {
      id: 'strategy',
      type: 'light',
      title: 'Strategy',
      badge: 'Grow Faster',
      label: 'DataPoints',
      stat: '520k+',
      desc: 'Customer chats automated on WhatsApp with Zero Markup Fees.'
    },
    {
      id: 'data-training',
      type: 'dark',
      title: 'Data training',
      desc: 'Upload catalogs, PDFs & website URLs',
      sample: '"Order #9842 is out for delivery today!"'
    },
    {
      id: 'expertise',
      type: 'light',
      title: 'Expertise',
      accentColor: '#962FBF',
      heading: 'Combines Strategy, Data, and AI Intelligence',
      highlightStat: '9X',
      highlightDesc: 'Faster Instagram DM funnels'
    },
    {
      id: 'intelligence',
      type: 'light',
      title: 'Intelligence',
      icon: TrendingUp,
      heading: 'Key Decision Flow',
      chart: true,
      footerLeft: '3 Channels Live',
      footerRight: '+320%'
    }
  ];

  return (
    <section className="brand-hero-bg pt-8 sm:pt-14 pb-14 sm:pb-24 text-[#0B1220] relative overflow-hidden">
      {/* Subtle Brand Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(171,239,6,0.18) 0%, rgba(24,119,242,0.12) 40%, rgba(150,47,191,0.06) 70%, transparent 100%)'
        }}
      />

      <div className="container-xl relative z-10">
        
        {/* Dual Partner Capsules: [Meta Icon] Official META Cloud API × [WhatsApp Icon] Official WhatsApp Business API */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2 max-w-full">
          {/* Left Pill: Meta */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
            <MetaBrandIcon size={17} />
            <span className="text-[12px] sm:text-[14px] font-bold tracking-tight text-[#0066FF] font-display whitespace-nowrap">
              Official META Cloud API
            </span>
          </div>

          {/* Cross / multiplier symbol */}
          <span className="text-[#25D366] font-black text-[15px] sm:text-[17px] select-none px-0.5">
            ×
          </span>

          {/* Right Pill: WhatsApp */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
            <WhatsAppBrandIcon size={17} />
            <span className="text-[12px] sm:text-[14px] font-bold tracking-tight text-[#008037] font-display whitespace-nowrap">
              Official WhatsApp Business API
            </span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 px-3">
          <h1 className="text-[33px] sm:text-[50px] lg:text-[64px] font-extrabold text-[#0B1220] tracking-tight leading-[1.08]">
            Building the future with <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B1220] via-[#1877F2] to-[#25D366]">
              AI and strategy
            </span>
          </h1>
          <p className="text-[15.5px] sm:text-[19px] text-[#475569] font-medium max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            We help organizations unlock growth and efficiency through intelligent AI chatbots, 
            unified omnichannel automation, and zero markup Meta APIs.
          </p>
        </div>

        {/* Dual Pill CTA Buttons (Corrected Mobile & Desktop Layout) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-xs sm:max-w-none mx-auto w-full px-4">
          <a
            href="https://cal.com/codesoftic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-brand text-[14.5px] font-bold w-full sm:w-auto text-center"
          >
            <span>VIEW DEMO</span>
          </a>

          <a
            href="https://chat.getaseed.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime text-[14.5px] font-bold shadow-md w-full sm:w-auto justify-center"
          >
            <span>GET STARTED</span>
            <span className="arrow-circle-dark">↗</span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (lg+): 3D Perspective Curved Arc of Cards                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:block perspective-container max-w-[1380px] mx-auto px-2 py-4 overflow-hidden">
          <div className="flex items-center justify-center gap-3.5 lg:gap-4.5 pb-2 pt-2 overflow-hidden">
            
            {/* Card 1: Left Wing - System Performance */}
            <div 
              className="card-fan-item w-[210px] lg:w-[230px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0]"
              style={{
                transform: 'rotateY(14deg) rotateZ(-2.5deg) scale(0.92)',
                transformOrigin: 'right center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                <span>PERFORMANCE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              </div>
              <div className="text-[38px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-1 font-display">
                49%
              </div>
              <div className="text-[13px] font-bold text-[#334155] mb-4">
                Faster Response Time
              </div>
              <div className="space-y-2 pt-3 border-t border-[#E2E8F0] text-[11.5px] text-[#475569] font-medium">
                <div className="flex items-center justify-between">
                  <span>Storage</span>
                  <span className="font-bold text-[#0B1220]">24/7 Cloud Sync</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Auto-reply</span>
                  <span className="font-bold text-[#25D366]">Active AI</span>
                </div>
              </div>
            </div>

            {/* Card 2: Left Mid - Strategic Metrics */}
            <div 
              className="card-fan-item w-[220px] lg:w-[240px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0]"
              style={{
                transform: 'rotateY(7deg) rotateZ(-1deg) scale(0.97)',
                transformOrigin: 'right center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                <span>STRATEGY</span>
                <span className="px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] font-bold text-[10.5px]">
                  Grow Faster
                </span>
              </div>
              <div className="text-[12.5px] font-bold text-[#475569]">
                DataPoints
              </div>
              <div className="text-[38px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-2 font-display">
                520k+
              </div>
              <div className="text-[12.5px] text-[#475569] font-medium leading-relaxed">
                Customer chats automated on WhatsApp with Zero Markup Fees.
              </div>
            </div>

            {/* Card 3: CENTER HERO CARD - Deep Ink Centerpiece */}
            <div 
              className="card-fan-item w-[270px] lg:w-[300px] shrink-0 bg-[#0B1220] text-white rounded-[28px] p-6 shadow-[0_25px_60px_-10px_rgba(11,18,32,0.4)] border-2 border-[#1E293B] relative z-20"
              style={{
                transform: 'scale(1.06)',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#101B33] flex items-center justify-center mx-auto mb-4 border border-[#1E293B] text-[#ABEF06] shadow-md">
                <Sparkles size={22} className="text-[#ABEF06]" />
              </div>
              <h3 className="text-[22px] font-extrabold text-center text-white mb-1 tracking-tight">
                Data training
              </h3>
              <p className="text-[13px] text-[#94A3B8] text-center mb-5 font-medium">
                Upload catalogs, PDFs & website URLs
              </p>
              <div className="bg-[#101B33] rounded-[18px] p-3.5 border border-[#1E293B] text-[12px] space-y-2">
                <div className="flex items-center gap-1.5 text-[#ABEF06] font-bold">
                  <CheckCircle2 size={14} />
                  <span>AI Agent Ready</span>
                </div>
                <div className="text-white font-medium bg-[#070C16] px-2.5 py-1.5 rounded-[10px] border border-[#1E293B]">
                  "Order #9842 is out for delivery today!"
                </div>
              </div>
            </div>

            {/* Card 4: Right Mid - AI Expertise & Strategy */}
            <div 
              className="card-fan-item w-[220px] lg:w-[240px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0]"
              style={{
                transform: 'rotateY(-7deg) rotateZ(1deg) scale(0.97)',
                transformOrigin: 'left center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                <span>EXPERTISE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#962FBF]" />
              </div>
              <div className="text-[17px] font-bold text-[#0B1220] mb-2 leading-snug">
                Combines Strategy, Data, and AI Intelligence
              </div>
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-[12.5px] text-[#475569] font-medium">
                <span className="text-[#962FBF] font-extrabold text-[15px]">9X</span>
                <span>Faster Instagram DM funnels</span>
              </div>
            </div>

            {/* Card 5: Right Wing - Growth Trend Chart */}
            <div 
              className="card-fan-item w-[210px] lg:w-[230px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0]"
              style={{
                transform: 'rotateY(-14deg) rotateZ(2.5deg) scale(0.92)',
                transformOrigin: 'left center'
              }}
            >
              <div className="flex items-center justify-between mb-2 text-[11px] font-mono font-bold text-[#64748B]">
                <span>INTELLIGENCE</span>
                <TrendingUp size={15} className="text-[#25D366]" />
              </div>
              <div className="text-[13px] font-bold text-[#0B1220] mb-2">
                Key Decision Flow
              </div>
              <div className="h-12 w-full mb-3">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path
                    d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4"
                    fill="none"
                    stroke="#1877F2"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4 L 100 40 L 0 40 Z"
                    fill="url(#brand-chart-grad-desktop)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="brand-chart-grad-desktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1877F2" />
                      <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-[11.5px] text-[#475569] font-medium flex items-center justify-between">
                <span>3 Channels Live</span>
                <span className="font-bold text-[#0B1220]">+320%</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW (<lg): AUTOMATIC SMOOTH INFINITE MARQUEE CARDS       */}
        {/* ========================================================================= */}
        <div className="block lg:hidden my-6 hero-cards-marquee-container">
          <div className="hero-cards-marquee-track">
            
            {/* First Set of 5 Cards */}
            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>PERFORMANCE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                </div>
                <div className="text-[34px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-1 font-display">
                  49%
                </div>
                <div className="text-[13px] font-bold text-[#334155] mb-3">
                  Faster Response Time
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-[#E2E8F0] text-[11.5px] text-[#475569] font-medium">
                <div className="flex items-center justify-between">
                  <span>Storage</span>
                  <span className="font-bold text-[#0B1220]">24/7 Cloud Sync</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Auto-reply</span>
                  <span className="font-bold text-[#25D366]">Active AI</span>
                </div>
              </div>
            </div>

            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>STRATEGY</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] font-bold text-[10.5px]">
                    Grow Faster
                  </span>
                </div>
                <div className="text-[12px] font-bold text-[#475569]">
                  DataPoints
                </div>
                <div className="text-[34px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-2 font-display">
                  520k+
                </div>
                <div className="text-[12px] text-[#475569] font-medium leading-relaxed">
                  Customer chats automated on WhatsApp with Zero Markup Fees.
                </div>
              </div>
            </div>

            <div className="w-[270px] shrink-0 bg-[#0B1220] text-white rounded-[24px] p-5 shadow-xl border-2 border-[#1E293B] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#101B33] flex items-center justify-center mx-auto mb-3 border border-[#1E293B] text-[#ABEF06]">
                  <Sparkles size={18} className="text-[#ABEF06]" />
                </div>
                <h3 className="text-[19px] font-extrabold text-center text-white mb-1 tracking-tight">
                  Data training
                </h3>
                <p className="text-[12px] text-[#94A3B8] text-center mb-3 font-medium">
                  Upload catalogs, PDFs & website URLs
                </p>
              </div>
              <div className="bg-[#101B33] rounded-[16px] p-3 border border-[#1E293B] text-[11.5px] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#ABEF06] font-bold">
                  <CheckCircle2 size={13} />
                  <span>AI Agent Ready</span>
                </div>
                <div className="text-white font-medium bg-[#070C16] px-2 py-1 rounded-[8px]">
                  "Order #9842 is out for delivery today!"
                </div>
              </div>
            </div>

            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>EXPERTISE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#962FBF]" />
                </div>
                <div className="text-[15.5px] font-bold text-[#0B1220] mb-2 leading-snug">
                  Combines Strategy, Data, and AI Intelligence
                </div>
              </div>
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-[12px] text-[#475569] font-medium">
                <span className="text-[#962FBF] font-extrabold text-[15px]">9X</span>
                <span>Faster Instagram DM funnels</span>
              </div>
            </div>

            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>INTELLIGENCE</span>
                  <TrendingUp size={14} className="text-[#25D366]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1220] mb-1">
                  Key Decision Flow
                </div>
                <div className="h-10 w-full mb-2">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path
                      d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4"
                      fill="none"
                      stroke="#1877F2"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4 L 100 40 L 0 40 Z"
                      fill="url(#brand-chart-grad-mobile)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="brand-chart-grad-mobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1877F2" />
                        <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-[11.5px] text-[#475569] font-medium flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                <span>3 Channels Live</span>
                <span className="font-bold text-[#0B1220]">+320%</span>
              </div>
            </div>

            {/* Second Set of 5 Cards (Seamless Duplication for Infinite Loop) */}
            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between" aria-hidden="true">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>PERFORMANCE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                </div>
                <div className="text-[34px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-1 font-display">
                  49%
                </div>
                <div className="text-[13px] font-bold text-[#334155] mb-3">
                  Faster Response Time
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-[#E2E8F0] text-[11.5px] text-[#475569] font-medium">
                <div className="flex items-center justify-between">
                  <span>Storage</span>
                  <span className="font-bold text-[#0B1220]">24/7 Cloud Sync</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Auto-reply</span>
                  <span className="font-bold text-[#25D366]">Active AI</span>
                </div>
              </div>
            </div>

            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between" aria-hidden="true">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>STRATEGY</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] font-bold text-[10.5px]">
                    Grow Faster
                  </span>
                </div>
                <div className="text-[12px] font-bold text-[#475569]">
                  DataPoints
                </div>
                <div className="text-[34px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-2 font-display">
                  520k+
                </div>
                <div className="text-[12px] text-[#475569] font-medium leading-relaxed">
                  Customer chats automated on WhatsApp with Zero Markup Fees.
                </div>
              </div>
            </div>

            <div className="w-[270px] shrink-0 bg-[#0B1220] text-white rounded-[24px] p-5 shadow-xl border-2 border-[#1E293B] flex flex-col justify-between" aria-hidden="true">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#101B33] flex items-center justify-center mx-auto mb-3 border border-[#1E293B] text-[#ABEF06]">
                  <Sparkles size={18} className="text-[#ABEF06]" />
                </div>
                <h3 className="text-[19px] font-extrabold text-center text-white mb-1 tracking-tight">
                  Data training
                </h3>
                <p className="text-[12px] text-[#94A3B8] text-center mb-3 font-medium">
                  Upload catalogs, PDFs & website URLs
                </p>
              </div>
              <div className="bg-[#101B33] rounded-[16px] p-3 border border-[#1E293B] text-[11.5px] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#ABEF06] font-bold">
                  <CheckCircle2 size={13} />
                  <span>AI Agent Ready</span>
                </div>
                <div className="text-white font-medium bg-[#070C16] px-2 py-1 rounded-[8px]">
                  "Order #9842 is out for delivery today!"
                </div>
              </div>
            </div>

            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between" aria-hidden="true">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>EXPERTISE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#962FBF]" />
                </div>
                <div className="text-[15.5px] font-bold text-[#0B1220] mb-2 leading-snug">
                  Combines Strategy, Data, and AI Intelligence
                </div>
              </div>
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-[12px] text-[#475569] font-medium">
                <span className="text-[#962FBF] font-extrabold text-[15px]">9X</span>
                <span>Faster Instagram DM funnels</span>
              </div>
            </div>

            <div className="w-[260px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-md border border-[#E2E8F0] flex flex-col justify-between" aria-hidden="true">
              <div>
                <div className="flex items-center justify-between mb-2 text-[11px] font-mono font-bold text-[#64748B]">
                  <span>INTELLIGENCE</span>
                  <TrendingUp size={14} className="text-[#25D366]" />
                </div>
                <div className="text-[13px] font-bold text-[#0B1220] mb-1">
                  Key Decision Flow
                </div>
                <div className="h-10 w-full mb-2">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path
                      d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4"
                      fill="none"
                      stroke="#1877F2"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4 L 100 40 L 0 40 Z"
                      fill="url(#brand-chart-grad-mobile-dup)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="brand-chart-grad-mobile-dup" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1877F2" />
                        <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-[11.5px] text-[#475569] font-medium flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                <span>3 Channels Live</span>
                <span className="font-bold text-[#0B1220]">+320%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Social Proof Rating Strip */}
        <div className="mt-4 sm:mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-[#E2E8F0] text-[#0B1220] font-semibold text-[12.5px] sm:text-[13.5px] shadow-sm">
            <span>Rated 4.9/5 by 4,900+ clients</span>
            <div className="flex items-center gap-0.5 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
