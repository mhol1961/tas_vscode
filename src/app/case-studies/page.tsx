'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBuilding, FaChartLine, FaUsers, FaLaptopCode } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';

// Define case studies
// Updated image references below
const caseStudies = [
  {
    id: 'enterprise-crm-implementation',
    title: 'Enterprise CRM Implementation',
    client: 'Global Manufacturing Corporation',
    industry: 'Manufacturing',
    challenge: 'Fragmented customer data across multiple systems leading to inefficient sales processes and poor customer visibility.',
    solution: 'Implemented a centralized Salesforce CRM system with custom integrations to ERP and legacy systems.',
    results: [
      '42% increase in sales productivity',
      '360-degree customer visibility',
      'Streamlined cross-departmental workflows',
      'Reduced lead response time by 68%'
    ],
    image: '/images/photos/Two_People_looking_at_screen1.png', // Using existing image
    icon: FaBuilding,
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'marketing-automation-overhaul',
    title: 'Marketing Automation Overhaul',
    client: 'TechGrowth Solutions',
    industry: 'SaaS Technology',
    challenge: 'Manual marketing processes hindering growth with limited ability to scale campaigns and analyze performance effectively.',
    solution: 'Deployed HubSpot Marketing Hub with custom lead scoring, automated nurture workflows, and analytics dashboards.',
    results: [
      '89% increase in marketing qualified leads',
      '67% reduction in campaign setup time',
      'Improved lead-to-customer conversion rate by 38%',
      'Granular marketing ROI attribution'
    ],
    image: '/images/photos/TransformYourBusinessAutomation.png?v=2', // Added cache buster
    icon: FaChartLine,
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 'customer-service-transformation',
    title: 'Customer Service Transformation',
    client: 'Regional Healthcare Provider',
    industry: 'Healthcare',
    challenge: 'Disconnected patient communication channels and slow response times affecting care quality and patient satisfaction.',
    solution: 'Implemented Zendesk integrated with custom patient portal and telemedicine systems.',
    results: [
      'First response time reduced by 76%',
      'Patient satisfaction increased by 47%',
      'Support staff efficiency improved by 58%',
      'Successful handling of 3,200+ daily inquiries'
    ],
    image: '/images/photos/cust_service_trans2.png?v=2', // Updated to use alternate image file
    icon: FaUsers,
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 'systems-integration-project',
    title: 'Cross-Platform Systems Integration',
    client: 'Financial Services Corporation',
    industry: 'Financial Services',
    challenge: 'Siloed data across CRM, ERP, and proprietary trading platforms causing data discrepancies and redundant processes.',
    solution: 'Designed and implemented a comprehensive integration architecture with real-time data synchronization.',
    results: [
      'Eliminated 14+ hours of weekly manual data reconciliation',
      'Achieved 99.98% data accuracy across systems',
      'Reduced client onboarding time by 72%',
      'Enabled real-time compliance reporting'
    ],
    image: '/images/photos/Table_with_laptops.png?v=2', // Added cache buster
    icon: FaLaptopCode,
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400'
  }
];

export default function CaseStudies() {
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#143758] to-[#5AAADD] py-20 md:py-28 hero-section">
          {/* Diagonal lines pattern overlay */}
          <svg width="100%" height="100%" style={{position: "absolute", top: 0, left: 0, zIndex: 0}} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0" stroke="#ffffff13" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)"/>
          </svg>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Client Success Stories
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-white/90 mb-8 max-w-lg"
                >
                  Discover how our technology solutions have transformed businesses across industries with measurable results and ROI.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-primary-navy hover:bg-white/90 border-transparent">
                      Discuss Your Project
                    </AnimatedButton>
                  </Link>
                  <Link href="/services">
                    <AnimatedButton className="bg-white/20 hover:bg-white/30 text-white border-white border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                      Explore Our Services
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="md:w-2/5" // Reverted width for hero image
              >
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl"> {/* Reverted height to h-80 */}
                  <Image
                    src="/images/photos/ClientSuccessStories.png?v=2" // Added cache buster
                    alt="Technology Implementation Results"
                    fill
                    className="object-cover" // Kept object-cover
                    sizes="(max-width: 768px) 100vw, 40vw" // Reverted sizes attribute
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent"></div> {/* Kept reduced overlay opacity */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Featured Case Studies
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                See how our clients have achieved remarkable results with our technology solutions and expertise.
              </motion.p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="bg-white dark:bg-primary-slate/40 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      {/* Image Section - Always showing on mobile, left/right based on index in desktop */}
                      <div className="md:w-2/5 relative"> {/* Reverted width for case study image */}
                        <div className="relative h-64 md:h-full w-full"> {/* Reverted height to h-64 md:h-full */}
                          <Image 
                            src={caseStudy.image} // Source now includes ?v=2 from the array
                            alt={caseStudy.title}
                            fill
                            className="object-cover" // Kept object-cover
                            sizes="(max-width: 768px) 100vw, 40vw" // Reverted sizes attribute
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent"></div> {/* Kept reduced overlay opacity */}
                          
                          {/* Mobile-only title overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-6 md:hidden">
                            <h3 className="text-2xl font-bold text-white mb-1">{caseStudy.title}</h3>
                            <p className="text-white/90">{caseStudy.client}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-3/5 p-6 md:p-8"> {/* Reverted width for case study text */}
                        {/* Desktop title - hidden on mobile */}
                        <div className="hidden md:block mb-5">
                          <div className={`w-12 h-12 rounded-full ${caseStudy.bgColor} flex items-center justify-center mb-4`}>
                            <caseStudy.icon className={`${caseStudy.iconColor} text-xl`} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-navy dark:text-white">{caseStudy.title}</h3>
                          <p className="text-primary-blue dark:text-blue-400 font-medium">{caseStudy.client} | {caseStudy.industry}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-primary-navy dark:text-white mb-2">Challenge</h4>
                            <p className="text-primary-slate dark:text-white/80">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-primary-navy dark:text-white mb-2">Solution</h4>
                            <p className="text-primary-slate dark:text-white/80">{caseStudy.solution}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-primary-navy dark:text-white mb-3">Results</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span className="text-primary-slate dark:text-white/80">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <Link href={`/contact?ref=${caseStudy.id}`}>
                            <span className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                              Discuss a similar project
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Industry Results Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Results By Industry
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We deliver measurable improvements across a wide range of industries
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  industry: 'Manufacturing',
                  metrics: [
                    { label: 'Productivity Increase', value: '42%' },
                    { label: 'Process Automation', value: '68%' },
                    { label: 'Data Accuracy', value: '99.7%' }
                  ],
                  bgColor: 'bg-blue-100 dark:bg-blue-900/30',
                  iconColor: 'text-blue-600 dark:text-blue-400',
                  icon: FaBuilding
                },
                {
                  industry: 'Technology',
                  metrics: [
                    { label: 'Lead Generation', value: '189%' },
                    { label: 'Sales Cycle Reduction', value: '36%' },
                    { label: 'Customer Retention', value: '28%' }
                  ],
                  bgColor: 'bg-purple-100 dark:bg-purple-900/30',
                  iconColor: 'text-purple-600 dark:text-purple-400',
                  icon: FaLaptopCode
                },
                {
                  industry: 'Healthcare',
                  metrics: [
                    { label: 'Patient Satisfaction', value: '47%' },
                    { label: 'Administrative Time', value: '-62%' },
                    { label: 'Reporting Compliance', value: '100%' }
                  ],
                  bgColor: 'bg-green-100 dark:bg-green-900/30',
                  iconColor: 'text-green-600 dark:text-green-400',
                  icon: FaUsers
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-navy/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 rounded-full ${industry.bgColor} flex items-center justify-center mb-4`}>
                    <industry.icon className={`${industry.iconColor} text-xl`} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-5">{industry.industry}</h3>
                  
                  <ul className="space-y-4">
                    {industry.metrics.map((metric) => (
                      <li key={metric.label} className="flex justify-between">
                        <span className="text-primary-slate dark:text-white/80">{metric.label}</span>
                        <span className="font-bold text-primary-blue dark:text-blue-400">{metric.value}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link href={`/contact?industry=${industry.industry.toLowerCase()}`} className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                      See more case studies
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-4"
                >
                  Ready to Be Our Next Success Story?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Let us help you transform your business with the right technology solutions tailored to your specific needs and goals.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-primary-blue hover:bg-white/90 border-transparent">
                      Start Your Transformation
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
