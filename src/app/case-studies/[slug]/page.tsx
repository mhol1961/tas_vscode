import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import CaseStudy from '@/components/case-studies/CaseStudy';
import { caseStudies } from '@/data/caseStudiesData';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Intelligrow',
      description: 'The requested case study could not be found.',
    };
  }
  
  return {
    title: `${caseStudy.title} | Case Study | Intelligrow`,
    description: caseStudy.overview,
    openGraph: {
      title: `${caseStudy.title} | Case Study | Intelligrow`,
      description: caseStudy.overview,
      url: `/case-studies/${caseStudy.slug}`,
      type: 'article',
      images: [
        {
          url: caseStudy.featured_image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  if (!caseStudy) {
    notFound();
  }
  
  // Find related case studies (same industry or services)
  const relatedCaseStudies = caseStudies
    .filter(study => 
      study.id !== caseStudy.id && (
        study.industry === caseStudy.industry ||
        study.services.some(service => caseStudy.services.includes(service))
      )
    )
    .slice(0, 3); // Limit to 3 related case studies
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900">
        <CaseStudy caseStudy={caseStudy} relatedCaseStudies={relatedCaseStudies} />
      </div>
    </PageLayout>
  );
}
