&apos;use client';

import Link from &apos;next/link';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import { FaBuilding, FaChartLine, FaUsers, FaLaptopCode } from &apos;react-icons/fa';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';

// Define case studies
// Updated image references below
const caseStudies = [
  {
    id: &apos;enterprise-crm-implementation',
    title: &apos;Enterprise CRM Implementation',
    client: &apos;Global Manufacturing Corporation',
    industry: &apos;Manufacturing',
    challenge: &apos;Fragmented customer data across multiple systems leading to inefficient sales processes and poor customer visibility.&apos;,
    solution: &apos;Implemented a centralized Salesforce CRM system with custom integrations to ERP and legacy systems.&apos;,
    results: [
      &apos;42% increase in sales productivity',
      &apos;360-degree customer visibility',
      &apos;Streamlined cross-departmental workflows',
      &apos;Reduced lead response time by 68%&apos;
    ],
    image: &apos;/images/photos/Two_People_looking_at_screen.png?v=2', // Added cache buster
    icon: FaBuilding,
    bgColor: &apos;bg-blue-100 dark:bg-blue-900/30',
    iconColor: &apos;text-blue-600 dark:text-blue-400'
  },
  {
    id: &apos;marketing-automation-overhaul',
    title: &apos;Marketing Automation Overhaul',
    client: &apos;TechGrowth Solutions',
    industry: &apos;SaaS Technology',
    challenge: &apos;Manual marketing processes hindering growth with limited ability to scale campaigns and analyze performance effectively.&apos;,
    solution: &apos;Deployed HubSpot Marketing Hub with custom lead scoring, automated nurture workflows, and analytics dashboards.&apos;,
    results: [
      &apos;89% increase in marketing qualified leads',
      &apos;67% reduction in campaign setup time',
      &apos;Improved lead-to-customer conversion rate by 38%&apos;,
      &apos;Granular marketing ROI attribution'
    ],
    image: &apos;/images/photos/TransformYourBusinessAutomation.png?v=2', // Added cache buster
    icon: FaChartLine,
    bgColor: &apos;bg-green-100 dark:bg-green-900/30',
    iconColor: &apos;text-green-600 dark:text-green-400'
  },
  {
    id: &apos;customer-service-transformation',
    title: &apos;Customer Service Transformation',
    client: &apos;Regional Healthcare Provider',
    industry: &apos;Healthcare',
    challenge: &apos;Disconnected patient communication channels and slow response times affecting care quality and patient satisfaction.&apos;,
    solution: &apos;Implemented Zendesk integrated with custom patient portal and telemedicine systems.&apos;,
    results: [
      &apos;First response time reduced by 76%&apos;,
      &apos;Patient satisfaction increased by 47%&apos;,
      &apos;Support staff efficiency improved by 58%&apos;,
      &apos;Successful handling of 3,200+ daily inquiries'
    ],
    image: &apos;/images/photos/Two_people_looking_at_screen1.png?v=2', // Added cache buster
    icon: FaUsers,
    bgColor: &apos;bg-purple-100 dark:bg-purple-900/30',
    iconColor: &apos;text-purple-600 dark:text-purple-400'
  },
  {
    id: &apos;systems-integration-project',
    title: &apos;Cross-Platform Systems Integration',
    client: &apos;Financial Services Corporation',
    industry: &apos;Financial Services',
    challenge: &apos;Siloed data across CRM, ERP, and proprietary trading platforms causing data discrepancies and redundant processes.&apos;,
    solution: &apos;Designed and implemented a comprehensive integration architecture with real-time data synchronization.&apos;,
    results: [
      &apos;Eliminated 14+ hours of weekly manual data reconciliation',
      &apos;Achieved 99.98% data accuracy across systems',
      &apos;Reduced client onboarding time by 72%&apos;,
      &apos;Enabled real-time compliance reporting'
    ],
    image: &apos;/images/photos/Table_with_laptops.png?v=2', // Added cache buster
    icon: FaLaptopCode,
    bgColor: &apos;bg-orange-100 dark:bg-orange-900/30',
    iconColor: &apos;text-orange-600 dark:text-orange-400'
  }
];

export default function CaseStudies() {
  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative bg-gradient-to-r from-[#143758] to-[#5AAADD] py-20 md:py-28 hero-section">
          {/* Diagonal lines pattern overlay */}
          <svg width=&quot;100%&quot; height=&quot;100%&quot; style={{position: &quot;absolute&quot;, top: 0, left: 0, zIndex: 0}} xmlns=&quot;http://www.w3.org/2000/svg">
            <defs>
              <pattern id=&quot;lines&quot; width=&quot;40&quot; height=&quot;40&quot; patternUnits=&quot;userSpaceOnUse">
                <path d=&quot;M0 40 L40 0&quot; stroke=&quot;#ffffff13&quot; strokeWidth=&quot;2&quot;/>
              </pattern>
            </defs>
            <rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;url(#lines)&quot;/>
          </svg>
          
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className=&quot;md:flex items-center justify-between">
              <div className=&quot;md:w-1/2 mb-10 md:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=&quot;text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Client Success Stories
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className=&quot;text-xl text-white/90 mb-8 max-w-lg"
                >
                  Discover how our technology solutions have transformed businesses across industries with measurable results and ROI.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className=&quot;flex flex-wrap gap-4"
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-navy hover:bg-white/90 border-transparent">
                      Discuss Your Project
                    </AnimatedButton>
                  </Link>
                  <Link href=&quot;/services">
                    <AnimatedButton className=&quot;bg-white/20 hover:bg-white/30 text-white border-white border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                      Explore Our Services
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className=&quot;md:w-2/5&quot; // Reverted width for hero image
              >
                <div className=&quot;relative h-80 w-full rounded-lg overflow-hidden shadow-2xl"> {/* Reverted height to h-80 */}
                  <Image
                    src=&quot;/images/photos/ClientSuccessStories.png?v=2&quot; // Added cache buster
                    alt=&quot;Technology Implementation Results&quot;
                    fill
                    className=&quot;object-cover&quot; // Kept object-cover
                    sizes=&quot;(max-width: 768px) 100vw, 40vw&quot; // Reverted sizes attribute
                  />
                  <div className=&quot;absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent"></div> {/* Kept reduced overlay opacity */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Featured Case Studies
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                See how our clients have achieved remarkable results with our technology solutions and expertise.
              </motion.p>
            </div>

            <div className=&quot;space-y-16">
              {caseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? &apos;&apos; : &apos;md:flex-row-reverse'}`}
                >
                  <div className=&quot;bg-white dark:bg-primary-slate/40 rounded-xl shadow-lg overflow-hidden">
                    <div className=&quot;md:flex">
                      {/* Image Section - Always showing on mobile, left/right based on index in desktop */}
                      <div className=&quot;md:w-2/5 relative"> {/* Reverted width for case study image */}
                        <div className=&quot;relative h-64 md:h-full w-full"> {/* Reverted height to h-64 md:h-full */}
                          <Image 
                            src={caseStudy.image} // Source now includes ?v=2 from the array
                            alt={caseStudy.title}
                            fill
                            className=&quot;object-cover&quot; // Kept object-cover
                            sizes=&quot;(max-width: 768px) 100vw, 40vw&quot; // Reverted sizes attribute
                          />
                          <div className=&quot;absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent"></div> {/* Kept reduced overlay opacity */}
                          
                          {/* Mobile-only title overlay */}
                          <div className=&quot;absolute inset-x-0 bottom-0 p-6 md:hidden">
                            <h3 className=&quot;text-2xl font-bold text-white mb-1">{caseStudy.title}</h3>
                            <p className=&quot;text-white/90">{caseStudy.client}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className=&quot;md:w-3/5 p-6 md:p-8"> {/* Reverted width for case study text */}
                        {/* Desktop title - hidden on mobile */}
                        <div className=&quot;hidden md:block mb-5">
                          <div className={`w-12 h-12 rounded-full ${caseStudy.bgColor} flex items-center justify-center mb-4`}>
                            <caseStudy.icon className={`${caseStudy.iconColor} text-xl`} />
                          </div>
                          <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white">{caseStudy.title}</h3>
                          <p className=&quot;text-primary-blue dark:text-blue-400 font-medium">{caseStudy.client} | {caseStudy.industry}</p>
                        </div>
                        
                        <div className=&quot;grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className=&quot;text-lg font-semibold text-primary-navy dark:text-white mb-2">Challenge</h4>
                            <p className=&quot;text-primary-slate dark:text-white/80">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className=&quot;text-lg font-semibold text-primary-navy dark:text-white mb-2">Solution</h4>
                            <p className=&quot;text-primary-slate dark:text-white/80">{caseStudy.solution}</p>
                          </div>
                        </div>
                        
                        <div className=&quot;mt-6">
                          <h4 className=&quot;text-lg font-semibold text-primary-navy dark:text-white mb-3">Results</h4>
                          <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className=&quot;flex items-start">
                                <span className=&quot;text-green-500 mr-2 mt-1">✓</span>
                                <span className=&quot;text-primary-slate dark:text-white/80">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className=&quot;mt-6">
                          <Link href={`/contact?ref=${caseStudy.id}`}>
                            <span className=&quot;text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                              Discuss a similar project
                              <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
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
        <AnimatedSection className=&quot;py-16 bg-primary-light dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Results By Industry
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We deliver measurable improvements across a wide range of industries
              </motion.p>
            </div>

            <div className=&quot;grid md:grid-cols-3 gap-8">
              {[
                {
                  industry: &apos;Manufacturing',
                  metrics: [
                    { label: &apos;Productivity Increase', value: &apos;42%&apos; },
                    { label: &apos;Process Automation', value: &apos;68%&apos; },
                    { label: &apos;Data Accuracy', value: &apos;99.7%&apos; }
                  ],
                  bgColor: &apos;bg-blue-100 dark:bg-blue-900/30',
                  iconColor: &apos;text-blue-600 dark:text-blue-400',
                  icon: FaBuilding
                },
                {
                  industry: &apos;Technology',
                  metrics: [
                    { label: &apos;Lead Generation', value: &apos;189%&apos; },
                    { label: &apos;Sales Cycle Reduction', value: &apos;36%&apos; },
                    { label: &apos;Customer Retention', value: &apos;28%&apos; }
                  ],
                  bgColor: &apos;bg-purple-100 dark:bg-purple-900/30',
                  iconColor: &apos;text-purple-600 dark:text-purple-400',
                  icon: FaLaptopCode
                },
                {
                  industry: &apos;Healthcare',
                  metrics: [
                    { label: &apos;Patient Satisfaction', value: &apos;47%&apos; },
                    { label: &apos;Administrative Time', value: &apos;-62%&apos; },
                    { label: &apos;Reporting Compliance', value: &apos;100%&apos; }
                  ],
                  bgColor: &apos;bg-green-100 dark:bg-green-900/30',
                  iconColor: &apos;text-green-600 dark:text-green-400',
                  icon: FaUsers
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className=&quot;bg-white dark:bg-primary-navy/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 rounded-full ${industry.bgColor} flex items-center justify-center mb-4`}>
                    <industry.icon className={`${industry.iconColor} text-xl`} />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-primary-navy dark:text-white mb-5">{industry.industry}</h3>
                  
                  <ul className=&quot;space-y-4">
                    {industry.metrics.map((metric) => (
                      <li key={metric.label} className=&quot;flex justify-between">
                        <span className=&quot;text-primary-slate dark:text-white/80">{metric.label}</span>
                        <span className=&quot;font-bold text-primary-blue dark:text-blue-400">{metric.value}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className=&quot;mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link href={`/contact?industry=${industry.industry.toLowerCase()}`} className=&quot;text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                      See more case studies
                      <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                        <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className=&quot;px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=&quot;text-3xl font-bold mb-4"
                >
                  Ready to Be Our Next Success Story?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Let us help you transform your business with the right technology solutions tailored to your specific needs and goals.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-blue hover:bg-white/90 border-transparent">
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
