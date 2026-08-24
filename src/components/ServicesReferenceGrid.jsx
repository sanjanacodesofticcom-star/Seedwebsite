import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Send, Share2, ArrowUpRight, Zap, Check } from 'lucide-react';

export default function ServicesReferenceGrid() {
  const services = [
    {
      channel: 'WhatsApp',
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      desc: 'Verified green tick profiles, rich catalogs, automated customer onboarding, and bulk broadcasting with Zero Markup Fees.',
      link: '/whatsapp',
      chipColor: '#25D366'
    },
    {
      channel: 'Instagram',
      icon: Send,
      title: 'Instagram DM & Story Sales',
      desc: 'Automatically reply to story mentions, reel comments, and direct inquiries. Capture high-intent leads 24/7 on autopilot.',
      link: '/instagram',
      chipColor: '#962FBF'
    },
    {
      channel: 'Facebook',
      icon: Share2,
      title: 'Facebook Messenger Funnels',
      desc: 'Connect Click-to-Messenger ads directly to automated checkout flows and comment-to-DM conversion funnels.',
      link: '/facebook',
      chipColor: '#1877F2'
    }
  ];

  return (
    <section className="section-major bg-[#F8FAFC] relative border-t border-[#E2E8F0]">
      <div className="container-xl">
        
        {/* Eyebrow & Main Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="caption-eyebrow text-[#64748B] mb-3">
            • CHANNELS & AUTOMATION •
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0B1220] tracking-tight leading-[1.18] mb-4">
            Comprehensive AI chatbots <br className="hidden sm:inline" />
            and single-inbox automation
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475569] leading-relaxed max-w-2xl mx-auto mb-6">
            Whether you're scaling WhatsApp broadcasts or converting Instagram DMs into sales, 
            we help you move faster with confidence.
          </p>

          {/* Centered Dark Get Started ↗ Pill Button */}
          <a
            href="https://chat.getaseed.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B1220] text-white hover:bg-[#1E293B] font-semibold text-[14.5px] transition-all shadow-md hover:-translate-y-0.5"
          >
            <span>GET STARTED</span>
            <span className="arrow-circle-lime">↗</span>
          </a>
        </div>

        {/* 4-Card Grid (3 Service Cards + 1 Team Photo Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[24px] p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Neon / Brand Chip */}
                  <div className="w-10 h-10 rounded-[12px] bg-[#ABEF06]/20 border border-[#ABEF06]/40 flex items-center justify-center text-[#0B1220] mb-6 transition-transform group-hover:scale-110">
                    <Icon size={20} style={{ color: item.chipColor }} />
                  </div>

                  <h3 className="text-[20px] font-bold text-[#0B1220] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#64748B] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#0B1220] group-hover:text-[#1877F2] transition-colors pt-4 border-t border-[#E2E8F0]"
                >
                  <span>Explore Channel</span>
                  <span className="text-[16px]">→</span>
                </Link>
              </div>
            );
          })}

          {/* 4th Card: High-Quality Photo Card of Team Collaborating */}
          <div className="rounded-[24px] overflow-hidden relative min-h-[300px] border border-[#E2E8F0] shadow-sm flex flex-col justify-end p-6 bg-[#0B1220] group">
            <Image
              src="/images/partnership/partnership-enterprises.png"
              alt="GetAseed Team Innovation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/30 to-transparent" />
            
            <div className="relative z-10 text-white">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#ABEF06] font-semibold mb-1">
                Data & Insights
              </div>
              <h4 className="text-[18px] font-bold text-white leading-snug">
                Turning live conversation data into clear revenue pipelines.
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
