import { mutation } from "./_generated/server";

export const seedDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if data already exists
    const existingArticles = await ctx.db.query("articles").first();
    if (existingArticles) {
      return "Database already seeded";
    }

    // Create categories
    const categories = [
      {
        name: "Customer Service",
        description: "AI tools for better customer interactions",
        icon: "💬",
        color: "blue"
      },
      {
        name: "Marketing",
        description: "AI-powered marketing automation",
        icon: "📢",
        color: "green"
      },
      {
        name: "Operations",
        description: "Streamline daily business operations",
        icon: "⚙️",
        color: "purple"
      },
      {
        name: "Finance",
        description: "AI tools for financial management",
        icon: "💰",
        color: "yellow"
      },
      {
        name: "Inventory",
        description: "Smart inventory management solutions",
        icon: "📦",
        color: "red"
      }
    ];

    for (const category of categories) {
      await ctx.db.insert("categories", category);
    }

    // Create sample articles
    const articles = [
      {
        title: "ChatGPT for Customer Service: A Local Restaurant's Success Story",
        excerpt: "How Maria's Bistro reduced response time by 70% using AI chatbots for customer inquiries and reservations.",
        content: "Maria's Bistro, a family-owned restaurant in downtown Portland, was struggling with phone calls during peak hours. Customers would wait on hold for reservations, and staff couldn't keep up with questions about menu items and hours. By implementing a simple ChatGPT-powered chatbot on their website, they now handle 80% of common inquiries automatically, allowing staff to focus on in-person service.",
        category: "Customer Service",
        author: "Sarah Chen",
        featured: true,
        readTime: 5,
        tags: ["chatbots", "restaurants", "automation"],
        publishedAt: Date.now() - 86400000 // 1 day ago
      },
      {
        title: "Automated Social Media Posts That Actually Work for Small Businesses",
        excerpt: "Learn how to use AI tools like Buffer AI and Jasper to create engaging social media content without spending hours each day.",
        content: "Small business owners often struggle to maintain consistent social media presence. This guide covers practical AI tools that can help you create, schedule, and optimize social media posts. We'll explore Buffer AI for scheduling, Jasper for content creation, and Canva's AI features for visual content.",
        category: "Marketing",
        author: "Mike Rodriguez",
        featured: true,
        readTime: 7,
        tags: ["social-media", "content-creation", "scheduling"],
        publishedAt: Date.now() - 172800000 // 2 days ago
      },
      {
        title: "AI-Powered Inventory Management: Stop Overstocking Forever",
        excerpt: "Discover how predictive AI can help your retail business optimize inventory levels and reduce waste by up to 40%.",
        content: "Overstocking ties up cash flow while understocking loses sales. Modern AI tools can analyze sales patterns, seasonal trends, and external factors to predict optimal inventory levels. This article covers affordable solutions like TradeGecko AI and Zoho Inventory's predictive features.",
        category: "Inventory",
        author: "Lisa Park",
        featured: true,
        readTime: 6,
        tags: ["inventory", "predictive-analytics", "retail"],
        publishedAt: Date.now() - 259200000 // 3 days ago
      },
      {
        title: "Voice AI Assistants for Appointment Scheduling",
        excerpt: "How a local dental practice automated 90% of their appointment bookings using voice AI technology.",
        content: "Dr. Smith's dental practice was spending 2 hours daily on appointment scheduling calls. By implementing a voice AI assistant, they now handle most bookings automatically, even outside business hours. The system integrates with their existing calendar and sends confirmation texts.",
        category: "Operations",
        author: "David Kim",
        featured: false,
        readTime: 4,
        tags: ["voice-ai", "scheduling", "healthcare"],
        publishedAt: Date.now() - 345600000 // 4 days ago
      },
      {
        title: "AI Bookkeeping Tools That Save Hours Each Week",
        excerpt: "Compare the top AI-powered accounting software that can categorize expenses, generate reports, and flag potential issues automatically.",
        content: "Manual bookkeeping is time-consuming and error-prone. Modern AI accounting tools like QuickBooks AI, Xero's smart features, and Receipt Bank can automate expense categorization, bank reconciliation, and financial reporting. This guide helps you choose the right tool for your business size and needs.",
        category: "Finance",
        author: "Jennifer Walsh",
        featured: false,
        readTime: 8,
        tags: ["accounting", "automation", "financial-management"],
        publishedAt: Date.now() - 432000000 // 5 days ago
      },
      {
        title: "Email Marketing Automation for Local Businesses",
        excerpt: "Set up AI-driven email campaigns that nurture customers and drive repeat business without constant manual work.",
        content: "Email marketing remains one of the highest ROI marketing channels. AI tools like Mailchimp's Smart Recommendations, Constant Contact's AI features, and ConvertKit's automation can help local businesses create personalized email campaigns that convert browsers into buyers and one-time customers into regulars.",
        category: "Marketing",
        author: "Tom Anderson",
        featured: false,
        readTime: 6,
        tags: ["email-marketing", "automation", "customer-retention"],
        publishedAt: Date.now() - 518400000 // 6 days ago
      }
    ];

    for (const article of articles) {
      await ctx.db.insert("articles", article);
    }

    return "Database seeded successfully";
  },
});
