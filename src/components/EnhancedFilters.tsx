import { useState } from "react";

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  setupTimeMax: number;
  showProOnly: boolean;
  showFreeOnly: boolean;
}

interface EnhancedFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClose: () => void;
}

export function EnhancedFilters({ filters, onFiltersChange, onClose }: EnhancedFiltersProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  const categories = [
    { id: "hvac", label: "HVAC", icon: "🔧" },
    { id: "legal", label: "Legal", icon: "⚖️" },
    { id: "accounting", label: "Accounting", icon: "💼" },
    { id: "finance", label: "Finance", icon: "💰" },
    { id: "landscaping", label: "Landscaping", icon: "🌿" },
    { id: "retail", label: "Retail", icon: "🛍️" },
    { id: "healthcare", label: "Healthcare", icon: "🏥" },
    { id: "construction", label: "Construction", icon: "🏗️" },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = localFilters.categories.includes(categoryId)
      ? localFilters.categories.filter(c => c !== categoryId)
      : [...localFilters.categories, categoryId];

    setLocalFilters({ ...localFilters, categories: newCategories });
  };

  const handleApply = () => {
    onFiltersChange(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      categories: [],
      priceRange: [0, 1000],
      setupTimeMax: 100,
      showProOnly: false,
      showFreeOnly: false,
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  const activeFilterCount =
    localFilters.categories.length +
    (localFilters.priceRange[0] > 0 || localFilters.priceRange[1] < 1000 ? 1 : 0) +
    (localFilters.setupTimeMax < 100 ? 1 : 0) +
    (localFilters.showProOnly ? 1 : 0) +
    (localFilters.showFreeOnly ? 1 : 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
            {activeFilterCount > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                {activeFilterCount} active {activeFilterCount === 1 ? "filter" : "filters"}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Industries</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryToggle(cat.id)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all border-2 ${
                    localFilters.categories.includes(cat.id)
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span className="font-medium">
                  ${localFilters.priceRange[0]}/mo
                </span>
                <span className="text-gray-500">to</span>
                <span className="font-medium">
                  {localFilters.priceRange[1] >= 1000 ? "$1000+/mo" : `$${localFilters.priceRange[1]}/mo`}
                </span>
              </div>

              {/* Min Price */}
              <div>
                <label className="text-xs text-gray-600 mb-2 block">Minimum Price</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={localFilters.priceRange[0]}
                  onChange={(e) => {
                    const newMin = Number(e.target.value);
                    if (newMin <= localFilters.priceRange[1]) {
                      setLocalFilters({
                        ...localFilters,
                        priceRange: [newMin, localFilters.priceRange[1]],
                      });
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
              </div>

              {/* Max Price */}
              <div>
                <label className="text-xs text-gray-600 mb-2 block">Maximum Price</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={localFilters.priceRange[1]}
                  onChange={(e) => {
                    const newMax = Number(e.target.value);
                    if (newMax >= localFilters.priceRange[0]) {
                      setLocalFilters({
                        ...localFilters,
                        priceRange: [localFilters.priceRange[0], newMax],
                      });
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
              </div>
            </div>
          </div>

          {/* Setup Time */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Setup Time
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-medium">Maximum setup time:</span>
                <span className="text-green-600 font-bold">
                  {localFilters.setupTimeMax >= 100 ? "Any" : `${localFilters.setupTimeMax} hours`}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={localFilters.setupTimeMax}
                onChange={(e) =>
                  setLocalFilters({ ...localFilters, setupTimeMax: Number(e.target.value) })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>1 hour</span>
                <span>100+ hours</span>
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Filters</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.showProOnly}
                  onChange={(e) => {
                    setLocalFilters({
                      ...localFilters,
                      showProOnly: e.target.checked,
                      showFreeOnly: e.target.checked ? false : localFilters.showFreeOnly,
                    });
                  }}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                />
                <div>
                  <div className="font-medium text-gray-900">PRO Tools Only</div>
                  <div className="text-sm text-gray-600">Show only premium tools</div>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.showFreeOnly}
                  onChange={(e) => {
                    setLocalFilters({
                      ...localFilters,
                      showFreeOnly: e.target.checked,
                      showProOnly: e.target.checked ? false : localFilters.showProOnly,
                    });
                  }}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                />
                <div>
                  <div className="font-medium text-gray-900">Free Tools Only</div>
                  <div className="text-sm text-gray-600">Show only free tools</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
          <button
            onClick={handleReset}
            className="flex-1 px-6 py-3 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Reset All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
