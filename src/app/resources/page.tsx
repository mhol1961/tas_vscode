&apos;use client';

import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import AnimatedText from &apos;@/components/ui/AnimatedText';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import { 
  FaFileAlt, 
  FaFileCode, 
  FaChartLine, 
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaChevronRight
} from &apos;react-icons/fa';

// Resource categories
const resourceCategories = [
  {
    id: &apos;document-creation',
    title: &apos;Document Creation',
    description: &apos;Generate professional business documents instantly with our AI-powered document creator.&apos;,
    icon: FaFileAlt,
    link: &apos;/resources/document-creation',
    color: &apos;bg-blue-600',
    featured: true
  },
  {
    id: &apos;marketing-resources',
    title: &apos;Marketing Resources',
    description: &apos;Access guides, templates, and best practices to improve your marketing strategy.&apos;,
    icon: FaChartLine,
    link: &apos;/resources/marketing',
    color: &apos;bg-green-600'
  },
  {
    id: &apos;how-to-guides',
    title: &apos;How-To Guides',
    description: &apos;Step-by-step instructions for running ads and managing your online presence.&apos;,
    icon: FaFileCode,
    link: &apos;/resources/how-to',
    color: &apos;bg-purple-600'
  }
];

// Specific marketing guides
const marketingGuides = [
  { platform: &apos;Facebook', icon: FaFacebookF, color: &apos;bg-blue-600' },
  { platform: &apos;Instagram', icon: FaInstagram, color: &apos;bg-pink-600' },
  { platform: &apos;TikTok', icon: FaTiktok, color: &apos;bg-black' },
  { platform: &apos;LinkedIn', icon: FaLinkedinIn, color: &apos;bg-blue-700' },
  { platform: &apos;Twitter', icon: FaTwitter, color: &apos;bg-blue-400' },
  { platform: &apos;Pinterest', icon: FaPinterest, color: &apos;bg-red-600' },
  { platform: &apos;YouTube', icon: FaYoutube, color: &apos;bg-red-700' }
];

export default function ResourcesPage() {
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
                AI-Powered Marketing Resources
              </h1>
              
              <p className=&quot;text-lg text-white/90 mb-10">
                Access our collection of tools, templates, and guides to supercharge your marketing efforts and streamline your business operations.
              </p>

              <div className=&quot;flex flex-wrap justify-center gap-4">
                <Link href=&quot;#resource-categories">
                  <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Explore Resources
                  </AnimatedButton>
                </Link>
                <Link href=&quot;/contact">
                  <AnimatedButton className=&quot;bg-transparent hover:bg-white/10 text-white border-white">
                    Request Custom Resources
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories Section */}
        <section id=&quot;resource-categories&quot; className=&quot;py-16 md:py-24 bg-white dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <AnimatedText
                text=&quot;Resource Categories&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
                highlight={false}
              />
              <p className=&quot;mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Browse our collection of business tools, downloadable guides, and AI-powered templates to help your business grow.
              </p>
            </div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${category.featured ? &apos;ring-4 ring-green-500/30' : &apos;&apos;}`}
                >
                  <div className={`p-5 ${category.color} text-white`}>
                    <div className=&quot;flex items-center space-x-4">
                      <category.icon className=&quot;text-4xl&quot; />
                      <h3 className=&quot;text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  
                  <div className=&quot;p-6">
                    <p className=&quot;text-primary-slate dark:text-gray-300 mb-6">{category.description}</p>
                    <Link href={category.link} className=&quot;mt-auto inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold hover:underline">
                      Browse {category.title}
                      <FaChevronRight className=&quot;ml-2 text-sm&quot; />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured: Document Creation */}
        <AnimatedSection className=&quot;py-20 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <span className=&quot;inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold mb-3">
                Featured Resource
              </span>
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                AI-Powered Document Creation
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Generate professional business documents in seconds with our advanced AI technology.
              </p>
            </div>
            
            <div className=&quot;grid lg:grid-cols-2 gap-12 items-center">
              <div className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl shadow-lg overflow-hidden">
                <div className=&quot;p-8">
                  <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">
                    Pre-Made Document Templates
                  </h3>
                  <p className=&quot;text-primary-slate dark:text-white/80 mb-6">
                    Choose from a wide variety of professional templates:
                  </p>
                  
                  <div className=&quot;grid grid-cols-2 gap-4 mb-8">
                    {[
                      &apos;Non-Disclosure Agreements',
                      &apos;Service Contracts',
                      &apos;Business Proposals',
                      &apos;Invoices & Receipts',
                      &apos;HR Documents',
                      &apos;Lease Agreements',
                      &apos;Legal Waivers',
                      &apos;Partnership Agreements'
                    ].map((item, i) => (
                      <div key={i} className=&quot;flex items-center space-x-2">
                        <div className=&quot;w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                          <span className=&quot;text-green-600 dark:text-green-400 text-xs">✓</span>
                        </div>
                        <span className=&quot;text-primary-navy dark:text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href=&quot;/resources/document-creation">
                    <AnimatedButton className=&quot;w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Generate Documents Now
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-6">
                  Why Use Our Document Creator?
                </h3>
                <div className=&quot;space-y-6">
                  {[
                    {
                      title: &apos;Legal Compliance Built-In',
                      description: &apos;All templates are created with legal compliance in mind and regularly updated.&apos;
                    },
                    {
                      title: &apos;Fully Customizable',
                      description: &apos;Tailor every document to your specific needs with our flexible customization options.&apos;
                    },
                    {
                      title: &apos;Available in Multiple Formats',
                      description: &apos;Download your documents as PDF, DOCX, or TXT files for maximum compatibility.&apos;
                    },
                    {
                      title: &apos;Secure & Private',
                      description: &apos;Your information is encrypted and never stored longer than necessary to generate documents.&apos;
                    }
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                      className=&quot;bg-white dark:bg-primary-slate/50 rounded-lg p-6 shadow-md"
                    >
                      <h4 className=&quot;text-lg font-semibold text-primary-navy dark:text-white mb-2">{feature.title}</h4>
                      <p className=&quot;text-primary-slate dark:text-white/80">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Marketing Resources Section */}
        <section className=&quot;py-16 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Marketing Guides & Resources
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Learn how to effectively advertise on popular platforms with our comprehensive how-to guides.
              </p>
            </div>
            
            <div className=&quot;grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
              {marketingGuides.map((platform, idx) => (
                <motion.div
                  key={platform.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className=&quot;bg-primary-light dark:bg-primary-navy/50 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 mx-auto rounded-full ${platform.color} flex items-center justify-center mb-3`}>
                    <platform.icon className=&quot;text-white text-xl&quot; />
                  </div>
                  <h3 className=&quot;font-medium text-primary-navy dark:text-white">{platform.platform}</h3>
                  <Link href={`/resources/how-to#${platform.platform.toLowerCase()}`} className=&quot;mt-2 text-xs text-primary-blue inline-block hover:underline">
                    Ad Guide
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: &apos;SEO Best Practices',
                  description: &apos;Learn the latest techniques to improve your search engine rankings and drive organic traffic.&apos;,
                  link: &apos;/resources/marketing#seo'
                },
                {
                  title: &apos;Social Media Strategy',
                  description: &apos;Build an effective social media presence with our comprehensive strategy guides and content templates.&apos;,
                  link: &apos;/resources/marketing#social'
                },
                {
                  title: &apos;Email Marketing Playbook',
                  description: &apos;Create compelling email campaigns that convert with our email marketing templates and strategies.&apos;,
                  link: &apos;/resources/marketing#email'
                }
              ].map((resource, idx) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className=&quot;bg-primary-light dark:bg-primary-navy/50 p-6 rounded-xl shadow-md"
                >
                  <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">{resource.title}</h3>
                  <p className=&quot;text-primary-slate dark:text-white/80 mb-4">{resource.description}</p>
                  <Link href={resource.link} className=&quot;text-primary-blue font-medium hover:underline flex items-center">
                    Access Guide
                    <FaChevronRight className=&quot;ml-1 text-sm&quot; />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className=&quot;text-center mt-12">
              <Link href=&quot;/resources/marketing">
                <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  View All Marketing Resources
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className=&quot;max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text=&quot;Start Creating Professional Documents Today&quot;
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
              Access our premium resources and AI-powered tools to take your business to the next level.
            </motion.p>
            
            <div className=&quot;flex flex-wrap justify-center gap-4">
              <Link href=&quot;/resources/document-creation">
                <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  Create Documents
                </AnimatedButton>
              </Link>
              <Link href=&quot;/resources/marketing">
                <AnimatedButton className=&quot;bg-white text-primary-navy hover:bg-primary-light border-transparent shadow-lg">
                  Marketing Resources
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
