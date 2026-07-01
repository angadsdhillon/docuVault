import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getCategoryIcon } from "@/components/documents/icons";
import type { Category } from "@/types";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = getCategoryIcon(category.iconName);

  return (
    <Card href={`/category/${category.slug}`} className="group p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
        <Icon
          className="h-5 w-5 text-gray-700 dark:text-gray-300"
          aria-hidden
        />
      </div>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        {category.label}
      </h2>
      <div className="mt-2">
        <Badge variant="count">
          {category.documentCount}{" "}
          {category.documentCount === 1 ? "doc" : "docs"}
        </Badge>
      </div>
    </Card>
  );
}
