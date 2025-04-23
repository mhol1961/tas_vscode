'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedSection from '@/components/ui/AnimatedSection';
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
} from 'react-icons/fa';

// Affiliate tools by category
const toolCategories = [
  {
    id: 'seo',
    title: 'SEO Tools',
    description: 'Boost your search visibility and track rankings with these powerful SEO solutions.',
    icon: FaSearch,
    color: 'bg-blue-600'
  },
  {
    id: 'crm',
    title: 'CRM Solutions',
    description: 'Manage client relationships and streamline your sales process with these top CRM platforms.',
    icon: FaDatabase,
    color: 'bg-purple-600'
  },
  {
    id: 'automation',
    title: 'Marketing Automation',
    description: 'Automate your marketing workflows and save time with these robust automation tools.',
    icon: FaRobot,
    color: 'bg-green-600'
  },
  {
    id: 'leadgen',
    title: 'Lead Generation',
    description: 'Generate and qualify leads for your business using these cutting-edge tools.',
    icon: FaChartLine,
    color: 'bg-orange-600'
  },
  {
    id: 'social',
    title: 'Social Media Tools',
    description: 'Manage and schedule content across all major social platforms with these solutions.',
    icon: FaSms,
    color: 'bg-pink-600'
  }
];

const featuredTools = [
  {
    name: 'GoHighLevel',
    category: 'CRM & Automation',
    description: 'All-in-one platform for marketing automation, CRM, landing pages, and more.',
    link: '#gohighlevel',
    icon: FaDatabase,
    rating: 4.9,
    discount: '20% off first month'
  },
  {
    name: 'Ahrefs',
    category: 'SEO',
    description: 'Comprehensive SEO toolkit for keyword research, competitor analysis, and site audits.',
    link: '#ahrefs',
    icon: FaSearch,
    rating: 4.8,
    discount: '$50 trial credit'
  },
  {
    name: 'Mailchimp',
    category: 'Email Marketing',
    description: 'Email marketing platform for creating campaigns, automations, and audience segmentation.',
    link: '#mailchimp',
    icon: FaMailBulk,
    rating: 4.7,
    discount: '15% off first 6 months'
  }
];

const affiliateTools = [
  {
    name: 'SEMrush',
    category: 'SEO',
    description: 'All-in-one SEO toolkit with keyword research, competitor analysis, and rank tracking.',
    link: '#semrush',
    icon: FaSearch
  },
  {
    name: 'Moz Pro',
    category: 'SEO',
    description: 'SEO software for improving search rankings, link building, and site optimization.',
    link: '#moz',
    icon: FaSearch
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    description: 'Leading CRM platform for sales, service, marketing, and commerce.',
    link: '#salesforce',
    icon: FaDatabase
  },
  {
    name: 'HubSpot',
    category: 'CRM & Automation',
    description: 'Growth platform with marketing, sales, service, and CMS tools.',
    link: '#hubspot',
    icon: FaDatabase
  },
  {
    name: 'ActiveCampaign',
    category: 'Email & Automation',
    description: 'Customer experience automation platform with email marketing and CRM.',
    link: '#activecampaign',
    icon: FaMailBulk
  },
  {
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect your apps and automate workflows for seamless integration.',
    link: '#zapier',
    icon: FaRobot
  },
  {
    name: 'Hootsuite',
    category: 'Social Media',
    description: 'Social media management platform for scheduling posts and monitoring engagement.',
    link: '#hootsuite',
    icon: FaSms
  },
  {
    name: 'Buffer',
    category: 'Social Media',
    description: 'Social media scheduling and analytics platform for brands and businesses.',
    link: '#buffer',
    icon: FaSms
  },
  {
    name: 'Calendly',
    category: 'Scheduling',
    description: 'Automated scheduling tool to eliminate back-and-forth emails.',
    link: '#calendly',
    icon: FaTools
  },
  {
    name: 'Unbounce',
    category: 'Lead Generation',
    description: 'Landing page builder and conversion optimization platform.',
    link: '#unbounce',
    icon: FaChartLine
  },
  {
    name: 'OptinMonster',
    category: 'Lead Generation',
    description: 'Conversion optimization toolkit for lead generation and sales.',
    link: '#optinmonster',
    icon: FaChartLine
  },
  {
    name: 'SurferSEO',
    category: 'SEO',
    description: 'Content optimization tool for better search engine rankings.',
    link: '#surferseo',
    icon: FaSearch
  }
];

export default function AffiliateToolsPage() {
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Recommended Marketing Tools
              </h1>
              
              <p className="text-lg text-white/90 mb-10">
                Discover our carefully selected collection of marketing automation and lead generation tools to power your business growth.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#tool-categories">
                  <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Browse Tools
                  </AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                    Get Personalized Recommendations
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-16 bg-white dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold mb-3">
                Special Partner Offers
              </span>
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Featured Tools With Exclusive Discounts
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Take advantage of these exclusive partner discounts when you sign up through our affiliate links.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative"
                >
                  {/* Discount tag */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {tool.discount}
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-blue/10 dark:bg-white/10 rounded-lg flex items-center justify-center text-primary-blue dark:text-white mr-4">
                        <tool.icon className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-navy dark:text-white">{tool.name}</h3>
                        <span className="text-sm text-primary-slate/80 dark:text-white/60">{tool.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-sm ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-primary-navy dark:text-white">{tool.rating}/5</span>
                    </div>
                    
                    <p className="text-primary-slate dark:text-gray-300 mb-6">
                      {tool.description}
                    </p>
                    
                    <a 
                      href={tool.link} 
                      className="mt-auto inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold hover:underline"
                    >
                      Get Discount
                      <FaExternalLinkAlt className="ml-2 text-xs" />
                    </a>
                  </div>
                  
                  <div className="bg-primary-blue/5 dark:bg-white/5 p-4 border-t border-primary-blue/10 dark:border-white/10">
                    <a 
                      href={tool.link} 
                      className="w-full py-2 px-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-md flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>Get Started</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Categories Section */}
        <section id="tool-categories" className="py-16 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedText
                text="Tools By Category"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <p className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Browse our recommended tools by category to find the perfect solution for your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {toolCategories.map((category, idx) => (
                <motion.a
                  key={category.id}
                  href={`#${category.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-primary-slate/50 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4`}>
                    <category.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">{category.title}</h3>
                  <p className="text-sm text-primary-slate dark:text-white/70">{category.description}</p>
                </motion.a>
              ))}
            </div>
            
            {/* List of All Affiliate Tools */}
            <div className="bg-white dark:bg-primary-slate/50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-6">
                All Recommended Tools
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {affiliateTools.map((tool, idx) => (
                  <motion.a
                    key={tool.name}
                    href={tool.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-primary-light/50 dark:bg-primary-navy/30 rounded-lg hover:bg-primary-light dark:hover:bg-primary-navy/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-primary-slate flex items-center justify-center mr-4 flex-shrink-0">
                      <tool.icon className="text-primary-blue text-lg" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-primary-navy dark:text-white">{tool.name}</h4>
                      <span className="text-xs text-primary-slate/80 dark:text-white/60">{tool.category}</span>
                    </div>
                    <FaExternalLinkAlt className="text-primary-blue text-xs" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Our Affiliate Links */}
        <section className="py-16 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Why Use Our Affiliate Links?
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                By using our affiliate links, you get access to exclusive discounts while supporting our continued provision of free resources and guides.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Exclusive Discounts',
                  description: 'Get special partner rates and discounts only available through our affiliate links.',
                  icon: FaLink
                },
                {
                  title: 'Pre-vetted Solutions',
                  description: 'We personally test and review all tools before recommending them to ensure quality.',
                  icon: FaTools
                },
                {
                  title: 'Free Setup Support',
                  description: 'Get free support and guidance on how to set up and optimize your new tools.',
                  icon: FaRobot
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-light dark:bg-primary-navy/50 p-6 rounded-xl shadow-md"
                >
                  <div className="rounded-full w-14 h-14 bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6">
                    <feature.icon className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-primary-slate dark:text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text="Need Help Choosing the Right Tools?"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              highlight={false}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Our experts can provide personalized recommendations based on your specific business needs and goals.
            </motion.p>
            
            <Link href="/contact">
              <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                Get Free Consultation
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
