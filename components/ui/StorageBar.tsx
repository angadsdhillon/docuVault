import { cn } from "@/lib/cn";
import { formatBytes } from "@/lib/placeholder-data";

type StorageBarProps = {
  usedBytes: number;
  limitBytes: number;
  className?: string;
};

export function StorageBar({ usedBytes, limitBytes, className }: StorageBarProps) {
  const percentage = Math.min(Math.round((usedBytes / limitBytes) * 100), 100);
  const isNearLimit = percentage >= 80;

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">Storage</span>
        <span className="text-gray-500 dark:text-gray-400">
          {formatBytes(usedBytes)} of {formatBytes(limitBytes)} used
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Storage ${percentage}% used`}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            isNearLimit
              ? "bg-amber-500 dark:bg-amber-400"
              : "bg-gray-900 dark:bg-gray-100"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
