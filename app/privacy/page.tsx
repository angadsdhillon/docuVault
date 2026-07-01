import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus-visible:ring-gray-500 dark:focus-visible:ring-offset-gray-950"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to login
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Privacy policy placeholder. Full policy content will be added before
          launch. DocuVault only accesses your email to extract attachments and
          generate AI summaries — we never store full email body content.
        </p>
      </div>
    </div>
  );
}
