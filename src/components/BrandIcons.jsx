'use client';
import Image from 'next/image';

export function MetaBrandIcon({ size = 20, className = '' }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/brand/meta-official.png"
        alt="Meta"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </div>
  );
}

export function ShopifyBrandIcon({ size = 20, className = '' }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/brand/shopify-official.png"
        alt="Shopify"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </div>
  );
}

export function WhatsAppBrandIcon({ size = 20, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path 
        d="M34.5 13.5C31.7 10.7 28 9.1 24.1 9.1C16 9.1 9.4 15.7 9.4 23.8C9.4 26.4 10.1 28.9 11.4 31.2L9 40L18.1 37.6C20.3 38.8 22.7 39.5 25.2 39.5L25.3 39.5C33.3 39.5 40 32.9 40 24.8C40 20.9 38.4 17.2 35.6 14.4L34.5 13.5ZM25.2 36.9C23 36.9 20.9 36.3 19 35.2L18.5 34.9L13.1 36.3L14.6 31.1L14.2 30.5C13 28.5 12.3 26.2 12.3 23.8C12.3 17.3 17.6 12 24.1 12C27.2 12 30.2 13.2 32.4 15.4C34.6 17.6 35.8 20.6 35.8 23.8C35.8 30.3 30.5 35.6 24 35.6L25.2 36.9ZM30.4 27.6C30.1 27.4 28.6 26.7 28.3 26.6C28 26.5 27.8 26.4 27.6 26.7C27.4 27 26.8 27.7 26.6 27.9C26.4 28.1 26.2 28.1 25.9 28C25.6 27.8 24.6 27.5 23.4 26.4C22.5 25.6 21.9 24.6 21.7 24.3C21.5 24 21.7 23.8 21.8 23.7C21.9 23.6 22.1 23.4 22.2 23.2C22.3 23 22.4 22.9 22.5 22.7C22.6 22.5 22.5 22.3 22.4 22.1C22.3 21.9 21.7 20.5 21.5 19.9C21.2 19.3 21 19.4 20.8 19.4C20.6 19.4 20.4 19.4 20.2 19.4C20 19.4 19.6 19.5 19.3 19.8C19 20.1 18.2 20.8 18.2 22.3C18.2 23.8 19.3 25.2 19.5 25.4C19.7 25.6 21.7 28.7 24.7 30C25.4 30.3 26 30.5 26.5 30.7C27.3 30.9 28 30.9 28.6 30.8C29.2 30.7 30.5 30 30.8 29.2C31.1 28.4 31.1 27.7 31 27.6C30.9 27.5 30.7 27.4 30.4 27.2L30.4 27.6Z" 
        fill="white"
      />
    </svg>
  );
}

export function InstagramBrandIcon({ size = 20, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <defs>
        <radialGradient id="ig-grad" cx="15%" cy="100%" r="120%">
          <stop offset="0%" stopColor="#FFD600" />
          <stop offset="25%" stopColor="#FF7A00" />
          <stop offset="50%" stopColor="#FF0069" />
          <stop offset="75%" stopColor="#D300C5" />
          <stop offset="100%" stopColor="#7638FA" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ig-grad)" />
      <rect x="11" y="11" width="26" height="26" rx="8" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="31.5" cy="16.5" r="1.8" fill="white" />
    </svg>
  );
}

export function FacebookBrandIcon({ size = 20, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path 
        d="M29.5 25.2L30.4 19.6H25V16C25 14.5 25.7 13 28 13H30.5V8.2C30.5 8.2 28.2 7.8 26 7.8C21.4 7.8 18.5 10.6 18.5 15.6V19.6H13.5V25.2H18.5V39.5C19.5 39.7 20.5 39.8 21.6 39.8C22.7 39.8 23.7 39.7 24.7 39.5V25.2H29.5Z" 
        fill="white"
      />
    </svg>
  );
}

export function WooCommerceBrandIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`}>
      <rect width="48" height="48" rx="12" fill="#96588A" />
      <path d="M12 18H36V28C36 31.3137 33.3137 34 30 34H18C14.6863 34 12 31.3137 12 28V18Z" fill="white" fillOpacity="0.2" />
      <text x="24" y="29" fill="white" fontSize="13" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">WOO</text>
    </svg>
  );
}

export function GoogleSheetsBrandIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`}>
      <rect width="48" height="48" rx="12" fill="#0F9D58" />
      <path d="M16 12H28L34 18V36H16V12Z" fill="white" />
      <path d="M28 12V18H34L28 12Z" fill="#A1D9B7" />
      <rect x="20" y="22" width="10" height="2.5" rx="1" fill="#0F9D58" />
      <rect x="20" y="26.5" width="10" height="2.5" rx="1" fill="#0F9D58" />
    </svg>
  );
}

export function StripeBrandIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`}>
      <rect width="48" height="48" rx="12" fill="#635BFF" />
      <text x="24" y="32" fill="white" fontSize="26" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">S</text>
    </svg>
  );
}
