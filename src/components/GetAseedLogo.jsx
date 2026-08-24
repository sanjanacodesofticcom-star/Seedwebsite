'use client';
import Link from 'next/link';

export function GetAseedMark({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GetAseed icon mark"
    >
      <rect width="36" height="36" rx="10" fill="#0B1220" />
      {/* Tri-channel square signal accents */}
      <rect x="8" y="9" width="8" height="8" rx="2.5" fill="#962FBF" />
      <rect x="20" y="9" width="8" height="8" rx="2.5" fill="#1877F2" />
      <rect x="8" y="20" width="8" height="8" rx="2.5" fill="#25D366" />
      {/* Thread spark connector */}
      <path 
        d="M20 24H28M24 20V28" 
        stroke="url(#mark-gradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      <defs>
        <linearGradient id="mark-gradient" x1="20" y1="20" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1877F2" />
          <stop offset="1" stopColor="#25D366" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function GetAseedLogo({ variant = 'dark', size = 'default', showWordmark = true }) {
  const isDark = variant === 'white' || variant === 'light-text';
  const textColor = isDark ? '#FFFFFF' : '#0B1220';
  const mutedColor = isDark ? '#8891A3' : '#4A5468';

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group focus:outline-none" aria-label="GetAseed Home">
      <GetAseedMark size={size === 'large' ? 38 : 32} />
      {showWordmark && (
        <span className="flex items-baseline tracking-tight font-semibold" style={{ fontFamily: 'var(--font-display)', fontSize: size === 'large' ? '24px' : '21px' }}>
          <span style={{ color: textColor }}>GetA</span>
          <span 
            style={{ 
              background: 'linear-gradient(135deg, #1877F2 0%, #25D366 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            seed
          </span>
        </span>
      )}
    </Link>
  );
}
