import { useState } from "react";

interface ROICalculatorProps {
  toolTitle: string;
  defaultHoursSaved?: number;
  defaultHourlyRate?: number;
  defaultMonthlyCost?: number;
}

export function ROICalculator({
  toolTitle,
  defaultHoursSaved = 10,
  defaultHourlyRate = 50,
  defaultMonthlyCost = 100,
}: ROICalculatorProps) {
  const [hoursSaved, setHoursSaved] = useState(defaultHoursSaved);
  const [hourlyRate, setHourlyRate] = useState(defaultHourlyRate);
  const [monthlyCost, setMonthlyCost] = useState(defaultMonthlyCost);
  const [teamSize, setTeamSize] = useState(1);

  // Calculations
  const monthlySavings = hoursSaved * hourlyRate * 4 * teamSize; // 4 weeks per month
  const annualSavings = monthlySavings * 12;
  const netMonthlySavings = monthlySavings - monthlyCost;
  const netAnnualSavings = annualSavings - (monthlyCost * 12);
  const roiPercentage = monthlyCost > 0 ? ((netMonthlySavings / monthlyCost) * 100) : 0;
  const breakEvenWeeks = netMonthlySavings > 0 ? Math.ceil((monthlyCost / (netMonthlySavings / 4))) : 0;

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">💰</span>
        <h3 className="text-xl font-bold text-gray-900">ROI Calculator</h3>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Calculate your potential return on investment with {toolTitle}
      </p>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {/* Hours Saved Per Week */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Hours saved per week</span>
            <span className="text-green-600 font-bold">{hoursSaved} hrs</span>
          </label>
          <input
            type="range"
            min="1"
            max="40"
            value={hoursSaved}
            onChange={(e) => setHoursSaved(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 hr</span>
            <span>40 hrs</span>
          </div>
        </div>

        {/* Hourly Rate */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Your hourly rate</span>
            <span className="text-green-600 font-bold">${hourlyRate}/hr</span>
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$10/hr</span>
            <span>$500/hr</span>
          </div>
        </div>

        {/* Monthly Cost */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Tool monthly cost</span>
            <span className="text-blue-600 font-bold">${monthlyCost}/mo</span>
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={monthlyCost}
            onChange={(e) => setMonthlyCost(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Free</span>
            <span>$1000/mo</span>
          </div>
        </div>

        {/* Team Size */}
        <div>
          <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Team size</span>
            <span className="text-purple-600 font-bold">{teamSize} {teamSize === 1 ? "person" : "people"}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>50</span>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Monthly Savings */}
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <div className="text-xs text-gray-600 mb-1">Monthly Savings</div>
          <div className="text-2xl font-bold text-green-600">
            ${monthlySavings.toLocaleString()}
          </div>
        </div>

        {/* Annual Savings */}
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <div className="text-xs text-gray-600 mb-1">Annual Savings</div>
          <div className="text-2xl font-bold text-green-600">
            ${annualSavings.toLocaleString()}
          </div>
        </div>

        {/* Net Monthly */}
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="text-xs text-gray-600 mb-1">Net Monthly Profit</div>
          <div className={`text-2xl font-bold ${netMonthlySavings > 0 ? "text-green-600" : "text-red-600"}`}>
            ${netMonthlySavings.toLocaleString()}
          </div>
        </div>

        {/* ROI Percentage */}
        <div className="bg-white rounded-lg p-4 border border-purple-200">
          <div className="text-xs text-gray-600 mb-1">ROI</div>
          <div className={`text-2xl font-bold ${roiPercentage > 0 ? "text-green-600" : "text-red-600"}`}>
            {roiPercentage > 0 ? "+" : ""}{roiPercentage.toFixed(0)}%
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm opacity-90 mb-1">Annual Net Profit</div>
            <div className="text-3xl font-bold">
              ${netAnnualSavings.toLocaleString()}
            </div>
            {breakEvenWeeks > 0 && breakEvenWeeks < 52 && (
              <div className="text-sm opacity-90 mt-2">
                ⚡ Break even in {breakEvenWeeks} {breakEvenWeeks === 1 ? "week" : "weeks"}
              </div>
            )}
          </div>
          <div className="text-right">
            {netAnnualSavings > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-3xl">🚀</span>
                <span className="text-sm font-medium">Great ROI!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚠️</span>
                <span className="text-sm font-medium">Adjust values</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 text-xs text-gray-600 bg-white rounded-lg p-3 border border-gray-200">
        <strong>How we calculate:</strong> Your time savings ({hoursSaved} hrs/week × ${hourlyRate}/hr × 4 weeks × {teamSize} {teamSize === 1 ? "person" : "people"})
        minus tool cost (${monthlyCost}/mo) = <strong className="text-green-600">${netMonthlySavings.toLocaleString()}/month profit</strong>
      </div>
    </div>
  );
}
