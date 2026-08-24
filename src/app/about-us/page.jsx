import { HeartHandshake, TrendingUp, ShieldCheck, ArrowRight, Sparkles, Building2, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us — Conversational Commerce Platform | GetAseed',
  description: 'Learn about GetAseed mission to democratize conversational commerce for businesses of all sizes across WhatsApp, Instagram, and Facebook Messenger.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Customer-first',
      desc: "We exist to grow our customer's business. Every feature, integration, and AI workflow is engineered to maximize client ROI and long-term customer trust.",
      icon: HeartHandshake,
      color: '#1877F2'
    },
    {
      title: 'Raise standards',
      desc: 'Always curious to know more, and hungry to better our best performance. We continuously refine our response speed, uptime, and AI accuracy.',
      icon: TrendingUp,
      color: '#25D366'
    },
    {
      title: 'Integrity',
      desc: 'Own the cause, take responsibility for decisions and actions. Zero conversation markup fees, clear words in agreements, and absolute data encryption.',
      icon: ShieldCheck,
      color: '#962FBF'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Brand Hero & Mission */}
      <section className="brand-hero-bg pt-12 pb-20 sm:pb-28 text-[#0B1220] relative">
        <div className="container-xl max-w-4xl mx-auto space-y-6 text-center relative z-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#0B1220]">
              <Sparkles size={14} className="text-[#25D366]" />
              <span className="text-[12.5px] font-mono font-bold tracking-wide uppercase text-[#0B1220]">
                About GetAseed
              </span>
            </div>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-extrabold text-[#0B1220] tracking-tight leading-[1.08]">
            Driving business growth with Conversational Commerce
          </h1>

          <p className="text-[17px] sm:text-[20px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
            Our mission is to enhance sales and customer engagement by providing innovative AI chatbots tailored to your needs.
          </p>
        </div>
      </section>

      {/* 2. Narrative Content */}
      <section className="section-major bg-white border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="max-w-[780px] mx-auto space-y-8">
            <div className="space-y-6 text-[#334155] text-[17px] leading-relaxed font-medium">
              <p>
                We believe in the transformative power of conversations. Building strong customer relationships through meaningful dialogue is essential for converting prospects into sales. Sales are the lifeblood of any business.
              </p>
              <p>
                While large enterprises have the resources to develop custom tools for customer interaction and transactions, small and medium-sized businesses often lack this capability. GetAseed bridges this gap by providing an easy-to-use solution that automates customer interactions, turning conversations into transactions.
              </p>
              <p>
                As an official Meta Cloud API partner, we connect modern brands directly with WhatsApp, Facebook Messenger, and Instagram — offering a calm, disciplined command center that unifies noisy channels into automated revenue engines.
              </p>
            </div>

            {/* Office location card */}
            <div className="p-7 rounded-[22px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-[14px] bg-[#0B1220] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <Building2 size={22} className="text-[#ABEF06]" />
              </div>
              <div className="text-[14.5px]">
                <div className="font-bold text-[#0B1220] text-[16px]">Headquarters & Technology Hub</div>
                <div className="text-[#475569] mt-0.5 font-medium">Part of the Codesoftic Ecosystem</div>
                <div className="text-[#64748B] mt-1.5 flex items-center gap-1.5 font-mono text-[13px]">
                  <MapPin size={14} className="text-[#1877F2]" />
                  <span>A-306, Bestech Business Towers, Mohali, Punjab, India 🇮🇳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="section-major bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-3 border border-[#E2E8F0]">
              Core Values
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#0B1220] tracking-tight">
              Who we are and How we do things
            </h2>
            <p className="text-[16px] text-[#475569] mt-2 font-medium">
              Three guiding principles behind every product decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white border border-[#E2E8F0] rounded-[24px] p-8 flex flex-col justify-between hover:shadow-lg transition-all shadow-sm"
                >
                  <div className="space-y-4">
                    <div 
                      className="w-14 h-14 rounded-[16px] flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: `${val.color}15`, color: val.color }}
                    >
                      <Icon size={28} />
                    </div>

                    <div className="stat-mono text-[13px] font-bold text-[#64748B] uppercase">
                      Principle 0{idx + 1}
                    </div>

                    <h3 className="text-[22px] font-bold text-[#0B1220]">
                      {val.title}
                    </h3>

                    <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="section-compact bg-white">
        <div className="container-xl text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-[30px] sm:text-[38px] font-extrabold text-[#0B1220]">
            Ready to scale your conversational commerce?
          </h2>
          <p className="text-[16px] text-[#475569] font-medium">
            Get started with 7 days free onboarding and experience calm, automated customer conversations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://chat.getaseed.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime px-8 py-3.5 text-[15px] font-bold"
            >
              <span>Get Started Free</span>
              <span className="arrow-circle-dark">↗</span>
            </a>
            <Link href="/contact" className="btn-dark-brand px-7 py-3.5 text-[14.5px]">
              <span>Contact Sales</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
