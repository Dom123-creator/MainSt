import { ToolCard } from "./ToolCard";
import { techRyboksTools, Tool } from "../data/mockData";

interface TechRyboksProps {
  selectedFilters: string[];
  searchQuery: string;
  onToolClick: (toolId: string) => void;
  tools?: Tool[];
  sectionTitle?: string;
}

export function TechRyboks({
  selectedFilters,
  searchQuery,
  onToolClick,
  tools = techRyboksTools,
  sectionTitle = "Tech Ryboks"
}: TechRyboksProps) {
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
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{sectionTitle}</h2>

      {filteredTools.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <div className="text-4xl mb-2">🔍</div>
          <p className="text-sm text-gray-600">No tools match your criteria</p>
        </div>
      ) : (
        <div className="space-y-4">
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
