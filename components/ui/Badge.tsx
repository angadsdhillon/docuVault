import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "count" | "category";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  count:
    "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900",
  category:
    "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
