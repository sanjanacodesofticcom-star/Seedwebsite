import { legalPagesData } from '@/data/legal';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | GetAseed',
  description: 'GetAseed Privacy Policy. Learn how we handle data security, encryption, and Meta Cloud API compliance.',
};

export default function PrivacyPolicyPage() {
  const data = legalPagesData['privacy-policy'];

  return (
    <div className="bg-white">
      <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="max-w-[760px] mx-auto space-y-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 text-[14px] text-[#8891A3] hover:text-[#0B1220] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 pill-eyebrow">
                <ShieldCheck size={13} className="text-[#25D366]" />
                <span>Legal & Compliance</span>
              </div>

              <h1 
                className="display-l text-[#0B1220] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {data.title}
              </h1>

              <div className="text-[13px] font-mono text-[#8891A3]">
                Last updated: {data.lastUpdated}
              </div>
            </div>

            <div className="space-y-8 text-[#4A5468] text-[16px] leading-relaxed pt-6 border-t border-[#E7E9F0]">
              {data.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 
                    className="text-[20px] font-semibold text-[#0B1220]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {sec.heading}
                  </h2>
                  <div className="whitespace-pre-line leading-relaxed">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
