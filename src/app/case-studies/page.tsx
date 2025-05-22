import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import CaseStudyList from '@/components/case-studies/CaseStudyList';
import { caseStudies } from '@/data/caseStudiesData';

export const metadata: Metadata = {
  title: 'Case Studies | Intelligrow',
  description: 'Explore our client success stories and see how our automation and marketing solutions have helped businesses achieve remarkable results.',
  openGraph: {
    title: 'Case Studies | Intelligrow',
    description: 'Explore our client success stories and see how our automation and marketing solutions have helped businesses achieve remarkable results.',
    url: '/case-studies',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Client Success Stories</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl">
            Discover how our innovative automation and marketing solutions have helped businesses across various industries achieve remarkable results.
          </p>
        </div>
        
        <div className="text-gray-900 dark:text-white">
          <CaseStudyList caseStudies={caseStudies} />
        </div>
      </div>
    </PageLayout>
  );
}
