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
      {/* Header */}
      <section className="section-major bg-[#FFFFFF] border-b border-[#E7E9F0]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Info & Booking Link Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 pill-eyebrow">
                  <Mail size={13} className="text-[#1877F2]" />
                  <span>Get in Touch</span>
                </div>

                <h1 
                  className="display-l text-[#0B1220] tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Contact Us
                </h1>

                <p className="body-l text-[#4A5468] leading-relaxed">
                  Have questions about automation, lead generation, or marketing integrations? Our team is ready to help you grow — fast.
                </p>
              </div>

              {/* Booking Card */}
              <div className="p-6 rounded-[16px] bg-[#F6F7FB] border border-[#E7E9F0] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-[#0B1220] text-white flex items-center justify-center">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#0B1220]">
                      Schedule a Live Strategy Call
                    </h3>
                    <p className="text-[13px] text-[#4A5468]">
                      15-minute 1-on-1 walkthrough with an automation architect.
                    </p>
                  </div>
                </div>

                <a
                  href="https://cal.com/codesoftic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-primary w-full justify-center text-[14px]"
                >
                  <span>Book Meeting on Cal.com</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-[14.5px] text-[#4A5468]">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1220]">WhatsApp Support</div>
                    <a 
                      href="https://wa.me/919999061692" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#25D366] font-mono hover:underline text-[13.5px]"
                    >
                      +91 99990 61692 (Fast 24/7 Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[14.5px] text-[#4A5468]">
                  <div className="w-8 h-8 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1220]">Official Email</div>
                    <a 
                      href="mailto:online@getaseed.com" 
                      className="text-[#1877F2] font-mono hover:underline text-[13.5px]"
                    >
                      online@getaseed.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[14.5px] text-[#4A5468]">
                  <div className="w-8 h-8 rounded-full bg-[#962FBF]/10 text-[#962FBF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B1220]">Office Address</div>
                    <div className="text-[13.5px] text-[#4A5468]">
                      A-306, Bestech Business Towers, Mohali, Punjab, India 🇮🇳
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Functional Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E7E9F0] rounded-[20px] p-8 sm:p-10 shadow-[0_12px_32px_-16px_rgba(11,18,32,0.1)]">
                <div className="mb-6">
                  <h2 
                    className="text-[22px] font-semibold text-[#0B1220]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Send Us a Message
                  </h2>
                  <p className="text-[14px] text-[#4A5468] mt-1">
                    Fill out the details below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {status.type === 'success' && (
                  <div className="mb-6 p-4 rounded-[12px] bg-[#25D366]/10 border border-[#25D366]/30 text-[#0B1220] flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px]">{status.message}</span>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 rounded-[12px] bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[14px]">{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group mb-0">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="input-clean"
                      />
                    </div>

                    <div className="form-group mb-0">
                      <label className="form-label">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="input-clean"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company / Brand Name (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="input-clean"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message or Channels of Interest *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals, estimated message volume, or custom integration needs..."
                      className="input-clean form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-pill btn-primary w-full justify-center text-[15px] py-3.5 mt-2"
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
                    <span className="text-[12px] text-[#8891A3] font-mono">
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
