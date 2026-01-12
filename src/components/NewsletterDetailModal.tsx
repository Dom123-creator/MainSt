import { useState } from "react";

interface Newsletter {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
}

interface NewsletterDetailModalProps {
  newsletter: Newsletter;
  onClose: () => void;
}

// Mock full content for newsletters
const getNewsletterContent = (id: string): string => {
  const contents: Record<string, string> = {
    "1": `
## Introduction

The AI revolution is here, and small businesses are reaping the benefits. In 2024, we've seen countless businesses transform their operations and cut costs dramatically using AI tools. Here are the top 10 tools that made the biggest impact.

## 1. AI-Powered Customer Service Chatbots

**Cost Savings: $8,000/year**

Implementing AI chatbots on your website can handle 80% of customer inquiries automatically. Businesses using tools like Intercom, Drift, or custom GPT solutions saw:
- 24/7 customer support without hiring night shift staff
- Response times reduced from hours to seconds
- Customer satisfaction scores increased by 35%

## 2. Automated Bookkeeping with AI

**Cost Savings: $6,500/year**

Tools like QuickBooks with AI features and Xero automatically categorize transactions, detect anomalies, and prepare financial reports:
- Reduces bookkeeping time by 60%
- Catches errors before they become problems
- Provides real-time financial insights

## 3. AI Content Creation Tools

**Cost Savings: $5,200/year**

Generate blog posts, social media content, and marketing copy with tools like ChatGPT, Jasper, and Copy.ai:
- Create a month's worth of social content in 2 hours
- Maintain consistent brand voice
- Scale content production without hiring writers

## 4. Smart Inventory Management

**Cost Savings: $7,800/year**

AI-powered inventory systems predict demand, optimize stock levels, and prevent overstock situations:
- Reduce inventory holding costs by 40%
- Prevent stockouts during peak seasons
- Automate reordering processes

## 5. Email Marketing Automation

**Cost Savings: $4,200/year**

AI tools like Mailchimp's Smart Recommendations and HubSpot optimize send times, subject lines, and content:
- Increase open rates by 25%
- Personalize emails at scale
- Reduce unsubscribe rates by 30%

## 6. AI-Powered Scheduling

**Cost Savings: $3,800/year**

Tools like Calendly with AI features and Clara automatically schedule meetings, send reminders, and optimize calendars:
- Eliminate back-and-forth emails
- Reduce no-shows by 45%
- Free up 5 hours per week per employee

## 7. Automated Social Media Management

**Cost Savings: $4,500/year**

AI platforms like Buffer, Hootsuite with AI, or Lately analyze engagement patterns and optimize posting:
- Determine best times to post automatically
- Suggest trending content topics
- Schedule a quarter's content in one afternoon

## 8. AI Document Processing

**Cost Savings: $5,800/year**

Extract data from invoices, receipts, and contracts automatically with tools like UiPath, Rossum, or custom solutions:
- Process documents 10x faster
- Eliminate manual data entry errors
- Integrate with existing systems seamlessly

## 9. Predictive Maintenance Software

**Cost Savings: $6,200/year**

For businesses with equipment, AI can predict failures before they happen:
- Reduce unexpected downtime by 70%
- Extend equipment lifespan by 20%
- Schedule maintenance during off-peak hours

## 10. AI-Powered Analytics

**Cost Savings: $4,000/year**

Tools like Google Analytics 4, Tableau with AI, or custom dashboards provide actionable insights:
- Identify revenue opportunities automatically
- Predict customer churn before it happens
- Make data-driven decisions confidently

## Conclusion

The total potential savings from these 10 tools can exceed $50,000 per year, with most businesses implementing 3-5 of these solutions within their first year. The key is to start small, measure results, and scale what works.

Remember: The best AI tool is the one you'll actually use. Start with your biggest pain point and build from there.

## Action Items

1. Identify your biggest time drain or cost center
2. Research 2-3 AI solutions that address it
3. Start with a free trial or pilot program
4. Measure results after 30 days
5. Scale or pivot based on data

Ready to implement these tools? Our Pro members get access to implementation guides, vendor comparisons, and one-on-one consultations.
    `,
    "2": `
## The Challenge

Johnson HVAC, a family-owned business in Atlanta, was struggling with manual scheduling and dispatch. They were losing 15+ hours per week on phone tag, missed appointments, and routing inefficiencies.

## The Solution

After evaluating several options, they implemented an AI voice assistant and smart scheduling system. Here's what changed:

### Week 1: Implementation
- Set up AI voice assistant to handle incoming calls
- Integrated with existing scheduling software
- Trained system on common customer questions
- Created workflows for emergency vs. routine calls

### Week 2-4: Refinement
- Analyzed call patterns and adjusted responses
- Added SMS confirmations and reminders
- Implemented dynamic routing based on location

### Month 2: Full Automation
- 85% of routine calls handled by AI
- Automatic scheduling based on technician availability
- Real-time route optimization
- Customer satisfaction scores increased to 4.8/5

## Results After 6 Months

**Time Savings:**
- 15 hours per week freed up for owner
- Dispatcher role eliminated (employee moved to sales)
- Technicians spend 2 more hours per day on billable work

**Revenue Impact:**
- 23% increase in jobs completed per week
- $8,400 additional monthly revenue
- Improved customer retention by 34%

**Cost Analysis:**
- AI tool cost: $299/month
- ROI: 28x in first 6 months
- Payback period: 11 days

## Key Lessons

1. **Start with pain points:** Don't automate everything at once
2. **Train your AI well:** Spend time on initial setup
3. **Keep the human touch:** Some calls still need personal attention
4. **Measure everything:** Track metrics before and after implementation

## What They Said

*"I was skeptical about AI, but this changed my business. I'm working fewer hours and making more money. My customers love the instant response, and my techs love the optimized routes."* - Mike Johnson, Owner

## Ready to Automate Your Business?

Download our free HVAC automation blueprint, complete with:
- Vendor comparison chart
- Implementation checklist
- ROI calculator
- Sample scripts and workflows
    `,
    "3": `
## Why AI for Legal Work?

Solo practitioners and small law firms face unique challenges:
- Limited support staff
- High document volume
- Need for thorough research
- Tight deadlines
- Client communication demands

AI tools can help address all of these while maintaining professional standards.

## Document Review & Analysis

### Tools: Kira Systems, eBrevia, Luminance

**Use Cases:**
- Contract review and analysis
- Due diligence document screening
- Clause identification and comparison
- Risk assessment

**Real Example:**
Solo attorney Sarah Chen reduced contract review time from 6 hours to 90 minutes per contract using AI-powered analysis.

**Best Practices:**
- Always verify AI findings
- Use as first pass, not final review
- Customize for your practice area
- Build your own clause library

## Legal Research

### Tools: ROSS Intelligence, Casetext, Fastcase with AI

**Benefits:**
- Instant case law searching
- Automatic citation checking
- Related case discovery
- Jurisdiction-specific results

**Time Savings:**
- Research time cut by 50-70%
- More comprehensive results
- Automatic updates on relevant cases
- Natural language queries

## Document Drafting

### Tools: LawGeex, DraftWise, Legal Robot

**Applications:**
- Contract generation from templates
- Brief drafting assistance
- Pleading preparation
- Letter generation

**Important Notes:**
- Never use AI for final legal advice
- Review all generated content carefully
- Maintain attorney-client privilege
- Use secure, compliant tools only

## Client Communication

### AI-Powered Client Portals

**Features:**
- Automatic status updates
- Document sharing and e-signatures
- Appointment scheduling
- FAQ chatbots for common questions

**Client Benefits:**
- 24/7 access to case information
- Faster response times
- Self-service options
- Reduced anxiety about case status

## Practice Management

### Tools: Clio with AI, MyCase, PracticePanther

**Automation Opportunities:**
- Time tracking
- Billing and invoicing
- Calendar management
- Conflict checking
- Deadline monitoring

## Ethical Considerations

### ABA Model Rules Compliance

1. **Competence (Rule 1.1):** Understand AI tools you use
2. **Confidentiality (Rule 1.6):** Ensure data security
3. **Communication (Rule 1.4):** Disclose AI use when appropriate
4. **Supervision (Rule 5.3):** Monitor AI outputs
5. **Candor (Rule 3.3):** Verify all AI-generated citations

## Implementation Roadmap

### Phase 1 (Month 1): Foundation
- Audit current processes
- Identify biggest time drains
- Research tools for those areas
- Start with one tool

### Phase 2 (Months 2-3): Expansion
- Evaluate initial tool's impact
- Add 1-2 complementary tools
- Train on advanced features
- Document workflows

### Phase 3 (Months 4-6): Optimization
- Fine-tune all tools
- Integrate tools with each other
- Measure ROI
- Scale what works

## Cost-Benefit Analysis

**Average Investment:** $200-500/month for comprehensive AI toolkit

**Expected Returns:**
- 10-15 billable hours recovered per week
- At $250/hour rate = $2,500-3,750/week
- Annual value: $130,000-195,000
- ROI: 500-800%

## Security & Compliance

### Must-Have Features:
- End-to-end encryption
- SOC 2 Type II certification
- GDPR compliance
- Data residency options
- Audit trails
- Role-based access control

## Getting Started

1. **Week 1:** Assessment
   - List your 3 biggest time drains
   - Calculate hourly cost of each
   - Research AI solutions

2. **Week 2:** Selection
   - Try 3 free trials
   - Compare features vs. needs
   - Check reviews from other attorneys

3. **Week 3:** Implementation
   - Start with one tool
   - Follow onboarding process
   - Customize for your practice

4. **Week 4+:** Optimization
   - Track time savings
   - Adjust workflows
   - Train on advanced features

## Pro Resources

Get access to:
- Detailed vendor comparison chart
- Implementation templates
- Ethics compliance checklist
- Solo practitioner AI toolkit
- Monthly vendor discounts
    `,
    "4": `
## The Month-End Close Problem

For small to mid-size businesses, month-end close is a dreaded process:
- Long hours
- Stressed team
- Delayed reports
- Rushed decisions
- Errors and rework

A typical close process takes 5-7 business days. With AI-powered accounting tools, businesses are reducing this to 2 days or less.

## How AI Transforms Accounting

### 1. Automated Transaction Categorization

**Traditional Way:**
- Manual review of each transaction
- Lookup proper GL codes
- Enter into system
- Time: 2-3 hours daily

**AI-Powered Way:**
- Automatic categorization based on patterns
- Learning improves over time
- Exception-only review
- Time: 15 minutes daily

### 2. Intelligent Reconciliation

**Tools:** QuickBooks with AI, Xero, Sage Intacct

**Benefits:**
- Automatic bank reconciliation
- Credit card matching
- Anomaly detection
- Suggested adjustments

**Real Results:**
- Reconciliation time: 6 hours → 45 minutes
- Error rate: 3% → 0.2%
- Staff frustration: High → Low

### 3. Real-Time Financial Reporting

**Old Process:**
- Wait for month-end
- Compile data manually
- Create reports in Excel
- Distribute via email
- Questions require new reports

**AI-Enhanced Process:**
- Live dashboard access
- Automatic report generation
- Drill-down capability
- Self-service analytics
- Mobile access

## Case Study: Manufacturing Company

**Company:** Precision Parts Inc., 50 employees

**Before AI:**
- Close time: 7 business days
- Accountant worked 60+ hours during close
- Reports delivered on day 10
- Managers frustrated with delays

**After AI Implementation:**
- Close time: 1.5 business days
- Accountant works normal 40-hour week
- Reports available on day 2
- Real-time access anytime

**Financial Impact:**
- Accountant overtime eliminated: $4,800/year saved
- Faster decision-making: $15,000 additional revenue captured
- Reduced errors: $3,200 saved in corrections
- Total annual benefit: $23,000+

## Implementation Guide

### Step 1: Assess Current Process (Week 1)

Document your close process:
- List every task
- Time each activity
- Note pain points
- Identify manual steps
- Calculate total hours

### Step 2: Select AI Tools (Week 2-3)

**Evaluation Criteria:**
- Integration with existing systems
- Ease of use
- Training requirements
- Cost vs. benefit
- Vendor support
- Security features

**Top Tools to Consider:**
- QuickBooks Online Advanced (AI features)
- Xero with Hubdoc
- Sage Intacct
- NetSuite
- BlackLine (for larger businesses)

### Step 3: Data Preparation (Week 4)

**Critical Tasks:**
- Clean up chart of accounts
- Review historical categorizations
- Set up bank feeds
- Configure rules
- Import historical data

### Step 4: Pilot Period (Month 2)

**Start small:**
- Run parallel processes
- Compare AI vs. manual results
- Adjust rules and settings
- Train team on new workflows
- Document improvements

### Step 5: Full Implementation (Month 3)

**Go live:**
- Switch to AI-first approach
- Manual review only exceptions
- Monitor closely
- Gather feedback
- Iterate on processes

### Step 6: Optimization (Month 4+)

**Continuous improvement:**
- Analyze bottlenecks
- Add new automations
- Train on advanced features
- Expand to other areas
- Share best practices

## Month-End Close Checklist

### Days 1-2 (Ongoing)
✓ Automated transaction import
✓ AI categorization (95%+ accuracy)
✓ Exception review only
✓ Auto-reconciliation runs
✓ Accrual recommendations

### Day 3 (Month-End)
✓ Final bank reconciliation
✓ Review AI-flagged items
✓ Adjust entries as needed
✓ Run preliminary reports
✓ Check for anomalies

### Day 4
✓ Final journal entries
✓ Close books
✓ Generate financial statements
✓ Distribute reports
✓ Available for questions

## Common Pitfalls to Avoid

1. **Rushing Implementation**
   - Take time to configure properly
   - Don't skip data cleanup
   - Train your team thoroughly

2. **Not Trusting the AI**
   - Review patterns over time
   - Let AI learn from corrections
   - Gradually reduce manual review

3. **Ignoring Exceptions**
   - AI flags unusual items for a reason
   - Review all exceptions
   - Use them to improve rules

4. **Poor Change Management**
   - Communicate benefits clearly
   - Address team concerns
   - Celebrate time savings

## ROI Calculator

**Your Numbers:**
- Current close time: ___ days
- Accountant hourly rate: $___
- Hours spent on close: ___
- Errors requiring rework: ___
- Delayed decision costs: $___

**Expected Improvements:**
- Close time reduction: 60%
- Hours saved: 40-60 hours/year
- Error reduction: 80%
- Faster insights: Priceless

**Tool Costs:**
- Mid-tier solution: $50-200/month
- Annual cost: $600-2,400
- Typical ROI: 800-1,500%

## Next Steps

Ready to transform your close process?

**This Week:**
1. Time your current close process
2. Calculate the cost
3. Research one AI accounting tool

**This Month:**
1. Start a free trial
2. Connect your bank feeds
3. Configure basic rules

**This Quarter:**
1. Run first AI-assisted close
2. Measure improvements
3. Expand automation

## Pro Member Benefits

Get access to:
- Tool comparison matrix
- Implementation templates
- Rules and workflow examples
- One-on-one consultation
- Monthly accounting automation webinars
    `,
    "5": `
## The 24/7 Support Challenge

Small businesses face a dilemma:
- Customers expect instant responses
- Hiring 24/7 support is expensive
- Missed inquiries = lost sales
- Poor response times hurt reputation

AI chatbots solve this problem elegantly.

## What AI Chatbots Can Do

### Handle Common Questions
- Product information
- Pricing and availability
- Order status
- Return policies
- Store hours
- Basic troubleshooting

### Qualify Leads
- Collect contact information
- Understand customer needs
- Route to appropriate team
- Schedule consultations
- Provide instant quotes

### Support Transactions
- Guide through purchase process
- Upsell and cross-sell
- Recover abandoned carts
- Process simple returns
- Update account information

## Real Business Results

### E-commerce Store
**Before:**
- Response time: 6-12 hours
- Support staff: 2 people
- After-hours inquiries: Lost
- Cart abandonment: 68%

**After AI Chatbot:**
- Response time: Instant
- Support staff: 1 person + AI
- 24/7 coverage: Complete
- Cart abandonment: 42%
- Additional revenue: $12,000/month

### Service Business
**Before:**
- Phone tag with prospects
- Missed calls = missed opportunities
- Booking process: 3-4 touchpoints
- Conversion rate: 12%

**After AI Implementation:**
- Instant inquiry response
- Appointments booked 24/7
- Booking process: 1 interaction
- Conversion rate: 28%

## Types of AI Chatbots

### 1. Rule-Based Chatbots
**Best for:** Simple, predictable interactions
**Examples:** FAQ bots, appointment scheduling
**Pros:** Easy to set up, predictable
**Cons:** Limited flexibility

### 2. AI-Powered (NLP) Chatbots
**Best for:** Complex conversations
**Examples:** Customer service, lead qualification
**Pros:** Handles variety, learns over time
**Cons:** More complex setup

### 3. Hybrid Approach
**Best for:** Most businesses
**Combines:** AI understanding + rule-based flows
**Example:** AI interprets intent, rules handle action

## Implementation Guide

### Phase 1: Planning (Week 1)

**Identify Use Cases:**
- What questions do you answer repeatedly?
- What causes customers to leave?
- What happens after hours?
- Where do conversions drop off?

**Set Goals:**
- Response time improvement
- Support cost reduction
- Lead capture increase
- Conversion rate lift

### Phase 2: Tool Selection (Week 2)

**Popular Options:**

**Budget-Friendly:**
- Tidio ($29/month)
- ManyChat (Free-$145/month)
- Chatfuel ($15-$60/month)

**Mid-Range:**
- Intercom ($74/month)
- Drift ($2,500/month)
- HubSpot Chatbot (Free-$800/month)

**Enterprise:**
- Salesforce Einstein
- IBM Watson
- Custom solutions

### Phase 3: Build & Train (Weeks 3-4)

**Content Creation:**
1. List common questions
2. Write clear answers
3. Create conversation flows
4. Add personality to responses
5. Set escalation rules

**Training Data:**
- Upload past customer conversations
- Tag intents and entities
- Create response variations
- Test with team members
- Refine based on feedback

### Phase 4: Launch (Week 5)

**Soft Launch:**
- Start on one page
- Monitor all conversations
- Quick iterations
- Gather team feedback

**Full Launch:**
- Deploy site-wide
- Announce to customers
- Monitor metrics
- Collect user feedback

### Phase 5: Optimize (Ongoing)

**Weekly Reviews:**
- Check conversation logs
- Identify confusion points
- Add new intents
- Improve responses
- Update knowledge base

**Monthly Analysis:**
- Review key metrics
- A/B test variations
- Expand capabilities
- Train on new topics

## Best Practices

### 1. Set Clear Expectations
✓ Name your bot
✓ State it's AI upfront
✓ Explain what it can do
✓ Show when humans are available
✓ Make opt-out easy

### 2. Design Conversational Flows
✓ Ask one question at a time
✓ Provide clear options
✓ Keep responses brief
✓ Use natural language
✓ Add personality

### 3. Handle Escalations Gracefully
✓ Recognize frustration
✓ Offer human alternative quickly
✓ Pass context to agent
✓ Follow up on experience

### 4. Maintain Quality
✓ Review conversations weekly
✓ Update responses regularly
✓ Add new capabilities
✓ Fix misunderstandings
✓ Improve accuracy continuously

## Metrics to Track

### Response Metrics
- Average response time
- First contact resolution rate
- Escalation rate
- Customer satisfaction score

### Business Metrics
- Leads captured
- Appointments booked
- Sales completed
- Cart recovery rate
- Support cost per inquiry

### Technical Metrics
- Bot confidence scores
- Intent recognition accuracy
- Conversation completion rate
- Error rate

## Common Mistakes to Avoid

### 1. Too Much Too Soon
Start with 3-5 common scenarios, not everything at once.

### 2. Making It Too Obvious It's a Bot
Be upfront, but don't make it awkward.

### 3. No Human Backup
Always provide easy escalation path.

### 4. Neglecting Maintenance
Chatbots need regular updates and training.

### 5. Ignoring the Data
Conversation logs are goldmines of insights.

## Sample Conversation Flows

### Lead Qualification Flow

**Example conversation:**
- Bot: Hi! I'm Alex, your AI assistant. What brings you here today?
- User: Looking for pricing info
- Bot: I'd be happy to help! Are you looking for Product A, Product B, or something else?
- User: Product A
- Bot: Great choice! Product A starts at $X. What size business are you?
- User: 25 employees
- Bot: Perfect! For 25 employees, I'd recommend our Pro plan at $Y/month. Would you like me to: (1) Schedule a demo (2) Start a free trial (3) Chat with our team

### Support Flow

**Example conversation:**
- Bot: Hi! Need help with something?
- User: My order hasn't arrived
- Bot: I'm sorry to hear that! Let me help. Do you have your order number?
- User: Yes, it's #12345
- Bot: Thanks! Order #12345 was shipped on [date] via [carrier]. Tracking shows it's currently in [location], expected delivery [date]. Would you like me to: (1) Send tracking details to your email (2) Connect you with our shipping team (3) Something else

## ROI Calculation

**Typical Investment:**
- Tool cost: $50-300/month
- Setup time: 20-40 hours
- Ongoing maintenance: 2-5 hours/month

**Expected Returns:**
- Support costs reduced: 40-60%
- Response time: From hours to instant
- Lead capture: +25-40%
- Sales conversion: +15-30%
- Customer satisfaction: +20-35%

**Example:**
- Monthly tool cost: $100
- Support hours saved: 60 hours
- Value of saved time: $1,800
- Additional revenue from leads: $3,000
- Monthly ROI: 4,800%

## Ready to Implement?

**Start Small:**
1. Pick your #1 use case
2. Choose a tool with free trial
3. Build 3-5 conversation flows
4. Test with team
5. Launch to 10% of traffic
6. Optimize and scale

**Pro Members Get:**
- Conversation flow templates
- Chatbot setup checklist
- Response library
- A/B test ideas
- Monthly chatbot best practices
- Vendor discounts
    `,
  };

  return contents[id] || "Content not available.";
};

export function NewsletterDetailModal({ newsletter, onClose }: NewsletterDetailModalProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const content = getNewsletterContent(newsletter.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsletter.title,
        text: newsletter.excerpt,
        url: window.location.href,
      }).catch(() => {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex-1 mr-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                {newsletter.category}
              </span>
              <span className="text-sm text-gray-600">
                {new Date(newsletter.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-sm text-gray-600">• {newsletter.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{newsletter.title}</h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
          <div className="prose prose-lg max-w-none">
            {content.split('\n').map((line, index) => {
              // Render markdown-style content
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace('## ', '')}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace('### ', '')}</h3>;
              } else if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={index} className="font-bold text-gray-900 mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
              } else if (line.startsWith('- ')) {
                return <li key={index} className="text-gray-700 ml-6">{line.replace('- ', '')}</li>;
              } else if (line.startsWith('✓ ')) {
                return <li key={index} className="text-gray-700 ml-6 flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{line.replace('✓ ', '')}</span>
                </li>;
              } else if (line.trim() === '') {
                return <div key={index} className="h-2"></div>;
              } else if (line.startsWith('*"') && line.endsWith('"*')) {
                return <blockquote key={index} className="border-l-4 border-green-500 pl-4 italic text-gray-700 my-4">
                  {line.replace(/\*"/g, '').replace(/"$/, '')}
                </blockquote>;
              } else {
                return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
              }
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isLiked
                  ? "bg-red-50 text-red-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isLiked ? "Liked" : "Like"}
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isBookmarked
                  ? "bg-blue-50 text-blue-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {isBookmarked ? "Saved" : "Save"}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
