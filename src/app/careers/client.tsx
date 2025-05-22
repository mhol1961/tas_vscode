'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaBriefcase, FaMapMarkerAlt, FaUserTie, FaChevronRight, FaRegClock } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { fetchJobListings, formatJobDate, departments, jobTypes, experienceLevels } from '@/data/jobListings';
import type { JobListing } from '@/data/jobListings';

export default function CareersClient() {
  // We only need filteredListings since we're not using jobListings elsewhere
  const [filteredListings, setFilteredListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    jobType: '',
    experienceLevel: '',
    location: '',
    featured: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  // Fetch job listings on component mount
  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobs = await fetchJobListings();
        setFilteredListings(jobs);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  // Apply filters and search
  useEffect(() => {
    const applyFilters = async () => {
      setLoading(true);
      try {
        // Only include non-empty filters
        const activeFilters: {
          department?: string;
          jobType?: string;
          experienceLevel?: string;
          location?: string;
          featured?: boolean;
        } = {};
        if (filters.department) activeFilters.department = filters.department;
        if (filters.jobType) activeFilters.jobType = filters.jobType;
        if (filters.experienceLevel) activeFilters.experienceLevel = filters.experienceLevel;
        if (filters.location) activeFilters.location = filters.location;
        if (filters.featured) activeFilters.featured = filters.featured;

        // Fetch filtered jobs from API
        const filteredJobs = await fetchJobListings(activeFilters);

        // Apply search term if present
        if (searchTerm.trim()) {
          const searchLower = searchTerm.toLowerCase();
          const searchResults = filteredJobs.filter(job => 
            job.title.toLowerCase().includes(searchLower) ||
            job.shortDescription.toLowerCase().includes(searchLower) ||
            job.department.toLowerCase().includes(searchLower)
          );
          setFilteredListings(searchResults);
        } else {
          setFilteredListings(filteredJobs);
        }
      } catch (error) {
        console.error('Error applying filters:', error);
      } finally {
        setLoading(false);
      }
    };

    applyFilters();
  }, [filters, searchTerm]);

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string | boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      department: '',
      jobType: '',
      experienceLevel: '',
      location: '',
      featured: false,
    });
    setSearchTerm('');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/photos/TwoLookingAtScreen.png" 
            alt="Careers at Technology Alliance Solutions" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-primary-navy/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Careers at TAS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Join our team of technology experts and help transform how businesses leverage CRM and marketing automation solutions.
          </motion.p>
        </div>
      </div>

      {/* Company Culture Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Our Culture</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                At Technology Alliance Solutions, we&apos;re passionate about helping businesses leverage technology to achieve their goals. Our team is made up of innovative thinkers, problem solvers, and technology enthusiasts who thrive in a collaborative environment.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We value continuous learning, creative thinking, and a customer-first mindset. Our work environment encourages professional growth, work-life balance, and the pursuit of excellence in everything we do.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                If you&apos;re looking for a challenging and rewarding career where your contributions make a real difference, we&apos;d love to hear from you.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/photos/Table_with_laptops.png" 
                alt="TAS team collaboration" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-navy dark:text-white">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Competitive Compensation',
                description: 'We offer competitive salaries, performance bonuses, and comprehensive benefits packages.',
                icon: 'FaDollarSign'
              },
              {
                title: 'Professional Development',
                description: 'Continuous learning opportunities, certification support, and career advancement paths.',
                icon: 'FaGraduationCap'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements, generous PTO, and respect for your time outside of work.',
                icon: 'FaBalanceScale'
              },
              {
                title: 'Collaborative Environment',
                description: 'Work with talented professionals in a supportive and team-oriented culture.',
                icon: 'FaUsers'
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'Access to the latest tools and technologies to solve complex business challenges.',
                icon: 'FaLaptopCode'
              },
              {
                title: 'Make an Impact',
                description: 'Contribute to meaningful projects that transform how businesses operate.',
                icon: 'FaChartLine'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-primary-slate/40 p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                  <FaBriefcase />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{benefit.title}</h3>
                <p className="text-primary-slate dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Job Listings Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Open Positions</h2>
          <p className="text-lg text-primary-slate dark:text-gray-300 mb-8">
            Explore our current job openings and find the perfect role for your skills and career goals.
          </p>

          {/* Search and Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-primary-navy/50 dark:text-white"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 bg-primary-light dark:bg-primary-navy/80 text-primary-navy dark:text-white px-4 py-3 rounded-md hover:bg-primary-light/80 dark:hover:bg-primary-navy/60 transition-colors"
              >
                <FaFilter />
                <span>Filters</span>
              </button>
              {(filters.department || filters.jobType || filters.experienceLevel || filters.location || filters.featured || searchTerm) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center justify-center gap-2 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-4 py-3 rounded-md hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white dark:bg-primary-navy/50 p-4 rounded-md shadow-md mb-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Department Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                    <select
                      value={filters.department}
                      onChange={(e) => handleFilterChange('department', e.target.value)}
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-primary-navy/50 dark:text-white"
                      aria-label="Filter by department"
                    >
                      <option value="">All Departments</option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Type</label>
                    <select
                      value={filters.jobType}
                      onChange={(e) => handleFilterChange('jobType', e.target.value)}
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-primary-navy/50 dark:text-white"
                      aria-label="Filter by job type"
                    >
                      <option value="">All Types</option>
                      {jobTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Level Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Experience Level</label>
                    <select
                      value={filters.experienceLevel}
                      onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-primary-navy/50 dark:text-white"
                      aria-label="Filter by experience level"
                    >
                      <option value="">All Levels</option>
                      {experienceLevels.map((level) => (
                        <option key={level.id} value={level.id}>{level.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                    <select
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-primary-navy/50 dark:text-white"
                      aria-label="Filter by location"
                    >
                      <option value="">All Locations</option>
                      <option value="remote">Remote Only</option>
                      <option value="Atlanta">Atlanta, GA</option>
                    </select>
                  </div>
                </div>

                {/* Featured Jobs Checkbox */}
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.featured}
                      onChange={(e) => handleFilterChange('featured', e.target.checked)}
                      className="rounded text-primary-blue focus:ring-primary-blue h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Featured positions only</span>
                  </label>
                </div>
              </motion.div>
            )}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue"></div>
              </div>
            ) : filteredListings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-400">No job listings found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-primary-blue/90"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredListings.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-white dark:bg-primary-navy/30 rounded-lg shadow-md overflow-hidden border ${
                    job.featuredPosition 
                      ? 'border-primary-blue dark:border-primary-blue/50' 
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {job.featuredPosition && (
                    <div className="bg-primary-blue text-white text-xs font-bold px-3 py-1 text-center">
                      Featured Position
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary-navy dark:text-white">{job.title}</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <FaRegClock className="mr-1" /> Posted {formatJobDate(job.postedDate)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        <FaBriefcase className="mr-1" /> {jobTypes.find(t => t.id === job.jobType)?.name || job.jobType}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        <FaUserTie className="mr-1" /> {experienceLevels.find(e => e.id === job.experienceLevel)?.name || job.experienceLevel}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        <FaMapMarkerAlt className="mr-1" /> {job.location.isRemote ? (job.location.remoteType === 'hybrid' ? 'Hybrid' : 'Remote') : `${job.location.city}, ${job.location.state}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {job.salary?.isVisible && (
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
                        </div>
                      )}
                      <Link href={job.applicationUrl || `/careers/${job.slug}`}>
                        <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent">
                          View Details <FaChevronRight className="ml-1" />
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Application Process Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-navy dark:text-white">Our Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ol className="relative border-l border-gray-300 dark:border-gray-700 ml-3">
                  {[
                    {
                      title: 'Application Review',
                      description: 'Our team reviews your application and resume to assess your qualifications and experience.'
                    },
                    {
                      title: 'Initial Interview',
                      description: 'A conversation with our HR team to discuss your background, skills, and career goals.'
                    },
                    {
                      title: 'Technical Assessment',
                      description: 'Depending on the role, you may be asked to complete a skills assessment or technical interview.'
                    },
                    {
                      title: 'Team Interview',
                      description: 'Meet with potential team members and managers to ensure a good cultural and technical fit.'
                    },
                    {
                      title: 'Offer & Onboarding',
                      description: 'Successful candidates receive an offer and begin our comprehensive onboarding process.'
                    }
                  ].map((step, index) => (
                    <li key={index} className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-blue rounded-full -left-4 ring-4 ring-white dark:ring-primary-navy text-white">
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-lg text-primary-navy dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-white dark:bg-primary-slate/40 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-navy dark:text-white">Application Tips</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Tailor your resume to highlight relevant experience and skills for the specific position.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Research our company and the technologies we work with before your interview.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Prepare specific examples of projects you&apos;ve worked on and challenges you&apos;ve overcome.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Be ready to discuss your problem-solving approach and how you collaborate with teams.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span>Ask thoughtful questions about the role, team, and company during your interview.</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2 text-primary-navy dark:text-white">Have questions about our hiring process?</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Contact our HR team for more information about open positions or the application process.
                  </p>
                  <a href="mailto:careers@technologyalliancesolutions.com" className="text-primary-blue hover:underline">
                    careers@technologyalliancesolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore our open positions and take the next step in your career with Technology Alliance Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#open-positions">
              <AnimatedButton className="bg-white text-primary-blue hover:bg-white/90 border-transparent">
                View Open Positions
              </AnimatedButton>
            </Link>
            <Link href="/contact?subject=Careers">
              <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                Contact Our Team
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
