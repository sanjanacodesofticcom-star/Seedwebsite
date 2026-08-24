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
      {/* 1. Narrative Hero & Mission */}
      <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="max-w-[760px] mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 pill-eyebrow">
              <Sparkles size={13} className="text-[#1877F2]" />
              <span>About GetAseed</span>
            </div>

            <h1 
              className="display-l text-[#0B1220] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We are dedicated to driving business growth through the power of Conversational Commerce tools.
            </h1>

            <p className="body-l font-medium text-[#0B1220] leading-relaxed">
              Our mission is to enhance sales and customer engagement by providing innovative solutions tailored to your needs.
            </p>

            <div className="space-y-6 text-[#4A5468] text-[16.5px] leading-relaxed pt-2 border-t border-[#E7E9F0]">
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
            <div className="p-6 rounded-[16px] bg-[#F6F7FB] border border-[#E7E9F0] flex items-start gap-4">
              <div className="w-10 h-10 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Building2 size={18} />
              </div>
              <div className="text-[14px]">
                <div className="font-semibold text-[#0B1220]">Headquarters & Technology Hub</div>
                <div className="text-[#4A5468] mt-0.5">Part of the Codesoftic Ecosystem</div>
                <div className="text-[#8891A3] mt-1 flex items-center gap-1">
                  <MapPin size={13} className="text-[#1877F2]" />
                  <span>A-306, Bestech Business Towers, Mohali, Punjab, India 🇮🇳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values Section */}
      <section className="section-major bg-[#F6F7FB] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="caption-eyebrow text-[#8891A3] mb-3">Core Values</div>
            <h2 
              className="display-l text-[#0B1220] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Who we are and How we do things
            </h2>
            <p className="body-l text-[#4A5468] mt-2">
              Three guiding principles behind every product decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="card-clean p-8 flex flex-col justify-between hover:border-[#2A3FE0] transition-all bg-white"
                >
                  <div className="space-y-4">
                    <div 
                      className="w-14 h-14 rounded-[14px] flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: `${val.color}15`, color: val.color }}
                    >
                      <Icon size={26} />
                    </div>

                    <div className="stat-mono text-[13px] text-[#8891A3]">
                      Principle 0{idx + 1}
                    </div>

                    <h3 
                      className="text-[22px] font-semibold text-[#0B1220]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {val.title}
                    </h3>

                    <p className="text-[14.5px] text-[#4A5468] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="section-compact bg-white">
        <div className="container-xl text-center max-w-2xl mx-auto space-y-6">
          <h2 className="display-m text-[#0B1220]" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to scale your conversational commerce?
          </h2>
          <p className="body-m text-[#4A5468]">
            Get started with 7 days free onboarding and experience calm, automated customer conversations.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <a 
              href="https://chat.getaseed.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary px-7 py-3"
            >
              <span>Get Started Free</span>
              <ArrowRight size={15} />
            </a>
            <Link href="/contact" className="btn-pill btn-secondary px-6 py-3">
              <span>Contact Sales</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
