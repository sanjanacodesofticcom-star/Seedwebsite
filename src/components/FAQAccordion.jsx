'use client';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items = [], title = "Got Questions? We've Got Answers", subtitle = "Everything you need to know about our platform" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <section id="faq" className="section-compact bg-[#FFFFFF]">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 pill-eyebrow mb-4">
              <HelpCircle size={14} className="text-[#1877F2]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 
              className="display-l text-[#0B1220] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="body-l text-[#4A5468] mt-3">
                {subtitle}
              </p>
            )}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id || index}
                  className={`border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-[#2A3FE0] bg-[#FFFFFF] shadow-sm' 
                      : 'border-[#E7E9F0] bg-[#FFFFFF] hover:border-[#8891A3]'
                  }`}
                  style={{ borderRadius: 'var(--radius-card)' }}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A3FE0]"
                    aria-expanded={isOpen}
                  >
                    <span 
                      className="text-[17px] font-semibold text-[#0B1220]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.question}
                    </span>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0B1220] text-white' : 'bg-[#F6F7FB] text-[#4A5468]'
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-[#E7E9F0]/60 mt-1 animate-in fade-in duration-200">
                      <p className="text-[15px] text-[#4A5468] leading-relaxed pt-3">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
