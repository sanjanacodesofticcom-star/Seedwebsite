'use client';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  MessageSquare,
  Bot,
  Layers,
  BarChart3,
  TrendingUp,
  Share2,
  Send,
  Lock,
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
  featureCards = [], // array of { title, desc, bullets, isFeatured, iconName }
  partnerTags = [],
  deepDiveTitle,
  deepDiveSubhead,
  deepDiveRows = [], // array of { title, desc, stats: [{ label, value }], visualType }
  whatsappSpecial, // optional 3-step broadcast & dark checklist
  faqs = []
}) {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0] relative overflow-hidden">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Eyebrow Pill */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-mono font-medium tracking-wide uppercase"
              style={{
                border: `1.5px solid ${accentColor}`,
                color: accentColor,
                backgroundColor: `${accentColor}08`
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              <span>{heroPill}</span>
            </div>

            {/* H1 */}
            <h1 
              className="display-xl text-[#0B1220] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {heroTitle}
            </h1>

            {/* Subhead */}
            <p className="body-l text-[#4A5468] max-w-2xl mx-auto leading-relaxed">
              {heroSubhead}
            </p>

            {/* CTA Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://chat.getaseed.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary px-8 py-3.5 text-[15px] font-medium w-full sm:w-auto"
              >
                <span>Start Free on {channelKey.charAt(0).toUpperCase() + channelKey.slice(1)}</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://cal.com/codesoftic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-secondary px-7 py-3.5 text-[15px] font-medium w-full sm:w-auto"
              >
                <span>Schedule a 1-on-1 Demo</span>
              </a>
            </div>

            {/* Trust line */}
            <div className="pt-2 flex items-center justify-center gap-6 text-[13px] text-[#8891A3] font-mono">
              <span>🎁 7 Days Free Onboarding</span>
              <span>·</span>
              <span>💸 30 Days Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Grid Section */}
      <section className="section-major bg-[#F6F7FB] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 pill-eyebrow mb-3">
              <Zap size={13} style={{ color: accentColor }} />
              <span>Comprehensive Capabilities</span>
            </div>
            <h2 
              className="display-l text-[#0B1220] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {featureGridTitle}
            </h2>
            {featureGridSubhead && (
              <p className="body-l text-[#4A5468] mt-3">
                {featureGridSubhead}
              </p>
            )}
          </div>

          {/* Cards Grid (3 or 6) */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {featureCards.map((card, idx) => {
              const Icon = ICON_MAP[card.iconName] || Bot;
              return (
                <div
                  key={idx}
                  className={`relative p-8 rounded-[16px] transition-all duration-200 flex flex-col justify-between ${
                    card.isFeatured
                      ? 'bg-white border-2 shadow-[0_12px_32px_-16px_rgba(11,18,32,0.14)]'
                      : 'bg-white border border-[#E7E9F0] hover:border-[#2A3FE0]'
                  }`}
                  style={{
                    borderColor: card.isFeatured ? accentColor : undefined
                  }}
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-12 h-12 rounded-[12px] flex items-center justify-center"
                        style={{
                          backgroundColor: `${accentColor}12`,
                          color: accentColor
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      {card.isFeatured && (
                        <span 
                          className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${accentColor}15`,
                            color: accentColor
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 
                      className="text-[20px] font-semibold text-[#0B1220] mb-2.5"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {card.title}
                    </h3>

                    <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Optional Bullet Points */}
                    {card.bullets && card.bullets.length > 0 && (
                      <ul className="mt-5 pt-5 border-t border-[#E7E9F0] space-y-2 text-[13px] text-[#0B1220]">
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
              <div className="text-[18px] font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Official Meta Business Partner
              </div>
              <div className="text-[13px] text-[#8891A3]">
                Direct Cloud API infrastructure with verified tier delivery & zero markups.
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {partnerTags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="px-3.5 py-1.5 rounded-full bg-[#0B1220] border border-[#1E293B] text-[12px] font-mono text-[#E7E9F0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Special Section: 3-Step Smart Broadcasting */}
      {whatsappSpecial && (
        <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0]">
          <div className="container-xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 pill-eyebrow mb-3">
                <Sparkles size={13} className="text-[#25D366]" />
                <span>Smart Broadcasting</span>
              </div>
              <h2 className="display-l text-[#0B1220]" style={{ fontFamily: 'var(--font-display)' }}>
                Grow Your E-Commerce with Smart Broadcasting
              </h2>
              <p className="body-l text-[#4A5468] mt-3">
                Reach your customers instantly across multiple channels and boost sales with powerful, automated messaging.
              </p>
            </div>

            {/* 3 Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="card-clean p-8 relative space-y-4">
                <div className="stat-mono text-[36px] font-bold text-[#25D366]">01</div>
                <h3 className="text-[20px] font-semibold text-[#0B1220]">Create Campaign</h3>
                <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                  Set up your WhatsApp campaign in minutes — name it, segment target audience, select approved template, done.
                </p>
              </div>

              <div className="card-clean p-8 relative space-y-4">
                <div className="stat-mono text-[36px] font-bold text-[#1877F2]">02</div>
                <h3 className="text-[20px] font-semibold text-[#0B1220]">Broadcast at Scale</h3>
                <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                  Broadcast offers, promos, and order updates to thousands of opt-in customers instantly with high delivery rates.
                </p>
              </div>

              <div className="card-clean p-8 relative space-y-4">
                <div className="stat-mono text-[36px] font-bold text-[#962FBF]">03</div>
                <h3 className="text-[20px] font-semibold text-[#0B1220]">Watch Conversions Roll In</h3>
                <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                  Direct customers to your WhatsApp catalog, share 1-click payment links, and track real-time ROI reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp Special Section: What You Can Automate (Dark Checklist Panel) */}
      {whatsappSpecial && whatsappSpecial.checklist && (
        <section className="section-major bg-[#0B1220] text-white border-b border-[#1E293B]">
          <div className="container-xl">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 pill-eyebrow pill-eyebrow-dark mb-3">
                <Bot size={13} className="text-[#25D366]" />
                <span>Automate Every Touchpoint</span>
              </div>
              <h2 className="display-l text-white" style={{ fontFamily: 'var(--font-display)' }}>
                What You Can Automate With WhatsApp
              </h2>
              <p className="body-l text-[#8891A3] mt-3">
                Design your WhatsApp automation flows once and let them run on autopilot for every new customer. From lead capture to post-sale engagement, automate every touchpoint.
              </p>
            </div>

            {/* Checklist items as clean list-with-icon-and-arrow rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatsappSpecial.checklist.map((item, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-6 rounded-[14px] bg-[#101B33] border border-[#1E293B] flex items-start gap-4 hover:border-[#25D366] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#8891A3] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Deep-Dive Rows (Alternating Side-by-Side Blocks) */}
      {deepDiveRows && deepDiveRows.length > 0 && (
        <section className="section-major bg-[#FFFFFF]">
          <div className="container-xl space-y-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 pill-eyebrow mb-3">
                <BarChart3 size={13} style={{ color: accentColor }} />
                <span>Growth & Analytics</span>
              </div>
              <h2 className="display-l text-[#0B1220]" style={{ fontFamily: 'var(--font-display)' }}>
                {deepDiveTitle || "Grow and Analyze Your Audience"}
              </h2>
              {deepDiveSubhead && (
                <p className="body-l text-[#4A5468] mt-3">
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
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="stat-mono text-[14px] text-[#8891A3] uppercase tracking-wider">
                      Module 0{rIdx + 1}
                    </div>

                    <h3 
                      className="text-[28px] sm:text-[34px] font-semibold text-[#0B1220] tracking-tight leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {row.title}
                    </h3>

                    <p className="body-m text-[#4A5468] leading-relaxed text-[16px]">
                      {row.desc}
                    </p>

                    {/* Dual Mono Stats Chips */}
                    {row.stats && row.stats.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E7E9F0]">
                        {row.stats.map((st, sIdx) => (
                          <div key={sIdx} className="p-4 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0]">
                            <div 
                              className="stat-mono text-[24px] font-semibold text-[#0B1220]"
                              style={{ color: sIdx === 0 ? accentColor : undefined }}
                            >
                              {st.value}
                            </div>
                            <div className="caption-eyebrow text-[#8891A3] text-[11px] mt-1">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Coded UI Visual Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-[#F6F7FB] border border-[#E7E9F0] rounded-[20px] p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E7E9F0] mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E9F0]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E9F0]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E9F0]" />
                        </div>
                        <span className="text-[11px] font-mono text-[#8891A3]">
                          {channelKey.toUpperCase()}_AUTOMATION_PREVIEW
                        </span>
                        <div className="w-4" />
                      </div>

                      {/* Visual Content inside card */}
                      <div className="bg-white rounded-[14px] border border-[#E7E9F0] p-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                          >
                            <Bot size={20} />
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-[#0B1220]">
                              {row.title}
                            </div>
                            <div className="text-[11px] font-mono text-[#25D366]">
                              Live Automation Trigger · 24/7 Active
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-[#F6F7FB] rounded-[10px] text-[13px] text-[#4A5468] border border-[#E7E9F0]">
                          <p className="italic">
                            &ldquo;{row.desc.substring(0, 110)}...&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[12px] pt-1">
                          <span className="text-[#8891A3] font-mono">Status: Connected</span>
                          <span 
                            className="font-medium text-[12px] px-2.5 py-0.5 rounded-full"
                            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                          >
                            Instant Sync
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
