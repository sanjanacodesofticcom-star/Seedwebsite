'use client';
import { Star } from 'lucide-react';

const brands = [
  { name: 'Shopify Plus', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'Retail' },
  { name: 'Meta Cloud', category: 'Infrastructure' },
  { name: 'Kavita Jewellers', category: 'Luxury Retail' },
  { name: 'UrbanFit India', category: 'D2C Brand' },
  { name: 'Apex Health', category: 'Healthcare' },
  { name: 'Zenith Logistics', category: 'Supply Chain' },
  { name: 'Nova EdTech', category: 'Education' }
];

export default function SocialProofMarquee() {
  return (
    <section className="py-16 bg-[#F6F7FB] border-y border-[#E7E9F0] overflow-hidden">
      <div className="container-xl mb-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-[12px] font-mono font-medium uppercase tracking-wider text-[#8891A3] mb-2">
          <div className="flex text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#F59E0B" />
            ))}
          </div>
          <span>Founders & Marketers Love Us</span>
        </div>
        <h3 
          className="text-[24px] sm:text-[28px] font-semibold text-[#0B1220] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          200+ brands scale conversations with GetAseed
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-8 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-[#E7E9F0] rounded-[14px] shadow-sm flex-shrink-0 transition-transform hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-[#0B1220] text-white flex items-center justify-center font-bold text-[12px]">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#0B1220]">
                  {brand.name}
                </div>
                <div className="text-[10px] font-mono text-[#8891A3] uppercase tracking-wider">
                  {brand.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
