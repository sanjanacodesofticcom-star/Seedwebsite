import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
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

        {/* 4-Card Grid (3 Service Cards + 1 Team Photo Card) */}
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

          {/* 4th Card: High-Quality Photo Card */}
          <div className="rounded-[26px] overflow-hidden relative min-h-[320px] border border-[#E2E8F0] shadow-md flex flex-col justify-end p-6 bg-[#0B1220] group">
            <Image
              src="/images/avatars/avatar-4.jpg"
              alt="GetAseed Enterprise Intelligence"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
            
            <div className="relative z-10 text-white space-y-1">
              <div className="text-[11.5px] font-mono uppercase tracking-wider text-[#ABEF06] font-bold">
                Data & Strategy
              </div>
              <h4 className="text-[18px] font-bold text-white leading-snug">
                Turning live conversations into clear revenue pipelines.
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
