<<<<<<< HEAD
import { Metadata } from 'next';
import CareersClient from './client';

export const metadata: Metadata = {
  title: 'Careers | Technology Alliance Solutions',
  description: 'Join our team at Technology Alliance Solutions. Explore current job openings and career opportunities in technology integration, CRM implementation, and marketing automation.',
  openGraph: {
    title: 'Careers | Technology Alliance Solutions',
    description: 'Join our team at Technology Alliance Solutions. Explore current job openings and career opportunities in technology integration, CRM implementation, and marketing automation.',
    images: ['/images/photos/TwoLookingAtScreen.png'],
  },
};

export default function CareersPage() {
  return <CareersClient />;
=======
'use client';

import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import { jobListings } from '@/data/jobListings';

export default function CareersPage() {
  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section with Techy Gradient Background */}
        <AnimatedSection className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
          {/* Techy animated background pattern */}
          <div className="absolute inset-0">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
              We're Hiring Exceptional Talent
            </p>
            <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Build the future of business automation with innovative technology solutions. 
              Join our team of experts transforming how businesses operate.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('open-positions');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-navy font-semibold text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Our Opportunities
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </AnimatedSection>

        {/* Mission Statement Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Join our team of technology experts transforming businesses through innovative automation solutions. 
              We seek passionate professionals ready to shape the future of business technology.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Work With Us Section */}
        <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Why Work With Us?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-primary-blue text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                  Innovation First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work with cutting-edge technologies and be at the forefront of business automation innovation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-primary-blue text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                  Growth Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuous learning, professional development, and clear career advancement paths.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-primary-blue text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                  Collaborative Culture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a supportive team environment where your ideas matter and collaboration drives success.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Open Positions Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800" id="open-positions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Explore our current job opportunities and find your perfect role.
              </p>
            </div>
            
            <div className="grid gap-8">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="text-primary-blue font-medium">{job.department}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{job.location}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{job.type}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {job.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary-light/20 text-primary-blue text-sm rounded-full">
                          {job.experience}
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                          {job.salary || 'Competitive Salary'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-8">
                      <Link href={`/careers/${job.id}`}>
                        <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white">
                          View Details
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Benefits & Perks
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Competitive Salary
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Market-competitive compensation packages
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Health Benefits
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive health, dental, and vision coverage
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Remote Work
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Flexible remote and hybrid work options
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Learning Budget
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Annual budget for courses and certifications
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <Link href="/contact">
              <AnimatedButton className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                Get In Touch
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
>>>>>>> main
}
