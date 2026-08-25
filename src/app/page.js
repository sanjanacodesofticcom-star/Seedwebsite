import HeroReferenceSection from '@/components/HeroReferenceSection';
import SocialProofMarquee from '@/components/SocialProofMarquee';
import SmartAutomationsSection from '@/components/SmartAutomationsSection';
import ServicesReferenceGrid from '@/components/ServicesReferenceGrid';
import TrainAIAgentPanel from '@/components/TrainAIAgentPanel';
import BlogSection from '@/components/BlogSection';
import ToolsIntegrationRow from '@/components/ToolsIntegrationRow';
import FAQAccordion from '@/components/FAQAccordion';
import { faqsData } from '@/data/faqs';
import { ShieldCheck, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'GetAseed — AI Chatbot & Conversational Commerce Automation',
  description: 'Boost your presence on WhatsApp, Facebook, and Instagram. Official Meta Cloud API partner with zero markup fees.',
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Brand Hero Section with Meta & WhatsApp Pill */}
      <HeroReferenceSection />

      {/* 2. Partner Logo Marquee: Automating Conversations with Global Scale */}
      <SocialProofMarquee />

      {/* 3. Smart Automations for Growing Businesses (Reference 6-Card Grid) */}
      <SmartAutomationsSection />

      {/* 4. Channels & Services Grid with Real-Time Data Stream */}
      <ServicesReferenceGrid />

      {/* 5. Interactive Dark AI Data Training Console */}
      <TrainAIAgentPanel />

      {/* 6. Blog Section (Reference UI with Frosted Glass Overlay & Sanity Integration) */}
      <BlogSection />

      {/* 7. Our Promise to You */}
      <section className="section-major bg-white border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B1220] font-mono text-[12px] font-semibold uppercase tracking-wider">
                <ShieldCheck size={13} className="text-[#25D366]" />
                <span>Our User Agreement</span>
              </div>

              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0B1220] tracking-tight leading-tight font-display">
                Clear words. <br />
                Nothing is hidden.
              </h2>

              <p className="text-[16px] text-[#475569] leading-relaxed font-medium">
                The most important part of our user agreement, in plain language. We bring it to the surface here because your trust should begin before you sign up.
              </p>

              <div className="pt-2">
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1877F2] hover:underline"
                >
                  <span>Read the full agreement</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: 5 Sequential Promises */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-6 divide-y divide-[#E2E8F0]">
                <div className="pt-6 first:pt-0 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-bold text-[#94A3B8] flex-shrink-0">
                    01
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1220] font-display">
                      7 Days, completely free.
                    </h3>
                    <p className="text-[14.5px] text-[#64748B] mt-1 leading-relaxed font-medium">
                      Eligible businesses get 7 days of onboarding at no cost. There are no hidden fees during the trial period—what you see is exactly what you pay.
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-bold text-[#94A3B8] flex-shrink-0">
                    02
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1220] font-display">
                      Contract only if you're happy.
                    </h3>
                    <p className="text-[14.5px] text-[#64748B] mt-1 leading-relaxed font-medium">
                      Your paid engagement begins only after your 7-day trial ends and only with your written approval once you're satisfied.
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-bold text-[#94A3B8] flex-shrink-0">
                    03
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1220] font-display">
                      Your plan in 2–3 business days.
                    </h3>
                    <p className="text-[14.5px] text-[#64748B] mt-1 leading-relaxed font-medium">
                      After understanding your business, our strategists prepare a personalized growth plan within 2–3 business days.
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-bold text-[#94A3B8] flex-shrink-0">
                    04
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1220] font-display">
                      End-to-end encrypted.
                    </h3>
                    <p className="text-[14.5px] text-[#64748B] mt-1 leading-relaxed font-medium">
                      Your communication remains encrypted and secure. We never sell your business or customer data.
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-bold text-[#94A3B8] flex-shrink-0">
                    05
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1220] font-display">
                      Honest about results.
                    </h3>
                    <p className="text-[14.5px] text-[#64748B] mt-1 leading-relaxed font-medium">
                      We never promise unrealistic growth. We promise transparency, measurable work, and a free month so you can judge the results yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Connect Your Tools Easily */}
      <ToolsIntegrationRow />

      {/* 9. Direct WhatsApp CTA Banner */}
      <section className="section-compact bg-white">
        <div className="container-xl">
          <div className="bg-[#0B1220] rounded-[28px] p-8 sm:p-14 text-white relative overflow-hidden border border-[#1E293B] shadow-2xl">
            <div 
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none blur-3xl"
              style={{ background: 'var(--thread-gradient)' }}
            />

            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B33] border border-[#1E293B]">
                <MessageSquare size={14} className="text-[#25D366]" />
                <span className="caption-eyebrow text-[#8891A3] text-[12px]">Instant WhatsApp Connection</span>
              </div>

              <h2 className="text-[28px] sm:text-[38px] font-bold text-white tracking-tight leading-tight font-display">
                Capture, Engage & Support Your Customers Across Platforms
              </h2>

              <p className="text-[16px] text-[#94A3B8] leading-relaxed font-medium">
                Connect your WhatsApp Business API in minutes and begin automating sales with zero commission markups.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://wa.me/919999061692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime px-8 py-3.5 text-[15px] font-bold w-full sm:w-auto shadow-lg"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="https://chat.getaseed.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime px-8 py-3.5 text-[15px] font-bold w-full sm:w-auto shadow-lg"
                >
                  <span>Create Account</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion */}
      <FAQAccordion items={faqsData.home} />
    </div>
  );
}
