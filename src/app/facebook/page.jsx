import ChannelPageTemplate from '@/components/ChannelPageTemplate';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'Facebook Messenger Automation & Chatbots | GetAseed',
  description: 'Automate Facebook Messenger with AI-powered intelligence. Drive Click-to-Messenger ads, turn post comments into commerce, and qualify leads on autopilot.',
};

export default function FacebookPage() {
  const featureCards = [
    {
      title: 'Acquire',
      desc: 'Turn visitors into loyal customers with smart lead qualification tools and targeted promotional flows.',
      bullets: [
        'Automatically Qualify Leads',
        'Recover Abandoned Carts',
        'Send Coupons & Promotions'
      ],
      isFeatured: false,
      iconName: 'user-plus'
    },
    {
      title: 'Engage',
      desc: 'Build meaningful relationships with your audience through consistent, personalized conversational communication.',
      bullets: [
        'Build a Loyal Following',
        'Collect Feedback & Reviews',
        'Share News & Product Updates'
      ],
      isFeatured: true,
      iconName: 'heart-handshake'
    },
    {
      title: 'Facebook DM Automation',
      desc: 'As an official Meta Business Partner, we power automated Facebook DM campaigns that drive real conversations and conversions at scale.',
      bullets: [
        'Auto-Reply to Comments & DMs',
        'Click-to-Messenger Ad Campaigns',
        'Official Meta Business Partner Access'
      ],
      isFeatured: false,
      iconName: 'message-square-share'
    }
  ];

  const deepDiveRows = [
    {
      title: 'Make Your Facebook Ads Work Harder',
      desc: 'Combine GetAseed with your Facebook Ads and reduce acquisition costs by up to 9X. Use Click-to-Messenger Ads to send prospects into Messenger, where you can qualify leads, accept payments, and keep the conversation going.',
      stats: [
        { label: 'Cost Reduction', value: '9X' },
        { label: 'More Leads Generated', value: '3X' }
      ]
    },
    {
      title: 'Turn Comments into Commerce',
      desc: 'Automatically respond to comments on your Facebook posts with the Comments Growth Tool. Answer common questions, offer product recommendations, initiate newsletter sign-ups, and more — all on autopilot.',
      stats: [
        { label: 'Instant Auto Responses', value: '100%' },
        { label: 'Continuous Engagement', value: '24/7' }
      ]
    },
    {
      title: 'Direct Customers to Your Chatbot from Anywhere',
      desc: 'Use the GetAseed Messenger URL Growth Tool to create a short, memorable messenger link for your chatbot that customers can access from their preferred channel: Website, Email, Text message, or QR codes.',
      stats: [
        { label: 'Cross-Channel Reach', value: '∞' },
        { label: 'Setup Time', value: '1-click' }
      ]
    }
  ];

  return (
    <ChannelPageTemplate
      channelKey="facebook"
      accentColor="#1877F2"
      heroPill="Easiest Facebook Business Automation"
      heroTitle="Automate Facebook Messenger with AI-powered intelligence"
      heroSubhead="Transform your customer communication with intelligent Facebook Messenger automation. Connect any tool, trigger any workflow, and deliver personalized experiences at scale."
      featureGridTitle="Connect with your Customers at Every Stage"
      featureGridSubhead="Powerful tools built to help you acquire, engage, and support your audience — all in one place."
      featureCards={featureCards}
      partnerTags={[
        'Meta Business Partner',
        'Verified Partner',
        'WhatsApp Business API',
        'Facebook DM Automation',
        'Messenger Marketing'
      ]}
      deepDiveTitle="Grow and Analyze Your Audience"
      deepDiveSubhead="Everything you need to convert conversations into customers — all in one powerful platform."
      deepDiveRows={deepDiveRows}
      faqs={faqsData.facebook}
    />
  );
}
