import { Metadata } from 'next';
import JobDetailClient from './client';
import { fetchJobListingBySlug } from '@/data/jobListings';

// Generate metadata for the job detail page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Fetch the job data
  const job = await fetchJobListingBySlug(params.slug);
  
  if (!job) {
    return {
      title: 'Job Not Found | Technology Alliance Solutions',
      description: 'The job listing you are looking for might have been removed or is no longer available.',
    };
  }
  
  return {
    title: `${job.title} | Careers | Technology Alliance Solutions`,
    description: job.shortDescription,
    openGraph: {
      title: `${job.title} | Careers | Technology Alliance Solutions`,
      description: job.shortDescription,
      images: ['/images/photos/TwoLookingAtScreen.png'],
    },
  };
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  return <JobDetailClient slug={params.slug} />;
}
