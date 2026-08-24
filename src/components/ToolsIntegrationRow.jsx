'use client';
import { ArrowRight, Webhook } from 'lucide-react';
import { 
  ShopifyBrandIcon, 
  WooCommerceBrandIcon, 
  GoogleSheetsBrandIcon, 
  MetaBrandIcon, 
  StripeBrandIcon 
} from './BrandIcons';

const tools = [
  {
    name: 'Shopify',
    desc: 'Sync catalog & automate cart recovery',
    icon: ShopifyBrandIcon,
    badge: 'E-commerce'
  },
  {
    name: 'WooCommerce',
    desc: 'Boost checkouts with order updates',
    icon: WooCommerceBrandIcon,
    badge: 'WordPress'
  },
  {
    name: 'Google Sheets',
    desc: 'Import contacts & sync live leads',
    icon: GoogleSheetsBrandIcon,
    badge: 'Real-time Sync'
  },
  {
    name: 'Meta Cloud API',
    desc: 'Direct verified Meta business connection',
    icon: MetaBrandIcon,
    badge: 'Zero Markup'
  },
  {
    name: 'Stripe Payments',
    desc: '1-click checkout inside chat threads',
    icon: StripeBrandIcon,
    badge: 'Instant Pay'
  }
];

export default function ToolsIntegrationRow() {
  return (
    <section className="section-compact bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8FAFC] text-[#475569] font-mono text-[12px] font-bold uppercase tracking-wider mb-3 border border-[#E2E8F0]">
            <Webhook size={13} className="text-[#1877F2]" />
            <span>Seamless Ecosystem</span>
          </div>
          <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#0B1220] tracking-tight">
            Connect Your Tools Easily
          </h2>
          <p className="text-[16px] text-[#475569] mt-2 font-medium">
            Integrate your favorite e-commerce and CRM platforms in minutes.
          </p>
        </div>

        {/* 5-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="bg-white border border-[#E2E8F0] rounded-[22px] p-6 flex flex-col justify-between group hover:border-[#1877F2] hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="shrink-0 transition-transform group-hover:scale-110">
                      <Icon size={40} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#0B1220] group-hover:text-[#1877F2] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-[13px] text-[#475569] mt-1.5 leading-relaxed font-medium">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center text-[12px] font-mono font-bold text-[#64748B] group-hover:text-[#0B1220]">
                  <span>1-Click Connect</span>
                  <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
