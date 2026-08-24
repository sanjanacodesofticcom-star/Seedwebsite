'use client';
import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon } from '@/components/BrandIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been received. Our team will get back to you shortly.'
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Unable to submit your message. Please try again or email online@getaseed.com.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'A network error occurred. Please try again or reach out via WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Brand Hero */}
      <section className="brand-hero-bg pt-12 pb-20 sm:pb-28 text-[#0B1220] relative">
        <div className="container-xl max-w-4xl mx-auto space-y-6 text-center relative z-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#0B1220]">
              <Mail size={14} className="text-[#1877F2]" />
              <span className="text-[12.5px] font-mono font-bold tracking-wide uppercase text-[#0B1220]">
                Get in Touch
              </span>
            </div>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-extrabold text-[#0B1220] tracking-tight leading-[1.08]">
            We're here to help you scale
          </h1>

          <p className="text-[17px] sm:text-[19px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
            Have questions about automation, lead generation, or custom Meta integrations? Our team is ready to help you grow.
          </p>
        </div>
      </section>

      {/* 2. Contact Content & Form */}
      <section className="section-major bg-white border-b border-[#E2E8F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Info & Booking Link Card */}
            <div className="lg:col-span-5 space-y-8">
              {/* Booking Card */}
              <div className="p-7 rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-5 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-[14px] bg-[#0B1220] text-white flex items-center justify-center shadow-md">
                    <Calendar size={22} className="text-[#ABEF06]" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#0B1220]">
                      Schedule a Live Strategy Call
                    </h3>
                    <p className="text-[13.5px] text-[#475569] font-medium">
                      15-minute 1-on-1 walkthrough with an automation architect.
                    </p>
                  </div>
                </div>

                <a
                  href="https://cal.com/codesoftic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime w-full justify-center text-[14px] shadow-sm font-bold"
                >
                  <span>Book Meeting on Cal.com</span>
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="shrink-0 mt-0.5">
                    <WhatsAppBrandIcon size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1220] text-[15px]">WhatsApp Support</div>
                    <a 
                      href="https://wa.me/919999061692" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#25D366] font-mono font-bold hover:underline text-[14px]"
                    >
                      +91 99990 61692 (Fast 24/7 Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1220] text-[15px]">Official Email</div>
                    <a 
                      href="mailto:online@getaseed.com" 
                      className="text-[#1877F2] font-mono font-bold hover:underline text-[14px]"
                    >
                      online@getaseed.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="w-9 h-9 rounded-full bg-[#962FBF]/10 text-[#962FBF] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1220] text-[15px]">Office Address</div>
                    <div className="text-[13.5px] text-[#475569] font-medium">
                      A-306, Bestech Business Towers, Mohali, Punjab, India 🇮🇳
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Functional Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E2E8F0] rounded-[26px] p-8 sm:p-10 shadow-md">
                <div className="mb-6">
                  <h2 className="text-[24px] font-bold text-[#0B1220]">
                    Send Us a Message
                  </h2>
                  <p className="text-[14.5px] text-[#475569] mt-1 font-medium">
                    Fill out the details below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {status.type === 'success' && (
                  <div className="mb-6 p-4 rounded-[14px] bg-[#25D366]/10 border border-[#25D366]/30 text-[#0B1220] flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] font-semibold">{status.message}</span>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 rounded-[14px] bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] font-semibold">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group mb-0">
                      <label className="form-label font-bold text-[#0B1220]">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="input-clean font-medium"
                      />
                    </div>

                    <div className="form-group mb-0">
                      <label className="form-label font-bold text-[#0B1220]">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="input-clean font-medium"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label font-bold text-[#0B1220]">Company / Brand Name (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="input-clean font-medium"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label font-bold text-[#0B1220]">Your Message or Channels of Interest *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals, estimated message volume, or custom integration needs..."
                      className="input-clean form-textarea font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-lime w-full justify-center text-[15px] py-3.5 mt-2 font-bold shadow-md"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[12px] text-[#64748B] font-mono font-semibold">
                      🔒 Your data is protected by end-to-end encryption.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
