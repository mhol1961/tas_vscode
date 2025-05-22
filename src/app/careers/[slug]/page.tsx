import { Metadata } from 'next';
import { fetchJobListingBySlug } from '@/data/jobListings';
import JobDetailClient from './client';

// Define the props type for the page component
interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the job detail page
export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
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

export default function JobDetailPage({ params }: JobDetailPageProps) {
  return <JobDetailClient slug={params.slug} />;
}
