export function ToolCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
      {/* Icon Skeleton */}
      <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>

      {/* Title Skeleton */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="flex items-center gap-4">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>

      {/* Tags Skeleton */}
      <div className="flex gap-2 mt-4">
        <div className="h-6 bg-gray-200 rounded w-16"></div>
        <div className="h-6 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  );
}

export function ToolGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <ToolCardSkeleton key={idx} />
      ))}
    </div>
  );
}

export function DashboardStatSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
      <div className="flex items-center justify-between mb-2">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-20 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-32"></div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3 px-4">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
      </td>
      <td className="py-3 px-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      </td>
      <td className="py-3 px-4">
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      </td>
      <td className="py-3 px-4">
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </td>
      <td className="py-3 px-4">
        <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
      </td>
    </tr>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4">
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </th>
            <th className="text-left py-3 px-4">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </th>
            <th className="text-left py-3 px-4">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
            </th>
            <th className="text-left py-3 px-4">
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </th>
            <th className="text-left py-3 px-4">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, idx) => (
            <TableRowSkeleton key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
