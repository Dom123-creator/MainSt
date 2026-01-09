import { createContext, useContext, useState, ReactNode } from "react";
import { Tool } from "../data/mockData";

interface ComparisonContextType {
  comparisonTools: Tool[];
  addToComparison: (tool: Tool) => boolean;
  removeFromComparison: (toolId: string) => void;
  clearComparison: () => void;
  isInComparison: (toolId: string) => boolean;
  canAddMore: boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

const MAX_COMPARISON = 3;

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparisonTools, setComparisonTools] = useState<Tool[]>([]);

  const addToComparison = (tool: Tool): boolean => {
    if (comparisonTools.length >= MAX_COMPARISON) {
      return false;
    }
    if (comparisonTools.find((t) => t.id === tool.id)) {
      return false;
    }
    setComparisonTools((prev) => [...prev, tool]);
    return true;
  };

  const removeFromComparison = (toolId: string) => {
    setComparisonTools((prev) => prev.filter((t) => t.id !== toolId));
  };

  const clearComparison = () => {
    setComparisonTools([]);
  };

  const isInComparison = (toolId: string) => {
    return comparisonTools.some((t) => t.id === toolId);
  };

  const canAddMore = comparisonTools.length < MAX_COMPARISON;

  return (
    <ComparisonContext.Provider
      value={{
        comparisonTools,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isInComparison,
        canAddMore,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
