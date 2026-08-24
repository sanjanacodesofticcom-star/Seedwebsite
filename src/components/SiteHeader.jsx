'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GetAseedLogo from './GetAseedLogo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  Send,
  Share2,
  ExternalLink
} from 'lucide-react';

const channels = [
  {
    name: 'WhatsApp',
    href: '/whatsapp',
    badge: 'Official Cloud API',
    description: 'Transform communication with verified profiles, catalogs, and smart broadcasts.',
    chipClass: 'channel-chip-wa',
    color: '#25D366',
    icon: MessageSquare
  },
  {
    name: 'Facebook',
    href: '/facebook',
    badge: 'Meta Partner',
    description: 'Messenger automation, Click-to-Messenger ad funnels, and comment growth tools.',
    chipClass: 'channel-chip-fb',
    color: '#1877F2',
    icon: Share2
  },
  {
    name: 'Instagram',
    href: '/instagram',
    badge: 'Graph API',
    description: 'Answer FAQs, auto-reply to story replies, and convert post comments to sales.',
    chipClass: 'channel-chip-ig',
    color: '#962FBF',
    icon: Send
  }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setChannelsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setChannelsOpen(false);
  }, [pathname]);

  const isChannelActive = ['/whatsapp', '/facebook', '/instagram'].includes(pathname);

  return (
    <>
      <header 
        className="sticky top-0 z-50 transition-all duration-200"
        style={{
          height: 'var(--header-height)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'var(--paper)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid var(--line)',
          boxShadow: isScrolled ? '0 4px 20px -4px rgba(11, 18, 32, 0.06)' : 'none'
        }}
      >
        <div className="container-xl h-full flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <GetAseedLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {/* Home Link */}
            <Link 
              href="/" 
              className={`text-[15px] font-medium transition-colors py-1 relative ${
                pathname === '/' ? 'text-[#0B1220] font-semibold' : 'text-[#4A5468] hover:text-[#0B1220]'
              }`}
            >
              Home
              {pathname === '/' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>

            {/* Channels Mega Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setChannelsOpen(!channelsOpen)}
                onMouseEnter={() => setChannelsOpen(true)}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors py-1 relative cursor-pointer ${
                  isChannelActive ? 'text-[#0B1220] font-semibold' : 'text-[#4A5468] hover:text-[#0B1220]'
                }`}
                aria-expanded={channelsOpen}
                aria-haspopup="true"
              >
                <span>Channels</span>
                <ChevronDown 
                  size={15} 
                  className={`transition-transform duration-200 ${channelsOpen ? 'rotate-180 text-[#0B1220]' : 'text-[#8891A3]'}`} 
                />
                {isChannelActive && (
                  <span 
                    className="absolute bottom-[-10px] left-0 right-0 h-[2px] rounded-full" 
                    style={{ background: 'var(--thread-gradient)' }} 
                  />
                )}
              </button>

              {/* Channels Dropdown Lite Panel */}
              {channelsOpen && (
                <div 
                  onMouseLeave={() => setChannelsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] bg-white rounded-[16px] border border-[#E7E9F0] p-2.5 shadow-[0_20px_40px_-12px_rgba(11,18,32,0.14)] animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  style={{ borderRadius: 'var(--radius-card)' }}
                >
                  <div className="px-3 py-2 border-b border-[#E7E9F0] mb-1">
                    <span className="caption-eyebrow text-[#8891A3] text-[11px]">Omnichannel Platforms</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {channels.map((ch) => {
                      const Icon = ch.icon;
                      const active = pathname === ch.href;
                      return (
                        <Link
                          key={ch.name}
                          href={ch.href}
                          onClick={() => setChannelsOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-[12px] transition-all group ${
                            active ? 'bg-[#F6F7FB]' : 'hover:bg-[#F6F7FB]'
                          }`}
                        >
                          <div 
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                            style={{ 
                              backgroundColor: `${ch.color}15`,
                              color: ch.color 
                            }}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[14px] font-semibold text-[#0B1220] group-hover:text-[#2A3FE0] transition-colors">
                                {ch.name}
                              </span>
                              <span 
                                className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                              >
                                {ch.badge}
                              </span>
                            </div>
                            <p className="text-[12px] text-[#4A5468] line-clamp-2 mt-0.5 leading-relaxed">
                              {ch.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link 
              href="/pricing" 
              className={`text-[15px] font-medium transition-colors py-1 relative ${
                pathname === '/pricing' ? 'text-[#0B1220] font-semibold' : 'text-[#4A5468] hover:text-[#0B1220]'
              }`}
            >
              Pricing
              {pathname === '/pricing' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>

            {/* About Us */}
            <Link 
              href="/about-us" 
              className={`text-[15px] font-medium transition-colors py-1 relative ${
                pathname === '/about-us' ? 'text-[#0B1220] font-semibold' : 'text-[#4A5468] hover:text-[#0B1220]'
              }`}
            >
              About
              {pathname === '/about-us' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className={`text-[15px] font-medium transition-colors py-1 relative ${
                pathname === '/contact' ? 'text-[#0B1220] font-semibold' : 'text-[#4A5468] hover:text-[#0B1220]'
              }`}
            >
              Contact
              {pathname === '/contact' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://chat.getaseed.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary text-[14px] px-5 py-2.5 shadow-sm hover:shadow"
            >
              <span>Create Account</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-[12px] text-[#0B1220] hover:bg-[#F6F7FB] border border-[#E7E9F0] transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[80px] z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-[380px] h-[calc(100vh-80px)] ml-auto p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E7E9F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Link
                  href="/"
                  className={`block px-4 py-3 rounded-[12px] font-medium text-[16px] ${
                    pathname === '/' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F6F7FB]'
                  }`}
                >
                  Home
                </Link>

                <div className="pt-2 pb-1 px-4">
                  <span className="caption-eyebrow text-[#8891A3] text-[11px]">Channels</span>
                </div>

                <div className="space-y-1 pl-2">
                  {channels.map((ch) => {
                    const Icon = ch.icon;
                    return (
                      <Link
                        key={ch.name}
                        href={ch.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-[12px] text-[15px] font-medium ${
                          pathname === ch.href ? 'bg-[#F6F7FB] text-[#0B1220] font-semibold' : 'text-[#4A5468] hover:bg-[#F6F7FB]'
                        }`}
                      >
                        <div 
                          className="w-7 h-7 rounded-[8px] flex items-center justify-center"
                          style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                        >
                          <Icon size={15} />
                        </div>
                        <span>{ch.name}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/pricing"
                  className={`block px-4 py-3 rounded-[12px] font-medium text-[16px] ${
                    pathname === '/pricing' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F6F7FB]'
                  }`}
                >
                  Pricing
                </Link>

                <Link
                  href="/about-us"
                  className={`block px-4 py-3 rounded-[12px] font-medium text-[16px] ${
                    pathname === '/about-us' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F6F7FB]'
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className={`block px-4 py-3 rounded-[12px] font-medium text-[16px] ${
                    pathname === '/contact' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F6F7FB]'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#E7E9F0] space-y-3">
              <a
                href="https://wa.me/919999061692"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-wa w-full justify-center text-[14px]"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://chat.getaseed.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary w-full justify-center text-[14px]"
              >
                <span>Create Account</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
