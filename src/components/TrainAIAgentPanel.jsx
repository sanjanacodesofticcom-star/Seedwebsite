'use client';
import { useState, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  CheckCheck, 
  UserCheck, 
  Ticket, 
  FileText, 
  ShieldAlert,
  Clock,
  ArrowRight
} from 'lucide-react';

const messageCards = [
  {
    id: 1,
    type: 'Support Bot AI Reply',
    tagColor: '#25D366',
    sender: 'GetAseed Support Bot',
    recipient: 'Ameesh K.',
    time: 'Just now',
    text: 'Hi Ameesh! Your order #5821 is scheduled for expedited dispatch. I have notified the logistics team. You will receive a tracking link via WhatsApp in under 2 hours! 🚀',
    meta: 'Auto-resolved · FAQ & SOP Match',
    avatarBg: '#25D366'
  },
  {
    id: 2,
    type: 'AI Private Note',
    tagColor: '#962FBF',
    sender: 'AI Copilot (Internal)',
    recipient: '@Bharat Kumar Ramesh',
    time: '2m ago',
    text: "Customer's payment card encountered a temporary 3DS block. Temporary sandbox access requested. Can you verify risk score and approve?",
    meta: 'Internal Note · Visible to Team Only',
    avatarBg: '#962FBF'
  },
  {
    id: 3,
    type: 'CRM Ticket Raised',
    tagColor: '#1877F2',
    sender: 'Automated CRM Bridge',
    recipient: '@Priya Singh',
    time: '4m ago',
    text: 'Ticket #TK-9042 raised for refund status check. Customer flagged urgent SLA requirement. Assigned to Tier-2 Finance.',
    meta: 'Priority: High · SLA: 4 Hours',
    avatarBg: '#1877F2'
  },
  {
    id: 4,
    type: 'Agent Human Handoff',
    tagColor: '#F0554D',
    sender: 'Smart Router',
    recipient: '@Compliance / Legal',
    time: '6m ago',
    text: 'Complex regulatory inquiry detected in WhatsApp chat #8832. Live conversation paused and transferred seamlessly to Compliance.',
    meta: 'Warm Handoff · Full Context Attached',
    avatarBg: '#F0554D'
  },
  {
    id: 5,
    type: 'Sales Assistant Auto-Reply',
    tagColor: '#25D366',
    sender: 'Sales Bot',
    recipient: 'Komal Joshi',
    time: '8m ago',
    text: 'Enterprise plans include unlimited agents, custom SLA, and direct Meta Cloud API setup. I have dispatched our 2026 specs brochure to your inbox!',
    meta: 'Lead Qualified · Assigned to @Sales',
    avatarBg: '#25D366'
  },
  {
    id: 6,
    type: 'AI Live Summary',
    tagColor: '#1877F2',
    sender: 'AI Briefing Engine',
    recipient: '@Agent On-Duty',
    time: '10m ago',
    text: 'Conversation Brief: User requested WooCommerce multi-store inventory sync. Budget confirmed. Ready for checkout handoff.',
    meta: 'Instant AI Context Handoff',
    avatarBg: '#1877F2'
  }
];

export default function TrainAIAgentPanel() {
  const [activeMessage, setActiveMessage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messageCards.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section className="bg-[#0B1220] text-white section-major overflow-hidden border-y border-[#1E293B]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B33] border border-[#1E293B]">
              <Sparkles size={14} className="text-[#1877F2]" />
              <span className="caption-eyebrow text-[#8891A3] text-[12px]">AI-Powered Agent</span>
            </div>

            <div className="space-y-4">
              <h2 
                className="display-l text-white tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Train AI Agent on Your Data
              </h2>
              <p className="body-l text-[#8891A3] leading-relaxed">
                Train the AI Agent on your FAQs, SOPs, and product docs to auto-respond to repetitive queries, raise tickets and tasks, and seamlessly involve human agents on WhatsApp.
              </p>
            </div>

            {/* 3 Horizontal Mono Stats Row */}
            <div className="pt-2 pb-2 grid grid-cols-3 gap-4 border-y border-[#1E293B]/80 py-6">
              <div>
                <div className="stat-mono text-[28px] sm:text-[34px] font-semibold text-white tracking-tight">
                  9X
                </div>
                <div className="caption-eyebrow text-[#8891A3] text-[11px] mt-1">
                  More Leads
                </div>
              </div>
              <div>
                <div className="stat-mono text-[28px] sm:text-[34px] font-semibold text-[#25D366] tracking-tight">
                  &lt; 3s
                </div>
                <div className="caption-eyebrow text-[#8891A3] text-[11px] mt-1">
                  Faster Replies
                </div>
              </div>
              <div>
                <div className="stat-mono text-[28px] sm:text-[34px] font-semibold text-[#1877F2] tracking-tight">
                  85%
                </div>
                <div className="caption-eyebrow text-[#8891A3] text-[11px] mt-1">
                  Automation Rate
                </div>
              </div>
            </div>

            {/* Channel Capabilities List */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#101B33] text-[13px] text-[#8891A3] border border-[#1E293B]">
                📄 Custom PDF & SOP Training
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#101B33] text-[13px] text-[#8891A3] border border-[#1E293B]">
                ⚡ Real-time WhatsApp Escalation
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#101B33] text-[13px] text-[#8891A3] border border-[#1E293B]">
                🛡️ Zero Data Leakage Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Live Simulated Chat Log Panel */}
          <div className="lg:col-span-6">
            <div 
              className="bg-[#101B33] border border-[#1E293B] rounded-[20px] p-6 shadow-2xl relative"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E293B] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[13px] font-mono font-medium text-white tracking-wide">
                    INBOX_AUTOMATION_STREAM
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="caption-eyebrow text-[11px] text-[#8891A3]">
                    {activeMessage + 1} / {messageCards.length}
                  </span>
                </div>
              </div>

              {/* Message Cards Stream */}
              <div className="space-y-3">
                {messageCards.map((msg, index) => {
                  const isActive = index === activeMessage;
                  return (
                    <div
                      key={msg.id}
                      onClick={() => {
                        setActiveMessage(index);
                        setAutoPlay(false);
                      }}
                      className={`p-4 rounded-[14px] border transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-[#0B1220] border-[#2A3FE0] shadow-lg scale-[1.02]' 
                          : 'bg-[#0B1220]/40 border-[#1E293B]/60 opacity-60 hover:opacity-100 hover:border-[#1E293B]'
                      }`}
                    >
                      {/* Top Row */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span 
                            className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full"
                            style={{ 
                              backgroundColor: `${msg.tagColor}20`,
                              color: msg.tagColor
                            }}
                          >
                            {msg.type}
                          </span>
                          <span className="text-[13px] font-medium text-white">
                            {msg.sender}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#8891A3] font-mono">
                          <Clock size={11} />
                          <span>{msg.time}</span>
                        </div>
                      </div>

                      {/* Message Content */}
                      <p className="text-[13.5px] text-[#E7E9F0] leading-relaxed">
                        {msg.text}
                      </p>

                      {/* Footer Info & Read Receipt */}
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#1E293B]/60 text-[11px] text-[#8891A3]">
                        <span className="font-mono text-[#8891A3]">
                          {msg.meta}
                        </span>
                        <div className="flex items-center gap-1 text-[#25D366]">
                          <CheckCheck size={14} />
                          <span className="text-[10px] font-mono">Delivered</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Switcher */}
              <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-[12px] text-[#8891A3]">
                  Click any card to inspect automation trigger
                </span>
                <a 
                  href="https://chat.getaseed.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-medium text-[#1877F2] hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
                >
                  <span>Deploy in Dashboard</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
