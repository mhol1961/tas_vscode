'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaBriefcase, FaMapMarkerAlt, FaUserTie, FaCalendarAlt, FaArrowLeft, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { fetchJobListingBySlug, formatJobDate, jobTypes, experienceLevels } from '@/data/jobListings';
import type { JobListing } from '@/data/jobListings';

export default function JobDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const [job, setJob] = useState<JobListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch job listing on component mount
  useEffect(() => {
    const getJob = async () => {
      try {
        if (!slug) {
          setError('Job not found');
          setLoading(false);
          return;
        }

        const jobData = await fetchJobListingBySlug(slug);
        
        if (!jobData) {
          setError('Job not found');
        } else {
          setJob(jobData);
        }
      } catch (err) {
        console.error('Error fetching job listing:', err);
        setError('Failed to load job listing');
      } finally {
        setLoading(false);
      }
    };

    getJob();
  }, [slug]);

  // Handle back button click
  const handleBack = () => {
    router.back();
  };

  // Handle apply button click
  const handleApply = () => {
    if (job?.applicationUrl) {
      window.open(job.applicationUrl, '_blank');
    } else if (job?.applicationEmail) {
      window.location.href = `mailto:${job.applicationEmail}?subject=Application for ${job.title}`;
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center text-primary-blue hover:text-primary-blue/80 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to all positions
        </button>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">{error}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">The job listing you&apos;re looking for might have been removed or is no longer available.</p>
            <Link href="/careers">
              <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent">
                View All Positions
              </AnimatedButton>
            </Link>
          </div>
        ) : job ? (
          <div>
            {/* Job header */}
            <div className="bg-white dark:bg-primary-navy/30 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h1 className="text-3xl font-bold text-primary-navy dark:text-white">{job.title}</h1>
                {job.featuredPosition && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mt-2 md:mt-0">
                    Featured Position
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaBriefcase className="mr-2 text-primary-blue" />
                  <span>{jobTypes.find(t => t.id === job.jobType)?.name || job.jobType}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaUserTie className="mr-2 text-primary-blue" />
                  <span>{experienceLevels.find(e => e.id === job.experienceLevel)?.name || job.experienceLevel}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="mr-2 text-primary-blue" />
                  <span>{job.location.isRemote ? (job.location.remoteType === 'hybrid' ? 'Hybrid' : 'Remote') : `${job.location.city}, ${job.location.state}`}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FaCalendarAlt className="mr-2 text-primary-blue" />
                  <span>Posted {formatJobDate(job.postedDate)}</span>
                </div>
              </div>
              
              {job.salary?.isVisible && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-primary-navy dark:text-white mb-1">Compensation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {job.salary.min && job.salary.max ? (
                      <>
                        {job.jobType === 'contract' ? (
                          <>${job.salary.min}-${job.salary.max}/hr</>
                        ) : (
                          <>${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}/year</>
                        )}
                      </>
                    ) : (
                      'Competitive salary'
                    )}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton 
                  onClick={handleApply}
                  className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent"
                >
                  Apply Now
                </AnimatedButton>
                {job.applicationEmail && (
                  <a 
                    href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary-blue text-primary-blue bg-transparent hover:bg-primary-blue/10 rounded-md transition-colors duration-300"
                  >
                    <FaEnvelope className="mr-2" /> Email Application
                  </a>
                )}
              </div>
            </div>
            
            {/* Job details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-primary-navy/30 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Job Description</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">{job.fullDescription}</p>
                  
                  <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-3">Responsibilities</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  {job.preferredQualifications && job.preferredQualifications.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-3">Preferred Qualifications</h3>
                      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                        {job.preferredQualifications.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {job.applicationDeadline && (
                    <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Application Deadline:</strong> {formatJobDate(job.applicationDeadline)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                {/* Benefits section */}
                {job.benefits && job.benefits.length > 0 && (
                  <div className="bg-white dark:bg-primary-navy/30 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-4">Benefits</h3>
                    <ul className="space-y-4">
                      {job.benefits.map((benefit) => (
                        <li key={benefit.id} className="flex items-start">
                          <span className="text-primary-blue mr-2">✓</span>
                          <div>
                            <h4 className="font-medium text-primary-navy dark:text-white">{benefit.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Company info */}
                <div className="bg-white dark:bg-primary-navy/30 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-4">About Technology Alliance Solutions</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Technology Alliance Solutions is a leading provider of CRM implementation, system integration, and marketing automation expertise. We help businesses optimize their operations and accelerate growth through technology.
                  </p>
                  <Link href="/about" className="text-primary-blue hover:underline flex items-center">
                    Learn more about us <FaExternalLinkAlt className="ml-1 text-xs" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Apply CTA */}
            <div className="bg-primary-blue text-white rounded-lg shadow-md p-8 mt-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Join our team and help transform how businesses leverage technology to achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  onClick={handleApply}
                  className="bg-white text-primary-blue hover:bg-white/90 border-transparent"
                >
                  Apply for this Position
                </AnimatedButton>
                <Link href="/careers">
                  <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                    View All Positions
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
}
