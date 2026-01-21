export interface ActualTool {
  name: string;
  description: string;
  link: string;
  pricing: string;
  rating?: string;
}

export interface Technique {
  title: string;
  description: string;
  steps?: string[];
  example?: string;
  expectedResult?: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ImplementationStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  details?: string[];
  tip?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  setupTime?: string;
  roi?: string;
  cost?: string;
  tags?: string[];
  isPro?: boolean;
  icon?: string;
  category?: string;
  longDescription?: string;
  benefits?: string[];
  actualTools?: ActualTool[];
  techniques?: Technique[];
  caseStudies?: CaseStudy[];
  audioNarration?: string;
  implementationSteps?: ImplementationStep[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image?: string;
  content?: string;
}

export const problemTools: Tool[] = [
  {
    id: "1",
    title: "Turn Website Visitors into Leads",
    description: "AI Chatbots for instant quotes",
    setupTime: "20 mins",
    roi: "+20% Revenue",
    cost: "$80/mo",
    tags: ["#LeadGen", "#Growth"],
    isPro: false,
    icon: "📱",
    category: "hvac",
    longDescription: "Deploy AI-powered chatbots on your website that engage visitors 24/7 and convert them into qualified leads. Perfect for HVAC businesses looking to capture more quotes.",
    benefits: ["24/7 availability", "Instant quote generation", "20% increase in conversions", "No coding required"],
    audioNarration: "Hey there! Let me walk you through how to turn your website visitors into actual paying customers. Now, I know technology can seem complicated, but trust me, this is easier than changing an oil filter. First thing you're gonna do is pick your chatbot tool. I recommend starting with Tidio - it's like the reliable pickup truck of chatbots. Simple, gets the job done, and won't break the bank. Step two, you'll connect it to your website. It's literally just copying and pasting a piece of code - if you can copy your buddy's phone number, you can do this. Then comes the fun part - teaching your bot what to say. Think of it like training a new employee, but this one never calls in sick! Write out how you'd greet a customer walking into your shop. Keep it friendly, keep it real. 'Hey! Need help with something?' works way better than some fancy corporate speak. Next, set up your lead capture. This is where the magic happens. When someone asks about pricing or services, your bot asks for their name, phone number, and what they need. Boom - you got yourself a qualified lead while you were out fishing or sleeping. Finally, connect it to your phone or email so you get notified right away. Nothing fancy, just good old-fashioned follow-up, but automated. Remember, the goal here isn't to replace you - it's to catch the customers you'd miss when you're busy doing actual work. Set it up once, and it works for you 24-7. That's it! Now get out there and start capturing those leads!",
    implementationSteps: [
      {
        number: 1,
        title: "Choose Your Chatbot Tool",
        description: "Pick a chatbot platform that fits your budget and technical skill level. For most small businesses, Tidio or Landbot are great starting points.",
        icon: "🛠️",
        details: [
          "Sign up for a free trial with Tidio or your chosen platform",
          "Verify your email and create your account",
          "Choose the free or starter plan to begin",
          "Familiarize yourself with the dashboard"
        ],
        tip: "Start with the free version to test it out. You can always upgrade once you see results!"
      },
      {
        number: 2,
        title: "Install on Your Website",
        description: "Connect the chatbot to your website using a simple code snippet. It's as easy as copy and paste - no programming skills required!",
        icon: "🔌",
        details: [
          "Find the installation code in your chatbot dashboard",
          "Copy the code snippet provided",
          "Paste it into your website's footer (or use a plugin if you're on WordPress)",
          "Save changes and check that the chat widget appears on your site"
        ],
        tip: "If you're using WordPress, Shopify, or Wix, there's usually a one-click integration. Look for it in the plugins/apps section!"
      },
      {
        number: 3,
        title: "Create Your Welcome Message",
        description: "Write a friendly greeting that makes visitors want to engage. Think about how you'd greet someone walking into your shop or calling your business.",
        icon: "💬",
        details: [
          "Keep it short and friendly: 'Hey! Need help finding something?'",
          "Add a quick value proposition: 'I can help you get a quote in under 2 minutes!'",
          "Include a call-to-action button like 'Get a Quote' or 'Ask a Question'",
          "Test it from a visitor's perspective"
        ],
        tip: "Avoid corporate jargon. Talk like a real person! 'What brings you here today?' beats 'How may I assist you?' every time."
      },
      {
        number: 4,
        title: "Set Up Lead Capture Questions",
        description: "Configure the bot to collect essential information from interested visitors. This is how you turn conversations into actual leads in your CRM.",
        icon: "📝",
        details: [
          "Ask for their name first (people like being addressed personally)",
          "Request phone number or email (make it required)",
          "Ask what service they're interested in (use buttons for common options)",
          "Add a field for any specific details or questions they have"
        ],
        tip: "Don't ask for too much info! Just name, contact method, and what they need. You can get the rest when you follow up."
      },
      {
        number: 5,
        title: "Connect Notifications",
        description: "Set up instant alerts so you know immediately when a hot lead comes in. The faster you respond, the higher your conversion rate!",
        icon: "🔔",
        details: [
          "Enable email notifications in your chatbot settings",
          "Add your mobile number for SMS alerts (highly recommended!)",
          "Set up working hours if you only want notifications during business hours",
          "Test it by filling out the form yourself"
        ],
        tip: "Responding within 5 minutes increases your chances of closing by 400%! Set up mobile notifications so you never miss a lead."
      },
      {
        number: 6,
        title: "Test and Optimize",
        description: "Run through the entire customer journey yourself, then ask a friend or family member to try it. Make adjustments based on what works.",
        icon: "🎯",
        details: [
          "Test the chatbot on different devices (phone, tablet, desktop)",
          "Have someone else test it and give honest feedback",
          "Check that all notifications are coming through properly",
          "Monitor your first week of conversations and look for patterns"
        ],
        tip: "Check your chatbot stats weekly. If people are starting conversations but not completing the form, your questions might be too complicated!"
      }
    ],
    actualTools: [
      {
        name: "Intercom",
        description: "The most popular conversational AI platform with advanced targeting and personalization",
        link: "https://www.intercom.com",
        pricing: "From $74/mo",
        rating: "4.5/5"
      },
      {
        name: "Drift",
        description: "Conversational marketing platform that qualifies leads in real-time",
        link: "https://www.drift.com",
        pricing: "From $2,500/mo",
        rating: "4.4/5"
      },
      {
        name: "Tidio",
        description: "Easy-to-use live chat with AI chatbot automation for small businesses",
        link: "https://www.tidio.com",
        pricing: "Free - $394/mo",
        rating: "4.7/5"
      },
      {
        name: "ManyChat",
        description: "Visual bot builder for Facebook Messenger, Instagram, and SMS",
        link: "https://manychat.com",
        pricing: "Free - $145/mo",
        rating: "4.6/5"
      },
      {
        name: "Landbot",
        description: "No-code chatbot builder with beautiful conversational experiences",
        link: "https://landbot.io",
        pricing: "From $40/mo",
        rating: "4.7/5"
      },
      {
        name: "Chatbot.com",
        description: "All-in-one platform for building chatbots across multiple channels",
        link: "https://www.chatbot.com",
        pricing: "From $52/mo",
        rating: "4.5/5"
      }
    ]
  },
  {
    id: "2",
    title: "AI Voice Agent for Missed Calls",
    description: "Automated Invoicing for Plumbers",
    setupTime: "20 mins",
    roi: "+15% Revenue",
    cost: "$80/mo",
    tags: ["#AutomatedCalls", "#Growth"],
    isPro: true,
    icon: "📅",
    category: "landscaping",
    longDescription: "Never miss a customer call again. AI voice agents answer calls, schedule appointments, and send invoices automatically.",
    benefits: ["Capture every lead", "Automated scheduling", "Invoice generation", "CRM integration"]
  },
  {
    id: "3",
    title: "Smart Email Marketing Automation",
    description: "Automated email campaigns & follow-ups",
    setupTime: "30 mins",
    roi: "+25% Revenue",
    cost: "$120/mo",
    tags: ["#EmailMarketing", "#Growth"],
    isPro: false,
    icon: "📧",
    category: "legal",
    longDescription: "AI-driven email marketing that personalizes messages based on customer behavior and automatically follows up with prospects. Transform cold leads into hot customers with proven automation sequences.",
    benefits: ["Personalized campaigns", "Auto follow-ups", "A/B testing", "Analytics dashboard"],
    techniques: [
      {
        title: "Welcome Email Sequence (The 5-Email Onboarding)",
        description: "Convert new subscribers into engaged customers within 7 days",
        steps: [
          "Day 1: Welcome email with free resource (e.g., checklist, guide)",
          "Day 2: Value-packed content showing your expertise",
          "Day 3: Case study or success story from similar client",
          "Day 5: Soft pitch - introduce your product/service",
          "Day 7: Special offer with urgency (limited-time discount)"
        ],
        example: "HVAC company: Day 1 sends '10 Signs Your AC Needs Maintenance' checklist. Day 7 offers 20% off first service call.",
        expectedResult: "35% conversion rate from subscriber to customer"
      },
      {
        title: "Abandoned Cart Recovery",
        description: "Recover 15-30% of abandoned carts with strategic follow-ups",
        steps: [
          "1 hour after: 'Did you forget something?' - Show cart contents",
          "24 hours: 'Still interested?' - Add customer reviews",
          "48 hours: 'Last chance!' - Offer 10% discount",
          "72 hours: 'We'll save your cart' - Create urgency"
        ],
        example: "E-commerce store recovered $45,000 in abandoned carts in Q1 2026",
        expectedResult: "20-25% recovery rate, avg. $150 per recovered cart"
      },
      {
        title: "Behavioral Trigger Campaigns",
        description: "Send the right message at exactly the right time based on user actions",
        steps: [
          "Track website behavior (pages visited, time spent)",
          "Set up triggers for specific actions",
          "Create personalized email based on interest",
          "Include relevant case study or testimonial",
          "Add clear CTA based on where they are in journey"
        ],
        example: "Someone visits pricing page 3 times → Send email: 'Questions about pricing? Here's how we helped [Similar Company]'",
        expectedResult: "3x higher open rates, 5x higher click rates than standard campaigns"
      },
      {
        title: "Re-engagement Campaign (Win-Back Series)",
        description: "Bring inactive subscribers back to life",
        steps: [
          "Identify inactive subscribers (no opens in 90 days)",
          "Email 1: 'We miss you!' - Ask what they want to see",
          "Email 2: 'Here's what you missed' - Best content roundup",
          "Email 3: 'Special offer just for you' - Exclusive discount",
          "Email 4: 'Last email' - Honest goodbye or final offer"
        ],
        example: "SaaS company re-activated 18% of dormant accounts worth $30k MRR",
        expectedResult: "15-20% reactivation rate"
      },
      {
        title: "Segmentation Strategy",
        description: "Stop sending one-size-fits-all emails. Personalize by segment.",
        steps: [
          "Segment by industry (HVAC, Legal, Finance, etc.)",
          "Segment by behavior (engaged, inactive, high-value)",
          "Segment by stage (awareness, consideration, decision)",
          "Create unique email copy for each segment",
          "Test and optimize for each group"
        ],
        example: "Landscaping businesses get tips on 'Seasonal Marketing' while HVAC gets 'Emergency Call Optimization'",
        expectedResult: "2.5x higher conversion rates than unsegmented campaigns"
      }
    ],
    caseStudies: [
      {
        company: "Smith HVAC Services",
        industry: "HVAC",
        challenge: "Low email open rates (12%) and poor lead conversion from email campaigns",
        solution: "Implemented behavioral trigger campaigns and 5-email welcome sequence with industry-specific content",
        results: [
          "Open rates increased from 12% to 38%",
          "Email-to-lead conversion up 156%",
          "Generated $85,000 in revenue from email in 6 months",
          "Automated follow-ups recovered 22% of lost quotes"
        ]
      },
      {
        company: "GreenScape Landscaping",
        industry: "Landscaping",
        challenge: "Seasonal business with inconsistent customer engagement during off-season",
        solution: "Created segmented campaigns based on service type and seasonal re-engagement sequences",
        results: [
          "Maintained 65% customer engagement in winter months",
          "Pre-sold $120,000 in spring services through winter emails",
          "Reduced customer churn by 40%",
          "Built waitlist of 200+ customers before spring season"
        ]
      }
    ],
    actualTools: [
      {
        name: "ActiveCampaign",
        description: "Powerful automation with visual builder and advanced segmentation",
        link: "https://www.activecampaign.com",
        pricing: "From $29/mo",
        rating: "4.6/5"
      },
      {
        name: "Klaviyo",
        description: "Best for e-commerce with deep Shopify integration and predictive analytics",
        link: "https://www.klaviyo.com",
        pricing: "Free - $700/mo",
        rating: "4.7/5"
      },
      {
        name: "Mailchimp",
        description: "User-friendly platform perfect for beginners with great templates",
        link: "https://mailchimp.com",
        pricing: "Free - $350/mo",
        rating: "4.3/5"
      },
      {
        name: "ConvertKit",
        description: "Built for creators with simple automation and landing page builder",
        link: "https://convertkit.com",
        pricing: "Free - $79/mo",
        rating: "4.5/5"
      }
    ]
  },
  {
    id: "4",
    title: "Social Media Growth Engine",
    description: "AI-generated content for all platforms",
    setupTime: "15 mins",
    roi: "+30% Engagement",
    cost: "$60/mo",
    tags: ["#SocialMedia", "#Growth"],
    isPro: false,
    icon: "🚀",
    category: "finance",
    longDescription: "Generate and schedule social media content across all platforms. AI creates engaging posts tailored to your audience. Go from 2K to 50K followers in 90 days with proven growth strategies.",
    benefits: ["Multi-platform posting", "Content generation", "Best time scheduling", "Engagement analytics"],
    techniques: [
      {
        title: "The 5-4-1 Content Rule",
        description: "Perfect content mix that drives engagement and growth",
        steps: [
          "5 pieces of curated content (share others' valuable content)",
          "4 pieces of original educational content (tips, how-tos, insights)",
          "1 promotional post (your product/service)",
          "Post 2-3 times per day using this rotation",
          "Track which content types get most engagement"
        ],
        example: "HVAC company: Share 5 home maintenance tips from industry leaders, post 4 original 'AC troubleshooting' videos, 1 post about their services",
        expectedResult: "40% higher engagement, avoids 'salesy' feel, builds authority"
      },
      {
        title: "Hook-Value-CTA Framework",
        description: "The proven formula for viral posts",
        steps: [
          "Hook (First 3 words): Stop the scroll with curiosity or bold claim",
          "Value (Middle): Deliver actionable insight or story",
          "CTA (End): Clear next step (comment, share, click link)",
          "Use line breaks for readability",
          "Add relevant emoji for visual appeal"
        ],
        example: "❌ 'We offer great HVAC services' ✅ 'Your AC is costing you $200/month extra. Here's why: [3 reasons]. Comment 'AUDIT' for a free energy assessment.'",
        expectedResult: "3-5x higher engagement, more comments, increased reach"
      },
      {
        title: "Content Pillar Strategy",
        description: "Build authority with consistent themed content",
        steps: [
          "Identify 4-5 core topics your audience cares about",
          "Create content calendar rotating through pillars",
          "Each pillar gets 1-2 posts per week",
          "Repurpose content across platforms",
          "Track which pillars perform best"
        ],
        example: "Landscaping company pillars: 1) Seasonal tips 2) Before/After transformations 3) Plant care guides 4) Design inspiration 5) Client testimonials",
        expectedResult: "Consistent posting, stronger brand positioning, easier content creation"
      },
      {
        title: "Engagement Pod Strategy",
        description: "Boost reach through strategic engagement groups",
        steps: [
          "Find 10-15 non-competing businesses in your industry",
          "Create private group/chat for mutual support",
          "When someone posts, everyone engages within 30 mins",
          "Like, comment meaningfully, share to stories",
          "Rotate who posts first each day"
        ],
        example: "Local service businesses (plumber, electrician, landscaper, HVAC) support each other's posts",
        expectedResult: "Algorithm boost from early engagement, 2-3x organic reach"
      },
      {
        title: "Video-First Strategy (Reels/TikTok/Shorts)",
        description: "Capitalize on video content priority",
        steps: [
          "Create 15-60 second educational or entertaining videos",
          "Use trending audio but make it relevant to your industry",
          "Add text overlays (80% watch without sound)",
          "Post 1-2 reels per day during peak hours",
          "Repurpose same video to TikTok, YouTube Shorts, Instagram"
        ],
        example: "'POV: When the customer says they fixed it themselves' - HVAC technician reacts to DIY disasters (5M views)",
        expectedResult: "10-50x more reach than static posts, follower growth, virality potential"
      },
      {
        title: "Story Engagement Hacks",
        description: "Use Instagram/Facebook Stories to build connection",
        steps: [
          "Post 5-7 stories per day minimum",
          "Use polls, questions, quizzes (interactive stickers)",
          "Show behind-the-scenes of your business",
          "Share user-generated content",
          "Use 'swipe up' or link stickers strategically"
        ],
        example: "Poll: 'Dealing with AC issues?' A) Won't turn on B) Not cooling C) Strange noise → Follow up with solution video",
        expectedResult: "Higher story completion rates, more DMs, stronger community"
      },
      {
        title: "Hashtag Strategy (The 3-Tier System)",
        description: "Get discovered by the right audience",
        steps: [
          "Tier 1: 3-5 large hashtags (500K+ posts) for broad reach",
          "Tier 2: 10-15 medium hashtags (50K-500K posts) for targeting",
          "Tier 3: 5-10 niche hashtags (<50K posts) for community",
          "Create branded hashtag for your business",
          "Rotate hashtags, don't use same set every time"
        ],
        example: "HVAC: Large: #HomeImprovement Medium: #HVACTech #AirConditioning Niche: #HVACLife #ACRepair Branded: #YourCompanyName",
        expectedResult: "Better discoverability, reach beyond followers, build searchability"
      },
      {
        title: "User-Generated Content Campaign",
        description: "Turn customers into content creators",
        steps: [
          "Create simple hashtag campaign",
          "Incentivize posts (enter to win, discount, feature)",
          "Make it easy: provide templates or prompts",
          "Reshare user content to your feed/stories",
          "Engage with every UGC post"
        ],
        example: "'Show us your #[YourBrand]Home' - customers post photos with your service/product, winner gets $500 credit",
        expectedResult: "Social proof, authentic content, increased trust, 50+ free content pieces"
      }
    ],
    caseStudies: [
      {
        company: "CoolBreeze HVAC",
        industry: "HVAC",
        challenge: "Stagnant social media presence with 2,000 followers and <50 likes per post",
        solution: "Implemented Video-First Strategy with behind-the-scenes content and educational reels using trending audio",
        results: [
          "Grew from 2K to 47K followers in 3 months",
          "Average post engagement: 2,500+ likes",
          "Generated 180+ service calls from social media",
          "One viral reel reached 3.2M views",
          "Reduced customer acquisition cost by 60%"
        ]
      },
      {
        company: "Elite Landscaping Co",
        industry: "Landscaping",
        challenge: "Seasonal business struggling with off-season engagement and booking",
        solution: "Deployed Content Pillar Strategy with before/after transformations and seasonal planning content",
        results: [
          "Built audience from 5K to 35K in 6 months",
          "Pre-sold $250,000 in spring contracts during winter",
          "User-generated content campaign yielded 200+ customer posts",
          "Instagram became #1 lead source (45% of inquiries)",
          "Average engagement rate: 8.5% (industry avg: 1.2%)"
        ]
      },
      {
        company: "Metro Legal Group",
        industry: "Legal",
        challenge: "Seen as 'boring' industry, hard to create engaging content, low social media ROI",
        solution: "Used Hook-Value-CTA Framework with legal myth-busting content and client success stories",
        results: [
          "Grew LinkedIn from 800 to 12,000 followers",
          "Generated 25 high-value clients (avg. $15K/case)",
          "Content shared 1,000+ times by other professionals",
          "Positioned as thought leader in employment law",
          "Speaking opportunities at 3 major industry events"
        ]
      }
    ],
    actualTools: [
      {
        name: "Buffer",
        description: "Simple social media scheduler with analytics across all platforms",
        link: "https://buffer.com",
        pricing: "Free - $120/mo",
        rating: "4.5/5"
      },
      {
        name: "Hootsuite",
        description: "Enterprise-level social media management with team collaboration",
        link: "https://hootsuite.com",
        pricing: "From $99/mo",
        rating: "4.3/5"
      },
      {
        name: "Later",
        description: "Visual Instagram planner with drag-and-drop calendar and link in bio",
        link: "https://later.com",
        pricing: "Free - $80/mo",
        rating: "4.6/5"
      },
      {
        name: "Sprout Social",
        description: "Premium social media suite with deep analytics and CRM integration",
        link: "https://sproutsocial.com",
        pricing: "From $249/mo",
        rating: "4.4/5"
      },
      {
        name: "Canva",
        description: "Design tool with social media templates and scheduling built-in",
        link: "https://canva.com",
        pricing: "Free - $55/mo",
        rating: "4.8/5"
      }
    ]
  },
  {
    id: "5",
    title: "Customer Review Automation",
    description: "Automate review requests & responses",
    setupTime: "25 mins",
    roi: "+40% Reviews",
    cost: "$45/mo",
    tags: ["#Reviews", "#Growth"],
    isPro: true,
    icon: "⭐",
    category: "hvac",
    longDescription: "Automatically request reviews after service completion and respond to reviews with AI-generated personalized messages.",
    benefits: ["Automated requests", "Review monitoring", "AI responses", "Reputation boost"]
  },
  {
    id: "6",
    title: "SEO Content Generator",
    description: "AI-written blog posts & landing pages",
    setupTime: "40 mins",
    roi: "+50% Organic Traffic",
    cost: "$90/mo",
    tags: ["#SEO", "#Growth"],
    isPro: true,
    icon: "✍️",
    category: "accounting",
    longDescription: "Generate SEO-optimized content that ranks on Google. Perfect for businesses looking to increase organic traffic.",
    benefits: ["SEO optimization", "Keyword research", "Content calendar", "Traffic analytics"]
  }
];

export const techRyboksTools: Tool[] = [
  {
    id: "tr1",
    title: "CRM Integration Platform",
    description: "Connect all your tools in one place",
    setupTime: "45 mins",
    roi: "+35% Efficiency",
    cost: "$150/mo",
    tags: ["#Integration", "#Tech"],
    isPro: true,
    icon: "🔗",
    category: "accounting",
    longDescription: "Integrate your CRM with email, phone, and marketing tools. One platform to manage all customer interactions.",
    benefits: ["Unified dashboard", "Data synchronization", "Workflow automation", "Custom integrations"]
  },
  {
    id: "tr2",
    title: "Business Intelligence Dashboard",
    description: "Real-time analytics for growth decisions",
    setupTime: "30 mins",
    roi: "Time Saved: 10 hrs/week",
    cost: "$120/mo",
    tags: ["#Analytics", "#Tech"],
    isPro: true,
    icon: "📊",
    category: "finance",
    longDescription: "Make data-driven decisions with real-time analytics. Track revenue, leads, and performance metrics in one place.",
    benefits: ["Real-time reporting", "Custom dashboards", "Predictive analytics", "Export reports"]
  },
  {
    id: "tr3",
    title: "AI Document Automation",
    description: "Generate contracts & proposals instantly",
    setupTime: "20 mins",
    roi: "+60% Faster",
    cost: "$75/mo",
    tags: ["#Automation", "#Tech"],
    isPro: false,
    icon: "📄",
    category: "accounting",
    longDescription: "Automate document creation with AI. Generate contracts, proposals, and invoices with one click.",
    benefits: ["Template library", "E-signature integration", "Version control", "Client portal"]
  },
  {
    id: "tr4",
    title: "Inventory Management System",
    description: "Track stock & automate reordering",
    setupTime: "60 mins",
    roi: "Cost Savings: $500/mo",
    cost: "$95/mo",
    tags: ["#Inventory", "#Tech"],
    isPro: true,
    icon: "📦",
    category: "hvac",
    longDescription: "Never run out of stock again. Automated inventory tracking with smart reordering and supplier integration.",
    benefits: ["Real-time tracking", "Auto reordering", "Supplier integration", "Mobile app"]
  }
];

export interface PlaybookFilter {
  id: string;
  label: string;
  checked: boolean;
}

export const playbookFilters: PlaybookFilter[] = [
  { id: "hvac", label: "HVAC", checked: false },
  { id: "legal", label: "Legal", checked: false },
  { id: "accounting", label: "Accounting", checked: false },
  { id: "finance", label: "Finance", checked: false },
  { id: "landscaping", label: "Landscaping", checked: false }
];

// Operations Tools for improving business efficiency
export const operationsTools: Tool[] = [
  {
    id: "op1",
    title: "Smart Scheduling & Appointment Management",
    description: "AI-powered scheduling that eliminates double bookings",
    setupTime: "25 mins",
    roi: "+8 hrs/week",
    cost: "$65/mo",
    tags: ["#Scheduling", "#Operations"],
    isPro: false,
    icon: "📅",
    category: "hvac",
    longDescription: "Eliminate scheduling chaos with AI-powered calendar management. Automated appointment booking, smart conflict resolution, and real-time availability for field service businesses.",
    benefits: ["24/7 online booking", "Automated reminders", "Route optimization", "Calendar synchronization"],
    techniques: [
      {
        title: "Appointment Buffer Strategy",
        description: "Prevent burnout and delays by intelligently spacing appointments",
        steps: [
          "Set up 15-30 min buffers between appointments for travel",
          "Configure AI to suggest optimal appointment times based on location",
          "Allow emergency slots (20% of daily capacity)",
          "Block lunch/admin time automatically",
          "Enable dynamic rescheduling for delays"
        ],
        example: "HVAC company reduced late arrivals by 85% by adding smart buffers between service calls",
        expectedResult: "90% on-time arrival rate, happier customers, less stressed technicians"
      },
      {
        title: "Automated Follow-Up Sequence",
        description: "Keep customers informed every step of the way",
        steps: [
          "24 hours before: Confirmation SMS with technician photo",
          "Morning of: 'We're on our way' with ETA",
          "During visit: Job status updates",
          "After completion: Service summary + review request",
          "1 week later: 'How's everything working?' check-in"
        ],
        example: "Landscaping business saw 40% increase in repeat bookings with automated follow-ups",
        expectedResult: "95% customer satisfaction, 35% more repeat business"
      },
      {
        title: "Dynamic Pricing by Demand",
        description: "Maximize revenue by adjusting prices based on availability",
        steps: [
          "Set base pricing for standard time slots",
          "Offer 10-15% discount for off-peak times",
          "Add premium (20-30%) for same-day/emergency",
          "Auto-suggest cheaper times to price-sensitive customers",
          "Track which times convert best"
        ],
        example: "Fill slow Tuesdays with discount incentives while charging premium for urgent Friday requests",
        expectedResult: "20-25% revenue increase, better capacity utilization"
      }
    ],
    caseStudies: [
      {
        company: "Precision HVAC",
        industry: "HVAC",
        challenge: "Manual scheduling led to double bookings, missed appointments, and angry customers. Office staff spent 15+ hours/week on scheduling.",
        solution: "Implemented AI scheduling with online booking, automated reminders, and route optimization",
        results: [
          "Reduced scheduling time from 15 hrs to 2 hrs per week",
          "Double bookings dropped to zero",
          "No-show rate decreased from 18% to 3%",
          "Completed 25% more jobs per week",
          "Customer satisfaction up 42%"
        ]
      }
    ],
    actualTools: [
      {
        name: "Jobber",
        description: "All-in-one field service software with scheduling, invoicing, and client management",
        link: "https://getjobber.com",
        pricing: "From $49/mo",
        rating: "4.6/5"
      },
      {
        name: "Housecall Pro",
        description: "Field service management platform with automated dispatch and GPS tracking",
        link: "https://www.housecallpro.com",
        pricing: "From $49/mo",
        rating: "4.7/5"
      },
      {
        name: "ServiceTitan",
        description: "Enterprise-level platform for HVAC, plumbing, and electrical businesses",
        link: "https://www.servicetitan.com",
        pricing: "Custom pricing",
        rating: "4.5/5"
      },
      {
        name: "Calendly",
        description: "Simple scheduling tool with automated reminders and calendar integration",
        link: "https://calendly.com",
        pricing: "Free - $16/mo",
        rating: "4.7/5"
      }
    ]
  },
  {
    id: "op2",
    title: "Automated Invoicing & Payment Processing",
    description: "Get paid faster with smart invoice automation",
    setupTime: "30 mins",
    roi: "25% faster payments",
    cost: "$55/mo",
    tags: ["#Invoicing", "#Operations"],
    isPro: false,
    icon: "💰",
    category: "accounting",
    longDescription: "Stop chasing payments. Automated invoice generation, payment reminders, and instant online payment processing. Reduce outstanding invoices by 60%.",
    benefits: ["Instant invoicing", "Online payments", "Auto reminders", "Payment tracking"],
    techniques: [
      {
        title: "Same-Day Invoicing Protocol",
        description: "Send invoices within 2 hours of job completion for 40% faster payment",
        steps: [
          "Technician completes digital job form on-site",
          "System auto-generates invoice from job data",
          "Invoice emailed to customer within 2 hours",
          "Include 'Pay Now' button for instant payment",
          "Auto-send reminder if unpaid after 3 days"
        ],
        example: "Legal firm reduced average payment time from 45 days to 18 days with same-day invoicing",
        expectedResult: "Payment time reduced by 40-50%, better cash flow"
      },
      {
        title: "Payment Plan Automation",
        description: "Offer flexible payment options that increase close rates",
        steps: [
          "For jobs over $500, auto-offer payment plans",
          "Split into 2-4 installments with auto-charging",
          "Send payment schedule confirmation",
          "Auto-charge saved card on due dates",
          "Alert if payment fails with retry option"
        ],
        example: "HVAC company increased large job acceptance from 60% to 85% by offering automatic payment plans",
        expectedResult: "30% increase in large job conversions, predictable revenue"
      },
      {
        title: "Discount for Early Payment",
        description: "Incentivize fast payment with strategic discounts",
        steps: [
          "Offer 5% discount if paid within 48 hours",
          "Display discount prominently in invoice",
          "Auto-apply discount if conditions met",
          "Send 'discount expiring' reminder at 36 hours",
          "Track which customers respond to incentives"
        ],
        example: "Landscaping business: 65% of customers paid within 2 days to get discount, improving cash flow",
        expectedResult: "60-70% of invoices paid within 48 hours"
      }
    ],
    caseStudies: [
      {
        company: "Summit Legal Services",
        industry: "Legal",
        challenge: "Average invoice payment time was 52 days. $180K in outstanding invoices at any time. Staff spent 10 hours/week chasing payments.",
        solution: "Deployed automated invoicing with same-day sending, payment plans, and early payment discounts",
        results: [
          "Payment time reduced from 52 to 19 days",
          "Outstanding invoices down to $45K",
          "97% of invoices now paid within 30 days",
          "Saved $78K annually in improved cash flow",
          "Virtually eliminated collections process"
        ]
      },
      {
        company: "QuickFix HVAC",
        industry: "HVAC",
        challenge: "Technicians forgot to send invoices, leading to $25K in unbilled work. Manual invoicing took 5+ hours per week.",
        solution: "Automated invoice generation triggered by completed job forms, with instant email and payment links",
        results: [
          "Zero unbilled work - all jobs invoiced same day",
          "Online payment adoption: 78% of customers",
          "Invoicing time reduced from 5 hrs to 15 mins/week",
          "Average payment time: 12 days vs. 35 days before",
          "Increased cash flow by $38K in first quarter"
        ]
      }
    ],
    actualTools: [
      {
        name: "QuickBooks Online",
        description: "Industry-standard accounting software with automated invoicing and payment processing",
        link: "https://quickbooks.intuit.com",
        pricing: "From $30/mo",
        rating: "4.3/5"
      },
      {
        name: "FreshBooks",
        description: "User-friendly invoicing with automated reminders and expense tracking",
        link: "https://www.freshbooks.com",
        pricing: "From $17/mo",
        rating: "4.5/5"
      },
      {
        name: "Wave",
        description: "Free invoicing and accounting software, perfect for small businesses",
        link: "https://www.waveapps.com",
        pricing: "Free (2.9% + $0.60 per payment)",
        rating: "4.4/5"
      },
      {
        name: "Zoho Invoice",
        description: "Automated invoicing with multi-currency support and client portal",
        link: "https://www.zoho.com/invoice",
        pricing: "Free - $249/mo",
        rating: "4.6/5"
      }
    ]
  },
  {
    id: "op3",
    title: "Field Service & Workforce Management",
    description: "GPS tracking, time tracking, and dispatch optimization",
    setupTime: "45 mins",
    roi: "12 hrs/week saved",
    cost: "$85/mo",
    tags: ["#FieldService", "#Operations"],
    isPro: true,
    icon: "🚛",
    category: "landscaping",
    longDescription: "Manage your mobile workforce with real-time GPS tracking, automated time sheets, and intelligent dispatch. Know where every technician is and optimize routes to complete 30% more jobs.",
    benefits: ["Real-time GPS tracking", "Automated timesheets", "Route optimization", "Mobile app for technicians"],
    techniques: [
      {
        title: "Zone-Based Dispatch",
        description: "Reduce drive time by 40% with geographic assignment",
        steps: [
          "Divide service area into zones (5-10 zones)",
          "Assign technicians to specific zones",
          "Stack appointments within same zone",
          "Use GPS data to find closest available tech",
          "Allow cross-zone only for emergencies"
        ],
        example: "HVAC company reduced daily drive time from 4.5 hours to 2.5 hours per technician",
        expectedResult: "40% less drive time, 3-4 more jobs per technician daily"
      },
      {
        title: "Real-Time Job Updates",
        description: "Keep customers informed and reduce 'where are you?' calls",
        steps: [
          "Tech checks in when starting job (GPS verified)",
          "Customer gets 'Technician arrived' notification",
          "Status updates: 'Diagnosing', 'Working', 'Complete'",
          "Auto-send photo of completed work",
          "Collect digital signature on mobile device"
        ],
        example: "Landscaping company eliminated 80% of 'status check' calls from customers",
        expectedResult: "Reduced office calls by 70%, higher customer satisfaction"
      },
      {
        title: "Automated Time Tracking & Payroll",
        description: "Eliminate time theft and payroll errors",
        steps: [
          "Techs clock in/out via mobile app (GPS verified)",
          "System tracks time at each job site",
          "Auto-calculate overtime and breaks",
          "Export timesheet data to payroll system",
          "Alert manager if time entries look suspicious"
        ],
        example: "Business discovered 8-12 hours/week of 'time inflation' and corrected it, saving $2,400/month",
        expectedResult: "100% accurate timesheets, payroll time cut by 90%"
      }
    ],
    caseStudies: [
      {
        company: "GreenPro Landscaping",
        industry: "Landscaping",
        challenge: "Crews spending 30% of day driving. No visibility into job progress. Customers calling constantly asking 'when will you arrive?'",
        solution: "Implemented GPS tracking with zone-based dispatch and real-time customer notifications",
        results: [
          "Drive time reduced from 30% to 15% of workday",
          "Completed 22% more jobs with same crew size",
          "Customer 'status check' calls down 85%",
          "Increased revenue by $95K annually",
          "Crew accountability improved dramatically"
        ]
      }
    ],
    actualTools: [
      {
        name: "Workiz",
        description: "Field service CRM with GPS tracking, dispatch, and mobile app",
        link: "https://www.workiz.com",
        pricing: "From $99/mo",
        rating: "4.8/5"
      },
      {
        name: "FieldPulse",
        description: "Complete field service management with scheduling and invoicing",
        link: "https://www.fieldpulse.com",
        pricing: "From $79/mo",
        rating: "4.6/5"
      },
      {
        name: "Connecteam",
        description: "Employee management app with GPS tracking and time clock",
        link: "https://connecteam.com",
        pricing: "Free - $99/mo",
        rating: "4.8/5"
      },
      {
        name: "Samsara",
        description: "Fleet management with GPS tracking and route optimization",
        link: "https://www.samsara.com",
        pricing: "Custom pricing",
        rating: "4.5/5"
      }
    ]
  },
  {
    id: "op4",
    title: "Document Automation & E-Signature",
    description: "Generate contracts & proposals in seconds",
    setupTime: "35 mins",
    roi: "10 hrs/week saved",
    cost: "$70/mo",
    tags: ["#Documents", "#Operations"],
    isPro: false,
    icon: "📝",
    category: "legal",
    longDescription: "Stop manually creating documents. AI-powered templates auto-fill with customer data. Send for e-signature and get signed contracts back in hours, not days.",
    benefits: ["Smart templates", "E-signature integration", "Auto-fill data", "Version control"],
    techniques: [
      {
        title: "Template Library Strategy",
        description: "Create reusable templates for every document type",
        steps: [
          "Identify 10-15 most common documents",
          "Create smart templates with auto-fill fields",
          "Set up conditional sections (if/then logic)",
          "Test templates with real customer data",
          "Train team on which template to use when"
        ],
        example: "Legal firm created 12 templates covering 85% of their document needs, reducing drafting time by 70%",
        expectedResult: "80% of documents created in under 5 minutes"
      },
      {
        title: "Auto-Send for Signature",
        description: "Eliminate 'waiting for signature' delays",
        steps: [
          "Generate document from CRM/job data",
          "Auto-send via email with 'Sign Now' button",
          "Send reminder if not signed within 24 hours",
          "Second reminder at 48 hours with urgency",
          "Notify team immediately when signed"
        ],
        example: "HVAC company reduced contract turnaround from 5 days to 8 hours with automated signature requests",
        expectedResult: "90% of documents signed within 24 hours"
      },
      {
        title: "Mobile-First Signing",
        description: "Get signatures on-site for instant commitment",
        steps: [
          "Equip technicians with tablets/phones",
          "Generate proposal during site visit",
          "Review and sign before leaving property",
          "Instantly email signed copy to customer",
          "Auto-trigger next steps (scheduling, invoicing)"
        ],
        example: "Landscaping company increased same-day close rate from 40% to 78% with mobile proposals",
        expectedResult: "70-80% same-day close rate, fewer 'think about it' situations"
      }
    ],
    caseStudies: [
      {
        company: "Thompson & Associates Law",
        industry: "Legal",
        challenge: "Attorneys spending 12+ hours/week drafting similar contracts. Average document turnaround: 3-5 days.",
        solution: "Built template library with auto-fill from case management system and integrated e-signature",
        results: [
          "Document creation time reduced by 85%",
          "Attorneys saved 10 hours/week each",
          "Contract turnaround reduced to same-day",
          "Client satisfaction up 35%",
          "Firm took on 20% more cases with same staff"
        ]
      },
      {
        company: "Elite HVAC Solutions",
        industry: "HVAC",
        challenge: "Techs creating proposals on paper, bringing back to office for typing. 30% of estimates never closed due to delays.",
        solution: "Mobile proposal app with e-signature capability for on-site closing",
        results: [
          "Proposal creation time: 30 mins → 5 mins",
          "Same-day close rate: 42% → 81%",
          "Eliminated all paper proposals",
          "Revenue increase: $180K annually",
          "Customer complaints about delays down 90%"
        ]
      }
    ],
    actualTools: [
      {
        name: "DocuSign",
        description: "Industry-leading e-signature platform with mobile app and integrations",
        link: "https://www.docusign.com",
        pricing: "From $10/mo per user",
        rating: "4.5/5"
      },
      {
        name: "PandaDoc",
        description: "Document automation with templates, e-signatures, and payment collection",
        link: "https://www.pandadoc.com",
        pricing: "From $19/mo per user",
        rating: "4.6/5"
      },
      {
        name: "Proposify",
        description: "Proposal software with beautiful templates and analytics",
        link: "https://www.proposify.com",
        pricing: "From $49/mo",
        rating: "4.5/5"
      },
      {
        name: "HelloSign",
        description: "Simple e-signature solution with API for custom integrations",
        link: "https://www.hellosign.com",
        pricing: "Free - $15/mo",
        rating: "4.7/5"
      }
    ]
  },
  {
    id: "op5",
    title: "Inventory & Parts Management",
    description: "Never run out of parts with auto-reorder",
    setupTime: "50 mins",
    roi: "$800/mo saved",
    cost: "$75/mo",
    tags: ["#Inventory", "#Operations"],
    isPro: true,
    icon: "📦",
    category: "hvac",
    longDescription: "Track parts in real-time, automate reordering, and never lose revenue to stockouts. Perfect for HVAC and field service businesses with vehicle inventory.",
    benefits: ["Real-time tracking", "Auto-reorder", "Mobile access", "Supplier integration"],
    techniques: [
      {
        title: "Par Level System",
        description: "Maintain optimal inventory with automatic restock triggers",
        steps: [
          "Identify top 50 most-used parts",
          "Set minimum (par) levels for each",
          "System alerts when stock hits par level",
          "Auto-generate purchase order",
          "Track lead times to reorder before stockout"
        ],
        example: "HVAC company reduced emergency part orders (3x cost) by 90% with par level automation",
        expectedResult: "Zero stockouts, 25% reduction in inventory costs"
      },
      {
        title: "Truck Stock Optimization",
        description: "Ensure technicians have right parts on their truck",
        steps: [
          "Analyze completed jobs to see most-used parts",
          "Create 'truck stock' list of must-have items",
          "Techs scan parts used at each job",
          "System shows what to restock each morning",
          "Track first-time fix rate by technician"
        ],
        example: "Increased first-time fix rate from 68% to 91%, reducing return visits and labor costs",
        expectedResult: "85-95% first-time fix rate, fewer parts runs"
      },
      {
        title: "Supplier Integration",
        description: "Auto-order from suppliers when stock runs low",
        steps: [
          "Connect inventory system to supplier APIs",
          "Set up auto-approval for orders under $500",
          "System places orders automatically",
          "Track expected delivery dates",
          "Alert if shipment delayed"
        ],
        example: "Reduced time spent ordering parts from 8 hours/week to 30 minutes/week",
        expectedResult: "90% less time on procurement, better pricing through consistent orders"
      }
    ],
    caseStudies: [
      {
        company: "CoolTech HVAC",
        industry: "HVAC",
        challenge: "Frequent stockouts forced emergency orders at 3x normal cost. Technicians making 2-3 parts runs per day. $2,500/month wasted on rush deliveries.",
        solution: "Implemented inventory management with par levels, truck stock optimization, and supplier integration",
        results: [
          "Emergency orders eliminated (saving $2,200/mo)",
          "First-time fix rate increased from 65% to 92%",
          "Parts runs reduced from 15/week to 1/week",
          "Completed 18% more jobs (less driving for parts)",
          "ROI: System paid for itself in 6 weeks"
        ]
      }
    ],
    actualTools: [
      {
        name: "Sortly",
        description: "Visual inventory management with barcode scanning and mobile app",
        link: "https://www.sortly.com",
        pricing: "From $49/mo",
        rating: "4.6/5"
      },
      {
        name: "Fishbowl",
        description: "Manufacturing and warehouse inventory management with QuickBooks integration",
        link: "https://www.fishbowlinventory.com",
        pricing: "From $329/mo",
        rating: "4.1/5"
      },
      {
        name: "inFlow Inventory",
        description: "Inventory management for small businesses with purchase orders and reporting",
        link: "https://www.inflowinventory.com",
        pricing: "From $89/mo",
        rating: "4.5/5"
      },
      {
        name: "ServiceTitan Inventory",
        description: "Inventory module built for field service businesses",
        link: "https://www.servicetitan.com",
        pricing: "Part of ServiceTitan package",
        rating: "4.5/5"
      }
    ]
  },
  {
    id: "op6",
    title: "Client Portal & Communication Hub",
    description: "Self-service portal reduces support calls by 60%",
    setupTime: "40 mins",
    roi: "15 hrs/week saved",
    cost: "$90/mo",
    tags: ["#ClientPortal", "#Operations"],
    isPro: true,
    icon: "🌐",
    category: "finance",
    longDescription: "Give clients 24/7 access to documents, invoices, appointments, and service history. Reduce support calls and improve transparency.",
    benefits: ["24/7 self-service", "Document library", "Payment portal", "Appointment booking"],
    techniques: [
      {
        title: "Self-Service First Strategy",
        description: "Deflect routine inquiries to portal, freeing staff for complex issues",
        steps: [
          "Add FAQs and knowledge base to portal",
          "Enable appointment rescheduling",
          "Allow invoice viewing and payment",
          "Provide access to service history",
          "Track most common self-service actions"
        ],
        example: "Accounting firm reduced 'what's my balance?' calls from 40/week to 5/week",
        expectedResult: "60% reduction in routine support calls"
      },
      {
        title: "Proactive Communication",
        description: "Update clients automatically before they ask",
        steps: [
          "Auto-post appointment reminders to portal",
          "Upload service reports immediately after job",
          "Show real-time technician location (day of service)",
          "Post invoices instantly when generated",
          "Send portal notification for any new item"
        ],
        example: "Legal firm clients check portal 3-5x/week instead of calling for case updates",
        expectedResult: "75% fewer 'status update' calls, higher client satisfaction"
      }
    ],
    caseStudies: [
      {
        company: "Prestige Financial Advisors",
        industry: "Finance",
        challenge: "Clients calling/emailing constantly for documents, account status, appointment changes. Staff spent 20+ hours/week responding.",
        solution: "Launched client portal with document library, appointment booking, and secure messaging",
        results: [
          "Support calls reduced by 68%",
          "Client satisfaction score: 4.2 → 4.8",
          "Staff time saved: 18 hours/week",
          "92% of clients actively use portal",
          "Positioned firm as 'tech-forward' to attract younger clients"
        ]
      }
    ],
    actualTools: [
      {
        name: "Copilot",
        description: "Client portal for service businesses with payments and messaging",
        link: "https://www.copilot.com",
        pricing: "From $25/mo",
        rating: "4.7/5"
      },
      {
        name: "HoneyBook",
        description: "Client management with portal, contracts, and invoicing",
        link: "https://www.honeybook.com",
        pricing: "From $16/mo",
        rating: "4.6/5"
      },
      {
        name: "17hats",
        description: "Business management platform with built-in client portal",
        link: "https://www.17hats.com",
        pricing: "From $45/mo",
        rating: "4.5/5"
      }
    ]
  }
];

export const operationsTechTools: Tool[] = [
  {
    id: "opt1",
    title: "Project Management Automation",
    description: "Visual project tracking with automated workflows",
    setupTime: "30 mins",
    roi: "20 hrs/week saved",
    cost: "$100/mo",
    tags: ["#ProjectMgmt", "#Operations"],
    isPro: true,
    icon: "📊",
    category: "accounting",
    longDescription: "Manage projects from start to finish with automated task assignments, deadline reminders, and progress tracking. Perfect for accounting and legal firms.",
    benefits: ["Task automation", "Team collaboration", "Progress tracking", "File sharing"],
    actualTools: [
      {
        name: "Monday.com",
        description: "Visual project management with customizable workflows and automations",
        link: "https://monday.com",
        pricing: "From $9/mo per user",
        rating: "4.7/5"
      },
      {
        name: "Asana",
        description: "Powerful project management with timeline views and dependencies",
        link: "https://asana.com",
        pricing: "Free - $24.99/mo per user",
        rating: "4.5/5"
      },
      {
        name: "ClickUp",
        description: "All-in-one productivity platform with docs, tasks, and goals",
        link: "https://clickup.com",
        pricing: "Free - $19/mo per user",
        rating: "4.7/5"
      }
    ]
  },
  {
    id: "opt2",
    title: "Customer Communication Platform",
    description: "Unified inbox for email, SMS, and chat",
    setupTime: "25 mins",
    roi: "10 hrs/week saved",
    cost: "$65/mo",
    tags: ["#Communication", "#Operations"],
    isPro: false,
    icon: "💬",
    category: "legal",
    longDescription: "Never miss a customer message. All communication channels in one place with automated responses and team collaboration.",
    benefits: ["Unified inbox", "Auto-responses", "Team collaboration", "Message templates"],
    actualTools: [
      {
        name: "Front",
        description: "Shared inbox for teams with email, SMS, and social media",
        link: "https://front.com",
        pricing: "From $19/mo per user",
        rating: "4.6/5"
      },
      {
        name: "Hiver",
        description: "Gmail-based shared inbox with assignment and tracking",
        link: "https://hiverhq.com",
        pricing: "From $15/mo per user",
        rating: "4.6/5"
      },
      {
        name: "Gorgias",
        description: "Customer service platform for e-commerce with automation",
        link: "https://www.gorgias.com",
        pricing: "From $10/mo",
        rating: "4.6/5"
      }
    ]
  },
  {
    id: "opt3",
    title: "Automated Reporting & Analytics",
    description: "Real-time dashboards for business insights",
    setupTime: "45 mins",
    roi: "Track KPIs instantly",
    cost: "$110/mo",
    tags: ["#Analytics", "#Operations"],
    isPro: true,
    icon: "📈",
    category: "finance",
    longDescription: "Make data-driven decisions with automated reporting. Track revenue, jobs completed, customer satisfaction, and team performance in real-time.",
    benefits: ["Real-time dashboards", "Custom reports", "Data visualization", "Goal tracking"],
    actualTools: [
      {
        name: "Databox",
        description: "Business analytics platform with 70+ integrations",
        link: "https://databox.com",
        pricing: "Free - $231/mo",
        rating: "4.6/5"
      },
      {
        name: "Klipfolio",
        description: "Dashboard and reporting tool with real-time data",
        link: "https://www.klipfolio.com",
        pricing: "From $90/mo",
        rating: "4.5/5"
      },
      {
        name: "Google Data Studio",
        description: "Free reporting tool that connects to Google services",
        link: "https://datastudio.google.com",
        pricing: "Free",
        rating: "4.4/5"
      }
    ]
  },
  {
    id: "opt4",
    title: "Route Optimization Software",
    description: "Save fuel and time with optimized routing",
    setupTime: "35 mins",
    roi: "30% less drive time",
    cost: "$80/mo",
    tags: ["#Routing", "#Operations"],
    isPro: false,
    icon: "🗺️",
    category: "landscaping",
    longDescription: "Reduce drive time by up to 40% with AI-powered route optimization. Perfect for field service businesses making multiple stops per day.",
    benefits: ["Route optimization", "Live traffic updates", "Multiple stops", "Fuel savings"],
    actualTools: [
      {
        name: "Route4Me",
        description: "Multi-stop route planner with optimization and tracking",
        link: "https://route4me.com",
        pricing: "From $149/mo",
        rating: "4.5/5"
      },
      {
        name: "OptimoRoute",
        description: "Route optimization with real-time tracking and customer notifications",
        link: "https://optimoroute.com",
        pricing: "From $35.90/mo per driver",
        rating: "4.7/5"
      },
      {
        name: "WorkWave Route Manager",
        description: "Route planning software for field service businesses",
        link: "https://www.workwave.com",
        pricing: "From $49/mo per vehicle",
        rating: "4.4/5"
      }
    ]
  }
];

export const growthArticles: Article[] = [
  {
    id: "a1",
    title: "10 AI Tools That Doubled Our Revenue in 6 Months",
    excerpt: "How we leveraged AI automation to scale from $50K to $100K monthly recurring revenue without hiring more staff.",
    category: "hvac",
    readTime: "8 min read",
    author: "Sarah Johnson",
    date: "Jan 5, 2026",
    content: "Full article content here..."
  },
  {
    id: "a2",
    title: "From Cold Leads to Hot Customers: AI Email Strategies",
    excerpt: "The exact email automation workflow that converts 35% of cold leads into paying customers.",
    category: "finance",
    readTime: "6 min read",
    author: "Michael Chen",
    date: "Jan 3, 2026",
    content: "Full article content here..."
  },
  {
    id: "a3",
    title: "How AI Chatbots Generated 200+ Qualified Leads",
    excerpt: "Our step-by-step guide to deploying AI chatbots that actually convert website visitors into customers.",
    category: "legal",
    readTime: "10 min read",
    author: "Emily Rodriguez",
    date: "Dec 28, 2025",
    content: "Full article content here..."
  },
  {
    id: "a4",
    title: "SEO Automation: Rank #1 Without Writing Content",
    excerpt: "The AI-powered SEO strategy that got us to #1 on Google for 15 competitive keywords in 90 days.",
    category: "accounting",
    readTime: "12 min read",
    author: "David Kim",
    date: "Dec 25, 2025",
    content: "Full article content here..."
  },
  {
    id: "a5",
    title: "Social Media on Autopilot: 50K Followers in 3 Months",
    excerpt: "How we used AI to grow our social media following from 2K to 50K while posting just 15 minutes per day.",
    category: "landscaping",
    readTime: "7 min read",
    author: "Lisa Martinez",
    date: "Dec 20, 2025",
    content: "Full article content here..."
  },
  {
    id: "a6",
    title: "The Customer Review System That Boosted Our Sales 40%",
    excerpt: "Why automated review collection is the most underrated growth strategy for local businesses.",
    category: "hvac",
    readTime: "5 min read",
    author: "James Wilson",
    date: "Dec 18, 2025",
    content: "Full article content here..."
  }
];

export const operationsArticles: Article[] = [
  {
    id: "op-a1",
    title: "How We Cut Scheduling Time from 15 Hours to 2 Hours Per Week",
    excerpt: "The AI scheduling system that eliminated double bookings and increased our job completion rate by 25%.",
    category: "hvac",
    readTime: "7 min read",
    author: "Marcus Thompson",
    date: "Jan 7, 2026",
    content: "Full article content here..."
  },
  {
    id: "op-a2",
    title: "Stop Chasing Payments: Get Invoices Paid in 48 Hours",
    excerpt: "Our automated invoicing strategy reduced average payment time from 45 days to 18 days.",
    category: "accounting",
    readTime: "9 min read",
    author: "Jennifer Lee",
    date: "Jan 4, 2026",
    content: "Full article content here..."
  },
  {
    id: "op-a3",
    title: "GPS Tracking Increased Our Revenue by $95K Annually",
    excerpt: "How real-time workforce management helped us complete 22% more jobs with the same crew.",
    category: "landscaping",
    readTime: "8 min read",
    author: "Carlos Rivera",
    date: "Jan 1, 2026",
    content: "Full article content here..."
  },
  {
    id: "op-a4",
    title: "From 5 Days to Same-Day: Document Automation for Law Firms",
    excerpt: "How we reduced contract turnaround time by 85% and took on 20% more cases.",
    category: "legal",
    readTime: "10 min read",
    author: "Rachel Foster",
    date: "Dec 29, 2025",
    content: "Full article content here..."
  },
  {
    id: "op-a5",
    title: "Never Run Out of Parts Again: Inventory Management That Works",
    excerpt: "The par level system that eliminated our $2,500/month in emergency part orders.",
    category: "hvac",
    readTime: "6 min read",
    author: "Tom Bradley",
    date: "Dec 26, 2025",
    content: "Full article content here..."
  },
  {
    id: "op-a6",
    title: "Client Portals Reduced Our Support Calls by 68%",
    excerpt: "Give clients what they want: 24/7 self-service access to everything they need.",
    category: "finance",
    readTime: "5 min read",
    author: "Amanda Peterson",
    date: "Dec 22, 2025",
    content: "Full article content here..."
  }
];
