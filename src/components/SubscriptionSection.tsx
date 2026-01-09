import { useState } from "react";
import { PaymentModal } from "./PaymentModal";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started with AI tools",
    features: [
      "Access to 3 playbooks per month",
      "Basic tool recommendations",
      "Weekly newsletter",
      "Community access"
    ],
    cta: "Get Started Free"
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For businesses ready to scale with AI",
    features: [
      "Unlimited playbook access",
      "All premium tools & guides",
      "Daily growth tips",
      "Priority email support",
      "Exclusive webinars",
      "Custom tool recommendations"
    ],
    popular: true,
    cta: "Start Pro Trial"
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams that need dedicated support",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom playbook creation",
      "1-on-1 strategy sessions",
      "API access",
      "White-label solutions",
      "Team collaboration tools"
    ],
    cta: "Contact Sales"
  }
];

export function SubscriptionSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const handleGetStarted = (planName: string, price: string) => {
    setSelectedPlan(planName);
    setSelectedPrice(price);
    setShowModal(true);
  };

  return (
    <>
      <div id="subscription-section" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to MainSt.AI Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Get exclusive access to AI tools, playbooks, and growth strategies
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-2 shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === "annual"
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => {
            const annualPrice = tier.price === "$0"
              ? "$0"
              : `$${Math.floor(parseInt(tier.price.replace("$", "")) * 12 * 0.8)}`;
            const displayPrice = billingPeriod === "annual" ? annualPrice : tier.price;
            const displayPeriod = billingPeriod === "annual" ? "/year" : tier.period;

            return (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  tier.popular ? "ring-4 ring-green-500 transform scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">{displayPrice}</span>
                    <span className="text-gray-600">{displayPeriod}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleGetStarted(tier.name, displayPrice)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">Trusted by 10,000+ businesses</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-gray-400">🔒 Secure Payment</div>
            <div className="text-gray-400">💳 Cancel Anytime</div>
            <div className="text-gray-400">✓ 14-Day Money Back</div>
            <div className="text-gray-400">⚡ Instant Access</div>
          </div>
        </div>
      </div>
    </div>

    {showModal && (
      <PaymentModal
        selectedPlan={selectedPlan}
        planPrice={selectedPrice}
        onClose={() => setShowModal(false)}
      />
    )}
    </>
  );
}
