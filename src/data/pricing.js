export const pricingPlans = [
  {
    id: 'go',
    name: 'Go Plan',
    slug: 'go',
    badge: 'Free Onboarding Support',
    priceMonthly: 29,
    priceYearly: 29, // $348 / yr ($29/mo effective when billed annually)
    totalYearlyBilled: 348,
    originalYearlyBilled: 420,
    savingsText: 'Save $72/yr',
    description: 'Perfect for emerging brands scaling their first conversational channels.',
    isFeatured: false,
    ctaText: 'Subscribe Now',
    ctaLink: 'https://chat.getaseed.com/register?plan=go',
    features: [
      '5,000 Subscribers',
      'No-Code Bot Builder',
      '50 Chatbots',
      'Omnichannel Inbox (WA, IG, FB)',
      'Built-in CRM & Contact Sync',
      'Send Broadcast Campaigns',
      'Drip Sequence Automation',
      '3rd Party Webhook Integrations',
      'WooCommerce Integration',
      'Shopify Direct Sync',
      'Comment Auto-Reply System'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    slug: 'pro',
    badge: 'Free Onboarding Support',
    popularBadge: 'Most Popular',
    priceMonthly: 79,
    priceYearly: 79, // $948 / yr
    totalYearlyBilled: 948,
    originalYearlyBilled: 1140,
    savingsText: 'Save $192/yr',
    description: 'Everything growing teams need to automate high-volume commerce.',
    isFeatured: true,
    inheritanceLine: '+ Includes all Go Plan features',
    ctaText: 'Subscribe Now',
    ctaLink: 'https://chat.getaseed.com/register?plan=pro',
    features: [
      '30,000 Subscribers',
      'Unlimited Chatbots',
      'Appointment Booking System',
      'ChatGPT / Custom AI Integration',
      'Dynamic API Access',
      'Priority Broadcast Queuing',
      'Advanced Team Permissions',
      'Multi-Agent Live Routing'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    slug: 'enterprise',
    badge: 'AI Solution Engineer Support',
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    description: 'Built for large teams and custom workflows requiring bespoke SLA & infrastructure.',
    isFeatured: false,
    ctaText: 'Talk to Sales',
    ctaLink: '/contact',
    features: [
      'Unlimited Subscribers & Contacts',
      'Custom AI Training on Company Docs',
      'Dedicated Account Manager',
      'Custom Automation Flows & Triggers',
      'Enterprise SLA & 99.9% Uptime Guarantee',
      'Priority Meta Cloud API Onboarding',
      'Custom CRM & ERP Integrations',
      'Security & Audit Logging'
    ]
  }
];

export const platformFeaturesData = {
  whatsapp: {
    title: 'WhatsApp Automation Features',
    description: 'Direct Meta Cloud API integration with zero conversation markups.',
    items: [
      { name: 'Bulk WhatsApp Messaging', desc: 'Broadcast targeted promotional updates, alerts, and campaigns to verified opt-in lists.' },
      { name: 'AI Chatbot Automation', desc: 'Auto-respond to FAQs, product discovery, order inquiries, and support tickets 24/7.' },
      { name: 'Media & Document Sharing', desc: 'Send high-res PDF catalogs, brochures, payment receipts, images, and videos in-chat.' },
      { name: 'Official WhatsApp Business API', desc: 'Direct Meta Cloud API connectivity with verified Green Tick verification support.' },
      { name: 'Template Messaging Engine', desc: 'Design, test, and manage Meta-approved interactive button templates and lists.' },
      { name: 'Broadcast Management', desc: 'Segment contacts, schedule broadcasts, and trigger automated drip sequences.' },
      { name: 'Delivery & Read Reports', desc: 'Real-time read receipts (double checkmarks), delivery rates, and analytics tracking.' }
    ]
  },
  facebook: {
    title: 'Facebook Messenger Automation Features',
    description: 'Turn social interactions and paid ad campaigns into high-converting revenue streams.',
    items: [
      { name: 'Comment-to-Inbox Automation', desc: 'Instantly reply to comments on Facebook posts and send private Messenger DMs.' },
      { name: 'Click-to-Messenger Ad Sync', desc: 'Drive ad traffic directly into personalized conversational qualification funnels.' },
      { name: 'Messenger URL Growth Tool', desc: 'Create shareable one-click m.me chat links for websites, emails, and SMS.' },
      { name: 'Automated Lead Qualification', desc: 'Collect names, emails, phone numbers, and survey responses on autopilot.' },
      { name: 'Abandoned Cart Triggers', desc: 'Remind shoppers about items left in their cart and offer limited-time coupons.' },
      { name: 'Omnichannel Inbox Routing', desc: 'Manage Facebook Messenger chats alongside WhatsApp and Instagram in one hub.' },
      { name: 'Rich Interactive Cards & Menus', desc: 'Display product carousels, quick-reply chips, and structured call-to-action buttons.' }
    ]
  },
  instagram: {
    title: 'Instagram DM Automation Features',
    description: 'Transform followers, comments, and Story mentions into loyal paying customers.',
    items: [
      { name: 'Story Reply & Mention Auto-Responder', desc: 'Trigger instant DM engagement whenever someone replies to or tags your Story.' },
      { name: 'Reels & Post Comment Automation', desc: 'Automatically DM purchase links and discount codes when users comment key terms.' },
      { name: 'AI Smart DM Assistant', desc: 'Answer pricing questions, availability, and FAQs instantly around the clock.' },
      { name: 'Lead Capture & Data Export', desc: 'Collect verified lead emails and phone numbers directly within the DM window.' },
      { name: 'Giveaways, Quizzes & Contests', desc: 'Run viral interactive quizzes and automated giveaway entry confirmation flows.' },
      { name: 'Live Agent Handoff', desc: 'Seamlessly transfer hot sales opportunities from AI to human sales agents.' },
      { name: 'Official Meta Graph API Compliant', desc: '100% compliant with Instagram platform terms to safeguard your account safety.' }
    ]
  }
};

export const countryRatesData = [
  { country: 'India', code: 'IN', currency: 'INR', marketing: '₹0.78', utility: '₹0.12', authentication: '₹0.12', service: 'Free (1k/mo)' },
  { country: 'United States', code: 'US', currency: 'USD', marketing: '$0.025', utility: '$0.015', authentication: '$0.0135', service: 'Free (1k/mo)' },
  { country: 'United Kingdom', code: 'GB', currency: 'GBP', marketing: '£0.033', utility: '£0.018', authentication: '£0.016', service: 'Free (1k/mo)' },
  { country: 'United Arab Emirates', code: 'AE', currency: 'USD', marketing: '$0.034', utility: '$0.018', authentication: '$0.017', service: 'Free (1k/mo)' },
  { country: 'Singapore', code: 'SG', currency: 'USD', marketing: '$0.052', utility: '$0.019', authentication: '$0.018', service: 'Free (1k/mo)' },
  { country: 'Canada', code: 'CA', currency: 'USD', marketing: '$0.025', utility: '$0.015', authentication: '$0.0135', service: 'Free (1k/mo)' },
  { country: 'Australia', code: 'AU', currency: 'USD', marketing: '$0.062', utility: '$0.022', authentication: '$0.021', service: 'Free (1k/mo)' },
  { country: 'Germany', code: 'DE', currency: 'EUR', marketing: '€0.113', utility: '€0.062', authentication: '€0.057', service: 'Free (1k/mo)' }
];
