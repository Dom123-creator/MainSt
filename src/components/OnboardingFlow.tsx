import { useState, useEffect } from "react";

interface OnboardingFlowProps {
  onComplete: (preferences: { industry?: string; businessSize?: string; goals?: string[] }) => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState<{
    industry?: string;
    businessSize?: string;
    goals?: string[];
  }>({});

  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if user has seen onboarding before
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const industries = [
    { id: "hvac", label: "HVAC", icon: "🔧" },
    { id: "legal", label: "Legal", icon: "⚖️" },
    { id: "accounting", label: "Accounting", icon: "💼" },
    { id: "finance", label: "Finance", icon: "💰" },
    { id: "landscaping", label: "Landscaping", icon: "🌿" },
    { id: "retail", label: "Retail", icon: "🛍️" },
    { id: "healthcare", label: "Healthcare", icon: "🏥" },
    { id: "construction", label: "Construction", icon: "🏗️" },
    { id: "other", label: "Other", icon: "🏢" },
  ];

  const businessSizes = [
    { id: "solo", label: "Just Me", icon: "👤", description: "Solo entrepreneur" },
    { id: "small", label: "Small Team", icon: "👥", description: "2-10 employees" },
    { id: "medium", label: "Medium Business", icon: "🏢", description: "11-50 employees" },
    { id: "large", label: "Large Business", icon: "🏭", description: "50+ employees" },
  ];

  const goals = [
    { id: "save_time", label: "Save Time", icon: "⏰" },
    { id: "reduce_costs", label: "Reduce Costs", icon: "💰" },
    { id: "automate", label: "Automate Tasks", icon: "🤖" },
    { id: "grow", label: "Grow Revenue", icon: "📈" },
    { id: "improve_customer", label: "Better Customer Service", icon: "💬" },
    { id: "organize", label: "Get Organized", icon: "📊" },
  ];

  const handleGoalToggle = (goalId: string) => {
    const currentGoals = preferences.goals || [];
    const newGoals = currentGoals.includes(goalId)
      ? currentGoals.filter(g => g !== goalId)
      : [...currentGoals, goalId];

    setPreferences({ ...preferences, goals: newGoals });
  };

  const handleComplete = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    setShowOnboarding(false);
    onComplete(preferences);
  };

  const handleSkip = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setShowOnboarding(false);
    onComplete({});
  };

  if (!showOnboarding) {
    return null;
  }

  const steps = [
    // Welcome Step
    {
      title: "Welcome to Main St. AI! 🎉",
      description: "We're here to help you find the perfect AI tools for your business",
      content: (
        <div className="text-center py-8">
          <div className="text-8xl mb-6">🚀</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your AI Journey Starts Here
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            In just 3 quick steps, we'll personalize your experience and show you the tools that matter most to your business.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="font-medium">2 minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-medium">Personalized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🆓</div>
              <div className="font-medium">Free tools</div>
            </div>
          </div>
        </div>
      ),
    },
    // Industry Step
    {
      title: "What industry are you in?",
      description: "This helps us show you relevant tools",
      content: (
        <div className="py-6">
          <div className="grid grid-cols-3 gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setPreferences({ ...preferences, industry: industry.id })}
                className={`p-6 rounded-xl border-2 transition-all ${
                  preferences.industry === industry.id
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-300 hover:shadow"
                }`}
              >
                <div className="text-4xl mb-2">{industry.icon}</div>
                <div className="font-semibold text-gray-900">{industry.label}</div>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    // Business Size Step
    {
      title: "How big is your business?",
      description: "We'll recommend tools that scale with you",
      content: (
        <div className="py-6">
          <div className="grid grid-cols-2 gap-4">
            {businessSizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setPreferences({ ...preferences, businessSize: size.id })}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  preferences.businessSize === size.id
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-300 hover:shadow"
                }`}
              >
                <div className="text-4xl mb-3">{size.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{size.label}</div>
                <div className="text-sm text-gray-600">{size.description}</div>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    // Goals Step
    {
      title: "What are your main goals?",
      description: "Select all that apply",
      content: (
        <div className="py-6">
          <div className="grid grid-cols-2 gap-4">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleGoalToggle(goal.id)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  preferences.goals?.includes(goal.id)
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-300 hover:shadow"
                }`}
              >
                <div className="text-4xl mb-2">{goal.icon}</div>
                <div className="font-semibold text-gray-900">{goal.label}</div>
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-2">
                Step {currentStep + 1} of {steps.length}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600">{currentStepData.description}</p>
            </div>
            <button
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-600 text-sm font-medium"
            >
              Skip
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {currentStepData.content}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={isFirstStep}
            className="px-6 py-3 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>

          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentStep
                    ? "bg-green-600 w-8"
                    : idx < currentStep
                    ? "bg-green-300"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {isLastStep ? (
            <button
              onClick={handleComplete}
              className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
