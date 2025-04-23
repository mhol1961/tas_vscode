&apos;use client';

import Link from &apos;next/link';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
// Import relevant icons - FaBullhorn, FaFilter, FaRocket
import { FaBullhorn, FaFilter, FaRocket } from &apos;react-icons/fa'; // Removed unused icons
import { technologies, TechnologyDetails } from &apos;@/data/technologiesData';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';

// Convert technologies object to array for iteration
const technologyItems = Object.values(technologies);

// Helper function to determine if a technology is a Marketing Platform
const isMarketingPlatform = (tech: TechnologyDetails): boolean => {
  const titleLower = tech.title.toLowerCase();
  // Keywords indicating Marketing Platforms
  const marketingKeywords = [&apos;marketing', &apos;marketo', &apos;pardot', &apos;clickdimensions', &apos;activecampaign', &apos;mailchimp', &apos;hubspot marketing'];
  // Check specific feature flags
  return marketingKeywords.some(keyword => titleLower.includes(keyword)) || tech.feature_emailMarketing || tech.feature_marketingAutomationWorkflows;
};

export default function MarketingTechnologiesPage() {
  // Filter technologies to only include Marketing Platforms
  const marketingTechnologies = technologyItems.filter(isMarketingPlatform);

  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative py-20 md:py-28"> {/* Using image background instead of gradient */}
          <div className=&quot;absolute inset-0">
            <Image
              src=&quot;/images/photos/MArketingAtuomationPlatforms.png&quot;
              alt=&quot;Marketing Automation Platforms&quot;
              fill
              className=&quot;object-cover&quot;
              priority
            />
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 pointer-events-none"></div>
          </div>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className=&quot;md:flex items-center justify-between">
              <div className=&quot;md:w-1/2 mb-10 md:mb-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=&quot;text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Marketing Automation Platforms
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className=&quot;text-xl text-white/90 mb-8 max-w-lg"
                >
                  Automate your marketing efforts, nurture leads effectively, and measure campaign success with the powerful platforms we support.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className=&quot;flex flex-wrap gap-4"
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-teal-600 text-white hover:bg-teal-700 border-transparent shadow-lg shadow-teal-700/30">
                      Discuss Marketing Automation
                    </AnimatedButton>
                  </Link>
                  <Link href=&quot;/services/marketing-automation">
                    <AnimatedButton className=&quot;bg-white hover:bg-white/90 text-teal-700 border-transparent shadow-lg shadow-black/20">
                      Our Marketing Services
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Marketing Technologies Section */}
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
                Featured Marketing Platforms
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Leverage our expertise in leading marketing automation tools to streamline campaigns, personalize engagement, and drive measurable results.
              </motion.p>
            </div>

            {/* Technology Cards - Filtered for Marketing */}
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingTechnologies.map((tech, index) => (
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
                       <div className=&quot;flex items-center justify-center h-full">
                          <FaBullhorn className=&quot;text-gray-400 text-6xl&quot; />
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
                      <div className=&quot;text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Key Features</div>
                      <div className=&quot;flex flex-wrap gap-2">
                        {tech.feature_emailMarketing && (
                          <span className=&quot;bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded">
                            Email Marketing
                          </span>
                        )}
                        {tech.feature_marketingAutomationWorkflows && (
                          <span className=&quot;bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs px-2 py-1 rounded">
                            Automation Workflows
                          </span>
                        )}
                         {tech.feature_leadScoring && (
                          <span className=&quot;bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs px-2 py-1 rounded">
                            Lead Scoring
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

            {/* Compare CTA */}
            <div className=&quot;mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-xl shadow-md"
              >
                <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Which Marketing Platform Fits Best?</h3>
                <p className=&quot;text-primary-slate dark:text-white/80 mb-6 max-w-2xl mx-auto">
                  Compare the features and capabilities of different marketing automation tools or consult with our specialists to find your ideal solution.
                </p>
                <div className=&quot;flex flex-wrap justify-center gap-4">
                   <Link href=&quot;/services/technologies/compare">
                    <AnimatedButton className=&quot;bg-teal-600 text-white hover:bg-teal-700 border-transparent">
                      Compare Marketing Tools
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
                Our Marketing Automation Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We help you implement, manage, and optimize your marketing automation strategy for maximum impact.
              </motion.p>
            </div>

            <div className=&quot;grid md:grid-cols-3 gap-8">
              {[
                {
                  title: &apos;Automation Setup & Implementation',
                  description: &apos;Configure workflows, email templates, lead scoring, and more in your chosen platform.&apos;,
                  icon: FaRocket, // Reusing Rocket
                  link: &apos;/services/marketing-automation'
                },
                {
                  title: &apos;Campaign Management',
                  description: &apos;Design, execute, and track multi-channel marketing campaigns.&apos;,
                  icon: FaBullhorn, // Using Bullhorn
                  link: &apos;/services/marketing-automation'
                },
                {
                  title: &apos;Lead Nurturing & Scoring',
                  description: &apos;Develop strategies to nurture leads effectively and identify sales-ready prospects.&apos;,
                  icon: FaFilter, // Using Filter
                  link: &apos;/services/marketing-automation'
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
                  <div className=&quot;w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <service.icon className=&quot;text-green-600 dark:text-green-400 text-xl&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-primary-navy dark:text-white mb-3">{service.title}</h3>
                  <p className=&quot;text-primary-slate dark:text-white/80 mb-4">{service.description}</p>
                  <Link href={service.link} className=&quot;text-green-600 hover:text-green-700 font-medium inline-flex items-center">
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
            <div className=&quot;bg-gradient-to-r from-green-600 to-teal-700 rounded-xl overflow-hidden shadow-lg"> {/* Adjusted gradient */}
              <div className=&quot;px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=&quot;text-3xl font-bold mb-4"
                >
                  Ready to Supercharge Your Marketing?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Let&#39;s explore how marketing automation can transform your lead generation, engagement, and conversion rates.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-green-700 hover:bg-white/90 border-transparent">
                      Get Started with Automation
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
