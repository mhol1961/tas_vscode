&apos;use client';

import Link from &apos;next/link';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
// Import relevant icons - FaCogs, FaPlug, FaSyncAlt might be good
import { FaCogs, FaPlug, FaSyncAlt } from &apos;react-icons/fa'; // Removed unused icons
import { technologies, TechnologyDetails } from &apos;@/data/technologiesData';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';

// Convert technologies object to array for iteration
const technologyItems = Object.values(technologies);

// Helper function to determine if a technology is an Integration Tool
const isIntegrationTool = (tech: TechnologyDetails): boolean => {
  const titleLower = tech.title.toLowerCase();
  // Keywords indicating Integration Tools (adjust as needed based on data)
  const integrationKeywords = [&apos;integration', &apos;connect', &apos;api', &apos;middleware', &apos;zapier', &apos;mulesoft', &apos;boomi']; // Example keywords
  // Also check specific feature flags if available and relevant
  return integrationKeywords.some(keyword => titleLower.includes(keyword)) || tech.feature_apiAccess; // Example: include if it has API access
};

export default function IntegrationTechnologiesPage() {
  // Filter technologies to only include Integration Tools
  const integrationTechnologies = technologyItems.filter(isIntegrationTool);

  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative bg-gradient-to-r from-indigo-700 to-purple-700 py-20 md:py-28"> {/* Different gradient */}
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className=&quot;md:flex items-center justify-between">
              <div className=&quot;md:w-1/2 mb-10 md:mb-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=&quot;text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Integration Tools & Platforms
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className=&quot;text-xl text-white/90 mb-8 max-w-lg"
                >
                  Connect your disparate systems seamlessly. Explore the integration platforms and tools we leverage to build cohesive digital ecosystems.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className=&quot;flex flex-wrap gap-4"
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-indigo-700 hover:bg-white/90 border-transparent">
                      Discuss Integration Needs
                    </AnimatedButton>
                  </Link>
                  <Link href=&quot;/services/technology-integration">
                    <AnimatedButton className=&quot;bg-transparent hover:bg-white/10 text-white border-white">
                      Our Integration Services
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className=&quot;md:w-2/5"
              >
                 {/* Consider an integration-themed image */}
                <div className=&quot;relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src=&quot;/images/photos/illustrations/Arrows_segments_marketing.png&quot; // Placeholder - replace if better image exists
                    alt=&quot;Integration Concept&quot;
                    fill
                    className=&quot;object-cover&quot;
                    sizes=&quot;(max-width: 768px) 100vw, 40vw&quot;
                  />
                  <div className=&quot;absolute inset-0 bg-gradient-to-tr from-purple-700/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Technologies Section */}
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
                Featured Integration Platforms
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We utilize powerful integration tools to connect your applications, automate workflows, and ensure data flows smoothly across your organization.
              </motion.p>
            </div>

            {/* Technology Cards - Filtered for Integration */}
            {integrationTechnologies.length > 0 ? (
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {integrationTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: &apos;0 10px 25px -5px rgba(0, 0, 0, 0.1)&apos; }}
                    className=&quot;bg-white dark:bg-primary-slate/40 rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200 dark:border-primary-navy"
                  >
                    <div className=&quot;relative h-48 bg-gray-100 dark:bg-primary-slate">
                      {tech.imageUrl ? (
                        <Image
                          src={tech.imageUrl}
                          alt={tech.title}
                          fill
                          className=&quot;object-cover transition-transform duration-300 hover:scale-105&quot;
                          sizes=&quot;(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw&quot;
                        />
                      ) : (
                        // Placeholder if no image
                        <div className=&quot;flex items-center justify-center h-full">
                          <FaPlug className=&quot;text-gray-400 text-6xl&quot; />
                        </div>
                      )}
                      <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className=&quot;absolute bottom-4 left-4 right-4">
                        <h3 className=&quot;text-xl font-bold text-white">{tech.title}</h3>
                      </div>
                    </div>

                    <div className=&quot;flex-1 p-5">
                      <p className=&quot;text-sm text-primary-slate dark:text-white/80 mb-4 line-clamp-3">
                        {tech.description}
                      </p>

                      <div className=&quot;mb-4">
                        <div className=&quot;text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Key Aspects</div>
                        <div className=&quot;flex flex-wrap gap-2">
                          {tech.feature_apiAccess && (
                            <span className=&quot;bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs px-2 py-1 rounded">
                              API Access
                            </span>
                          )}
                          {tech.feature_workflowAutomation && (
                            <span className=&quot;bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs px-2 py-1 rounded">
                              Workflow Automation
                            </span>
                          )}
                           {tech.feature_appMarketplace && (
                            <span className=&quot;bg-gray-100 dark:bg-gray-700/30 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">
                              App Marketplace
                            </span>
                          )}
                        </div>
                      </div>

                      <div className=&quot;flex justify-end items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Link href={`/services/technologies/${tech.slug}`}>
                          <span className=&quot;text-primary-blue hover:text-primary-blue/80 text-sm font-medium flex items-center">
                            Learn more
                            <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                              <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className=&quot;text-center py-12">
                <p className=&quot;text-lg text-primary-slate dark:text-white/80">No specific integration platforms listed yet. Check back soon or contact us for details!</p>
                 <Link href=&quot;/contact&quot; className=&quot;mt-4 inline-block">
                    <AnimatedButton className=&quot;bg-primary-blue text-white hover:bg-primary-blue/90 border-transparent">
                      Inquire About Integration Tools
                    </AnimatedButton>
                  </Link>
              </div>
            )}


            {/* Compare CTA (Optional for Integration, could link back to main compare) */}
            <div className=&quot;mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-md"
              >
                <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Need to Connect Your Systems?</h3>
                <p className=&quot;text-primary-slate dark:text-white/80 mb-6 max-w-2xl mx-auto">
                  Our integration specialists can help design and implement the right connections to streamline your operations.
                </p>
                <div className=&quot;flex flex-wrap justify-center gap-4">
                   <Link href=&quot;/services/technology-integration">
                    <AnimatedButton className=&quot;bg-indigo-600 text-white hover:bg-indigo-700 border-transparent">
                      Explore Integration Services
                    </AnimatedButton>
                  </Link>
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-navy hover:bg-gray-100 border-gray-300 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:bg-white/10">
                      Schedule Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Services Section */}
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
                Our Integration Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We offer end-to-end services for connecting your business applications.
              </motion.p>
            </div>

            <div className=&quot;grid md:grid-cols-3 gap-8">
              {[
                {
                  title: &apos;API Integration',
                  description: &apos;Custom API development and integration between various platforms.&apos;,
                  icon: FaPlug,
                  link: &apos;/services/technology-integration'
                },
                {
                  title: &apos;Workflow Automation',
                  description: &apos;Automate processes across multiple systems using integration tools.&apos;,
                  icon: FaSyncAlt,
                  link: &apos;/services/marketing-automation' // Or a dedicated automation page
                },
                {
                  title: &apos;Data Synchronization',
                  description: &apos;Ensure consistent and up-to-date data across all connected applications.&apos;,
                  icon: FaCogs, // Reusing Cogs
                  link: &apos;/services/technology-integration'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className=&quot;bg-white dark:bg-primary-navy/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className=&quot;w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <service.icon className=&quot;text-indigo-600 dark:text-indigo-400 text-xl&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-primary-navy dark:text-white mb-3">{service.title}</h3>
                  <p className=&quot;text-primary-slate dark:text-white/80 mb-4">{service.description}</p>
                  <Link href={service.link} className=&quot;text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
                    Learn more
                    <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;bg-gradient-to-r from-purple-600 to-indigo-800 rounded-xl overflow-hidden shadow-lg"> {/* Adjusted gradient */}
              <div className=&quot;px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=&quot;text-3xl font-bold mb-4"
                >
                  Ready to Unify Your Technology Stack?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Contact us today to discuss your integration challenges and discover how we can build a connected future for your business.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-purple-700 hover:bg-white/90 border-transparent">
                      Get Your Integration Quote
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
