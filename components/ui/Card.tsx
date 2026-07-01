import Link from "next/link";
import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function Card({ children, className, href, onClick }: CardProps) {
  const baseStyles = cn(
    "rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors",
    "dark:border-gray-800 dark:bg-gray-900",
    (href || onClick) &&
      "cursor-pointer hover:border-gray-300 hover:shadow-md focus-within:ring-2 focus-within:ring-gray-400 focus-within:ring-offset-2 dark:hover:border-gray-700 dark:focus-within:ring-gray-500 dark:focus-within:ring-offset-gray-950"
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, "block no-underline", className)}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(baseStyles, "w-full text-left", className)}
      >
        {children}
      </button>
    );
  }

  return <div className={cn(baseStyles, className)}>{children}</div>;
}
