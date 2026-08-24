'use client';
import { useState } from 'react';
import { countryRatesData } from '@/data/pricing';
import { X, Globe, ShieldCheck, HelpCircle } from 'lucide-react';

export default function CountryPricingModal({ isOpen, onClose }) {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = countryRatesData.filter(
    (c) =>
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-[#E7E9F0] rounded-[20px] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E7E9F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
              <Globe size={20} />
            </div>
            <div>
              <h3 
                className="text-[20px] font-semibold text-[#0B1220]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Country-Wise WhatsApp Rates
              </h3>
              <p className="text-[13px] text-[#4A5468]">
                Direct Meta Cloud API conversation rates. 0% markup by GetAseed.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F6F7FB] text-[#4A5468] hover:bg-[#E7E9F0] flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Notice Bar */}
        <div className="px-6 py-3 bg-[#F6F7FB] border-b border-[#E7E9F0] flex items-center justify-between gap-4 text-[12px] text-[#4A5468]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#25D366]" />
            <span>First 1,000 service conversations are 100% free every month.</span>
          </div>
          <input
            type="text"
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-clean text-[12px] py-1 px-3 w-44"
          />
        </div>

        {/* Table Content */}
        <div className="overflow-y-auto p-6">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="border-b border-[#E7E9F0] text-[11px] font-mono uppercase text-[#8891A3]">
                <th className="pb-3 font-semibold">Country</th>
                <th className="pb-3 font-semibold">Marketing Conv.</th>
                <th className="pb-3 font-semibold">Utility Conv.</th>
                <th className="pb-3 font-semibold">Authentication</th>
                <th className="pb-3 font-semibold text-right">Service Conv.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E9F0]">
              {filtered.map((item) => (
                <tr key={item.code} className="hover:bg-[#F6F7FB] transition-colors">
                  <td className="py-3.5 font-medium text-[#0B1220] flex items-center gap-2">
                    <span className="font-mono text-[11px] text-[#8891A3] px-1.5 py-0.5 bg-[#F6F7FB] rounded">
                      {item.code}
                    </span>
                    <span>{item.country}</span>
                  </td>
                  <td className="py-3.5 text-[#0B1220] font-mono text-[13px]">{item.marketing}</td>
                  <td className="py-3.5 text-[#0B1220] font-mono text-[13px]">{item.utility}</td>
                  <td className="py-3.5 text-[#0B1220] font-mono text-[13px]">{item.authentication}</td>
                  <td className="py-3.5 text-right font-medium text-[#25D366] text-[13px]">{item.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E7E9F0] bg-[#F6F7FB] flex items-center justify-between text-[12px] text-[#8891A3]">
          <span>Rates are set directly by Meta and billed transparently.</span>
          <button
            type="button"
            onClick={onClose}
            className="btn-pill btn-primary text-[12px] py-1.5 px-4"
          >
            Close Table
          </button>
        </div>
      </div>
    </div>
  );
}
