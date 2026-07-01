import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

type AppShellProps = {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  backHref?: string;
  actions?: React.ReactNode;
};

export function AppShell({
  children,
  title,
  showBack = false,
  backHref = "/home",
  actions,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:px-6">
          {showBack ? (
            <Link
              href={backHref}
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors",
                "hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
                "dark:text-gray-400 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-500 dark:focus-visible:ring-offset-gray-950"
              )}
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
          ) : (
            <Link
              href="/home"
              className="text-lg font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-80 dark:text-gray-100"
            >
              DocuVault
            </Link>
          )}

          {title && (
            <h1 className="min-w-0 flex-1 truncate text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
              {title}
            </h1>
          )}

          {!title && !showBack && <div className="flex-1" />}

          {actions && (
            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
              {actions}
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
    </div>
  );
}
