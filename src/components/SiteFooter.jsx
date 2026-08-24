import Link from 'next/link';
import GetAseedLogo from './GetAseedLogo';
import { Mail, MapPin, ExternalLink, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon, MetaBrandIcon } from './BrandIcons';

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B1220] text-white pt-20 pb-12 border-t border-[#1E293B]">
      <div className="container-xl">
        {/* Row 1: Top Banner Headline */}
        <div className="pb-10 border-b border-[#1E293B] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-white text-[24px] sm:text-[32px] font-extrabold tracking-tight">
              Learn how to grow audience fast with us
            </h3>
            <p className="text-[#94A3B8] text-[15px] mt-2 font-medium">
              Official Meta Cloud API partner automating conversations across WhatsApp, Facebook, and Instagram.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://chat.getaseed.com/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-lime text-[14px] font-bold shadow-lg"
            >
              <span>Get Started Free</span>
              <span className="arrow-circle-dark">↗</span>
            </a>
          </div>
        </div>

        {/* Row 2: 4-Column Directory Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-5">
            <GetAseedLogo variant="white" size="large" />
            <p className="text-[#94A3B8] text-[14px] leading-relaxed max-w-sm font-medium">
              The calm, unified command center for conversational commerce. Turn WhatsApp, Facebook Messenger, and Instagram interactions into automated sales pipelines.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-[13px] text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#1877F2] flex-shrink-0 mt-0.5" />
                <span className="font-medium">A-306, Bestech Business Towers, Mohali, Punjab, India 🇮🇳</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#25D366] flex-shrink-0" />
                <a href="mailto:online@getaseed.com" className="hover:text-white font-medium transition-colors">
                  online@getaseed.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="caption-eyebrow text-white text-[12px]">Company</h4>
            <ul className="space-y-3 text-[14px] text-[#94A3B8] font-medium">
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
            <ul className="space-y-3 text-[14px] text-[#94A3B8] font-medium">
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
            <ul className="space-y-3 text-[14px] text-[#94A3B8] font-medium">
              <li>
                <Link href="/whatsapp" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <WhatsAppBrandIcon size={18} />
                  <span>WhatsApp Chatbot</span>
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <InstagramBrandIcon size={18} />
                  <span>Instagram Chatbot</span>
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="hover:text-white transition-colors flex items-center gap-2.5">
                  <FacebookBrandIcon size={18} />
                  <span>Facebook Chatbot</span>
                </Link>
              </li>
            </ul>

            {/* Official Meta Badges */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-[12px] bg-[#101B33] border border-[#1E293B]">
                <MetaBrandIcon size={20} />
                <div>
                  <div className="text-[12px] font-bold text-white">Meta Business Partner</div>
                  <div className="text-[10px] text-[#94A3B8] font-mono">Official Cloud Integration</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3 py-2 rounded-[12px] bg-[#101B33] border border-[#1E293B]">
                <WhatsAppBrandIcon size={20} />
                <div>
                  <div className="text-[12px] font-bold text-white">WhatsApp Business API</div>
                  <div className="text-[10px] text-[#94A3B8] font-mono">Verified Direct Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Legal Copyright Bar */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#94A3B8] font-medium">
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
