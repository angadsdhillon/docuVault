import { CategoryCard } from "@/components/documents/CategoryCard";
import { AppShell } from "@/components/layout/AppShell";
import { SyncButton } from "@/components/layout/SyncButton";
import { StorageBar } from "@/components/ui/StorageBar";
import {
  PLACEHOLDER_CATEGORIES,
  PLACEHOLDER_USER,
  STORAGE_USAGE,
} from "@/lib/placeholder-data";

async function simulateLoading() {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export default async function HomePage() {
  await simulateLoading();

  const headerActions = (
    <>
      <SyncButton />
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        aria-label={`User avatar for ${PLACEHOLDER_USER.name}`}
        title={PLACEHOLDER_USER.name}
      >
        {PLACEHOLDER_USER.initials}
      </div>
    </>
  );

  return (
    <AppShell actions={headerActions}>
      <div className="space-y-8">
        <section>
          <StorageBar
            usedBytes={STORAGE_USAGE.usedBytes}
            limitBytes={STORAGE_USAGE.limitBytes}
          />
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Categories
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {PLACEHOLDER_CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
