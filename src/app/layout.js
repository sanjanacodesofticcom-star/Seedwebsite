import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  metadataBase: new URL('https://getaseed.com'),
  title: {
    default: 'GetAseed — AI Chatbot & Conversational Commerce for WhatsApp, Instagram & Facebook',
    template: '%s | GetAseed'
  },
  description: 'Automate WhatsApp, Instagram, and Facebook Messenger with AI-powered conversational intelligence. Official Meta Cloud API Partner with zero markup fees.',
  keywords: [
    'WhatsApp Chatbot',
    'Instagram DM Automation',
    'Facebook Messenger Automation',
    'Meta Cloud API',
    'Conversational Commerce',
    'AI Support Agent',
    'Omnichannel Inbox',
    'WhatsApp Business API'
  ],
  authors: [{ name: 'GetAseed', url: 'https://getaseed.com' }],
  creator: 'GetAseed',
  publisher: 'GetAseed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'GetAseed — AI Chatbot & Conversational Commerce Automation',
    description: 'Transform conversations into sales across WhatsApp, Instagram, and Facebook Messenger on autopilot.',
    url: 'https://getaseed.com',
    siteName: 'GetAseed',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetAseed — AI Conversational Commerce',
    description: 'Official Meta Cloud API Partner for WhatsApp, Instagram & Facebook Messenger automation.',
    creator: '@getaseed',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GetAseed',
    url: 'https://getaseed.com',
    logo: 'https://getaseed.com/images/getaseed-full-logo.svg',
    description: 'Official Meta Cloud API Partner automating conversational commerce across WhatsApp, Facebook Messenger, and Instagram.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'online@getaseed.com',
      contactType: 'Customer Support',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://facebook.com/getaseed',
      'https://instagram.com/getaseed',
      'https://twitter.com/getaseed'
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
