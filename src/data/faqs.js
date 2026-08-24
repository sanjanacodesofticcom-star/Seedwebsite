export const faqsData = {
  home: [
    {
      id: 'h1',
      question: 'Is it difficult to set up?',
      answer: "No, it's very easy. You don't need any technical knowledge. Most users get started within 15 minutes. If you need help, our team is always available."
    },
    {
      id: 'h2',
      question: 'How long does setup take?',
      answer: 'Setup usually takes less than 15 minutes. You can start using the system almost instantly with our pre-built templates and guided onboarding.'
    },
    {
      id: 'h3',
      question: 'Is there any risk of getting banned?',
      answer: "No. We use the official WhatsApp Business API and Meta Cloud API, fully compliant with Meta's policies. Your account stays safe, verified, and secure."
    },
    {
      id: 'h4',
      question: 'What kind of support do you provide?',
      answer: 'Step-by-step onboarding guides, fast ticket support, screen-sharing help for complex issues, priority Meta-related verification assistance, and regular product updates.'
    },
    {
      id: 'h5',
      question: 'Does it work with multiple platforms?',
      answer: 'Yes. You can manage WhatsApp, Instagram, Facebook Messenger, and website live chat—all seamlessly in one unified inbox.'
    },
    {
      id: 'h6',
      question: 'What if I get stuck?',
      answer: 'Our dedicated support engineers and account managers are ready to assist you anytime via ticket, WhatsApp, or a 1-on-1 scheduled screen-share call.'
    }
  ],
  whatsapp: [
    {
      id: 'w1',
      question: 'Does WhatsApp charge for sending messages?',
      answer: 'Facebook (Meta) has a transparent conversation-based fee structure. Businesses using the WhatsApp Business Platform are charged per 24-hour conversation window. Each WhatsApp Business account receives 1,000 free service conversations per month. GetAseed charges zero markup on these official rates.'
    },
    {
      id: 'w2',
      question: 'Who is going to oversee the WhatsApp Business Platform?',
      answer: 'You maintain full administrative control and ownership over your Meta Business Manager and WhatsApp Business account. GetAseed acts as your software interface and technical layer, automating messaging, analytics, and CRM synchronization.'
    },
    {
      id: 'w3',
      question: 'Is a new phone number required for the WhatsApp Business Platform?',
      answer: 'You can use either a new dedicated phone number or an existing number. Note that if you use an existing number, it must be disconnected from the standard consumer WhatsApp or WhatsApp Business mobile app to connect to the official Cloud API.'
    },
    {
      id: 'w4',
      question: 'Do I need business verification & approval from WhatsApp?',
      answer: 'Basic messaging can start immediately upon phone number registration. To unlock higher tier broadcast limits and the official Green Tick badge, Meta Business Verification is required. Our team provides end-to-end guidance to get you verified swiftly.'
    },
    {
      id: 'w5',
      question: 'Are you a Business Solutions Provider (BSP)?',
      answer: 'Yes, GetAseed operates directly on the Official Meta Cloud API infrastructure, ensuring enterprise-grade uptime, strict data compliance, zero message markup fees, and immediate access to the latest WhatsApp features.'
    }
  ],
  facebook: [
    {
      id: 'f1',
      question: 'What is a Facebook Messenger bot?',
      answer: 'A bot is an intelligent automated conversation flow that answers questions, qualifies leads, delivers product catalogs, schedules appointments, and nurtures prospects directly inside Facebook Messenger 24/7.'
    },
    {
      id: 'f2',
      question: 'What can a bot do for my business?',
      answer: 'It can instantly answer common customer inquiries, capture lead emails and phone numbers, recover abandoned shopping carts, trigger auto-replies to post comments, run Click-to-Messenger ad flows, and route high-value VIP buyers to human reps.'
    },
    {
      id: 'f3',
      question: 'Why do I need a Messenger bot?',
      answer: 'Speed to lead is critical. Customers expect immediate answers. A Messenger bot reduces customer response times to under 3 seconds, boosting conversion rates by up to 3x while cutting repetitive support costs by up to 60%.'
    },
    {
      id: 'f4',
      question: 'How do I create a Messenger bot?',
      answer: 'With GetAseed’s visual drag-and-drop no-code bot builder, you can connect your Facebook page and launch ready-made conversational flows in minutes without writing a single line of code.'
    }
  ],
  instagram: [
    {
      id: 'i1',
      question: 'How does Instagram DM Automation work?',
      answer: 'Whenever a user sends you a Direct Message, replies to your Instagram Story, or comments on your Reels and Posts, GetAseed automatically triggers conversational flows, sends link assets, and captures qualified lead data in real time.'
    },
    {
      id: 'i2',
      question: 'Can Instagram automation reply to post comments and Story mentions?',
      answer: 'Yes! You can configure keyword-based instant DM triggers whenever someone comments a specific word (e.g. "PRICE" or "LINK") on any post, Reel, or mentions your handle in their Story.'
    },
    {
      id: 'i3',
      question: 'Is Instagram automation safe and Meta compliant?',
      answer: '100% safe. GetAseed uses the official Meta Graph API for Instagram Messaging. Unlike unauthorized scraping bots that risk account penalties, our platform is fully approved and adheres strictly to Meta guidelines.'
    },
    {
      id: 'i4',
      question: 'Can human agents take over Instagram conversations?',
      answer: 'Absolutely. GetAseed’s unified omnichannel inbox allows your team to view all incoming messages, pause automation with one click, and reply manually with full chat history and CRM context.'
    }
  ]
};

export async function getFaqsByPage(page = 'home') {
  // If Supabase is connected, we can fetch from the DB table 'faqs'
  try {
    const { supabase, isSupabaseConfigured } = await import('@/lib/supabase');
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .eq('page', page)
        .order('sort_order', { ascending: true });

      if (!error && data && data.length > 0) {
        return data;
      }
    }
  } catch (e) {
    // Fall back to local verified data
  }
  return faqsData[page] || faqsData.home;
}
