'use client';
import { Star } from 'lucide-react';
import { 
  WhatsAppBrandIcon, 
  InstagramBrandIcon, 
  FacebookBrandIcon, 
  MetaBrandIcon, 
  ShopifyBrandIcon, 
  WooCommerceBrandIcon, 
  GoogleSheetsBrandIcon, 
  StripeBrandIcon 
} from './BrandIcons';

const partners = [
  { name: 'WhatsApp Business', category: 'Direct Cloud API', icon: WhatsAppBrandIcon },
  { name: 'Instagram Graph', category: 'DM Automation', icon: InstagramBrandIcon },
  { name: 'Facebook Messenger', category: 'Commerce Flows', icon: FacebookBrandIcon },
  { name: 'Meta Cloud Partner', category: 'Official Tier', icon: MetaBrandIcon },
  { name: 'Shopify Plus', category: 'E-commerce Sync', icon: ShopifyBrandIcon },
  { name: 'WooCommerce', category: 'Order Engine', icon: WooCommerceBrandIcon },
  { name: 'Google Sheets', category: 'Real-time Sync', icon: GoogleSheetsBrandIcon },
  { name: 'Stripe Payments', category: '1-Click Checkout', icon: StripeBrandIcon }
];

export default function SocialProofMarquee() {
  return (
    <section className="py-14 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <div className="container-xl mb-7 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-2 border border-[#E2E8F0] shadow-sm">
          <div className="flex text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#F59E0B" />
            ))}
          </div>
          <span>TRUSTED BY 200+ FAST-GROWING BRANDS</span>
        </div>
        <h3 className="text-[24px] sm:text-[30px] font-extrabold text-[#0B1220] tracking-tight">
          Automating Conversations with Global Scale
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-6 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-3.5 px-6 py-3.5 bg-white border border-[#E2E8F0] rounded-[18px] shadow-sm flex-shrink-0 transition-transform hover:scale-105"
              >
                <div className="shrink-0">
                  <Icon size={30} />
                </div>
                <div>
                  <div className="text-[14.5px] font-bold text-[#0B1220]">
                    {item.name}
                  </div>
                  <div className="text-[10.5px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
