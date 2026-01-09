import { ToolCard } from "./ToolCard";
import { problemTools, Tool } from "../data/mockData";

interface ProblemSectionProps {
  selectedFilters: string[];
  searchQuery: string;
  onToolClick: (toolId: string) => void;
  tools?: Tool[];
  sectionTitle?: string;
}

export function ProblemSection({
  selectedFilters,
  searchQuery,
  onToolClick,
  tools = problemTools,
  sectionTitle = "H₂ Problem"
}: ProblemSectionProps) {
  let filteredTools = tools;

  // Filter by category
  if (selectedFilters.length > 0) {
    filteredTools = filteredTools.filter(tool =>
      tool.category && selectedFilters.includes(tool.category)
    );
  }

  // Filter by search query
  if (searchQuery) {
    filteredTools = filteredTools.filter(tool =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          <span style={{ color: 'var(--primary-green)' }}>{sectionTitle}</span>
        </h2>
        <span className="text-sm text-gray-500">
          {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
        </span>
      </div>

      {filteredTools.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center shadow-sm">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
          <p className="text-gray-600">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredTools.map((tool) => (
            <div key={tool.id} onClick={() => onToolClick(tool.id)}>
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
