import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import { getJobById, getAllJobs } from '@/data/jobListings';

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const jobs = getAllJobs();
  return jobs.map((job) => ({
    slug: job.id,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = getJobById(params.slug);
  
  if (!job) {
    return {
      title: 'Job Not Found | Technology Alliance Solutions',
    };
  }

  return {
    title: `${job.title} - Careers | Technology Alliance Solutions`,
    description: job.summary,
    keywords: `${job.title}, ${job.department}, careers, jobs, ${job.location}`,
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = getJobById(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        {/* Header Section */}
        <AnimatedSection className="pt-32 pb-16 bg-gradient-to-br from-primary-navy to-primary-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <span className="flex items-center">
                  <span className="mr-2">🏢</span>
                  {job.department}
                </span>
                <span className="flex items-center">
                  <span className="mr-2">📍</span>
                  {job.location}
                </span>
                <span className="flex items-center">
                  <span className="mr-2">⏰</span>
                  {job.type}
                </span>
                <span className="flex items-center">
                  <span className="mr-2">💼</span>
                  {job.experience}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Job Overview */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-6">
                Job Overview
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {job.description}
              </p>
            </div>
            
            {job.salary && (
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-lg font-semibold">
                  <span className="mr-2">💰</span>
                  {job.salary}
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Key Responsibilities */}
        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-8 text-center">
              Key Responsibilities
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Requirements & Qualifications */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Requirements */}
              <div>
                <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-8">
                  Requirements
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Preferred Qualifications */}
              <div>
                <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-8">
                  Preferred Qualifications
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <ul className="space-y-3">
                    {job.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {qualification}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-8 text-center">
              What We Offer
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {job.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Apply Section */}
        <AnimatedSection className="py-16 bg-gradient-to-br from-primary-navy to-primary-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We'd love to hear from you! Send us your resume and let's start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton className="bg-white text-primary-navy hover:bg-gray-100 text-lg px-8 py-4">
                  Apply Now
                </AnimatedButton>
              </Link>
              <Link href="/careers">
                <AnimatedButton className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-navy text-lg px-8 py-4">
                  View All Jobs
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
