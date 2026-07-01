import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getFileTypeIcon } from "@/components/documents/icons";
import { formatDate } from "@/lib/placeholder-data";
import type { DocumentItem } from "@/types";

type DocumentRowProps = {
  document: DocumentItem;
};

export function DocumentRow({ document }: DocumentRowProps) {
  const FileIcon = getFileTypeIcon(document.fileType);

  return (
    <Link
      href={`/document/${document.id}`}
      className="group flex items-start gap-4 p-4 transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none dark:hover:bg-gray-800/50 dark:focus-visible:bg-gray-800/50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
        <FileIcon
          className="h-5 w-5 text-gray-600 dark:text-gray-400"
          aria-hidden
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
          {document.filename}
        </p>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
          {document.summary}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 dark:text-gray-500">
          <span>{document.sender}</span>
          <span aria-hidden>·</span>
          <time dateTime={document.receivedAt}>{formatDate(document.receivedAt)}</time>
        </div>
      </div>

      <ChevronRight
        className="mt-2 h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 dark:text-gray-500"
        aria-hidden
      />
    </Link>
  );
}
