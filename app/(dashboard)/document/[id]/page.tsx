type DocumentPageProps = {
  params: { id: string };
};

export default function DocumentPage({ params }: DocumentPageProps) {
  return (
    <main className="min-h-screen bg-gray-50 p-6 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Document
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Document viewer placeholder for ID: {params.id}
        </p>
      </div>
    </main>
  );
}
