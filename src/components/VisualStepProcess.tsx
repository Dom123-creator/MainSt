import { useState } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
  details?: string[];
  tip?: string;
}

interface VisualStepProcessProps {
  steps: Step[];
  title?: string;
}

export function VisualStepProcess({ steps, title = "Implementation Steps" }: VisualStepProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };

  const handleCompleteStep = (stepNumber: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepNumber)) {
      newCompleted.delete(stepNumber);
    } else {
      newCompleted.add(stepNumber);
    }
    setCompletedSteps(newCompleted);

    // Auto-advance to next step
    if (!newCompleted.has(stepNumber) && stepNumber < steps.length - 1) {
      setActiveStep(stepNumber + 1);
    }
  };

  const progress = (completedSteps.size / steps.length) * 100;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            📋 {title}
          </h3>
          <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
            {completedSteps.size}/{steps.length} Completed
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Navigator */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <button
              onClick={() => handleStepClick(index)}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all transform hover:scale-105 ${
                activeStep === index
                  ? 'bg-blue-600 text-white shadow-lg ring-4 ring-blue-200'
                  : completedSteps.has(index)
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {completedSteps.has(index) ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <>
                  <span className="text-2xl mb-0.5">{step.icon}</span>
                  <span className="text-xs font-bold">{step.number}</span>
                </>
              )}
            </button>
            {index < steps.length - 1 && (
              <div className={`h-0.5 w-8 transition-all ${completedSteps.has(index) ? 'bg-green-500' : 'bg-gray-300'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Active Step Content */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 min-h-[300px] transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-xl text-2xl shadow-lg">
              {steps[activeStep].icon}
            </div>
            <div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                Step {steps[activeStep].number}
              </span>
              <h4 className="text-2xl font-bold text-gray-900">
                {steps[activeStep].title}
              </h4>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {steps[activeStep].description}
        </p>

        {steps[activeStep].details && steps[activeStep].details!.length > 0 && (
          <div className="bg-white bg-opacity-80 rounded-xl p-5 mb-4">
            <p className="text-sm font-bold text-gray-900 mb-3">📝 What to do:</p>
            <ul className="space-y-2">
              {steps[activeStep].details!.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {steps[activeStep].tip && (
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-6">
            <p className="text-sm font-bold text-yellow-800 mb-1 flex items-center gap-2">
              💡 Pro Tip:
            </p>
            <p className="text-sm text-yellow-900">{steps[activeStep].tip}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 mt-6">
          <button
            onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
            disabled={activeStep === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
              activeStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:shadow-md'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <button
            onClick={() => handleCompleteStep(activeStep)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${
              completedSteps.has(activeStep)
                ? 'bg-gray-600 text-white hover:bg-gray-700'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {completedSteps.has(activeStep) ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Mark Incomplete
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mark Complete
              </>
            )}
          </button>

          <button
            onClick={() => activeStep < steps.length - 1 && setActiveStep(activeStep + 1)}
            disabled={activeStep === steps.length - 1}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
              activeStep === steps.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:shadow-md'
            }`}
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Completion Celebration */}
      {completedSteps.size === steps.length && (
        <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 animate-pulse">
          <div className="text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h4 className="text-2xl font-bold mb-2">Congratulations!</h4>
            <p className="text-green-50">
              You've completed all the steps. You're ready to turn website visitors into leads!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
