export function ChallengeSection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
            👤
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">
            Real "Saturday Morning Challenge"
          </h3>
          <p className="text-sm text-gray-600">
            Yes, the one brief day at one o'clock in the morning for outdoor tool alerts
          </p>
        </div>
      </div>
    </div>
  );
}
