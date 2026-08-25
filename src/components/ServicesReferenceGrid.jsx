import Link from 'next/link';
import { ArrowRight, Activity, TrendingUp, Sparkles, Database, Zap } from 'lucide-react';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon } from './BrandIcons';

export default function ServicesReferenceGrid() {
  const services = [
    {
      channel: 'WhatsApp',
      icon: WhatsAppBrandIcon,
      title: 'WhatsApp Automation',
      desc: 'Verified green tick profiles, rich product catalogs, automated customer onboarding, and bulk broadcasting with Zero Markup Fees.',
      link: '/whatsapp',
      badgeText: 'Official Cloud API'
    },
    {
      channel: 'Instagram',
      icon: InstagramBrandIcon,
      title: 'Instagram DM & Story Sales',
      desc: 'Automatically reply to story mentions, reel comments, and direct inquiries. Capture high-intent leads 24/7 on autopilot.',
      link: '/instagram',
      badgeText: 'Graph API'
    },
    {
      channel: 'Facebook',
      icon: FacebookBrandIcon,
      title: 'Facebook Messenger Funnels',
      desc: 'Connect Click-to-Messenger ads directly to automated checkout flows and comment-to-DM conversion funnels.',
      link: '/facebook',
      badgeText: 'Meta Partner'
    }
  ];

  return (
    <section className="section-major bg-[#F8FAFC] relative border-t border-[#E2E8F0]">
      <div className="container-xl">
        
        {/* Eyebrow & Main Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-4 border border-[#E2E8F0] shadow-sm">
            • CHANNELS & AUTOMATION •
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0B1220] tracking-tight leading-[1.15] mb-4">
            Comprehensive AI chatbots <br className="hidden sm:inline" />
            and single-inbox automation
          </h2>
          <p className="text-[16.5px] sm:text-[18px] text-[#475569] leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Whether you're scaling WhatsApp broadcasts or converting Instagram DMs into sales, 
            we help you move faster with confidence.
          </p>

          {/* Centered Brand Lime #ABEF06 Get Started ↗ Pill Button */}
          <a
            href="https://chat.getaseed.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime text-[15px] font-bold shadow-md inline-flex items-center gap-3 px-8 py-3.5"
          >
            <span>GET STARTED</span>
            <span className="arrow-circle-dark">↗</span>
          </a>
        </div>

        {/* 4-Card Grid (3 Service Cards + 1 High-Tech Data Analytics Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[26px] p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Official SVG Brand Logo */}
                  <div className="mb-5 transition-transform group-hover:scale-105">
                    <Icon size={44} />
                  </div>

                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B] mb-2 bg-[#F1F5F9] px-2.5 py-0.5 rounded-full">
                    {item.badgeText}
                  </span>

                  <h3 className="text-[20px] font-bold text-[#0B1220] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#475569] leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0B1220] group-hover:text-[#1877F2] transition-colors pt-4 border-t border-[#E2E8F0]"
                >
                  <span>Explore Channel</span>
                  <span className="text-[16px]">→</span>
                </Link>
              </div>
            );
          })}

          {/* 4th Card: High-Tech Data & Telemetry Analytics Card (Replaced Photo with Data Visuals) */}
          <div className="bg-[#0B1220] text-white border border-[#1E293B] rounded-[26px] p-7 shadow-lg flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200 relative overflow-hidden">
            {/* Background Glow */}
            <div 
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-20 pointer-events-none blur-2xl"
              style={{ background: 'var(--thread-gradient)' }}
            />

            <div>
              {/* Header Telemetry Status */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-[14px] bg-[#101B33] border border-[#1E293B] flex items-center justify-center text-[#ABEF06] shadow-sm">
                  <Activity size={22} className="animate-pulse" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                  Live Data Stream
                </span>
              </div>

              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#ABEF06] mb-2 bg-[#101B33] px-2.5 py-0.5 rounded-full border border-white/10">
                REAL-TIME TELEMETRY
              </span>

              <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">
                Data & Funnel Analytics
              </h3>

              {/* Data Visualization Graphic */}
              <div className="bg-[#101B33] rounded-[16px] p-3.5 border border-[#1E293B] mb-4 space-y-2.5">
                <div className="flex items-center justify-between text-[11.5px] font-mono">
                  <span className="text-[#94A3B8]">Monthly Data Points</span>
                  <span className="text-[#ABEF06] font-bold">520,000+</span>
                </div>
                {/* Visual Bar Chart */}
                <div className="h-10 w-full flex items-end gap-1.5 pt-1">
                  <div className="flex-1 bg-[#1877F2]/40 rounded-t h-[45%]" />
                  <div className="flex-1 bg-[#1877F2]/60 rounded-t h-[60%]" />
                  <div className="flex-1 bg-[#962FBF]/70 rounded-t h-[75%]" />
                  <div className="flex-1 bg-[#25D366] rounded-t h-[95%] shadow-[0_0_8px_rgba(37,211,102,0.5)]" />
                  <div className="flex-1 bg-[#ABEF06] rounded-t h-[100%] shadow-[0_0_8px_rgba(171,239,6,0.6)]" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-mono pt-1 border-t border-white/10">
                  <span>Conv. Velocity</span>
                  <span className="text-white font-bold">+340% ROI</span>
                </div>
              </div>

              <p className="text-[13.5px] text-[#94A3B8] leading-relaxed font-medium">
                Unified Meta Cloud API telemetry across WhatsApp, Instagram & Messenger with zero latency.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between text-[13px] font-mono text-[#ABEF06]">
              <span>99.98% API Uptime</span>
              <Zap size={14} className="text-[#ABEF06]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
