import ChannelPageTemplate from '@/components/ChannelPageTemplate';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'WhatsApp Automation & Chatbot — Official Meta Cloud API | GetAseed',
  description: 'Transform your business communication with intelligent WhatsApp automation. Verified profiles, rich media catalogs, smart broadcasting, and 0% markup fees.',
};

export default function WhatsAppPage() {
  const featureCards = [
    {
      title: 'Verified business profile',
      desc: 'Get a green tick verified business profile. Direct Meta partnership ensures compliance, reliability, and access to the latest platform features.',
      bullets: ['Green Tick verification support', 'Official Meta Business Manager setup', 'Enterprise deliverability tier'],
      isFeatured: false,
      iconName: 'badge-check'
    },
    {
      title: 'Rich media & catalogs',
      desc: 'Send images, videos, documents, and locations. Create interactive catalogs and product carousels that showcase your products beautifully.',
      bullets: ['Interactive product carousels', 'PDF catalogs & invoices in chat', 'Native payment link embedding'],
      isFeatured: true,
      iconName: 'shopping-bag'
    },
    {
      title: 'Quick reply & interactive buttons',
      desc: 'Guide conversations with call-to-action buttons, quick reply options, and list messages that boost engagement and conversions.',
      bullets: ['1-tap quick reply buttons', 'Interactive list pickers', 'Reduced customer drop-off'],
      isFeatured: false,
      iconName: 'sliders'
    },
    {
      title: 'Multi-language support',
      desc: 'Respond in 28+ languages, automatically detecting and adapting to customer language preferences seamlessly.',
      bullets: ['Auto-language detection', '28+ regional & global languages', 'Localized greeting templates'],
      isFeatured: false,
      iconName: 'languages'
    },
    {
      title: 'Message templates',
      desc: 'Build and reuse approved WhatsApp templates for consistent, personalized messages across all customer communications.',
      bullets: ['Meta template management', 'Dynamic merge tag variables', 'Instant approval sync'],
      isFeatured: false,
      iconName: 'file-check'
    },
    {
      title: 'Broadcast & bulk messages',
      desc: 'Send personalized updates, offers, and announcements to thousands of customers simultaneously with targeted delivery.',
      bullets: ['Smart contact segmentation', 'Scheduled campaign delivery', 'Detailed read rate metrics'],
      isFeatured: false,
      iconName: 'radio'
    }
  ];

  const whatsappSpecial = {
    checklist: [
      {
        title: 'Lead Capture & Qualification',
        desc: 'Auto-ask for name, company, location, and budget using WhatsApp automation tools. Route qualified prospects to sales instantly.'
      },
      {
        title: 'FAQ & Customer Support',
        desc: 'Answer common questions instantly; hand over to agents when needed. Reduce ticket volume by up to 60%.'
      },
      {
        title: 'Order & Booking Updates',
        desc: 'Confirm orders, send tracking links, booking confirmations, and reminders automatically to keep customers informed.'
      },
      {
        title: 'Payments & Documents',
        desc: 'Share payment links, invoices, catalogues, brochures, and PDFs directly in chat to streamline transactions.'
      },
      {
        title: 'Reminders & Renewals',
        desc: 'Automate follow-ups for demos, trials, subscriptions, and renewals so you never miss a revenue opportunity.'
      },
      {
        title: 'Campaigns & Journeys',
        desc: 'Trigger message sequences after sign-ups, webinar registrations, or ad clicks to nurture leads at scale.'
      }
    ]
  };

  const deepDiveRows = [
    {
      title: 'Launch Verified Broadcast Campaigns',
      desc: 'Broadcast targeted offers, product releases, and time-sensitive alerts directly to opt-in WhatsApp contacts with 98% open rates.',
      stats: [
        { label: 'Message Open Rate', value: '98%' },
        { label: 'Click-Through Rate', value: '45%' }
      ]
    },
    {
      title: '24/7 AI Chatbot & Human Escalation',
      desc: 'Train your WhatsApp bot on company FAQs and SOPs. When a customer requires personalized help, route them to live agents with full context.',
      stats: [
        { label: 'First Response Time', value: '< 3s' },
        { label: 'Support Cost Saved', value: '60%' }
      ]
    }
  ];

  return (
    <ChannelPageTemplate
      channelKey="whatsapp"
      accentColor="#25D366"
      heroPill="The easiest WhatsApp automation for any workflow"
      heroTitle="Automate WhatsApp messaging with AI-powered intelligence"
      heroSubhead="Transform your business communication with intelligent WhatsApp automation. Connect any tool, trigger any workflow, and deliver personalized experiences at scale."
      featureGridTitle="Everything you need to engage customers on WhatsApp"
      featureGridSubhead="From verified business profiles and rich media messaging to WhatsApp calling and smart routing — all the tools to deliver standout customer experiences."
      featureCards={featureCards}
      partnerTags={[
        'Official WhatsApp Business API',
        'Direct Meta Cloud API',
        'Zero Markup Fees',
        '28+ Languages'
      ]}
      whatsappSpecial={whatsappSpecial}
      deepDiveTitle="Scale WhatsApp Revenue"
      deepDiveSubhead="Automate high-converting customer journeys from initial discovery to repeat purchases."
      deepDiveRows={deepDiveRows}
      faqs={faqsData.whatsapp}
    />
  );
}
