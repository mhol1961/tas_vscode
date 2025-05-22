'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { CaseStudy } from '@/data/caseStudiesData';

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Extract unique industries for filtering
  const industries = Array.from(new Set(caseStudies.map(study => study.industry)));
  
  // Extract unique services for filtering
  const allServices = caseStudies.flatMap(study => study.services);
  const uniqueServices = Array.from(new Set(allServices));
  
  // Filter case studies based on selected filter and search query
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesFilter = filter === 'all' || study.industry === filter || study.services.includes(filter);
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.overview.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search case studies..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <select
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-gray-800 dark:text-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter case studies by industry or service"
          >
            <option value="all">All Industries & Services</option>
            <optgroup label="Industries">
              {industries.map((industry) => (
                <option key={`industry-${industry}`} value={industry}>
                  {industry}
                </option>
              ))}
            </optgroup>
            <optgroup label="Services">
              {uniqueServices.map((service) => (
                <option key={`service-${service}`} value={service}>
                  {service}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="text-gray-600 dark:text-gray-200 mb-4">
        Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
      </div>

      {/* Case Studies Grid */}
      {filteredCaseStudies.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCaseStudies.map((study) => (
            <motion.div 
              key={study.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/case-studies/${study.slug}`} className="block h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={study.featured_image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-semibold bg-primary-light dark:bg-primary-accentblue text-primary-navy dark:text-black px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 dark:text-gray-300 text-sm ml-auto">
                      {study.project_duration || 'Ongoing'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{study.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{study.client}</p>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">{study.overview}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.slice(0, 3).map((service, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                    {study.services.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded">
                        +{study.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-primary-blue dark:text-primary-accentblue font-medium">
                    Read case study
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No case studies found</h3>
          <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
