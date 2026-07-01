import { CategoryGridSkeleton } from "@/components/ui/Skeleton";

export default function HomeLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-2 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
      </div>
      <CategoryGridSkeleton />
    </div>
  );
}
