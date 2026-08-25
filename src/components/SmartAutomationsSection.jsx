import { 
  Bot, 
  Megaphone, 
  Layers, 
  Users, 
  ShoppingCart, 
  CalendarCheck, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';

const automationFeatures = [
  {
    title: 'Chatbots',
    desc: 'Build intelligent chatbots to automate conversations and provide instant responses to customers.',
    icon: (
      <div className="w-11 h-11 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center shadow-sm">
        <Bot size={22} className="text-[#ABEF06]" />
      </div>
    )
  },
  {
    title: 'Broadcasting',
    desc: 'Send bulk messages, updates, and promotions to your audience with powerful broadcasting tools.',
    icon: (
      <div className="w-11 h-11 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center shadow-sm">
        <Megaphone size={22} className="text-[#1877F2]" />
      </div>
    )
  },
  {
    title: 'Omnichannel Inbox',
    desc: 'Manage all customer conversations from multiple platforms in one unified inbox.',
    icon: (
      <div className="w-11 h-11 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center shadow-sm">
        <Layers size={22} className="text-[#962FBF]" />
      </div>
    )
  },
  {
    title: 'Unlimited Users',
    desc: 'Add unlimited team members without extra cost.',
    icon: (
      <div className="w-11 h-11 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center shadow-sm">
        <Users size={22} className="text-[#25D366]" />
      </div>
    )
  },
  {
    title: 'Abandoned Cart Recovery',
    desc: 'Automatically remind customers to complete purchases.',
    icon: (
      <div className="w-11 h-11 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center shadow-sm">
        <ShoppingCart size={22} className="text-[#ABEF06]" />
      </div>
    )
  },
  {
    title: 'Appointments',
    desc: 'Easily book calls or appointments with customers in just a few clicks.',
    icon: (
      <div className="w-11 h-11 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center shadow-sm">
        <CalendarCheck size={22} className="text-[#1877F2]" />
      </div>
    )
  }
];

export default function SmartAutomationsSection() {
  return (
    <section className="section-major bg-white border-b border-[#E2E8F0] relative">
      <div className="container-xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#0B1220] tracking-tight leading-tight">
            Smart Automations for Growing Businesses
          </h2>
          <p className="text-[16.5px] sm:text-[18.5px] text-[#475569] mt-3 font-medium">
            Everything you need to automate conversations and recover revenue.
          </p>
        </div>

        {/* 6-Cell Grid Container with Clean Dividing Lines matching reference */}
        <div className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            
            {/* Top Row: Items 0, 1, 2 */}
            {automationFeatures.slice(0, 3).map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 flex flex-col justify-start space-y-4 hover:bg-[#F8FAFC]/80 transition-colors group"
              >
                <div className="shrink-0 transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0B1220] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Dividing border between Row 1 and Row 2 */}
          <div className="hidden lg:block h-px w-full bg-[#E2E8F0]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
            
            {/* Bottom Row: Items 3, 4, 5 */}
            {automationFeatures.slice(3, 6).map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 flex flex-col justify-start space-y-4 hover:bg-[#F8FAFC]/80 transition-colors group"
              >
                <div className="shrink-0 transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0B1220] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
