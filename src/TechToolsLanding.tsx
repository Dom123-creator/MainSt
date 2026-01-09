import { useState } from "react";
import { Footer } from "./components/Footer";

interface ImplementationStep {
  title: string;
  description: string;
  code?: string;
  tips?: string[];
}

interface Tool {
  name: string;
  tagline: string;
  pricing: string;
  bestFor: string;
  link: string;
  rating: string;
  logo: string;
  setupTime: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  steps: ImplementationStep[];
  features: string[];
  pros: string[];
  cons: string[];
}

export function TechToolsLanding() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      name: "Tawk.to",
      tagline: "100% Free Live Chat Software",
      pricing: "Free Forever",
      bestFor: "Small businesses and startups on a budget",
      link: "https://www.tawk.to",
      rating: "4.7/5",
      logo: "💬",
      setupTime: "10 minutes",
      difficulty: "Easy",
      features: [
        "Unlimited agents",
        "Unlimited chats",
        "Mobile apps (iOS & Android)",
        "Customizable widget",
        "Visitor monitoring",
        "Pre-chat surveys",
        "Triggers & shortcuts",
        "Knowledge base"
      ],
      pros: [
        "Completely free with no hidden costs",
        "Easy setup and intuitive interface",
        "Mobile apps for on-the-go support",
        "No visitor/conversation limits"
      ],
      cons: [
        "Limited customization compared to premium tools",
        "Basic reporting features",
        "No advanced AI features"
      ],
      steps: [
        {
          title: "Step 1: Create Your Free Account",
          description: "Visit tawk.to and sign up with your email. No credit card required.",
          tips: [
            "Use your business email for better organization",
            "Choose a strong password with 2FA enabled",
            "Verify your email immediately to unlock all features"
          ]
        },
        {
          title: "Step 2: Set Up Your Property",
          description: "Create a 'property' for your website. This is where all your chat data will be stored.",
          tips: [
            "Name it clearly (e.g., 'Main Website' or 'Landing Page')",
            "Add your website URL exactly as it appears",
            "You can add multiple domains later if needed"
          ]
        },
        {
          title: "Step 3: Get Your Widget Code",
          description: "Tawk.to will generate a unique JavaScript snippet for your website.",
          code: `<!-- Start of Tawk.to Script -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!-- End of Tawk.to Script -->`,
          tips: [
            "Copy the ENTIRE code snippet",
            "Replace YOUR_PROPERTY_ID with your actual ID",
            "Don't modify the code structure"
          ]
        },
        {
          title: "Step 4: Install on Your Website",
          description: "Add the widget code to your website's HTML, just before the closing </body> tag.",
          code: `<!-- For HTML websites -->
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
</head>
<body>
  <!-- Your website content -->

  <!-- Tawk.to widget - paste here -->
  <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  </script>
</body>
</html>

<!-- For WordPress -->
1. Go to Appearance > Theme Editor
2. Click on "Theme Footer" (footer.php)
3. Paste code before <?php wp_footer(); ?>
4. Save changes

<!-- For React/Next.js -->
// Add to your _app.js or layout component
useEffect(() => {
  var Tawk_API = Tawk_API || {};
  var Tawk_LoadStart = new Date();
  (function(){
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();
}, []);`,
          tips: [
            "Test on a staging site first if possible",
            "Clear your browser cache after installation",
            "Check mobile responsiveness"
          ]
        },
        {
          title: "Step 5: Customize Your Widget",
          description: "Brand your chat widget to match your website design.",
          tips: [
            "Go to Administration > Chat Widget",
            "Change bubble color to match your brand",
            "Upload your company logo",
            "Customize the welcome message",
            "Set your business hours",
            "Enable offline messages for after-hours",
            "Add a pre-chat form to collect visitor info"
          ]
        },
        {
          title: "Step 6: Set Up Triggers & Automation",
          description: "Create automated messages to engage visitors proactively.",
          tips: [
            "Create a trigger for visitors on pricing page: 'Need help choosing a plan?'",
            "Set up 30-second delay trigger for homepage: 'Hi! How can we help you today?'",
            "Add exit-intent trigger: 'Wait! Do you have any questions before you go?'",
            "Create shortcuts for common responses to save time"
          ]
        },
        {
          title: "Step 7: Mobile App Setup",
          description: "Download the Tawk.to mobile app to respond to chats on-the-go.",
          tips: [
            "Available on iOS and Android",
            "Enable push notifications",
            "Log in with your dashboard credentials",
            "Test responding to a test chat"
          ]
        },
        {
          title: "Step 8: Test Everything",
          description: "Verify your installation is working correctly.",
          tips: [
            "Open your website in incognito mode",
            "Click the chat widget to start a conversation",
            "Send a test message",
            "Verify you receive it in your dashboard",
            "Test on mobile devices",
            "Check offline message delivery"
          ]
        }
      ]
    },
    {
      name: "Tidio",
      tagline: "Live Chat & Chatbots for Your Website",
      pricing: "Free - $394/month",
      bestFor: "Growing businesses wanting AI chatbots",
      link: "https://www.tidio.com",
      rating: "4.7/5",
      logo: "🤖",
      setupTime: "15 minutes",
      difficulty: "Easy",
      features: [
        "AI-powered chatbots",
        "Live chat",
        "Email marketing integration",
        "Visitor tracking",
        "Mobile apps",
        "Pre-made templates",
        "Multi-channel support",
        "Analytics dashboard"
      ],
      pros: [
        "Excellent AI chatbot capabilities",
        "Beautiful, modern interface",
        "Easy drag-and-drop bot builder",
        "Good free plan for starters"
      ],
      cons: [
        "Free plan limited to 50 conversations/month",
        "Advanced features require paid plans",
        "Can get expensive for high-volume sites"
      ],
      steps: [
        {
          title: "Step 1: Sign Up for Tidio",
          description: "Create your free account at tidio.com using email or Google sign-in.",
          tips: [
            "Start with the free plan - you can upgrade later",
            "Use Google sign-in for faster setup",
            "Complete your profile for better visitor trust"
          ]
        },
        {
          title: "Step 2: Choose Your Platform",
          description: "Tidio offers direct integrations with popular platforms.",
          tips: [
            "For WordPress: Install via plugin (search 'Tidio' in WP plugins)",
            "For Shopify: Install from Shopify App Store",
            "For Wix: Add from Wix App Market",
            "For custom sites: Use JavaScript widget code"
          ]
        },
        {
          title: "Step 3: Install the Widget Code",
          description: "If using a custom website, copy the Tidio script from your dashboard.",
          code: `<!-- Tidio Widget Code -->
<script src="//code.tidio.co/YOUR_PUBLIC_KEY.js" async></script>

<!-- For React/Next.js -->
// Add to your _app.js or layout
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/YOUR_PUBLIC_KEY.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

<!-- For Vue.js -->
// In your main.js or App.vue
mounted() {
  const script = document.createElement('script');
  script.src = '//code.tidio.co/YOUR_PUBLIC_KEY.js';
  script.async = true;
  document.body.appendChild(script);
}`,
          tips: [
            "Find your public key in Settings > Developer",
            "Place code in <head> or before </body>",
            "Widget appears within seconds of page load"
          ]
        },
        {
          title: "Step 4: Design Your Chat Widget",
          description: "Customize the appearance to match your brand.",
          tips: [
            "Go to Settings > Channels > Live Chat",
            "Choose widget position (right or left)",
            "Select your brand colors",
            "Upload your logo or avatar",
            "Customize online/offline messages",
            "Set your welcome message: 'Hi! 👋 How can we help you today?'",
            "Enable/disable sound notifications"
          ]
        },
        {
          title: "Step 5: Create Your First Chatbot",
          description: "Set up an AI chatbot to handle common questions automatically.",
          tips: [
            "Go to Automation > Chatbots",
            "Click 'Create New Chatbot'",
            "Start with a template (e.g., 'Lead Generation', 'FAQ Bot')",
            "Use drag-and-drop builder to customize flow",
            "Add common questions: pricing, features, support hours",
            "Include a 'Talk to Human' button for complex issues",
            "Test your bot thoroughly before activating"
          ]
        },
        {
          title: "Step 6: Set Up Automated Triggers",
          description: "Create proactive messages to engage visitors.",
          code: `Example Trigger Logic:
1. Visitor on pricing page for 20 seconds
   → Message: "Need help comparing plans? I can help! 😊"

2. Visitor about to leave (exit intent)
   → Message: "Before you go - any questions I can answer?"

3. Returning visitor
   → Message: "Welcome back! How can we assist you today?"

4. Visitor from Google Ads
   → Message: "I see you found us through Google! Looking for [your main product]?"`,
          tips: [
            "Go to Automation > Triggers",
            "Create page-specific triggers",
            "Use 15-30 second delays",
            "Don't be too aggressive - max 1-2 triggers per visit",
            "Personalize messages based on page content"
          ]
        },
        {
          title: "Step 7: Connect Email Notifications",
          description: "Get notified when visitors send messages.",
          tips: [
            "Go to Settings > Notifications",
            "Add your email address",
            "Enable desktop notifications",
            "Set up email forwarding for offline messages",
            "Configure which events trigger notifications",
            "Download mobile app for instant alerts"
          ]
        },
        {
          title: "Step 8: Integrate with Your CRM",
          description: "Connect Tidio to your existing tools.",
          tips: [
            "Go to Settings > Integrations",
            "Connect with: Mailchimp, HubSpot, Google Analytics, Zapier, etc.",
            "Automatically add chat leads to your email list",
            "Track conversions in Google Analytics",
            "Sync conversations to your CRM"
          ]
        },
        {
          title: "Step 9: Set Up Operators (Team Members)",
          description: "Add team members and assign roles.",
          tips: [
            "Go to Settings > Operators",
            "Click 'Add Operator' and enter email",
            "Assign roles: Admin, Operator, or Bot",
            "Set availability schedules per operator",
            "Enable chat routing (round-robin or skill-based)",
            "Create departments if needed (Sales, Support, etc.)"
          ]
        },
        {
          title: "Step 10: Test and Optimize",
          description: "Ensure everything works smoothly.",
          tips: [
            "Send test messages from different devices",
            "Test chatbot flows completely",
            "Verify email notifications arrive",
            "Check mobile app functionality",
            "Review Analytics dashboard after first week",
            "Adjust triggers based on engagement data",
            "A/B test different welcome messages"
          ]
        }
      ]
    },
    {
      name: "Intercom",
      tagline: "The Complete Customer Service Solution",
      pricing: "From $74/month",
      bestFor: "Medium to large businesses wanting premium features",
      link: "https://www.intercom.com",
      rating: "4.5/5",
      logo: "🎯",
      setupTime: "30 minutes",
      difficulty: "Medium",
      features: [
        "Advanced AI chatbot (Fin)",
        "Product tours",
        "Customer data platform",
        "Advanced segmentation",
        "A/B testing",
        "Custom bots with Resolution Bot",
        "Omnichannel support",
        "Advanced analytics"
      ],
      pros: [
        "Enterprise-grade features and reliability",
        "Powerful AI capabilities with Fin",
        "Excellent customer segmentation",
        "Product tours and onboarding tools",
        "Best-in-class analytics"
      ],
      cons: [
        "Expensive compared to alternatives",
        "Steeper learning curve",
        "Some features require add-ons",
        "Pricing based on people reached (can get costly)"
      ],
      steps: [
        {
          title: "Step 1: Start Your Intercom Trial",
          description: "Visit intercom.com and start your 14-day free trial.",
          tips: [
            "No credit card required for trial",
            "Choose your primary use case during signup",
            "You'll start with Essential plan during trial",
            "Explore all features before committing"
          ]
        },
        {
          title: "Step 2: Set Up Your Workspace",
          description: "Configure your Intercom workspace basics.",
          tips: [
            "Add your company name and logo",
            "Set your primary website URL",
            "Configure your timezone",
            "Add team members (Settings > Teammates)",
            "Assign roles: Admin, Agent, or Custom",
            "Set up departments if needed (Sales, Support, Success)"
          ]
        },
        {
          title: "Step 3: Install Intercom Messenger",
          description: "Add Intercom to your website with the JavaScript snippet.",
          code: `<!-- Intercom Messenger Code -->
<script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "YOUR_APP_ID"
  };
</script>
<script>
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){
    ic('reattach_activator');ic('update',w.intercomSettings);
  }else{var d=document;var i=function(){i.c(arguments);};i.q=[];
  i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){
    var s=d.createElement('script');s.type='text/javascript';s.async=true;
    s.src='https://widget.intercom.io/widget/YOUR_APP_ID';
    var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
  };if(document.readyState==='complete'){l();}
  else if(w.attachEvent){w.attachEvent('onload',l);}
  else{w.addEventListener('load',l,false);}}})();
</script>

<!-- With User Data (for logged-in users) -->
<script>
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "YOUR_APP_ID",
    name: "John Doe", // Full name
    email: "john@example.com", // Email address
    user_id: "USER_ID", // User ID from your database
    created_at: 1234567890, // Signup date as Unix timestamp
    // Custom attributes
    plan: "pro",
    company: {
      id: "COMPANY_ID",
      name: "Acme Inc"
    }
  };
</script>`,
          tips: [
            "Find your app_id in Settings > Installation",
            "Install in <head> section for best performance",
            "Pass user data for logged-in users",
            "Test in development first"
          ]
        },
        {
          title: "Step 4: Customize Your Messenger",
          description: "Brand your Messenger to match your website.",
          tips: [
            "Go to Settings > Messenger",
            "Upload your team photo or logo",
            "Set your primary brand color",
            "Customize welcome message",
            "Add your team's identity: 'Hi! We're the [YourCompany] team'",
            "Enable/disable features: Conversations, Articles, Tasks",
            "Set up office hours",
            "Create away message for offline hours"
          ]
        },
        {
          title: "Step 5: Build Your Help Center",
          description: "Create self-service articles to reduce support load.",
          tips: [
            "Go to Help > Articles",
            "Create collections (categories) first",
            "Write clear, actionable articles",
            "Include screenshots and videos",
            "Use simple language, avoid jargon",
            "Structure: Problem → Solution → Result",
            "Add search keywords for better discovery",
            "Enable in Messenger settings"
          ]
        },
        {
          title: "Step 6: Set Up Resolution Bot (AI)",
          description: "Configure Intercom's AI to handle common questions.",
          code: `Resolution Bot Workflow Example:
1. Customer asks: "What's your pricing?"
   → Bot searches Help Center
   → Finds "Pricing" article
   → Suggests article
   → If unsatisfied → Escalates to human

2. Customer asks: "How do I reset my password?"
   → Bot provides step-by-step instructions
   → Marks as resolved
   → Asks for feedback

3. Unknown question
   → Bot says "Let me connect you with our team"
   → Routes to available agent`,
          tips: [
            "Go to Automation > Resolution Bot",
            "Enable for specific teams or all",
            "Let bot answer from Help Center first",
            "Set up custom answers for common questions",
            "Define when to escalate to humans",
            "Review bot performance weekly",
            "Improve articles based on bot failures"
          ]
        },
        {
          title: "Step 7: Create Custom Bots for Lead Gen",
          description: "Build conversational bots to qualify and capture leads.",
          code: `Lead Qualification Bot Flow:
Start: "Hi! 👋 I can help you find the perfect plan."

Q1: "What's your company size?"
   - 1-10 employees → Starter plan
   - 11-50 employees → Professional plan
   - 50+ employees → Enterprise plan

Q2: "What's your main goal?"
   - Increase sales → Show sales features
   - Better support → Show support features
   - Team collaboration → Show team features

Q3: "Would you like to schedule a demo?"
   - Yes → Calendly link
   - No → Send pricing email

End: "Thanks! Your account rep will reach out within 1 hour."`,
          tips: [
            "Go to Automation > Custom bots",
            "Click 'New bot' and choose 'Lead qualification'",
            "Use branching logic for personalization",
            "Keep questions short and clear",
            "Limit to 3-5 questions max",
            "Always offer human handoff",
            "A/B test different approaches",
            "Track conversion rates"
          ]
        },
        {
          title: "Step 8: Set Up Targeted Messages",
          description: "Send proactive messages based on user behavior.",
          tips: [
            "Go to Messages > New message",
            "Choose 'Live' for real-time or 'Post' for scheduled",
            "Target by: Page URL, User properties, Company, Events",
            "Example 1: Show pricing modal after 30s on homepage",
            "Example 2: Offer help on checkout page",
            "Example 3: Re-engage inactive users",
            "Set frequency caps to avoid spam",
            "Monitor engagement rates"
          ]
        },
        {
          title: "Step 9: Configure Inbox Rules",
          description: "Automate conversation routing and management.",
          tips: [
            "Go to Settings > Inbox rules",
            "Create auto-assignment rules",
            "Route by: Topic, Priority, Language, Location",
            "Set SLA targets (response time goals)",
            "Auto-close conversations after X days",
            "Tag conversations automatically",
            "Send satisfaction surveys after resolution"
          ]
        },
        {
          title: "Step 10: Integrate with Your Stack",
          description: "Connect Intercom to your other tools.",
          tips: [
            "Go to Settings > Integrations & apps",
            "Connect Salesforce, HubSpot, or other CRM",
            "Sync with Slack for team notifications",
            "Connect Google Analytics to track conversions",
            "Add Stripe for subscription data",
            "Set up Zapier for custom workflows",
            "Enable API access for custom integrations"
          ]
        },
        {
          title: "Step 11: Analyze and Optimize",
          description: "Use Intercom's analytics to improve performance.",
          tips: [
            "Go to Reports > Overview",
            "Track: Response time, Resolution time, CSAT score",
            "Review top conversation topics",
            "Identify knowledge gaps in Help Center",
            "Monitor bot performance and accuracy",
            "Check team workload distribution",
            "Set up custom reports for your KPIs",
            "Review weekly and adjust strategies"
          ]
        }
      ]
    },
    {
      name: "Crisp",
      tagline: "The All-in-One Business Messaging Platform",
      pricing: "Free - $95/month",
      bestFor: "Modern teams wanting Slack-style collaboration",
      link: "https://crisp.chat",
      rating: "4.6/5",
      logo: "⚡",
      setupTime: "20 minutes",
      difficulty: "Easy",
      features: [
        "Live chat",
        "Chatbots",
        "Co-browsing",
        "Screen sharing",
        "CRM integration",
        "Knowledge base",
        "Status pages",
        "Marketing campaigns"
      ],
      pros: [
        "Generous free plan (2 operators)",
        "Modern, intuitive interface",
        "Co-browsing and screen share",
        "All-in-one platform",
        "Great mobile apps"
      ],
      cons: [
        "Limited customization on free plan",
        "Some advanced features require Pro plan",
        "Newer platform (less market presence)"
      ],
      steps: [
        {
          title: "Step 1: Create Your Crisp Account",
          description: "Sign up at crisp.chat - free forever for up to 2 team members.",
          tips: [
            "Use your work email",
            "Set a strong password",
            "Complete your profile with photo and bio",
            "This builds trust with visitors"
          ]
        },
        {
          title: "Step 2: Create Your Website",
          description: "Add your website as a 'website' in Crisp dashboard.",
          tips: [
            "Click '+' to add new website",
            "Enter your domain name",
            "Choose website category",
            "Set primary language",
            "You can manage multiple websites in one account"
          ]
        },
        {
          title: "Step 3: Install Crisp Widget",
          description: "Add the Crisp chatbox to your website.",
          code: `<!-- Crisp Live Chat Code -->
<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";
  (function(){
    d=document;
    s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>

<!-- With User Data -->
<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";

  // Set user data
  $crisp.push(["set", "user:email", ["john@example.com"]]);
  $crisp.push(["set", "user:nickname", ["John Doe"]]);
  $crisp.push(["set", "user:phone", ["+1234567890"]]);
  $crisp.push(["set", "user:avatar", ["https://example.com/avatar.jpg"]]);

  // Set session data
  $crisp.push(["set", "session:data", [[
    ["plan", "pro"],
    ["signup_date", "2024-01-01"],
    ["total_orders", "5"]
  ]]]);
</script>

<!-- For WordPress -->
// Install "Crisp Live Chat" plugin from WordPress repository
// Or use the code above in your theme's footer.php

<!-- For React -->
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID";

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);

  return <YourApp />;
}`,
          tips: [
            "Find your Website ID in Settings > Setup instructions",
            "Place code in <head> section",
            "Pass user data for logged-in users",
            "Widget loads asynchronously (won't slow your site)"
          ]
        },
        {
          title: "Step 4: Customize Your Chatbox",
          description: "Make the chatbox match your brand.",
          tips: [
            "Go to Settings > Chatbox customization",
            "Choose color theme (matches your brand)",
            "Upload your logo/avatar",
            "Set position (right or left corner)",
            "Customize greeting: 'Hey! 👋 How can we help?'",
            "Set availability message",
            "Enable/disable features: Email, Phone, Attachments",
            "Add your own CSS for advanced customization"
          ]
        },
        {
          title: "Step 5: Set Up Your Team",
          description: "Add team members and configure roles.",
          tips: [
            "Go to Settings > Team",
            "Click 'Invite people'",
            "Assign roles: Owner, Admin, Member, or Operator",
            "Set availability status per team member",
            "Configure notification preferences",
            "Set up routing rules (round-robin or manual)",
            "Create departments if needed"
          ]
        },
        {
          title: "Step 6: Create Automated Scenarios",
          description: "Build chatbots to handle common queries.",
          code: `Example Bot Scenario:
Trigger: New conversation starts
Condition: Visitor not seen before

Bot: "Hi there! 👋 Welcome to [Company Name]!"
Wait 2 seconds
Bot: "I'm here to help. What brings you here today?"

Options:
1. "I have a question" → Route to FAQ bot
2. "I want to buy" → Route to sales team
3. "I need support" → Collect ticket info
4. "Just browsing" → Share helpful resources

For each path, gather info before human handoff`,
          tips: [
            "Go to Settings > Automation > Scenarios",
            "Click 'Create scenario'",
            "Choose trigger (New conversation, Specific page, etc.)",
            "Build conversation flow with drag-and-drop",
            "Add conditions and branches",
            "Include option to 'Talk to human' in every bot",
            "Test thoroughly before activating",
            "Monitor bot completion rates"
          ]
        },
        {
          title: "Step 7: Enable Co-browsing (Premium Feature)",
          description: "Help customers by seeing their screen in real-time.",
          tips: [
            "Available on Pro plan",
            "Go to Settings > Features",
            "Enable 'Co-browsing'",
            "During chat, click 'Request co-browsing'",
            "Customer approves access",
            "You can see their screen (they stay in control)",
            "Draw on screen to guide them",
            "Great for technical support or demos"
          ]
        },
        {
          title: "Step 8: Set Up Knowledge Base",
          description: "Create self-service articles for common questions.",
          tips: [
            "Go to Website > Knowledge",
            "Enable knowledge base",
            "Choose a subdomain (help.yoursite.com)",
            "Create categories",
            "Write articles with clear titles",
            "Use markdown formatting",
            "Add images and videos",
            "Enable in chatbox for instant access",
            "Track article views and helpfulness"
          ]
        },
        {
          title: "Step 9: Configure Triggers & Rules",
          description: "Send proactive messages based on visitor behavior.",
          tips: [
            "Go to Settings > Automation > Triggers",
            "Create trigger: 'Visitor on pricing page for 30 seconds'",
            "Action: Send message 'Need help choosing a plan?'",
            "Add exit-intent trigger for cart abandonment",
            "Create triggers for returning visitors",
            "Limit frequency (don't spam)",
            "A/B test different messages",
            "Review trigger performance regularly"
          ]
        },
        {
          title: "Step 10: Connect Integrations",
          description: "Link Crisp with your business tools.",
          tips: [
            "Go to Settings > Plugins",
            "Connect Slack for team notifications",
            "Integrate with Zapier for custom workflows",
            "Add Google Analytics tracking",
            "Connect CRM (Salesforce, HubSpot, Pipedrive)",
            "Enable Mailchimp for email marketing",
            "Set up webhooks for custom integrations",
            "Test all integrations thoroughly"
          ]
        },
        {
          title: "Step 11: Monitor with Analytics",
          description: "Track performance and optimize your chat strategy.",
          tips: [
            "Go to Analytics dashboard",
            "Monitor: Active conversations, Response time, Resolution rate",
            "Track busiest times of day",
            "Review conversation ratings",
            "Check bot completion rates",
            "Identify top visitor sources",
            "Export reports for team review",
            "Set goals and track improvement"
          ]
        },
        {
          title: "Step 12: Mobile Apps & Notifications",
          description: "Respond to chats from anywhere.",
          tips: [
            "Download Crisp app (iOS & Android)",
            "Log in with your credentials",
            "Enable push notifications",
            "Configure quiet hours if needed",
            "Test responding to a chat",
            "Use quick replies for common responses",
            "Enable desktop notifications in browser"
          ]
        }
      ]
    }
  ];

  const selectedToolData = tools.find(t => t.name === selectedTool);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Tech Implementation Guides</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Website Visitors Into Leads
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Step-by-step implementation guides for 4 proven live chat tools. From installation to optimization, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span>⏱️</span>
                <span>10-30 min setup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span>📝</span>
                <span>Detailed code examples</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span>✅</span>
                <span>Production-ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Overview */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Tool</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-900 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedTool(tool.name)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{tool.logo}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  tool.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  tool.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {tool.difficulty}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.tagline}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Pricing:</span>
                  <span className="font-semibold text-gray-900">{tool.pricing}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Setup Time:</span>
                  <span className="font-semibold text-gray-900">{tool.setupTime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-semibold text-gray-900">⭐ {tool.rating}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Best for:</strong> {tool.bestFor}
                </p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  Visit {tool.name} →
                </a>
              </div>

              <button
                onClick={() => setSelectedTool(tool.name)}
                className="w-full mt-4 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                View Implementation Guide
              </button>
            </div>
          ))}
        </div>

        {/* Detailed Implementation Guide */}
        {selectedToolData && (
          <div className="border-t-4 border-gray-900 pt-16" id="implementation-guide">
            <div className="mb-12">
              <button
                onClick={() => setSelectedTool(null)}
                className="text-gray-600 hover:text-gray-900 mb-6 inline-flex items-center gap-2"
              >
                ← Back to tools
              </button>

              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl">{selectedToolData.logo}</div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    {selectedToolData.name} Implementation Guide
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">{selectedToolData.tagline}</p>
                  <a
                    href={selectedToolData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Sign Up for {selectedToolData.name}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Features, Pros, Cons */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {selectedToolData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Pros</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {selectedToolData.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600">👍</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Cons</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {selectedToolData.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-600">⚠️</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step-by-Step Guide */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Complete Setup Guide ({selectedToolData.steps.length} Steps)
                </h3>

                {selectedToolData.steps.map((step, idx) => (
                  <div key={idx} className="border-l-4 border-gray-900 pl-8 pb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 mb-4">{step.description}</p>

                    {step.code && (
                      <div className="bg-gray-900 rounded-lg p-6 mb-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    )}

                    {step.tips && step.tips.length > 0 && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="font-semibold text-gray-900 mb-2">💡 Pro Tips:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {step.tips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="flex items-start gap-2">
                              <span className="text-yellow-600">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Next Steps */}
              <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🎉 You're All Set!
                </h3>
                <p className="text-gray-700 mb-6">
                  You've successfully implemented {selectedToolData.name}! Here's what to do next:
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">1.</span>
                    <span>Monitor your first conversations and gather feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">2.</span>
                    <span>Review analytics after first week and optimize</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">3.</span>
                    <span>Train your team on best practices for live chat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">4.</span>
                    <span>Iterate on your chatbot flows based on real conversations</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setSelectedTool(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Compare Other Tools
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
