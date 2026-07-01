import { Download, FileText } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { getCategoryBySlug, getDocumentById, formatDate } from "@/lib/placeholder-data";

type DocumentPageProps = {
  params: { id: string };
};

export default function DocumentPage({ params }: DocumentPageProps) {
  const document = getDocumentById(params.id);

  if (!document) {
    return (
      <AppShell showBack backHref="/home" title="Document not found">
        <EmptyState
          icon={FileText}
          title="Document not found"
          description="This document may have been moved or deleted."
        />
      </AppShell>
    );
  }

  const category = getCategoryBySlug(document.category);

  return (
    <AppShell
      showBack
      backHref={`/category/${document.category}`}
      title={document.filename}
    >
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Document preview */}
        <div className="flex-1">
          <div
            className="flex aspect-[3/4] min-h-[320px] items-center justify-center rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900"
            role="img"
            aria-label={`Preview placeholder for ${document.filename}`}
          >
            <div className="text-center">
              <FileText
                className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600"
                aria-hidden
              />
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Document preview
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                {document.filename}
              </p>
            </div>
          </div>
        </div>

        {/* Metadata panel */}
        <aside className="w-full shrink-0 lg:w-80">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="break-all text-lg font-semibold text-gray-900 dark:text-gray-100">
              {document.filename}
            </h2>

            {category && (
              <div className="mt-3">
                <Badge variant="category">{category.label}</Badge>
              </div>
            )}

            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  AI Summary
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {document.summary}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  Email Subject
                </dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {document.emailSubject}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  Sender
                </dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {document.sender}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
                  Date Received
                </dt>
                <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  <time dateTime={document.receivedAt}>
                    {formatDate(document.receivedAt)}
                  </time>
                </dd>
              </div>
            </dl>

            <Button variant="primary" className="mt-6 w-full">
              <Download className="h-4 w-4" aria-hidden />
              Download
            </Button>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
