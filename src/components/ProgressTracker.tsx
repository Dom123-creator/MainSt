import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface ProgressTrackerProps {
  toolId: string;
  toolTitle: string;
  toolIcon: string;
}

const implementationSteps = [
  {
    title: "Research & Planning",
    description: "Understand the tool and plan your implementation",
    tasks: [
      "Review tool documentation",
      "Identify use cases for your business",
      "Estimate time and resources needed",
      "Get team buy-in",
    ],
  },
  {
    title: "Setup & Configuration",
    description: "Get the tool set up and configured",
    tasks: [
      "Create account and sign up",
      "Configure initial settings",
      "Set up integrations",
      "Invite team members",
    ],
  },
  {
    title: "Training & Testing",
    description: "Learn the tool and test with real scenarios",
    tasks: [
      "Complete onboarding tutorials",
      "Test with sample data",
      "Train team members",
      "Document processes",
    ],
  },
  {
    title: "Launch & Optimize",
    description: "Go live and continuously improve",
    tasks: [
      "Roll out to full team",
      "Monitor usage and results",
      "Gather feedback",
      "Optimize workflows",
    ],
  },
];

export function ProgressTracker({ toolId, toolTitle, toolIcon }: ProgressTrackerProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [localCompletedTasks, setLocalCompletedTasks] = useState<Set<string>>(new Set());

  const userProgress = useQuery(api.userDataManagement.getUserProgress);
  const updateProgress = useMutation(api.userDataManagement.updateProgress);

  // Find progress for this tool
  const toolProgress = userProgress?.find((p) => p.toolId === toolId);

  // Calculate total tasks and completed tasks
  const totalTasks = implementationSteps.reduce((sum, step) => sum + step.tasks.length, 0);
  const completedTasksCount = toolProgress?.completedSteps.length || 0;
  const overallProgress = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;

  const handleTaskToggle = async (stepIndex: number, taskIndex: number) => {
    const taskId = `${stepIndex}-${taskIndex}`;
    const newCompleted = new Set(localCompletedTasks);

    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }

    setLocalCompletedTasks(newCompleted);

    try {
      await updateProgress({
        toolId,
        completedSteps: Array.from(newCompleted).map(id => {
          const [step, task] = id.split("-").map(Number);
          return step * 100 + task; // Create unique number for each task
        }),
        totalSteps: totalTasks,
      });

      if (!newCompleted.has(taskId)) {
        toast.success("Task unmarked");
      } else {
        toast.success("Task completed! 🎉");
      }
    } catch (error: any) {
      if (error.message.includes("authenticated")) {
        toast.error("Please sign in to track your progress");
        newCompleted.delete(taskId); // Revert local state
        setLocalCompletedTasks(newCompleted);
      } else {
        toast.error("Failed to update progress");
      }
    }
  };

  // Initialize local state from backend
  useState(() => {
    if (toolProgress) {
      const completed = new Set<string>();
      toolProgress.completedSteps.forEach(num => {
        const stepIndex = Math.floor(num / 100);
        const taskIndex = num % 100;
        completed.add(`${stepIndex}-${taskIndex}`);
      });
      setLocalCompletedTasks(completed);
    }
  });

  const isTaskCompleted = (stepIndex: number, taskIndex: number) => {
    return localCompletedTasks.has(`${stepIndex}-${taskIndex}`);
  };

  const getStepProgress = (stepIndex: number) => {
    const step = implementationSteps[stepIndex];
    const completedInStep = step.tasks.filter((_, taskIndex) =>
      isTaskCompleted(stepIndex, taskIndex)
    ).length;
    return (completedInStep / step.tasks.length) * 100;
  };

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{toolIcon}</div>
          <div>
            <h3 className="text-2xl font-bold">Implementation Progress</h3>
            <p className="text-blue-100">{toolTitle}</p>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Overall Progress</span>
            <span className="font-bold">{Math.round(overallProgress)}%</span>
          </div>
          <div className="w-full bg-blue-900 bg-opacity-30 rounded-full h-4">
            <div
              className="bg-white h-4 rounded-full transition-all duration-500 flex items-center justify-end px-2"
              style={{ width: `${overallProgress}%` }}
            >
              {overallProgress > 10 && (
                <span className="text-xs font-bold text-blue-600">
                  {completedTasksCount}/{totalTasks}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="divide-y divide-gray-200">
        {implementationSteps.map((step, stepIndex) => {
          const stepProgress = getStepProgress(stepIndex);
          const isExpanded = expandedStep === stepIndex;
          const isStepComplete = stepProgress === 100;

          return (
            <div key={stepIndex}>
              {/* Step Header */}
              <button
                onClick={() => setExpandedStep(isExpanded ? null : stepIndex)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  {/* Step Number/Check */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      isStepComplete
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {isStepComplete ? "✓" : stepIndex + 1}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>

                    {/* Step Progress Bar */}
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          isStepComplete ? "bg-green-500" : "bg-blue-500"
                        }`}
                        style={{ width: `${stepProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Progress Percentage */}
                  <div className="text-sm font-bold text-gray-900">
                    {Math.round(stepProgress)}%
                  </div>

                  {/* Expand Icon */}
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Step Tasks */}
              {isExpanded && (
                <div className="px-6 pb-4 bg-gray-50">
                  <div className="space-y-2 pl-14">
                    {step.tasks.map((task, taskIndex) => {
                      const isCompleted = isTaskCompleted(stepIndex, taskIndex);

                      return (
                        <label
                          key={taskIndex}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors group"
                        >
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() => handleTaskToggle(stepIndex, taskIndex)}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                          />
                          <span
                            className={`flex-1 transition-all ${
                              isCompleted
                                ? "text-gray-400 line-through"
                                : "text-gray-900 group-hover:text-blue-600"
                            }`}
                          >
                            {task}
                          </span>
                          {isCompleted && (
                            <span className="text-green-500 text-xl">✓</span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {overallProgress === 100 && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 text-center">
          <div className="text-5xl mb-3">🎉</div>
          <h4 className="text-2xl font-bold mb-2">Congratulations!</h4>
          <p className="text-green-100">
            You've completed the implementation of {toolTitle}. Keep optimizing and enjoy the benefits!
          </p>
        </div>
      )}
    </div>
  );
}
