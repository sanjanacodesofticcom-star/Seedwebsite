import Link from 'next/link';
import GetAseedLogo from './GetAseedLogo';
import { Mail, MapPin, ExternalLink, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B1220] text-white pt-20 pb-12 border-t border-[#1E293B]">
      <div className="container-xl">
        {/* Row 1: Top Banner Headline */}
        <div className="pb-10 border-b border-[#1E293B] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 
              className="text-white text-[24px] sm:text-[30px] font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Learn how to grow 💪 audience fast in with us
            </h3>
            <p className="text-[#8891A3] text-[15px] mt-2">
              Official Meta Cloud API partner automating conversations across WhatsApp, Facebook, and Instagram.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://chat.getaseed.com/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pill bg-white text-[#0B1220] hover:bg-[#F6F7FB] font-medium text-[14px] px-6 py-3"
            >
              <span>Get Started Free</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Row 2: 4-Column Directory Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-5">
            <GetAseedLogo variant="white" size="large" />
            <p className="text-[#8891A3] text-[14px] leading-relaxed max-w-sm">
              The calm, unified command center for conversational commerce. Turn WhatsApp, Facebook Messenger, and Instagram interactions into automated sales pipelines.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-[13px] text-[#8891A3]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#1877F2] flex-shrink-0 mt-0.5" />
                <span>A-306, Bestech Business Towers, Mohali, Punjab, India 🇮🇳</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#25D366] flex-shrink-0" />
                <a href="mailto:online@getaseed.com" className="hover:text-white transition-colors">
                  online@getaseed.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="caption-eyebrow text-white text-[12px]">Company</h4>
            <ul className="space-y-3 text-[14px] text-[#8891A3]">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <a 
                  href="https://cal.com/codesoftic" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Book a Strategy Call</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="caption-eyebrow text-white text-[12px]">Explore</h4>
            <ul className="space-y-3 text-[14px] text-[#8891A3]">
              <li>
                <a 
                  href="https://cal.com/codesoftic" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Request Live Demo
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Zero Markup Direct Meta API
                </Link>
              </li>
              <li>
                <a 
                  href="https://chat.getaseed.com/register" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Automation Anywhere
                </a>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Official Badges Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="caption-eyebrow text-white text-[12px]">Resources & Channels</h4>
            <ul className="space-y-3 text-[14px] text-[#8891A3]">
              <li>
                <Link href="/whatsapp" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>WhatsApp Chatbot</span>
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#962FBF]" />
                  <span>Instagram Chatbot</span>
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
                  <span>Facebook Chatbot</span>
                </Link>
              </li>
            </ul>

            {/* Official Meta Badges */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-[10px] bg-[#101B33] border border-[#1E293B]">
                <div className="w-6 h-6 rounded-full bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2]">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-white">Meta Business Partner</div>
                  <div className="text-[10px] text-[#8891A3] font-mono">Official Cloud Integration</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3 py-2 rounded-[10px] bg-[#101B33] border border-[#1E293B]">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-white">WhatsApp Business API</div>
                  <div className="text-[10px] text-[#8891A3] font-mono">Verified Direct Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Legal Copyright Bar */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#8891A3]">
          <div className="font-mono">
            © 2026 GETASEED. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#1E293B]">·</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Conditions
            </Link>
            <span className="text-[#1E293B]">·</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
