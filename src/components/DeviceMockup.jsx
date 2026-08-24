'use client';
import { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  Lock
} from 'lucide-react';

export default function DeviceMockup() {
  const [phone, setPhone] = useState('+1 (555) 019-2834');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E7E9F0] rounded-[20px] shadow-[0_12px_32px_-16px_rgba(11,18,32,0.12)] p-4 sm:p-6 max-w-lg mx-auto overflow-hidden">
      {/* Browser / Device Chrome Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E7E9F0] mb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E9F0]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E9F0]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E9F0]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F6F7FB] rounded-full text-[11px] font-mono text-[#8891A3]">
          <Lock size={10} className="text-[#25D366]" />
          <span>getaseed.com/widget-preview</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Simulated Live Lead Capture Popup Widget */}
      <div className="bg-[#F6F7FB] border border-[#E7E9F0] rounded-[16px] p-5 space-y-4">
        {/* Widget Brand Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0B1220] flex items-center justify-center text-white font-bold text-[12px]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] mr-0.5" />
            </div>
            <div>
              <div className="text-[13px] font-semibold text-[#0B1220]">
                VIP Discount & Catalog Bot
              </div>
              <div className="text-[11px] text-[#25D366] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                <span>Online · 3s response time</span>
              </div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-[10px] font-mono font-medium">
            WhatsApp 1-Click
          </span>
        </div>

        {/* Bubble Conversation */}
        <div className="space-y-2.5 text-[13px]">
          <div className="bg-[#FFFFFF] p-3 rounded-[12px] rounded-tl-none border border-[#E7E9F0] text-[#0B1220] space-y-1">
            <p className="font-medium text-[#0B1220]">
              Unlock 20% OFF your first order! 🎉
            </p>
            <p className="text-[12px] text-[#4A5468]">
              Where should we send your instant coupon code and product catalog?
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-3 rounded-[12px] text-[#0B1220] text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-center gap-1.5 text-[#25D366] font-semibold text-[13px]">
                <CheckCircle2 size={16} />
                <span>Coupon Dispatched to WhatsApp!</span>
              </div>
              <p className="text-[11px] text-[#4A5468] mt-1">
                Lead synced to CRM & Google Sheets in 0.4s
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-clean text-[13px] py-2.5 pl-3 pr-20"
                  placeholder="Enter phone or WhatsApp number"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#0B1220] text-white rounded-[8px] text-[12px] font-medium hover:bg-[#25D366] transition-colors flex items-center gap-1"
                >
                  <span>Send</span>
                  <Send size={11} />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#8891A3] px-1 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-[#25D366]" />
                  <span>Meta Official Opt-in</span>
                </span>
                <span>80% Conversion Rate</span>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Realtime Lead Telemetry Bar */}
      <div className="mt-4 pt-3 border-t border-[#E7E9F0] flex items-center justify-between text-[11px] font-mono text-[#8891A3]">
        <span className="flex items-center gap-1">
          <Zap size={12} className="text-[#1877F2]" />
          <span>Webhook: Active</span>
        </span>
        <span className="text-[#0B1220] font-semibold">
          Auto-synced to Shopify
        </span>
      </div>
    </div>
  );
}
