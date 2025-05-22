import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';

// Placeholder for the dynamic pages that would normally fetch from a CMS
// This will be replaced with Sanity integration in the future
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Simple fallback metadata until Sanity is integrated
  return {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} - Intelligrow`,
    description: `Intelligrow ${params.slug} page.`
  };
}

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  // This is a temporary implementation until Sanity integration is complete
  // For now, we'll just display a placeholder message for any dynamic routes
  // that aren't handled by other specific routes
  
  // You can customize this list to exclude certain slugs that should 404
  const validSlugs = ['services', 'about', 'contact', 'privacy', 'terms'];
  
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
          </h1>
          <div className="prose prose-lg dark:prose-dark">
            <p>
              This is a placeholder for the {params.slug} page. This content will be managed through Sanity CMS in the future.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
