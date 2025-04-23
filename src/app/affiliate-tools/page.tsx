&apos;use client';

import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import AnimatedText from &apos;@/components/ui/AnimatedText';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import { 
  FaLink, 
  FaTools, 
  FaChartLine, 
  FaSearch, 
  FaRobot, 
  FaSms, 
  FaMailBulk,
  FaDatabase, 
  FaExternalLinkAlt,
  FaStar
} from &apos;react-icons/fa';

// Affiliate tools by category
const toolCategories = [
  {
    id: &apos;seo',
    title: &apos;SEO Tools',
    description: &apos;Boost your search visibility and track rankings with these powerful SEO solutions.&apos;,
    icon: FaSearch,
    color: &apos;bg-blue-600'
  },
  {
    id: &apos;crm',
    title: &apos;CRM Solutions',
    description: &apos;Manage client relationships and streamline your sales process with these top CRM platforms.&apos;,
    icon: FaDatabase,
    color: &apos;bg-purple-600'
  },
  {
    id: &apos;automation',
    title: &apos;Marketing Automation',
    description: &apos;Automate your marketing workflows and save time with these robust automation tools.&apos;,
    icon: FaRobot,
    color: &apos;bg-green-600'
  },
  {
    id: &apos;leadgen',
    title: &apos;Lead Generation',
    description: &apos;Generate and qualify leads for your business using these cutting-edge tools.&apos;,
    icon: FaChartLine,
    color: &apos;bg-orange-600'
  },
  {
    id: &apos;social',
    title: &apos;Social Media Tools',
    description: &apos;Manage and schedule content across all major social platforms with these solutions.&apos;,
    icon: FaSms,
    color: &apos;bg-pink-600'
  }
];

const featuredTools = [
  {
    name: &apos;GoHighLevel',
    category: &apos;CRM & Automation',
    description: &apos;All-in-one platform for marketing automation, CRM, landing pages, and more.&apos;,
    link: &apos;#gohighlevel',
    icon: FaDatabase,
    rating: 4.9,
    discount: &apos;20% off first month'
  },
  {
    name: &apos;Ahrefs',
    category: &apos;SEO',
    description: &apos;Comprehensive SEO toolkit for keyword research, competitor analysis, and site audits.&apos;,
    link: &apos;#ahrefs',
    icon: FaSearch,
    rating: 4.8,
    discount: &apos;$50 trial credit'
  },
  {
    name: &apos;Mailchimp',
    category: &apos;Email Marketing',
    description: &apos;Email marketing platform for creating campaigns, automations, and audience segmentation.&apos;,
    link: &apos;#mailchimp',
    icon: FaMailBulk,
    rating: 4.7,
    discount: &apos;15% off first 6 months'
  }
];

const affiliateTools = [
  {
    name: &apos;SEMrush',
    category: &apos;SEO',
    description: &apos;All-in-one SEO toolkit with keyword research, competitor analysis, and rank tracking.&apos;,
    link: &apos;#semrush',
    icon: FaSearch
  },
  {
    name: &apos;Moz Pro',
    category: &apos;SEO',
    description: &apos;SEO software for improving search rankings, link building, and site optimization.&apos;,
    link: &apos;#moz',
    icon: FaSearch
  },
  {
    name: &apos;Salesforce',
    category: &apos;CRM',
    description: &apos;Leading CRM platform for sales, service, marketing, and commerce.&apos;,
    link: &apos;#salesforce',
    icon: FaDatabase
  },
  {
    name: &apos;HubSpot',
    category: &apos;CRM & Automation',
    description: &apos;Growth platform with marketing, sales, service, and CMS tools.&apos;,
    link: &apos;#hubspot',
    icon: FaDatabase
  },
  {
    name: &apos;ActiveCampaign',
    category: &apos;Email & Automation',
    description: &apos;Customer experience automation platform with email marketing and CRM.&apos;,
    link: &apos;#activecampaign',
    icon: FaMailBulk
  },
  {
    name: &apos;Zapier',
    category: &apos;Automation',
    description: &apos;Connect your apps and automate workflows for seamless integration.&apos;,
    link: &apos;#zapier',
    icon: FaRobot
  },
  {
    name: &apos;Hootsuite',
    category: &apos;Social Media',
    description: &apos;Social media management platform for scheduling posts and monitoring engagement.&apos;,
    link: &apos;#hootsuite',
    icon: FaSms
  },
  {
    name: &apos;Buffer',
    category: &apos;Social Media',
    description: &apos;Social media scheduling and analytics platform for brands and businesses.&apos;,
    link: &apos;#buffer',
    icon: FaSms
  },
  {
    name: &apos;Calendly',
    category: &apos;Scheduling',
    description: &apos;Automated scheduling tool to eliminate back-and-forth emails.&apos;,
    link: &apos;#calendly',
    icon: FaTools
  },
  {
    name: &apos;Unbounce',
    category: &apos;Lead Generation',
    description: &apos;Landing page builder and conversion optimization platform.&apos;,
    link: &apos;#unbounce',
    icon: FaChartLine
  },
  {
    name: &apos;OptinMonster',
    category: &apos;Lead Generation',
    description: &apos;Conversion optimization toolkit for lead generation and sales.&apos;,
    link: &apos;#optinmonster',
    icon: FaChartLine
  },
  {
    name: &apos;SurferSEO',
    category: &apos;SEO',
    description: &apos;Content optimization tool for better search engine rankings.&apos;,
    link: &apos;#surferseo',
    icon: FaSearch
  }
];

export default function AffiliateToolsPage() {
  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className=&quot;relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;max-w-3xl mx-auto"
            >
              <h1 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6">
                Recommended Marketing Tools
              </h1>
              
              <p className=&quot;text-lg text-white/90 mb-10">
                Discover our carefully selected collection of marketing automation and lead generation tools to power your business growth.
              </p>

              <div className=&quot;flex flex-wrap justify-center gap-4">
                <Link href=&quot;#tool-categories">
                  <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Browse Tools
                  </AnimatedButton>
                </Link>
                <Link href=&quot;/contact">
                  <AnimatedButton className=&quot;bg-transparent hover:bg-white/10 text-white border-white">
                    Get Personalized Recommendations
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className=&quot;py-16 bg-white dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <span className=&quot;inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold mb-3">
                Special Partner Offers
              </span>
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Featured Tools With Exclusive Discounts
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Take advantage of these exclusive partner discounts when you sign up through our affiliate links.
              </p>
            </div>
            
            <div className=&quot;grid md:grid-cols-3 gap-8">
              {featuredTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className=&quot;bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  {/* Discount tag */}
                  <div className=&quot;absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {tool.discount}
                  </div>
                  
                  <div className=&quot;p-6 flex-grow">
                    <div className=&quot;flex items-center mb-4">
                      <div className=&quot;w-12 h-12 bg-primary-blue/10 dark:bg-white/10 rounded-lg flex items-center justify-center text-primary-blue dark:text-white mr-4">
                        <tool.icon className=&quot;text-2xl&quot; />
                      </div>
                      <div>
                        <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white">{tool.name}</h3>
                        <span className=&quot;text-sm text-primary-slate/80 dark:text-white/60">{tool.category}</span>
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-sm ${i < Math.floor(tool.rating) ? &apos;text-yellow-400' : &apos;text-gray-300'}`} 
                        />
                      ))}
                      <span className=&quot;ml-2 text-sm font-medium text-primary-navy dark:text-white">{tool.rating}/5</span>
                    </div>
                    
                    <p className=&quot;text-primary-slate dark:text-gray-300 mb-6">
                      {tool.description}
                    </p>
                    
                    <a 
                      href={tool.link} 
                      className=&quot;mt-auto inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold hover:underline"
                    >
                      Get Discount
                      <FaExternalLinkAlt className=&quot;ml-2 text-xs&quot; />
                    </a>
                  </div>
                  
                  <div className=&quot;bg-primary-blue/5 dark:bg-white/5 p-4 border-t border-primary-blue/10 dark:border-white/10">
                    <a 
                      href={tool.link} 
                      className=&quot;w-full py-2 px-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-md flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>Get Started</span>
                      <FaExternalLinkAlt className=&quot;text-xs&quot; />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Categories Section */}
        <section id=&quot;tool-categories&quot; className=&quot;py-16 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <AnimatedText
                text=&quot;Tools By Category&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
                highlight={false}
              />
              <p className=&quot;mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Browse our recommended tools by category to find the perfect solution for your business needs.
              </p>
            </div>

            <div className=&quot;grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {toolCategories.map((category, idx) => (
                <motion.a
                  key={category.id}
                  href={`#${category.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4`}>
                    <category.icon className=&quot;text-white text-2xl&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-bold text-primary-navy dark:text-white mb-2">{category.title}</h3>
                  <p className=&quot;text-sm text-primary-slate dark:text-white/70">{category.description}</p>
                </motion.a>
              ))}
            </div>
            
            {/* List of All Affiliate Tools */}
            <div className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl shadow-lg p-8">
              <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-6">
                All Recommended Tools
              </h3>
              
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {affiliateTools.map((tool, idx) => (
                  <motion.a
                    key={tool.name}
                    href={tool.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className=&quot;flex items-center p-4 bg-primary-light/50 dark:bg-primary-navy/30 rounded-lg hover:bg-primary-light dark:hover:bg-primary-navy/40 transition-all"
                  >
                    <div className=&quot;w-10 h-10 rounded-full bg-white dark:bg-primary-slate flex items-center justify-center mr-4 flex-shrink-0">
                      <tool.icon className=&quot;text-primary-blue text-lg&quot; />
                    </div>
                    <div className=&quot;flex-grow">
                      <h4 className=&quot;font-semibold text-primary-navy dark:text-white">{tool.name}</h4>
                      <span className=&quot;text-xs text-primary-slate/80 dark:text-white/60">{tool.category}</span>
                    </div>
                    <FaExternalLinkAlt className=&quot;text-primary-blue text-xs&quot; />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Our Affiliate Links */}
        <section className=&quot;py-16 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Why Use Our Affiliate Links?
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                By using our affiliate links, you get access to exclusive discounts while supporting our continued provision of free resources and guides.
              </p>
            </div>
            
            <div className=&quot;grid md:grid-cols-3 gap-8">
              {[
                {
                  title: &apos;Exclusive Discounts',
                  description: &apos;Get special partner rates and discounts only available through our affiliate links.&apos;,
                  icon: FaLink
                },
                {
                  title: &apos;Pre-vetted Solutions',
                  description: &apos;We personally test and review all tools before recommending them to ensure quality.&apos;,
                  icon: FaTools
                },
                {
                  title: &apos;Free Setup Support',
                  description: &apos;Get free support and guidance on how to set up and optimize your new tools.&apos;,
                  icon: FaRobot
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-primary-light dark:bg-primary-navy/50 p-6 rounded-xl shadow-md"
                >
                  <div className=&quot;rounded-full w-14 h-14 bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6">
                    <feature.icon className=&quot;text-green-600 text-2xl&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">{feature.title}</h3>
                  <p className=&quot;text-primary-slate dark:text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className=&quot;max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text=&quot;Need Help Choosing the Right Tools?&quot;
              className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;
              highlight={false}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Our experts can provide personalized recommendations based on your specific business needs and goals.
            </motion.p>
            
            <Link href=&quot;/contact">
              <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                Get Free Consultation
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
