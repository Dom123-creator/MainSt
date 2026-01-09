import { useState } from "react";
import { playbookFilters, growthArticles, operationsArticles } from "../data/mockData";

interface LatestPlaybooksProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
  articlesType?: "growth" | "operations";
}

export function LatestPlaybooks({
  selectedFilters,
  onFilterChange,
  articlesType = "growth"
}: LatestPlaybooksProps) {
  const [filters, setFilters] = useState(playbookFilters);

  const articles = articlesType === "operations" ? operationsArticles : growthArticles;

  const handleFilterChange = (id: string) => {
    const updatedFilters = filters.map(filter =>
      filter.id === id ? { ...filter, checked: !filter.checked } : filter
    );
    setFilters(updatedFilters);

    const checkedFilters = updatedFilters
      .filter(f => f.checked)
      .map(f => f.id);
    onFilterChange(checkedFilters);
  };

  const filteredArticles = selectedFilters.length > 0
    ? articles.filter(article => selectedFilters.includes(article.category))
    : articles.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Playbooks</h2>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">Filter by:</p>
          <div className="space-y-3">
            <div className="text-sm text-gray-600 mb-2">Industry</div>
            {filters.map((filter) => (
              <label key={filter.id} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                <input
                  type="checkbox"
                  checked={filter.checked}
                  onChange={() => handleFilterChange(filter.id)}
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700">{filter.label}</span>
              </label>
            ))}
          </div>
        </div>

        {selectedFilters.length > 0 && (
          <button
            onClick={() => {
              setFilters(playbookFilters.map(f => ({ ...f, checked: false })));
              onFilterChange([]);
            }}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-green-500"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-900 line-clamp-2">{article.title}</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{article.readTime}</span>
              <span>{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
