import { DocumentRow } from "@/components/documents/DocumentRow";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  getCategoryBySlug,
  PLACEHOLDER_DOCUMENTS,
} from "@/lib/placeholder-data";
import { FolderOpen } from "lucide-react";

type CategoryPageProps = {
  params: { slug: string };
};

async function simulateLoading() {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  await simulateLoading();

  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return (
      <AppShell showBack backHref="/home" title="Category not found">
        <EmptyState
          icon={FolderOpen}
          title="Category not found"
          description="This category doesn't exist. Head back to browse your documents."
        />
      </AppShell>
    );
  }

  return (
    <AppShell
      showBack
      backHref="/home"
      title={category.label}
    >
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {PLACEHOLDER_DOCUMENTS.map((document) => (
            <DocumentRow key={document.id} document={document} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
