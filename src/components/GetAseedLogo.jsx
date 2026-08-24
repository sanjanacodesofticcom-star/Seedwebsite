'use client';
import Link from 'next/link';
import Image from 'next/image';

export function GetAseedMark({ size = 36, className = '' }) {
  return (
    <Image
      src="/images/getaseed-icon.svg"
      alt="GetAseed Icon"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      priority
    />
  );
}

export default function GetAseedLogo({ 
  variant = 'default', 
  size = 'default', 
  showWordmark = true,
  className = ''
}) {
  const height = size === 'large' ? 44 : size === 'small' ? 32 : 38;
  const width = Math.round(height * (292 / 91));

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center group focus:outline-none transition-transform duration-150 hover:opacity-95 ${className}`} 
      aria-label="GetAseed Home"
    >
      <Image
        src="/images/getaseed-full-logo.svg"
        alt="GetAseed - Omnichannel AI Inbox"
        width={width}
        height={height}
        style={{ width: 'auto', height: `${height}px` }}
        priority
      />
    </Link>
  );
}
