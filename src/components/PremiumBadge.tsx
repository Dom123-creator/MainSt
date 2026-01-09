interface PremiumBadgeProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function PremiumBadge({ size = "md", showText = true }: PremiumBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2"
  };

  return (
    <span className={`inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full ${sizeClasses[size]}`}>
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      {showText && "PRO"}
    </span>
  );
}

interface PremiumOverlayProps {
  title?: string;
  onUpgrade: () => void;
}

export function PremiumOverlay({ title = "Premium Content", onUpgrade }: PremiumOverlayProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/90 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
      <div className="text-center p-6">
        <div className="inline-block mb-4">
          <PremiumBadge size="lg" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-6 text-sm">
          Upgrade to Pro to unlock this content
        </p>
        <button
          onClick={onUpgrade}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}
