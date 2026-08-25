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
  Activity,
  Bot
} from 'lucide-react';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon, MetaBrandIcon } from './BrandIcons';

export default function HeroReferenceSection() {
  return (
    <section className="brand-hero-bg pt-12 sm:pt-16 pb-20 sm:pb-28 text-[#0B1220] relative overflow-hidden">
      {/* Subtle Brand Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(171,239,6,0.18) 0%, rgba(24,119,242,0.12) 40%, rgba(150,47,191,0.06) 70%, transparent 100%)'
        }}
      />

      <div className="container-xl relative z-10">
        
        {/* Top Eyebrow Capsule with Meta Icon + META Text and WhatsApp Icon + WHATSAPP Text */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#0B1220] hover:shadow-md transition-all">
            {/* Meta Badge */}
            <div className="flex items-center gap-1.5 shrink-0">
              <MetaBrandIcon size={22} />
              <span className="text-[12.5px] sm:text-[13px] font-extrabold tracking-tight text-[#0B1220] font-display">
                META
              </span>
            </div>

            <span className="h-3.5 w-px bg-[#CBD5E1]" />

            {/* WhatsApp Badge */}
            <div className="flex items-center gap-1.5 shrink-0">
              <WhatsAppBrandIcon size={20} />
              <span className="text-[12.5px] sm:text-[13px] font-extrabold tracking-tight text-[#0B1220] font-display">
                WHATSAPP
              </span>
            </div>

            <span className="h-3.5 w-px bg-[#CBD5E1] hidden sm:inline" />

            <span className="text-[12px] sm:text-[13px] font-bold tracking-tight text-[#475569] hidden sm:inline">
              Official Cloud & Business API Partner
            </span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-[40px] sm:text-[58px] lg:text-[66px] font-extrabold text-[#0B1220] tracking-tight leading-[1.06]">
            Building the future with <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B1220] via-[#1877F2] to-[#25D366]">
              AI and strategy
            </span>
          </h1>
          <p className="text-[17px] sm:text-[20px] text-[#475569] font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
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
            className="btn-secondary-brand shadow-sm font-bold"
          >
            <span>VIEW DEMO</span>
          </a>

          <a
            href="https://chat.getaseed.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime text-[14.5px] font-bold shadow-md"
          >
            <span>GET STARTED</span>
            <span className="arrow-circle-dark">↗</span>
          </a>
        </div>

        {/* 3D Perspective Curved Arc of Cards */}
        <div className="perspective-container max-w-[1380px] mx-auto px-2 py-4 overflow-hidden">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 lg:gap-4.5 pb-2 pt-2 overflow-hidden">
            
            {/* Card 1: Left Wing - System Performance (WhatsApp Green Accent) */}
            <div 
              className="card-fan-item w-[190px] sm:w-[210px] lg:w-[230px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0] hidden sm:block"
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

            {/* Card 2: Left Mid - Strategic Metrics (Facebook Blue Accent) */}
            <div 
              className="card-fan-item w-[200px] sm:w-[220px] lg:w-[240px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0]"
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

            {/* Card 3: CENTER HERO CARD - Deep Ink with Electric Lime Orb Centerpiece */}
            <div 
              className="card-fan-item w-[240px] sm:w-[270px] lg:w-[300px] shrink-0 bg-[#0B1220] text-white rounded-[28px] p-6 shadow-[0_25px_60px_-10px_rgba(11,18,32,0.4)] border-2 border-[#1E293B] relative z-20"
              style={{
                transform: 'scale(1.06)',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#101B33] flex items-center justify-center mx-auto mb-4 border border-[#1E293B] text-[#ABEF06] shadow-md">
                <Sparkles size={22} className="text-[#ABEF06]" />
              </div>
              <h3 className="text-[21px] sm:text-[23px] font-extrabold text-center text-white mb-1 tracking-tight">
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

            {/* Card 4: Right Mid - AI Expertise & Strategy (Instagram Purple Accent) */}
            <div 
              className="card-fan-item w-[200px] sm:w-[220px] lg:w-[240px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0]"
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
              className="card-fan-item w-[190px] sm:w-[210px] lg:w-[230px] shrink-0 bg-white text-[#0B1220] rounded-[24px] p-5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.12)] border border-[#E2E8F0] hidden sm:block"
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
                    fill="url(#brand-chart-grad)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="brand-chart-grad" x1="0" y1="0" x2="0" y2="1">
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

        {/* Social Proof Rating Strip */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#E2E8F0] text-[#0B1220] font-semibold text-[13.5px] shadow-sm">
            <span>Rated 4.9/5 by 4,900+ clients</span>
            <div className="flex items-center gap-0.5 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#F59E0B" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
