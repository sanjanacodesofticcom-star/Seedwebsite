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
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon } from '@/components/BrandIcons';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [activePlatformTab, setActivePlatformTab] = useState('whatsapp');
  const [modalOpen, setModalOpen] = useState(false);

  const activeTabContent = platformFeaturesData[activePlatformTab];

  return (
    <div className="bg-white">
      {/* 1. Brand Hero Section */}
      <section className="brand-hero-bg pt-12 pb-20 sm:pb-28 text-[#0B1220] relative">
        <div className="container-xl max-w-4xl mx-auto space-y-6 text-center relative z-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#0B1220]">
              <ShieldCheck size={14} className="text-[#25D366]" />
              <span className="text-[12.5px] font-mono font-bold tracking-wide uppercase text-[#0B1220]">
                Fair, Transparent Pricing — Zero Markup Fees
              </span>
            </div>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-extrabold text-[#0B1220] tracking-tight leading-[1.08]">
            Choose the plan that fits your growth
          </h1>

          <p className="text-[17px] sm:text-[19px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
            While others charge 20–35% commission on every WhatsApp conversation, we connect you directly to Meta with zero markup fees.
          </p>

          {/* Monthly / Yearly Toggle Pill */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full inline-flex items-center gap-2 shadow-sm">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all ${
                  !isYearly 
                    ? 'bg-[#0B1220] text-white shadow-sm' 
                    : 'text-[#475569] hover:text-[#0B1220]'
                }`}
              >
                Monthly Billing
              </button>

              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 ${
                  isYearly 
                    ? 'bg-[#0B1220] text-white shadow-sm' 
                    : 'text-[#475569] hover:text-[#0B1220]'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#ABEF06] text-[#0B1220] text-[11px] font-mono font-extrabold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-Column Plan Grid */}
      <section className="section-major bg-[#F8FAFC] border-b border-[#E2E8F0]">
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
                  className={`relative rounded-[26px] p-8 flex flex-col justify-between transition-all duration-200 ${
                    isPro
                      ? 'bg-white border-2 border-[#1877F2] shadow-[0_20px_40px_-10px_rgba(24,119,242,0.15)] lg:-translate-y-2'
                      : 'bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Popular Tag */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-[#0B1220] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                        <Sparkles size={11} className="text-[#ABEF06]" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-[24px] font-extrabold text-[#0B1220]">
                        {plan.name}
                      </h3>
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569]">
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-[14.5px] text-[#475569] min-h-[40px] leading-relaxed font-medium">
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="py-6 border-y border-[#E2E8F0] my-6">
                      <div className="flex items-baseline gap-2">
                        <span className="stat-mono text-[44px] font-black text-[#0B1220] tracking-tight">
                          {price}
                        </span>
                        {typeof plan.priceMonthly === 'number' && (
                          <span className="text-[14px] text-[#64748B] font-bold">
                            / month
                          </span>
                        )}
                      </div>

                      {typeof plan.priceMonthly === 'number' && (
                        <div className="text-[12px] text-[#64748B] font-mono mt-1 font-semibold">
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
                      <div className="mb-4 text-[13px] font-bold text-[#1877F2] flex items-center gap-1.5">
                        <Sparkles size={14} />
                        <span>{plan.inheritanceLine}</span>
                      </div>
                    )}

                    {/* Features List */}
                    <ul className="space-y-3.5 text-[14px] text-[#0B1220] font-semibold">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-8 mt-8 border-t border-[#E2E8F0]">
                    <a
                      href={plan.ctaLink}
                      target={plan.slug === 'enterprise' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`w-full justify-center text-[14.5px] py-3.5 rounded-full font-bold flex items-center gap-2 transition-all ${
                        isPro ? 'btn-lime shadow-md' : 'bg-[#0B1220] text-white hover:bg-[#1E293B]'
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
              className="inline-flex items-center gap-2.5 text-[14.5px] font-bold text-[#0B1220] hover:text-[#1877F2] bg-white border border-[#E2E8F0] px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
            >
              <Globe size={16} className="text-[#1877F2]" />
              <span>View Country-Wise WhatsApp Conversation Pricing Table</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Platform Feature Matrix Tabbed Panel */}
      <section className="section-major bg-[#0B1220] text-white border-b border-[#1E293B]">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B33] border border-[#1E293B] text-[#ABEF06] font-mono text-[12px] font-bold uppercase mb-3">
              <Zap size={13} className="text-[#1877F2]" />
              <span>Platform Feature Matrix</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-white tracking-tight">
              Select a Platform to View Features
            </h2>
            <p className="text-[16px] text-[#94A3B8] mt-3 font-medium">
              Explore deep channel capabilities included across all plans.
            </p>

            {/* Tabs Selector */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActivePlatformTab('whatsapp')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] font-bold transition-all ${
                  activePlatformTab === 'whatsapp'
                    ? 'bg-[#25D366] text-[#0B1220] shadow-md'
                    : 'bg-[#101B33] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                }`}
              >
                <WhatsAppBrandIcon size={20} />
                <span>WhatsApp Automation</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatformTab('facebook')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] font-bold transition-all ${
                  activePlatformTab === 'facebook'
                    ? 'bg-[#1877F2] text-white shadow-md'
                    : 'bg-[#101B33] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                }`}
              >
                <FacebookBrandIcon size={20} />
                <span>Facebook Automation</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatformTab('instagram')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] font-bold transition-all ${
                  activePlatformTab === 'instagram'
                    ? 'bg-[#962FBF] text-white shadow-md'
                    : 'bg-[#101B33] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                }`}
              >
                <InstagramBrandIcon size={20} />
                <span>Instagram Automation</span>
              </button>
            </div>
          </div>

          {/* Tab Content Grid */}
          <div className="bg-[#101B33] border border-[#1E293B] rounded-[24px] p-8 max-w-5xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#1E293B] mb-8">
              <div>
                <h3 className="text-[22px] font-bold text-white">
                  {activeTabContent.title}
                </h3>
                <p className="text-[14.5px] text-[#94A3B8] mt-1 font-medium">
                  {activeTabContent.description}
                </p>
              </div>
              <span className="text-[#ABEF06] font-mono font-bold text-[12px] uppercase hidden sm:inline bg-black/30 px-3 py-1 rounded-full border border-white/10">
                Included in All Plans
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeTabContent.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-[18px] bg-[#0B1220] border border-[#1E293B] flex items-start gap-4 hover:border-[#1877F2] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[13.5px] text-[#94A3B8] leading-relaxed font-medium">
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
