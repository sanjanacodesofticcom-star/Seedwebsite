import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Share2, 
  Send, 
  Bot, 
  Radio, 
  Inbox, 
  Users, 
  ShoppingCart, 
  Calendar,
  ShieldCheck,
  Zap,
  Lock,
  ExternalLink
} from 'lucide-react';
import TrainAIAgentPanel from '@/components/TrainAIAgentPanel';
import DeviceMockup from '@/components/DeviceMockup';
import ToolsIntegrationRow from '@/components/ToolsIntegrationRow';
import SocialProofMarquee from '@/components/SocialProofMarquee';
import FAQAccordion from '@/components/FAQAccordion';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'GetAseed — AI Chatbot & Conversational Commerce Automation',
  description: 'Boost your presence on WhatsApp, Facebook, and Instagram. Official Meta Cloud API partner with zero markup fees.',
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 6.1 Hero Section */}
      <section className="section-major bg-[#FFFFFF] relative overflow-hidden">
        <div className="container-xl">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Eyebrow Pills Row */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="pill-eyebrow">
                <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
                <span>Official META Cloud API</span>
              </div>
              <div className="pill-eyebrow">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Official WhatsApp Business API</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              className="display-xl text-[#0B1220] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Unlock the potential of marketing
            </h1>

            {/* Subhead */}
            <p className="body-l text-[#4A5468] max-w-2xl mx-auto leading-relaxed">
              Boost Your Presence on Instagram, Facebook and WhatsApp with intelligent AI chatbots and single-inbox automation.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://chat.getaseed.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary px-8 py-3.5 text-[15px] font-medium w-full sm:w-auto shadow-md"
              >
                <span>Start for Just $29</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://cal.com/codesoftic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-secondary px-7 py-3.5 text-[15px] font-medium w-full sm:w-auto"
              >
                <span>Schedule a Call</span>
              </a>
            </div>

            {/* Trust Microcopy Line */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[13px] text-[#8891A3] font-mono">
              <span className="flex items-center gap-1.5">
                <span>🎁</span>
                <span>7 Days, completely free</span>
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <span>💸</span>
                <span>30 days refund no question asked</span>
              </span>
            </div>
          </div>

          {/* Tri-Channel Gradient Thread line */}
          <div className="my-14 max-w-3xl mx-auto">
            <span className="thread-line rounded-full" />
          </div>

          {/* Unified "Inbox Strip" below the fold (Single rounded panel with 3 channel columns) */}
          <div className="bg-white border border-[#E7E9F0] rounded-[20px] shadow-[0_12px_32px_-16px_rgba(11,18,32,0.08)] overflow-hidden">
            <div className="p-5 bg-[#F6F7FB] border-b border-[#E7E9F0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[13px] font-mono font-medium text-[#0B1220]">
                  OMNICHANNEL_INBOX · 3 CHANNELS LIVE
                </span>
              </div>
              <span className="text-[12px] font-mono text-[#8891A3]">
                Zero Markup Infrastructure
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E7E9F0]">
              {/* Column 1: Instagram */}
              <div className="p-8 space-y-6 hover:bg-[#F6F7FB]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="channel-chip channel-chip-ig">
                      <Send size={16} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">Instagram</h3>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#962FBF]/10 text-[#962FBF]">
                    IG Direct
                  </span>
                </div>

                <p className="text-[14px] text-[#4A5468] leading-relaxed">
                  Answer every single question, comment, and story reply 24/7, to attract more leads, increase sales, and drive higher conversions on IG.
                </p>

                <div className="pt-4 border-t border-[#E7E9F0] grid grid-cols-3 gap-2">
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#0B1220]">9X</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Leads Growth</div>
                  </div>
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#962FBF]">24/7</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Auto Replies</div>
                  </div>
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#0B1220]">High</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Conversion</div>
                  </div>
                </div>

                <Link 
                  href="/instagram" 
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#962FBF] hover:underline"
                >
                  <span>Explore Instagram Automation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Column 2: Facebook */}
              <div className="p-8 space-y-6 hover:bg-[#F6F7FB]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="channel-chip channel-chip-fb">
                      <Share2 size={16} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">Facebook</h3>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2]">
                    Messenger
                  </span>
                </div>

                <p className="text-[14px] text-[#4A5468] leading-relaxed">
                  Messenger automates conversations to fuel more sales, generate leads, automate FAQs and run marketing campaigns.
                </p>

                <div className="pt-4 border-t border-[#E7E9F0] grid grid-cols-3 gap-2">
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#0B1220]">3X</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Leads Boost</div>
                  </div>
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#1877F2]">Auto</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Chat Flows</div>
                  </div>
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#0B1220]">60%</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Cost Saved</div>
                  </div>
                </div>

                <Link 
                  href="/facebook" 
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1877F2] hover:underline"
                >
                  <span>Explore Facebook Automation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Column 3: WhatsApp */}
              <div className="p-8 space-y-6 hover:bg-[#F6F7FB]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="channel-chip channel-chip-wa">
                      <MessageSquare size={16} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">WhatsApp</h3>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366]">
                    Cloud API
                  </span>
                </div>

                <p className="text-[14px] text-[#4A5468] leading-relaxed">
                  Automation to help customers discover products, retrieve order information and deliver customer support — all on autopilot.
                </p>

                <div className="pt-4 border-t border-[#E7E9F0] grid grid-cols-3 gap-2">
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#0B1220]">24/7</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Live Support</div>
                  </div>
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#25D366]">1-Click</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Broadcast</div>
                  </div>
                  <div>
                    <div className="stat-mono text-[16px] font-semibold text-[#0B1220]">Fast</div>
                    <div className="text-[10px] font-mono uppercase text-[#8891A3] mt-0.5">Order Sync</div>
                  </div>
                </div>

                <Link 
                  href="/whatsapp" 
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#25D366] hover:underline"
                >
                  <span>Explore WhatsApp Automation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Train AI Agent Dark Panel */}
      <TrainAIAgentPanel />

      {/* 6.3 Smart Automations for Growing Businesses (3x2 clean icon tile grid) */}
      <section className="section-major bg-[#FFFFFF]">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 pill-eyebrow mb-3">
              <Sparkles size={13} className="text-[#1877F2]" />
              <span>Full-Stack Conversational Engine</span>
            </div>
            <h2 
              className="display-l text-[#0B1220] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Smart Automations for Growing Businesses
            </h2>
            <p className="body-l text-[#4A5468] mt-3">
              Everything you need to automate conversations and recover revenue.
            </p>
          </div>

          {/* 3x2 Icon Tile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tile 1 */}
            <div className="p-6 rounded-[16px] hover:bg-[#F6F7FB] transition-colors space-y-3 border border-transparent hover:border-[#E7E9F0]">
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-center justify-center text-[#0B1220]">
                <Bot size={22} className="text-[#2A3FE0]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1220]">Chatbots</h3>
              <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                Build intelligent chatbots to automate conversations and provide instant responses to customers.
              </p>
            </div>

            {/* Tile 2 */}
            <div className="p-6 rounded-[16px] hover:bg-[#F6F7FB] transition-colors space-y-3 border border-transparent hover:border-[#E7E9F0]">
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-center justify-center text-[#0B1220]">
                <Radio size={22} className="text-[#25D366]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1220]">Broadcasting</h3>
              <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                Send bulk messages, updates, and promotions to your audience with powerful broadcasting tools.
              </p>
            </div>

            {/* Tile 3 */}
            <div className="p-6 rounded-[16px] hover:bg-[#F6F7FB] transition-colors space-y-3 border border-transparent hover:border-[#E7E9F0]">
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-center justify-center text-[#0B1220]">
                <Inbox size={22} className="text-[#1877F2]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1220]">Omnichannel Inbox</h3>
              <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                Manage all customer conversations from multiple platforms in one unified inbox.
              </p>
            </div>

            {/* Tile 4 */}
            <div className="p-6 rounded-[16px] hover:bg-[#F6F7FB] transition-colors space-y-3 border border-transparent hover:border-[#E7E9F0]">
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-center justify-center text-[#0B1220]">
                <Users size={22} className="text-[#962FBF]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1220]">Unlimited Users</h3>
              <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                Add unlimited team members and agents without extra per-seat licensing cost.
              </p>
            </div>

            {/* Tile 5 */}
            <div className="p-6 rounded-[16px] hover:bg-[#F6F7FB] transition-colors space-y-3 border border-transparent hover:border-[#E7E9F0]">
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-center justify-center text-[#0B1220]">
                <ShoppingCart size={22} className="text-[#F0554D]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1220]">Abandoned Cart Recovery</h3>
              <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                Automatically remind customers to complete purchases with high-conversion checkout links.
              </p>
            </div>

            {/* Tile 6 */}
            <div className="p-6 rounded-[16px] hover:bg-[#F6F7FB] transition-colors space-y-3 border border-transparent hover:border-[#E7E9F0]">
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-center justify-center text-[#0B1220]">
                <Calendar size={22} className="text-[#2A3FE0]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1220]">Appointments</h3>
              <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                Easily book calls or appointments with qualified prospects in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 Supercharge Lead Generation (with coded Device Mockup) */}
      <section className="section-major bg-[#F6F7FB] border-y border-[#E7E9F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 pill-eyebrow">
                <Zap size={13} className="text-[#25D366]" />
                <span>Drive more Sales on Autopilot</span>
              </div>

              <h2 
                className="display-l text-[#0B1220] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Supercharge your lead generation
              </h2>

              <p className="body-l text-[#4A5468] leading-relaxed">
                Attract and engage customers when they're ready. Capture email addresses and phone numbers for up to 80% of your leads and automatically add them to your database.
              </p>

              <div className="pt-2">
                <a
                  href="https://chat.getaseed.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary px-7 py-3 text-[15px]"
                >
                  <span>Start Free</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* 3 Sub-points */}
              <div className="pt-6 space-y-4 border-t border-[#E7E9F0]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#0B1220]">
                      Increase conversion rates to 90%
                    </h4>
                    <p className="text-[13.5px] text-[#4A5468]">
                      No lead slips away and no follow-up opportunity is missed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#0B1220]">
                      Automatically respond to messages
                    </h4>
                    <p className="text-[13.5px] text-[#4A5468]">
                      Instantly engage with every message and never miss opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#962FBF]/15 text-[#962FBF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#0B1220]">
                      Scale your business effortlessly
                    </h4>
                    <p className="text-[13.5px] text-[#4A5468]">
                      Automate workflows and grow faster with intelligent systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Coded Mockup */}
            <div className="lg:col-span-6">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Our Promise to You (Earned Numbering in Mono) */}
      <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 pill-eyebrow">
                <ShieldCheck size={13} className="text-[#25D366]" />
                <span>Our User Agreement</span>
              </div>

              <h2 
                className="display-l text-[#0B1220] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Clear words. Nothing is hidden.
              </h2>

              <p className="body-l text-[#4A5468] leading-relaxed">
                The most important part of our user agreement, in plain language. We bring it to the surface here because your trust should begin before you sign up.
              </p>

              <div className="pt-2">
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#2A3FE0] hover:underline"
                >
                  <span>Read the full agreement</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: 5 Sequential Promises */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-6 divide-y divide-[#E7E9F0]">
                {/* Promise 1 */}
                <div className="pt-6 first:pt-0 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-semibold text-[#8891A3] flex-shrink-0">
                    01
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">
                      7 Days, completely free.
                    </h3>
                    <p className="text-[14.5px] text-[#4A5468] mt-1 leading-relaxed">
                      Eligible businesses get 7 days of onboarding at no cost. There are no hidden fees during the trial period—what you see is exactly what you pay.
                    </p>
                  </div>
                </div>

                {/* Promise 2 */}
                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-semibold text-[#8891A3] flex-shrink-0">
                    02
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">
                      Contract only if you're happy.
                    </h3>
                    <p className="text-[14.5px] text-[#4A5468] mt-1 leading-relaxed">
                      Your paid engagement begins only after your 7-day trial ends and only with your written approval once you're satisfied.
                    </p>
                  </div>
                </div>

                {/* Promise 3 */}
                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-semibold text-[#8891A3] flex-shrink-0">
                    03
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">
                      Your plan in 2–3 business days.
                    </h3>
                    <p className="text-[14.5px] text-[#4A5468] mt-1 leading-relaxed">
                      After understanding your business, our strategists prepare a personalized growth plan within 2–3 business days.
                    </p>
                  </div>
                </div>

                {/* Promise 4 */}
                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-semibold text-[#8891A3] flex-shrink-0">
                    04
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">
                      End-to-end encrypted.
                    </h3>
                    <p className="text-[14.5px] text-[#4A5468] mt-1 leading-relaxed">
                      Your communication remains encrypted and secure. We never sell your business or customer data.
                    </p>
                  </div>
                </div>

                {/* Promise 5 */}
                <div className="pt-6 flex items-start gap-5">
                  <span className="stat-mono text-[28px] font-semibold text-[#8891A3] flex-shrink-0">
                    05
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#0B1220]">
                      Honest about results.
                    </h3>
                    <p className="text-[14.5px] text-[#4A5468] mt-1 leading-relaxed">
                      We never promise unrealistic growth. We promise transparency, measurable work, and a free month so you can judge the results yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 Connect Your Tools Easily */}
      <ToolsIntegrationRow />

      {/* 6.7 Mascot / Chat CTA Banner */}
      <section className="section-compact bg-[#FFFFFF]">
        <div className="container-xl">
          <div className="bg-[#0B1220] rounded-[24px] p-8 sm:p-14 text-white relative overflow-hidden border border-[#1E293B] shadow-2xl">
            {/* Background Glow */}
            <div 
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none blur-3xl"
              style={{ background: 'var(--thread-gradient)' }}
            />

            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B33] border border-[#1E293B]">
                <MessageSquare size={14} className="text-[#25D366]" />
                <span className="caption-eyebrow text-[#8891A3] text-[12px]">Instant WhatsApp Connection</span>
              </div>

              <h2 
                className="text-[28px] sm:text-[38px] font-semibold text-white tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Capture, Engage & Support Your Customers Across platforms
              </h2>

              <p className="text-[16px] text-[#8891A3] leading-relaxed">
                Connect your WhatsApp Business API in minutes and begin automating sales with zero commission markups.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://wa.me/919999061692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-wa px-8 py-3.5 text-[15px] font-semibold w-full sm:w-auto shadow-lg"
                >
                  <MessageSquare size={18} />
                  <span>Click Here to Chat on WhatsApp</span>
                </a>

                <a
                  href="https://chat.getaseed.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#101B33] hover:bg-[#1E293B] text-white border border-[#1E293B] px-6 py-3.5 text-[15px] w-full sm:w-auto"
                >
                  <span>Create Account</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.8 Social Proof Marquee */}
      <SocialProofMarquee />

      {/* 6.9 FAQ Accordion */}
      <FAQAccordion items={faqsData.home} />
    </div>
  );
}
