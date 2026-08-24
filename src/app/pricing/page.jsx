'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Zap, 
  HelpCircle,
  MessageSquare,
  Share2,
  Send
} from 'lucide-react';
import { pricingPlans, platformFeaturesData } from '@/data/pricing';
import CountryPricingModal from '@/components/CountryPricingModal';
import FAQAccordion from '@/components/FAQAccordion';
import { faqsData } from '@/data/faqs';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [activePlatformTab, setActivePlatformTab] = useState('whatsapp');
  const [modalOpen, setModalOpen] = useState(false);

  const activeTabContent = platformFeaturesData[activePlatformTab];

  return (
    <div className="bg-white">
      {/* 1. Header Section */}
      <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0] text-center relative">
        <div className="container-xl max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 pill-eyebrow">
            <ShieldCheck size={13} className="text-[#25D366]" />
            <span>Fair, Transparent Pricing — Zero Markup Fees</span>
          </div>

          <h1 
            className="display-xl text-[#0B1220] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Choose the plan that fits your business growth
          </h1>

          <p className="body-l text-[#4A5468] max-w-2xl mx-auto leading-relaxed">
            While others charge 20–35% commission on every WhatsApp conversation, we connect you directly to Meta with zero markup fees.
          </p>

          {/* Monthly / Yearly Toggle Pill */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1.5 bg-[#F6F7FB] border border-[#E7E9F0] rounded-full inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all ${
                  !isYearly 
                    ? 'bg-[#0B1220] text-white shadow-sm' 
                    : 'text-[#4A5468] hover:text-[#0B1220]'
                }`}
              >
                Monthly Billing
              </button>

              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all flex items-center gap-2 ${
                  isYearly 
                    ? 'bg-[#0B1220] text-white shadow-sm' 
                    : 'text-[#4A5468] hover:text-[#0B1220]'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2 py-0.5 rounded-full bg-[#25D366] text-[#0B1220] text-[11px] font-mono font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-Column Plan Grid */}
      <section className="section-major bg-[#F6F7FB] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const isPro = plan.isFeatured;
              const price = isYearly 
                ? (typeof plan.priceYearly === 'number' ? `$${plan.priceYearly}` : plan.priceYearly)
                : (typeof plan.priceMonthly === 'number' ? `$${plan.priceMonthly}` : plan.priceMonthly);

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-[20px] p-8 flex flex-col justify-between transition-all duration-200 ${
                    isPro
                      ? 'bg-white border-2 border-[#2A3FE0] shadow-[0_16px_36px_-16px_rgba(11,18,32,0.14)] lg:-translate-y-2'
                      : 'bg-white border border-[#E7E9F0] hover:border-[#8891A3]'
                  }`}
                >
                  {/* Popular Tag */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-[#0B1220] text-white text-[11px] font-mono font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                        <Sparkles size={11} className="text-[#25D366]" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 
                        className="text-[22px] font-semibold text-[#0B1220]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {plan.name}
                      </h3>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#F6F7FB] border border-[#E7E9F0] text-[#4A5468]">
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-[14px] text-[#4A5468] min-h-[40px] leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="py-6 border-y border-[#E7E9F0] my-6">
                      <div className="flex items-baseline gap-2">
                        <span 
                          className="stat-mono text-[42px] font-bold text-[#0B1220] tracking-tight"
                        >
                          {price}
                        </span>
                        {typeof plan.priceMonthly === 'number' && (
                          <span className="text-[14px] text-[#8891A3] font-medium">
                            / month
                          </span>
                        )}
                      </div>

                      {typeof plan.priceMonthly === 'number' && (
                        <div className="text-[12px] text-[#8891A3] font-mono mt-1">
                          {isYearly ? (
                            <span>Billed annually (${plan.totalYearlyBilled}/yr) · <strong className="text-[#25D366]">{plan.savingsText}</strong></span>
                          ) : (
                            <span>Billed monthly. Cancel anytime.</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Inheritance Tag for Pro */}
                    {plan.inheritanceLine && (
                      <div className="mb-4 text-[13px] font-semibold text-[#2A3FE0] flex items-center gap-1.5">
                        <Sparkles size={14} />
                        <span>{plan.inheritanceLine}</span>
                      </div>
                    )}

                    {/* Features List */}
                    <ul className="space-y-3 text-[14px] text-[#0B1220]">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-8 mt-8 border-t border-[#E7E9F0]">
                    <a
                      href={plan.ctaLink}
                      target={plan.slug === 'enterprise' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`btn-pill w-full justify-center text-[15px] font-medium py-3.5 ${
                        isPro ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Country Wise WhatsApp Pricing Link-out */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0B1220] hover:text-[#2A3FE0] bg-white border border-[#E7E9F0] px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
            >
              <Globe size={16} className="text-[#1877F2]" />
              <span>View Country-Wise WhatsApp Conversation Pricing Table</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. "Select a Platform to View Features" Tabbed Panel (Dark ink-950) */}
      <section className="section-major bg-[#0B1220] text-white border-b border-[#1E293B]">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 pill-eyebrow pill-eyebrow-dark mb-3">
              <Zap size={13} className="text-[#1877F2]" />
              <span>Platform Feature Matrix</span>
            </div>
            <h2 
              className="display-l text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Select a Platform to View Features
            </h2>
            <p className="body-l text-[#8891A3] mt-3">
              Explore deep channel capabilities included across all plans.
            </p>

            {/* Tabs Selector */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActivePlatformTab('whatsapp')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold transition-all ${
                  activePlatformTab === 'whatsapp'
                    ? 'bg-[#25D366] text-[#0B1220] shadow-md'
                    : 'bg-[#101B33] text-[#8891A3] hover:text-white border border-[#1E293B]'
                }`}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Automation</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatformTab('facebook')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold transition-all ${
                  activePlatformTab === 'facebook'
                    ? 'bg-[#1877F2] text-white shadow-md'
                    : 'bg-[#101B33] text-[#8891A3] hover:text-white border border-[#1E293B]'
                }`}
              >
                <Share2 size={16} />
                <span>Facebook Automation</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatformTab('instagram')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold transition-all ${
                  activePlatformTab === 'instagram'
                    ? 'bg-[#962FBF] text-white shadow-md'
                    : 'bg-[#101B33] text-[#8891A3] hover:text-white border border-[#1E293B]'
                }`}
              >
                <Send size={16} />
                <span>Instagram Automation</span>
              </button>
            </div>
          </div>

          {/* Tab Content Grid */}
          <div className="bg-[#101B33] border border-[#1E293B] rounded-[20px] p-8 max-w-5xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#1E293B] mb-8">
              <div>
                <h3 className="text-[20px] font-semibold text-white">
                  {activeTabContent.title}
                </h3>
                <p className="text-[14px] text-[#8891A3] mt-1">
                  {activeTabContent.description}
                </p>
              </div>
              <span className="caption-eyebrow text-[#25D366] text-[12px] hidden sm:inline">
                Included in All Plans
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeTabContent.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-[14px] bg-[#0B1220] border border-[#1E293B] flex items-start gap-4 hover:border-[#2A3FE0] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-white mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[13.5px] text-[#8891A3] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing FAQs */}
      <FAQAccordion items={faqsData.home} title="Pricing & Billing FAQ" />

      {/* Modal */}
      <CountryPricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
