'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GetAseedLogo from './GetAseedLogo';
import { WhatsAppBrandIcon, InstagramBrandIcon, FacebookBrandIcon } from './BrandIcons';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const channels = [
  {
    name: 'WhatsApp',
    href: '/whatsapp',
    badge: 'Official Cloud API',
    description: 'Transform communication with verified profiles, catalogs, and smart broadcasts.',
    color: '#25D366',
    icon: WhatsAppBrandIcon
  },
  {
    name: 'Facebook',
    href: '/facebook',
    badge: 'Meta Partner',
    description: 'Messenger automation, Click-to-Messenger ad funnels, and comment growth tools.',
    color: '#1877F2',
    icon: FacebookBrandIcon
  },
  {
    name: 'Instagram',
    href: '/instagram',
    badge: 'Graph API',
    description: 'Answer FAQs, auto-reply to story replies, and convert post comments to sales.',
    color: '#962FBF',
    icon: InstagramBrandIcon
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
      setIsScrolled(window.scrollY > 10);
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
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: isScrolled ? '0 4px 20px -4px rgba(11, 18, 32, 0.08)' : '0 2px 10px rgba(0,0,0,0.03)'
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
              className={`text-[14.5px] font-bold tracking-wide transition-colors py-1 relative ${
                pathname === '/' ? 'text-[#0B1220]' : 'text-[#475569] hover:text-[#0B1220]'
              }`}
            >
              HOME
              {pathname === '/' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>

            {/* Channels Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setChannelsOpen(!channelsOpen)}
                onMouseEnter={() => setChannelsOpen(true)}
                className={`flex items-center gap-1.5 text-[14.5px] font-bold tracking-wide transition-colors py-1 relative cursor-pointer ${
                  isChannelActive ? 'text-[#0B1220]' : 'text-[#475569] hover:text-[#0B1220]'
                }`}
                aria-expanded={channelsOpen}
                aria-haspopup="true"
              >
                <span>CHANNELS</span>
                <ChevronDown 
                  size={15} 
                  className={`transition-transform duration-200 text-[#64748B] ${channelsOpen ? 'rotate-180 text-[#0B1220]' : ''}`} 
                />
                {isChannelActive && (
                  <span 
                    className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] rounded-full" 
                    style={{ background: 'var(--thread-gradient)' }} 
                  />
                )}
              </button>

              {/* Channels Dropdown Lite Panel */}
              {channelsOpen && (
                <div 
                  onMouseLeave={() => setChannelsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] bg-white rounded-[20px] border border-[#E2E8F0] p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-[#0B1220]"
                >
                  <div className="px-3 py-2 border-b border-[#E2E8F0] mb-1">
                    <span className="caption-eyebrow text-[#64748B] text-[11px]">Omnichannel Platforms</span>
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
                          className={`flex items-start gap-3 p-3 rounded-[14px] transition-all group ${
                            active ? 'bg-[#F8FAFC]' : 'hover:bg-[#F8FAFC]'
                          }`}
                        >
                          <div className="shrink-0 transition-transform group-hover:scale-110">
                            <Icon size={34} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[14.5px] font-bold text-[#0B1220] group-hover:text-[#1877F2] transition-colors">
                                {ch.name}
                              </span>
                              <span 
                                className="text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                              >
                                {ch.badge}
                              </span>
                            </div>
                            <p className="text-[12px] text-[#475569] line-clamp-2 mt-0.5 leading-relaxed">
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
              className={`text-[14.5px] font-bold tracking-wide transition-colors py-1 relative ${
                pathname === '/pricing' ? 'text-[#0B1220]' : 'text-[#475569] hover:text-[#0B1220]'
              }`}
            >
              PRICING
              {pathname === '/pricing' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>

            {/* About Us */}
            <Link 
              href="/about-us" 
              className={`text-[14.5px] font-bold tracking-wide transition-colors py-1 relative ${
                pathname === '/about-us' ? 'text-[#0B1220]' : 'text-[#475569] hover:text-[#0B1220]'
              }`}
            >
              ABOUT US
              {pathname === '/about-us' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className={`text-[14.5px] font-bold tracking-wide transition-colors py-1 relative ${
                pathname === '/contact' ? 'text-[#0B1220]' : 'text-[#475569] hover:text-[#0B1220]'
              }`}
            >
              CONTACT
              {pathname === '/contact' && (
                <span 
                  className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] rounded-full" 
                  style={{ background: 'var(--thread-gradient)' }} 
                />
              )}
            </Link>
          </nav>

          {/* Desktop Right CTA: Brand Lime #ABEF06 Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-lime text-[13.5px] uppercase tracking-wider font-extrabold"
            >
              <span>CONTACT US</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-[12px] text-[#0B1220] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] transition-colors shadow-sm"
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
            className="bg-white w-full max-w-[380px] h-[calc(100vh-80px)] ml-auto p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E2E8F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <Link
                href="/"
                className={`block px-4 py-3 rounded-[14px] font-bold text-[15px] ${
                  pathname === '/' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F8FAFC]'
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
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-[12px] text-[14.5px] font-semibold ${
                        pathname === ch.href ? 'bg-[#F8FAFC] text-[#0B1220]' : 'text-[#475569] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <Icon size={24} />
                      <span>{ch.name}</span>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/pricing"
                className={`block px-4 py-3 rounded-[14px] font-bold text-[15px] ${
                  pathname === '/pricing' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F8FAFC]'
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/about-us"
                className={`block px-4 py-3 rounded-[14px] font-bold text-[15px] ${
                  pathname === '/about-us' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F8FAFC]'
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className={`block px-4 py-3 rounded-[14px] font-bold text-[15px] ${
                  pathname === '/contact' ? 'bg-[#0B1220] text-white' : 'text-[#0B1220] hover:bg-[#F8FAFC]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Bottom Actions: All Brand Lime #ABEF06 CTAs */}
            <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
              <Link
                href="/contact"
                className="btn-lime w-full justify-center text-[14px] font-bold"
              >
                <span>CONTACT US</span>
              </Link>

              <a
                href="https://chat.getaseed.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime w-full justify-center text-[14px] font-bold"
              >
                <span>GET STARTED</span>
                <span className="arrow-circle-dark">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
