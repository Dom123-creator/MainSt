import { Tool } from "../data/mockData";
import { PremiumBadge } from "./PremiumBadge";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all border-2 cursor-pointer transform hover:-translate-y-1 ${
      tool.isPro ? "border-orange-200 bg-gradient-to-br from-white to-orange-50" : "border-gray-200 hover:border-green-500"
    }`}>
      <div className="flex items-start gap-4">
        <div className="text-4xl">{tool.icon}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{tool.title}</h3>
            {tool.isPro && <PremiumBadge size="sm" />}
          </div>
          <p className="text-sm text-gray-600 mb-4">{tool.description}</p>

          <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
            {tool.setupTime && (
              <span>Setup: {tool.setupTime}</span>
            )}
            {tool.roi && (
              <span className="text-green-600 font-semibold">{tool.roi}</span>
            )}
            {tool.cost && (
              <span>Cost: {tool.cost}</span>
            )}
          </div>

          {tool.tags && tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
