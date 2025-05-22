'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy as CaseStudyType } from '@/data/caseStudiesData';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyProps {
  caseStudy: CaseStudyType;
  relatedCaseStudies: CaseStudyType[];
}

export default function CaseStudy({ caseStudy, relatedCaseStudies }: CaseStudyProps) {
  // Track expanded sections
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    challenge: false,
    solution: false,
    results: false
  });

  const toggleSection = (section: 'overview' | 'challenge' | 'solution' | 'results') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 dark:text-gray-200 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
              <Link href="/case-studies" className="text-gray-600 dark:text-gray-200 hover:text-primary">
                  Case Studies
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500 dark:text-gray-200">{caseStudy.title}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <Image
          src={caseStudy.featured_image}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {caseStudy.industry}
            </span>
            {caseStudy.services.slice(0, 2).map((service, index) => (
              <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                {service}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{caseStudy.title}</h1>
          <p className="text-xl text-white">{caseStudy.client}</p>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Collapsible Sections */}
          <div className="mb-10 space-y-4">
            {/* Overview Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('overview')}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 text-left"
                aria-expanded="true"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Project Overview</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${expandedSections.overview ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {expandedSections.overview && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <div className="p-4 prose prose-lg max-w-none dark:prose-invert">
                      <p className="mb-4 text-gray-700 dark:text-gray-300">{caseStudy.overview}</p>
                      {caseStudy.overview_details && (
                        <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: caseStudy.overview_details }} />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Challenge Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('challenge')}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 text-left"
                aria-expanded="false"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${expandedSections.challenge ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {expandedSections.challenge && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <div className="p-4 prose prose-lg max-w-none dark:prose-invert">
                      <p className="mb-4 text-gray-700 dark:text-gray-300">{caseStudy.challenge}</p>
                      {caseStudy.challenge_details && (
                        <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: caseStudy.challenge_details }} />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solution Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('solution')}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 text-left"
                aria-expanded="false"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Solution</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${expandedSections.solution ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {expandedSections.solution && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <div className="p-4 prose prose-lg max-w-none dark:prose-invert">
                      <p className="mb-4 text-gray-700 dark:text-gray-300">{caseStudy.solution}</p>
                      {caseStudy.solution_details && (
                        <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: caseStudy.solution_details }} />
                      )}
                      
                      {/* Solution Images */}
                      {caseStudy.solution_images && caseStudy.solution_images.length > 0 && (
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {caseStudy.solution_images.map((image, index) => (
                            <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                              <Image
                                src={image.url}
                                alt={image.alt || `Solution image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Results Section */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('results')}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 text-left"
                aria-expanded="false"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Results & Impact</h2>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${expandedSections.results ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {expandedSections.results && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <div className="p-4 prose prose-lg max-w-none dark:prose-invert">
                      <p className="mb-4 text-gray-700 dark:text-gray-300">{caseStudy.results}</p>
                      {caseStudy.results_details && (
                        <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: caseStudy.results_details }} />
                      )}
                      
                      {/* Key Metrics */}
                      {caseStudy.key_metrics && caseStudy.key_metrics.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Metrics</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {caseStudy.key_metrics.map((metric, index) => (
                              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                              <div className="text-3xl font-bold text-primary dark:text-primary-accentblue mb-2">{metric.value}</div>
                                <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Testimonial */}
                      {caseStudy.testimonial && (
                        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-primary">
                          <blockquote className="italic text-lg mb-4 text-gray-800 dark:text-white">&ldquo;{caseStudy.testimonial.quote}&rdquo;</blockquote>
                          <div className="flex items-center">
                            {caseStudy.testimonial.avatar && (
                              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                                <Image
                                  src={caseStudy.testimonial.avatar}
                                  alt={caseStudy.testimonial.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                              <div>
                                <div className="font-bold text-gray-800 dark:text-white">{caseStudy.testimonial.name}</div>
                                <div className="text-gray-600 dark:text-gray-300">{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</div>
                              </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/10 dark:bg-gray-700 rounded-lg p-6 md:p-8 mb-10">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Ready to achieve similar results?</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Let us help you transform your business with our innovative automation and marketing solutions.</p>
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white dark:text-white font-bold py-2 px-6 rounded-md transition-colors shadow-md border border-transparent dark:border-white"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Project Details */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Project Details</h3>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Client</div>
                <div className="font-medium text-gray-800 dark:text-white">{caseStudy.client}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Industry</div>
                <div className="font-medium text-gray-800 dark:text-white">{caseStudy.industry}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Services Provided</div>
                <div>
                  {caseStudy.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-800 dark:text-white mr-2 mb-2"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              {caseStudy.project_duration && (
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Project Duration</div>
                <div className="font-medium text-gray-800 dark:text-white">{caseStudy.project_duration}</div>
                </div>
              )}
              
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Technologies Used</div>
                  <div>
                    {caseStudy.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-800 dark:text-white mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related Case Studies */}
          {relatedCaseStudies.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Related Case Studies</h3>
              
              <div className="space-y-4">
                {relatedCaseStudies.map((study) => (
                  <Link 
                    key={study.id} 
                    href={`/case-studies/${study.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden mr-3">
                        <Image
                          src={study.featured_image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white group-hover:text-primary transition-colors">{study.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{study.industry}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  href="/case-studies" 
                  className="text-primary hover:underline flex items-center"
                >
                  View all case studies
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
