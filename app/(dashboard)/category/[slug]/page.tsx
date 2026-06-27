type CategoryPageProps = {
  params: { slug: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="min-h-screen bg-gray-50 p-6 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold capitalize text-gray-900 dark:text-gray-100">
          {params.slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Document list placeholder for this category.
        </p>
      </div>
    </main>
  );
}
