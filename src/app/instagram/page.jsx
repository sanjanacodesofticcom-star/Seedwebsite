import ChannelPageTemplate from '@/components/ChannelPageTemplate';
import { faqsData } from '@/data/faqs';

export const metadata = {
  title: 'Instagram DM Automation & Chatbots | GetAseed',
  description: 'Automate Instagram DMs, Story replies, and post comments with AI-powered intelligence. Drive higher conversions and capture verified leads on autopilot.',
};

export default function InstagramPage() {
  const featureCards = [
    {
      title: 'Answer Every FAQ',
      desc: 'Deliver instant replies 24/7 with smart Instagram DM Automation that keeps your audience engaged and informed at every step.',
      bullets: [
        'Instant Auto Replies',
        'Answer FAQs Automatically',
        '24/7 Customer Support',
        'Smart Keyword Responses'
      ],
      isFeatured: false,
      iconName: 'help-circle'
    },
    {
      title: 'Convert More Followers',
      desc: 'Turn Instagram followers into loyal customers through personalized conversations, lead capture flows, and automated engagement.',
      bullets: [
        'Generate & Collect Leads',
        'Re-engage Interested Prospects',
        'Build Verified Customer Lists',
        'Increase Conversion Rates'
      ],
      isFeatured: true,
      iconName: 'sparkles'
    },
    {
      title: 'Automate Your IG Funnel',
      desc: 'Streamline your Instagram sales funnel with automated workflows designed to nurture leads, promote offers, and boost conversions.',
      bullets: [
        'Automated DM Campaigns',
        'Product & Offer Promotions',
        'Review & Feedback Collection',
        'Funnel Automation Workflows'
      ],
      isFeatured: false,
      iconName: 'filter'
    }
  ];

  const deepDiveRows = [
    {
      title: 'Have More Conversations That Lead to Sales',
      desc: 'Launch limited-time offers, automate Instagram DMs, run giveaways, challenges, and quizzes to increase engagement, generate leads, and grow your revenue faster than ever.',
      stats: [
        { label: 'Faster Engagement', value: '9X' },
        { label: 'More Conversions', value: '3X' }
      ]
    },
    {
      title: 'Build Irresistible Brand Awareness',
      desc: 'Build trust, strengthen customer relationships, and create personalized Instagram interactions that increase engagement and drive higher conversions automatically.',
      stats: [
        { label: 'Engagement Automation', value: 'Auto' },
        { label: 'Customer Interaction', value: '24/7' }
      ]
    },
    {
      title: 'AI-Powered Instagram Automation That Works 24/7',
      desc: 'Automate Instagram conversations with intelligent AI replies, smart lead capture, instant responses, and personalized customer journeys that keep your audience engaged day and night.',
      stats: [
        { label: 'AI Smart Intelligence', value: 'AI' },
        { label: 'Round-the-Clock Active', value: '24/7' }
      ]
    }
  ];

  return (
    <ChannelPageTemplate
      channelKey="instagram"
      accentColor="#962FBF"
      accentWarmColor="#F0554D"
      heroPill="Easiest Instagram Business Automation"
      heroTitle="Automate Instagram Messaging with AI-powered intelligence"
      heroSubhead="Transform your customer communication with intelligent Instagram automation. Connect any tool, trigger any workflow, and deliver personalized experiences at scale."
      featureGridTitle="Drive Higher Conversions with Instagram DM Marketing"
      featureGridSubhead="Powerful Instagram automation tools built to help you capture leads, engage followers, and automate conversations — all in one place."
      featureCards={featureCards}
      partnerTags={[
        'Meta Business Partner',
        'Official Meta Graph API',
        'Instagram DM Automation',
        'WhatsApp Business API',
        'AI Customer Engagement'
      ]}
      deepDiveTitle="Grow and Analyze Your Instagram Audience"
      deepDiveSubhead="Everything you need to convert Instagram conversations into customers — all in one powerful automation platform."
      deepDiveRows={deepDiveRows}
      faqs={faqsData.instagram}
    />
  );
}
