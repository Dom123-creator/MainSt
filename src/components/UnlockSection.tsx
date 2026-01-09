export function UnlockSection() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Unlock Copy-Paste Script
      </h2>

      <div className="flex justify-center mb-6">
        <button
          className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--primary-green)' }}
        >
          Upgrade to Pro
        </button>
      </div>

      <div className="relative">
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-gray-400 text-sm blur-sm select-none">
            Unlock Script: "Ready to copy and paste" 🔒
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6 text-2xl">
        <span>💡</span>
        <span>⚡</span>
        <span>🎯</span>
        <span>📊</span>
      </div>

      <p className="text-center text-xs text-gray-500 mt-4">
        Unlock amazing features for your project
      </p>
    </div>
  );
}
