'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  MessageSquare, 
  Send, 
  Share2, 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  Activity,
  Layers
} from 'lucide-react';

export default function HeroReferenceSection() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="sky-hero-bg pt-8 sm:pt-14 pb-20 sm:pb-28 text-white relative">
      {/* Decorative Atmosphere Clouds / Sunburst */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] pointer-events-none opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(118,190,252,0) 70%)'
        }}
      />

      <div className="container-xl relative z-10">
        {/* Top Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ABEF06] animate-pulse" />
            <span className="text-[12px] sm:text-[13px] font-mono font-medium tracking-wide uppercase">
              Official Meta Cloud & WhatsApp Business API
            </span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-sm">
            Building the future with <br className="hidden sm:inline" />
            <span className="text-white">AI and strategy</span>
          </h1>
          <p className="text-[16px] sm:text-[19px] text-white/90 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            We help organizations unlock growth and revenue through intelligent AI chatbots, 
            unified omnichannel messaging, and zero markup Meta APIs.
          </p>
        </div>

        {/* Dual Pill CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="https://cal.com/codesoftic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            <span>VIEW DEMO</span>
          </a>

          <a
            href="https://chat.getaseed.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime"
          >
            <span>GET STARTED</span>
            <span className="arrow-circle-dark">↗</span>
          </a>
        </div>

        {/* 3D Perspective Curved Arc of Floating Product Cards */}
        <div className="perspective-container relative max-w-6xl mx-auto pt-2 pb-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-6 px-2 no-scrollbar">
            
            {/* Card 1: Left Wing - Performance & Conversion */}
            <div 
              className="card-fan-item w-[200px] sm:w-[230px] lg:w-[240px] shrink-0 glass-card-light text-[#0B1220] rounded-[20px] p-5 shadow-2xl"
              style={{
                transform: 'rotateY(16deg) rotateZ(-3deg) scale(0.9)',
                transformOrigin: 'right center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#64748B]">
                <span>PERFORMANCE</span>
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              </div>
              <div className="text-[34px] sm:text-[40px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-1">
                49%
              </div>
              <div className="text-[12px] font-medium text-[#475569] mb-4">
                Faster Response Time
              </div>
              <div className="space-y-1.5 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#64748B]">
                <div className="flex items-center justify-between">
                  <span>Storage</span>
                  <span className="font-semibold text-[#0B1220]">24/7 Sync</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Auto-reply</span>
                  <span className="font-semibold text-[#1877F2]">Active</span>
                </div>
              </div>
            </div>

            {/* Card 2: Left Mid - Strategic Metrics */}
            <div 
              className="card-fan-item w-[210px] sm:w-[240px] lg:w-[250px] shrink-0 glass-card-light text-[#0B1220] rounded-[20px] p-5 shadow-2xl"
              style={{
                transform: 'rotateY(8deg) rotateZ(-1.5deg) scale(0.96)',
                transformOrigin: 'right center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#64748B]">
                <span>STRATEGY</span>
                <span className="px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] font-semibold text-[10px]">
                  Grow Faster
                </span>
              </div>
              <div className="text-[12px] font-semibold text-[#475569]">
                DataPoints
              </div>
              <div className="text-[34px] sm:text-[40px] font-extrabold text-[#0B1220] tracking-tight leading-none mb-2">
                520k+
              </div>
              <div className="text-[12px] text-[#64748B] line-clamp-2">
                Conversations trained with Zero Markup Fees on Meta Cloud.
              </div>
            </div>

            {/* Card 3: CENTER HERO CARD - Data Training Glow Centerpiece */}
            <div 
              className="card-fan-item w-[240px] sm:w-[280px] lg:w-[300px] shrink-0 bg-gradient-to-b from-[#1877F2] to-[#0A56C2] text-white rounded-[24px] p-6 shadow-[0_25px_50px_-12px_rgba(10,86,194,0.5)] border border-white/30 relative z-20"
              style={{
                transform: 'scale(1.06)',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/30 text-white shadow-inner">
                <Sparkles size={22} className="text-[#ABEF06]" />
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-center text-white mb-1">
                Data training
              </h3>
              <p className="text-[12px] sm:text-[13px] text-white/80 text-center mb-5">
                Upload your catalogs, documents & website URLs
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-[14px] p-3 border border-white/20 text-[11.5px] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#ABEF06] font-semibold">
                  <CheckCircle2 size={13} />
                  <span>AI Agent Ready</span>
                </div>
                <div className="text-white/90 truncate">
                  "How do I track my WhatsApp order?"
                </div>
              </div>
            </div>

            {/* Card 4: Right Mid - AI Expertise & Strategy (Dark Slate) */}
            <div 
              className="card-fan-item w-[210px] sm:w-[240px] lg:w-[250px] shrink-0 glass-card-dark rounded-[20px] p-5 shadow-2xl"
              style={{
                transform: 'rotateY(-8deg) rotateZ(1.5deg) scale(0.96)',
                transformOrigin: 'left center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-white/60">
                <span>EXPERTISE</span>
                <span className="w-2 h-2 rounded-full bg-[#ABEF06]" />
              </div>
              <div className="text-[17px] font-bold text-white mb-2 leading-snug">
                Combines Strategy, Data, and Artificial Intelligence
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[12px] text-white/70">
                <span className="text-[#ABEF06] font-bold">9X</span>
                <span>Faster DM funnels</span>
              </div>
            </div>

            {/* Card 5: Right Wing - Growth Trend Chart */}
            <div 
              className="card-fan-item w-[200px] sm:w-[230px] lg:w-[240px] shrink-0 glass-card-light text-[#0B1220] rounded-[20px] p-5 shadow-2xl"
              style={{
                transform: 'rotateY(-16deg) rotateZ(3deg) scale(0.9)',
                transformOrigin: 'left center'
              }}
            >
              <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-[#64748B]">
                <span>INTELLIGENCE</span>
                <TrendingUp size={14} className="text-[#25D366]" />
              </div>
              <div className="text-[12px] font-semibold text-[#0B1220] mb-2">
                Key Decision Flow
              </div>
              {/* Mini SVG Trend Line */}
              <div className="h-12 w-full mb-3">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path
                    d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4"
                    fill="none"
                    stroke="#1877F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 35 Q 25 32 40 20 T 75 12 T 100 4 L 100 40 L 0 40 Z"
                    fill="url(#sky-chart-grad)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="sky-chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1877F2" />
                      <stop offset="100%" stopColor="#1877F2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-[11px] text-[#64748B] flex items-center justify-between">
                <span>3 Channels Live</span>
                <span className="font-semibold text-[#0B1220]">+320%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Social Proof Rating Strip */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] text-white/90 font-medium">
            <span>Rated 4.9/5 by 4,900+ clients</span>
            <div className="flex items-center gap-0.5 text-[#ABEF06]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#ABEF06" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
