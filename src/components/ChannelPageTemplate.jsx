'use client';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Bot,
  BarChart3,
  BadgeCheck,
  ShoppingBag,
  Sliders,
  Languages,
  FileCheck,
  Radio,
  UserPlus,
  HeartHandshake,
  MessageSquareShare,
  HelpCircle,
  Filter
} from 'lucide-react';
import FAQAccordion from './FAQAccordion';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon } from './BrandIcons';

const ICON_MAP = {
  'badge-check': BadgeCheck,
  'shopping-bag': ShoppingBag,
  'sliders': Sliders,
  'languages': Languages,
  'file-check': FileCheck,
  'radio': Radio,
  'user-plus': UserPlus,
  'heart-handshake': HeartHandshake,
  'message-square-share': MessageSquareShare,
  'help-circle': HelpCircle,
  'sparkles': Sparkles,
  'filter': Filter,
  'bot': Bot
};

export default function ChannelPageTemplate({
  channelKey, // 'whatsapp' | 'facebook' | 'instagram'
  accentColor,
  accentWarmColor,
  heroPill,
  heroTitle,
  heroSubhead,
  featureGridTitle,
  featureGridSubhead,
  featureCards = [],
  partnerTags = [],
  deepDiveTitle,
  deepDiveSubhead,
  deepDiveRows = [],
  whatsappSpecial,
  faqs = []
}) {
  const BrandIcon = channelKey === 'whatsapp' 
    ? WhatsAppBrandIcon 
    : channelKey === 'instagram' 
      ? InstagramBrandIcon 
      : FacebookBrandIcon;

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="sky-hero-bg pt-12 pb-20 sm:pb-28 text-white relative">
        <div className="container-xl relative z-10 text-center max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1220]/80 backdrop-blur-md border border-white/20 text-white shadow-md">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="text-[12.5px] font-mono font-bold tracking-wide uppercase text-white">
                {heroPill}
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1 
            className="text-[38px] sm:text-[54px] lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.08]"
            style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.25)' }}
          >
            {heroTitle}
          </h1>

          {/* Subhead */}
          <p 
            className="text-[17px] sm:text-[19px] text-white font-medium max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
          >
            {heroSubhead}
          </p>

          {/* CTA Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://chat.getaseed.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime text-[15px] shadow-xl"
            >
              <span>START FREE ON {channelKey.toUpperCase()}</span>
              <span className="arrow-circle-dark">↗</span>
            </a>

            <a
              href="https://cal.com/codesoftic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass shadow-lg font-bold"
            >
              <span>SCHEDULE 1-ON-1 DEMO</span>
            </a>
          </div>

          {/* Trust line */}
          <div className="pt-2 flex items-center justify-center gap-6 text-[13.5px] text-white font-semibold font-mono">
            <span>🎁 7 Days Free Onboarding</span>
            <span>·</span>
            <span>💸 30 Days Money-Back Guarantee</span>
          </div>
        </div>
      </section>

      {/* 2. Feature Grid Section */}
      <section className="section-major bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-4 border border-[#E2E8F0] shadow-sm">
              <Zap size={13} style={{ color: accentColor }} />
              <span>Comprehensive Capabilities</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0B1220] tracking-tight">
              {featureGridTitle}
            </h2>
            {featureGridSubhead && (
              <p className="text-[16px] text-[#475569] mt-3 font-medium">
                {featureGridSubhead}
              </p>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, idx) => {
              const Icon = ICON_MAP[card.iconName] || Bot;
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-[24px] p-8 transition-all duration-200 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 ${
                    card.isFeatured
                      ? 'border-2 shadow-md'
                      : 'border-[#E2E8F0]'
                  }`}
                  style={{
                    borderColor: card.isFeatured ? accentColor : undefined
                  }}
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div 
                        className="w-12 h-12 rounded-[14px] flex items-center justify-center shadow-sm"
                        style={{
                          backgroundColor: `${accentColor}15`,
                          color: accentColor
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      {card.isFeatured && (
                        <span 
                          className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${accentColor}15`,
                            color: accentColor
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-[20px] font-bold text-[#0B1220] mb-2.5">
                      {card.title}
                    </h3>

                    <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                      {card.desc}
                    </p>

                    {/* Bullet Points */}
                    {card.bullets && card.bullets.length > 0 && (
                      <ul className="mt-5 pt-5 border-t border-[#E2E8F0] space-y-2.5 text-[13px] text-[#0B1220] font-semibold">
                        {card.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2">
                            <CheckCircle2 size={15} style={{ color: accentColor }} className="flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Partner Strip (Dark ink-800 shared bar) */}
      <section className="bg-[#101B33] text-white py-12 border-y border-[#1E293B]">
        <div className="container-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[14px] bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <div className="text-[18px] font-bold text-white">
                Official Meta Business Partner
              </div>
              <div className="text-[13px] text-[#94A3B8] font-medium">
                Direct Cloud API infrastructure with verified tier delivery & zero markups.
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {partnerTags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="px-3.5 py-1.5 rounded-full bg-[#0B1220] border border-[#1E293B] text-[12px] font-mono font-bold text-[#E2E8F0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Special Section: 3-Step Smart Broadcasting */}
      {whatsappSpecial && (
        <section className="section-major bg-white border-b border-[#E2E8F0]">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8FAFC] text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-4 border border-[#E2E8F0]">
                <Sparkles size={13} className="text-[#25D366]" />
                <span>Smart Broadcasting</span>
              </div>
              <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0B1220]">
                Grow Your E-Commerce with Smart Broadcasting
              </h2>
              <p className="text-[16px] text-[#475569] mt-3 font-medium">
                Reach your customers instantly across multiple channels and boost sales with powerful, automated messaging.
              </p>
            </div>

            {/* 3 Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="stat-mono text-[38px] font-extrabold text-[#25D366]">01</div>
                <h3 className="text-[20px] font-bold text-[#0B1220]">Create Campaign</h3>
                <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                  Set up your WhatsApp campaign in minutes — name it, segment target audience, select approved template, done.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="stat-mono text-[38px] font-extrabold text-[#1877F2]">02</div>
                <h3 className="text-[20px] font-bold text-[#0B1220]">Broadcast at Scale</h3>
                <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                  Broadcast offers, promos, and order updates to thousands of opt-in customers instantly with high delivery rates.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="stat-mono text-[38px] font-extrabold text-[#962FBF]">03</div>
                <h3 className="text-[20px] font-bold text-[#0B1220]">Watch Conversions Roll In</h3>
                <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                  Direct customers to your WhatsApp catalog, share 1-click payment links, and track real-time ROI reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp Special Section: Dark Checklist Panel */}
      {whatsappSpecial && whatsappSpecial.checklist && (
        <section className="section-major bg-[#0B1220] text-white border-b border-[#1E293B]">
          <div className="container-xl">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B33] border border-[#1E293B] text-[#ABEF06] font-mono text-[12px] font-bold uppercase mb-4">
                <Bot size={13} className="text-[#25D366]" />
                <span>Automate Every Touchpoint</span>
              </div>
              <h2 className="text-[32px] sm:text-[42px] font-extrabold text-white">
                What You Can Automate With WhatsApp
              </h2>
              <p className="text-[16px] text-[#94A3B8] mt-3 font-medium">
                Design your WhatsApp automation flows once and let them run on autopilot for every new customer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatsappSpecial.checklist.map((item, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-6 rounded-[20px] bg-[#101B33] border border-[#1E293B] flex items-start gap-4 hover:border-[#25D366] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#94A3B8] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Deep-Dive Rows */}
      {deepDiveRows && deepDiveRows.length > 0 && (
        <section className="section-major bg-white">
          <div className="container-xl space-y-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8FAFC] text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-4 border border-[#E2E8F0]">
                <BarChart3 size={13} style={{ color: accentColor }} />
                <span>Growth & Analytics</span>
              </div>
              <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0B1220]">
                {deepDiveTitle || "Grow and Analyze Your Audience"}
              </h2>
              {deepDiveSubhead && (
                <p className="text-[16px] text-[#475569] mt-3 font-medium">
                  {deepDiveSubhead}
                </p>
              )}
            </div>

            {deepDiveRows.map((row, rIdx) => {
              const isEven = rIdx % 2 === 0;
              return (
                <div 
                  key={rIdx} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="stat-mono text-[14px] text-[#64748B] font-bold uppercase tracking-wider">
                      Module 0{rIdx + 1}
                    </div>

                    <h3 className="text-[28px] sm:text-[34px] font-bold text-[#0B1220] tracking-tight leading-tight">
                      {row.title}
                    </h3>

                    <p className="text-[16px] text-[#475569] leading-relaxed font-medium">
                      {row.desc}
                    </p>

                    {/* Dual Stats */}
                    {row.stats && row.stats.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
                        {row.stats.map((st, sIdx) => (
                          <div key={sIdx} className="p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0]">
                            <div 
                              className="stat-mono text-[26px] font-black text-[#0B1220]"
                              style={{ color: sIdx === 0 ? accentColor : undefined }}
                            >
                              {st.value}
                            </div>
                            <div className="text-[11.5px] font-mono font-bold text-[#64748B] mt-1">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-7 shadow-md">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-5">
                        <div className="flex items-center gap-2">
                          <BrandIcon size={24} />
                          <span className="text-[12px] font-mono font-bold text-[#0B1220]">
                            {channelKey.toUpperCase()}_AUTOMATION_ENGINE
                          </span>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full">
                          24/7 ACTIVE
                        </span>
                      </div>

                      <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6 space-y-4 shadow-sm">
                        <h4 className="text-[16px] font-bold text-[#0B1220]">
                          {row.title}
                        </h4>
                        <p className="text-[13.5px] text-[#475569] font-medium leading-relaxed bg-[#F8FAFC] p-3 rounded-[12px] border border-[#E2E8F0]">
                          &ldquo;{row.desc.substring(0, 120)}...&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-[12px] pt-1">
                          <span className="text-[#64748B] font-mono font-semibold">Status: Connected</span>
                          <span className="font-bold text-[#0B1220] bg-[#ABEF06] px-3 py-1 rounded-full text-[11px]">
                            Instant Meta Sync
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. FAQs Section */}
      <FAQAccordion items={faqs} title={`${channelKey.charAt(0).toUpperCase() + channelKey.slice(1)} FAQ`} />
    </div>
  );
}
