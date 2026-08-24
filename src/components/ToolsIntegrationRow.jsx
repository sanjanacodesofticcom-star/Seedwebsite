'use client';
import { ShoppingBag, Store, FileSpreadsheet, Database, Webhook, ArrowRight } from 'lucide-react';

const tools = [
  {
    name: 'Shopify',
    desc: 'Sync your store & automate engagement',
    color: '#95BF47',
    icon: ShoppingBag,
    badge: 'E-commerce'
  },
  {
    name: 'WooCommerce',
    desc: 'Boost conversions with automation',
    color: '#96588A',
    icon: Store,
    badge: 'WordPress'
  },
  {
    name: 'Google Sheets',
    desc: 'Import contacts & manage data',
    color: '#0F9D58',
    icon: FileSpreadsheet,
    badge: 'Real-time Sync'
  },
  {
    name: 'CRM Systems',
    desc: 'Connect CRM systems via API',
    color: '#1877F2',
    icon: Database,
    badge: 'HubSpot / Salesforce'
  },
  {
    name: 'Custom Webhooks',
    desc: 'Automate workflows instantly',
    color: '#25D366',
    icon: Webhook,
    badge: 'REST / GraphQL'
  }
];

export default function ToolsIntegrationRow() {
  return (
    <section className="section-compact bg-[#FFFFFF] border-b border-[#E7E9F0]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 pill-eyebrow mb-3">
            <Webhook size={13} className="text-[#1877F2]" />
            <span>Seamless Ecosystem</span>
          </div>
          <h2 
            className="display-l text-[#0B1220] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Connect Your Tools Easily
          </h2>
          <p className="body-l text-[#4A5468] mt-2">
            Integrate your favorite platforms and automate your workflow in minutes.
          </p>
        </div>

        {/* 5-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="card-clean p-6 flex flex-col justify-between group hover:border-[#2A3FE0] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-[12px] bg-[#F6F7FB] group-hover:bg-[#FFFFFF] flex items-center justify-center transition-all duration-200 shadow-sm border border-[#E7E9F0]"
                      style={{ color: '#4A5468' }}
                    >
                      <span className="transition-transform group-hover:scale-110 group-hover:text-[#0B1220]">
                        <Icon size={24} style={{ color: tool.color }} />
                      </span>
                    </div>
                    <span className="caption-eyebrow text-[10px] text-[#8891A3]">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 
                    className="text-[17px] font-semibold text-[#0B1220] group-hover:text-[#2A3FE0] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {tool.name}
                  </h3>
                  <p className="text-[13px] text-[#4A5468] mt-1.5 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E7E9F0] flex items-center text-[12px] font-mono text-[#8891A3] group-hover:text-[#0B1220]">
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
