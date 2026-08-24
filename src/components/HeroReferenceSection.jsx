'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  Zap,
  Activity
} from 'lucide-react';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon } from './BrandIcons';

export default function HeroReferenceSection() {
  return (
    <section className="sky-hero-bg pt-10 sm:pt-16 pb-20 sm:pb-32 text-white relative">
      {/* Decorative Atmosphere Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(118,190,252,0) 70%)'
        }}
      />

      <div className="container-xl relative z-10">
        
        {/* Top Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1220]/80 backdrop-blur-md border border-white/20 text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#ABEF06] animate-pulse" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-wide uppercase text-white">
              Official META Cloud & WhatsApp Business API
            </span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 
            className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.06]"
            style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.25)' }}
          >
            Building the future with <br className="hidden sm:inline" />
            <span className="text-white">AI and strategy</span>
          </h1>
          <p 
            className="text-[17px] sm:text-[20px] text-white font-medium max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
          >
            We help organizations unlock growth and efficiency through intelligent AI chatbots, 
            unified omnichannel automation, and zero markup Meta APIs.
          </p>
        </div>

        {/* Dual Pill CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="https://cal.com/codesoftic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass shadow-lg font-bold"
          >
            <span>VIEW DEMO</span>
          </a>

          <a
            href="https://chat.getaseed.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime text-[15px] shadow-xl"
          >
            <span>GET STARTED</span>
            <span className="arrow-circle-dark">↗</span>
          </a>
        </div>

        {/* 3D Perspective Curved Arc of Floating Product Cards */}
        <div className="perspective-container relative max-w-6xl mx-auto pt-2 pb-6">
          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-6 px-2 no-scrollbar">
            
            {/* Card 1: Left Wing - Performance & Conversion */}
            <div 
              className="card-fan-item w-[210px] sm:w-[230px] lg:w-[240px] shrink-0 bg-white text-[#0B1220] rounded-[22px] p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-[#E2E8F0]"
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
                  <span className="font-bold text-[#1877F2]">Active AI</span>
                </div>
              </div>
            </div>

            {/* Card 2: Left Mid - Strategic Metrics */}
            <div 
              className="card-fan-item w-[220px] sm:w-[240px] lg:w-[250px] shrink-0 bg-white text-[#0B1220] rounded-[22px] p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-[#E2E8F0]"
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

            {/* Card 3: CENTER HERO CARD - Data Training Glow Centerpiece */}
            <div 
              className="card-fan-item w-[250px] sm:w-[280px] lg:w-[310px] shrink-0 bg-gradient-to-b from-[#1877F2] via-[#0E66D8] to-[#0A52B8] text-white rounded-[26px] p-6 shadow-[0_25px_60px_-10px_rgba(10,82,184,0.6)] border-2 border-white/40 relative z-20"
              style={{
                transform: 'scale(1.06)',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/40 text-white shadow-inner">
                <Sparkles size={22} className="text-[#ABEF06]" />
              </div>
              <h3 className="text-[21px] sm:text-[23px] font-extrabold text-center text-white mb-1 tracking-tight">
                Data training
              </h3>
              <p className="text-[13px] text-white/90 text-center mb-5 font-medium">
                Upload catalogs, PDFs & website URLs
              </p>
              <div className="bg-white/15 backdrop-blur-md rounded-[16px] p-3.5 border border-white/25 text-[12px] space-y-2">
                <div className="flex items-center gap-1.5 text-[#ABEF06] font-bold">
                  <CheckCircle2 size={14} />
                  <span>AI Agent Ready</span>
                </div>
                <div className="text-white font-medium bg-black/20 px-2.5 py-1.5 rounded-[8px]">
                  "Order #9842 is out for delivery today!"
                </div>
              </div>
            </div>

            {/* Card 4: Right Mid - AI Expertise & Strategy (Dark Slate) */}
            <div 
              className="card-fan-item w-[220px] sm:w-[240px] lg:w-[250px] shrink-0 bg-[#0B1220] text-white rounded-[22px] p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border border-white/15"
              style={{
                transform: 'rotateY(-7deg) rotateZ(1deg) scale(0.97)',
                transformOrigin: 'left center'
              }}
            >
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono font-bold text-white/60">
                <span>EXPERTISE</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ABEF06]" />
              </div>
              <div className="text-[17px] font-bold text-white mb-2 leading-snug">
                Combines Strategy, Data, and AI Intelligence
              </div>
              <div className="pt-3 border-t border-white/15 flex items-center gap-2 text-[12.5px] text-white/80">
                <span className="text-[#ABEF06] font-extrabold text-[15px]">9X</span>
                <span>Faster Instagram DM funnels</span>
              </div>
            </div>

            {/* Card 5: Right Wing - Growth Trend Chart */}
            <div 
              className="card-fan-item w-[210px] sm:w-[230px] lg:w-[240px] shrink-0 bg-white text-[#0B1220] rounded-[22px] p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-[#E2E8F0]"
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
              {/* Mini SVG Trend Line */}
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
                    fill="url(#sky-chart-grad-2)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="sky-chart-grad-2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1877F2" />
                      <stop offset="100%" stopColor="#1877F2" stopOpacity="0" />
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

        {/* Social Proof Rating Strip */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-[13.5px] shadow-sm">
            <span>Rated 4.9/5 by 4,900+ clients</span>
            <div className="flex items-center gap-0.5 text-[#ABEF06]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#ABEF06" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
