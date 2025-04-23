&apos;use client';

import Image from &apos;next/image';
import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import AnimatedText from &apos;@/components/ui/AnimatedText';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import { 
  FaSearchDollar, 
  FaGlobe, 
  FaEnvelope, 
  FaUserCheck, 
  FaDatabase, 
  FaStar, 
  FaHashtag,
  FaChevronRight,
  FaNetworkWired,
  FaCogs,
  FaTools,
  FaServer,
  FaLaptopCode
} from &apos;react-icons/fa';

const services = [
  {
    id: &apos;seo',
    title: &apos;SEO Services',
    icon: FaSearchDollar,
    description: &apos;Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.&apos;,
    benefits: [
      &apos;On-Page SEO Optimization',
      &apos;Off-Page SEO Strategies',
      &apos;Technical SEO Audits',
      &apos;Local SEO for Regional Targeting',
      &apos;Content Optimization',
      &apos;Keyword Research & Strategy'
    ],
    image: &apos;/images/photos/SEO_Services.png',
    color: &apos;from-blue-600 to-purple-600',
    link: &apos;/services/seo-services'
  },
  {
    id: &apos;website-creation',
    title: &apos;Website Creation',
    icon: FaGlobe,
    description: &apos;Get a professionally designed, SEO-optimized website tailored to your business needs.&apos;,
    benefits: [
      &apos;Custom Web Design & Development',
      &apos;SEO-Optimized Architecture',
      &apos;eCommerce Website Development',
      &apos;User Experience (UX) Optimization',
      &apos;Mobile-Responsive Design',
      &apos;Ongoing Maintenance Plans'
    ],
    image: &apos;/images/photos/Abstract_laptop.png',
    color: &apos;from-green-600 to-teal-600',
    link: &apos;/services/website-creation'
  },
  {
    id: &apos;email-marketing',
    title: &apos;Email Marketing',
    icon: FaEnvelope,
    description: &apos;Engage your audience with personalized email campaigns and automated workflows.&apos;,
    benefits: [
      &apos;Campaign Strategy & Design',
      &apos;Audience Segmentation',
      &apos;Automated Email Sequences',
      &apos;A/B Testing & Optimization',
      &apos;Performance Analytics',
      &apos;Lead Nurturing Workflows'
    ],
    image: &apos;/images/photos/Static_tech_image.png',
    color: &apos;from-orange-500 to-red-500',
    link: &apos;/services/email-marketing'
  },
  {
    id: &apos;lead-generation',
    title: &apos;Lead Generation',
    icon: FaUserCheck,
    description: &apos;Acquire quality leads with our integrated solutions and AI-powered targeting systems.&apos;,
    benefits: [
      &apos;API-Integrated Lead Capture Systems',
      &apos;Supabase Backend for Data Storage',
      &apos;Lead Qualification & Scoring',
      &apos;Custom Lead Capture Forms',
      &apos;Multi-Channel Lead Generation',
      &apos;Lead Conversion Optimization'
    ],
    image: &apos;/images/photos/illustrations/Arrows_segments_marketing.png',
    color: &apos;from-purple-600 to-pink-500',
    link: &apos;/services/lead-generation'
  },
  {
    id: &apos;crm',
    title: &apos;CRM & Automation',
    icon: FaDatabase,
    description: &apos;Streamline your business with custom CRM solutions and powerful automation tools.&apos;,
    benefits: [
      &apos;White-Labeled GoHighLevel Instances',
      &apos;Text-Back Automation Systems',
      &apos;AI-Powered Chatbots',
      &apos;Customer Lifecycle Management',
      &apos;Workflow Automation',
      &apos;Sales Pipeline Optimization'
    ],
    image: &apos;/images/photos/Laptop_CRM_dashboard.png',
    color: &apos;from-blue-500 to-cyan-500',
    link: &apos;/services/crm'
  },
  {
    id: &apos;reputation-management',
    title: &apos;Reputation Management',
    icon: FaStar,
    description: &apos;Protect and enhance your brand reputation with automated monitoring and response systems.&apos;,
    benefits: [
      &apos;Automated Review Management',
      &apos;Sentiment Analysis',
      &apos;Crisis Response Planning',
      &apos;Brand Monitoring',
      &apos;Review Generation Campaigns',
      &apos;Reputation Recovery Strategies'
    ],
    image: &apos;/images/photos/Two_people_looking_at_screen.png',
    color: &apos;from-yellow-500 to-amber-600',
    link: &apos;/services/reputation-management'
  },
  {
    id: &apos;social-media',
    title: &apos;Social Media Management',
    icon: FaHashtag,
    description: &apos;Maximize your social presence across all major platforms with content strategy and analytics.&apos;,
    benefits: [
      &apos;Multi-Platform Content Strategy',
      &apos;Social Media Content Calendar',
      &apos;Engagement Management',
      &apos;Performance Analytics',
      &apos;Social Advertising Campaigns',
      &apos;Platform-Specific Optimization'
    ],
    image: &apos;/images/photos/Two_People_looking_at_screen1.png',
    color: &apos;from-pink-500 to-rose-500',
    link: &apos;/services/social-media-management'
  },
  {
    id: &apos;technology-integration',
    title: &apos;Technology Integration',
    icon: FaNetworkWired,
    description: &apos;Seamlessly connect your business systems with advanced integration solutions for improved workflow.&apos;,
    benefits: [
      &apos;Cross-Platform System Integration',
      &apos;API Development & Management',
      &apos;Data Migration & Synchronization',
      &apos;Legacy System Integration',
      &apos;Custom Integration Workflows',
      &apos;Third-Party Software Integration'
    ],
    image: &apos;/images/photos/System_optimization.png',
    color: &apos;from-indigo-600 to-blue-500',
    link: &apos;/services/technology-integration'
  },
  {
    id: &apos;marketing-automation',
    title: &apos;Marketing Automation',
    icon: FaCogs,
    description: &apos;Implement intelligent automation to streamline your marketing processes and improve campaign results.&apos;,
    benefits: [
      &apos;Automated Campaign Management',
      &apos;Lead Scoring & Nurturing Workflows',
      &apos;Trigger-Based Marketing Actions',
      &apos;Personalized Customer Journeys',
      &apos;Integrated Analytics & Reporting',
      &apos;Multi-Channel Marketing Automation'
    ],
    image: &apos;/images/photos/MArketingAtuomationPlatforms.png',
    color: &apos;from-red-500 to-orange-400',
    link: &apos;/services/marketing-automation'
  },
  {
    id: &apos;custom-solutions',
    title: &apos;Custom Solutions',
    icon: FaTools,
    description: &apos;Get tailored software and integration solutions designed specifically for your unique business challenges.&apos;,
    benefits: [
      &apos;Bespoke Software Development',
      &apos;Custom API Integrations',
      &apos;Specialized Workflow Automation',
      &apos;Industry-Specific Solutions',
      &apos;Scalable Architecture Design',
      &apos;Ongoing Support & Maintenance'
    ],
    image: &apos;/images/photos/TASComparisonCollab.png',
    color: &apos;from-emerald-600 to-teal-500',
    link: &apos;/services/custom-solutions'
  },
  {
    id: &apos;system-optimization',
    title: &apos;System Optimization',
    icon: FaServer,
    description: &apos;Improve performance and efficiency with our expert system optimization and enhancement services.&apos;,
    benefits: [
      &apos;System Performance Analysis',
      &apos;Process Automation & Streamlining',
      &apos;Database Optimization',
      &apos;Workflow Efficiency Improvements',
      &apos;System Architecture Enhancements',
      &apos;Scalability & Future-Proofing'
    ],
    image: &apos;/images/photos/System_optimization.png',
    color: &apos;from-cyan-500 to-sky-600',
    link: &apos;/services/system-optimization'
  },
  {
    id: &apos;technology-consulting',
    title: &apos;Technology Consulting',
    icon: FaLaptopCode,
    description: &apos;Get expert guidance on technology strategy, implementation, and optimization for your business.&apos;,
    benefits: [
      &apos;Technology Stack Assessment',
      &apos;Digital Transformation Strategy',
      &apos;Software Selection & Implementation',
      &apos;IT Roadmap Development',
      &apos;Technology Vendor Evaluation',
      &apos;Implementation Planning & Support'
    ],
    image: &apos;/images/photos/TASCompCollab.png',
    color: &apos;from-violet-600 to-purple-500',
    link: &apos;/services/technologies'
  }
];

export default function ServicesPage() {

  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className=&quot;relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;max-w-3xl mx-auto"
            >
              <h1 className=&quot;text-3xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Services for Business Growth
              </h1>
              
              <p className=&quot;text-lg text-white/90 mb-10">
                From SEO and website creation to lead generation and CRM automation, we offer a comprehensive suite of solutions to help your business thrive in the digital landscape.
              </p>

              <div className=&quot;flex flex-wrap justify-center gap-4">
                <Link href=&quot;#service-list">
                  <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Explore Services
                  </AnimatedButton>
                </Link>
                <Link href=&quot;/contact">
                  <AnimatedButton className=&quot;bg-transparent hover:bg-white/10 text-white border-white">
                    Request a Quote
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Section */}
        <section id=&quot;service-list&quot; className=&quot;py-16 md:py-24 bg-white dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <AnimatedText
                text=&quot;Our Services&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
                highlight={false}
              />
              <p className=&quot;mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                We offer a comprehensive range of AI-powered marketing and automation services designed to help your business grow, attract more leads, and improve customer engagement.
              </p>
            </div>

            <div className=&quot;grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className=&quot;group bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className={`h-48 relative overflow-hidden bg-gradient-to-r ${service.color}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className=&quot;object-cover opacity-60 group-hover:scale-105 transition-transform duration-500&quot;
                    />
                    <div className=&quot;absolute inset-0 flex items-center justify-center">
                      <service.icon className=&quot;text-white text-5xl drop-shadow-lg&quot; />
                    </div>
                  </div>
                  
                  <div className=&quot;p-6 flex-grow flex flex-col">
                    <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-2">{service.title}</h3>
                    <p className=&quot;text-primary-slate dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                    <Link href={service.link} className=&quot;mt-auto">
                      <span className=&quot;inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold group-hover:underline">
                        Learn more
                        <FaChevronRight className=&quot;ml-2 text-sm&quot; />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Section */}
        <AnimatedSection className=&quot;py-20 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Why Choose Technology Alliance Solutions
              </motion.span>
              <AnimatedText
                text=&quot;Comprehensive Business Solutions&quot;
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl&quot;
                highlight={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className=&quot;mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Our AI-powered tools and automation systems help you scale your business efficiently while delivering exceptional results.
              </motion.p>
            </div>
            
            <div className=&quot;grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className=&quot;bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl overflow-hidden">
                  <div className=&quot;relative h-80">
                    <Image 
                      src=&quot;/images/photos/Two_people_looking_at_screen.png&quot;
                      alt=&quot;Technology Alliance Solutions Services&quot;
                      fill
                      className=&quot;object-cover object-center&quot;
                    />
                    <div className=&quot;absolute inset-0 bg-gradient-to-tr from-primary-blue/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-6">
                  Full-Service Digital Solutions
                </h3>
                <p className=&quot;text-primary-slate dark:text-white/80 mb-8">
                  At Technology Alliance Solutions, we understand that modern businesses need integrated solutions. That&apos;s why we offer a complete range of services that work together seamlessly to maximize your marketing efforts and drive tangible results.
                </p>
                
                <div className=&quot;grid sm:grid-cols-2 gap-4">
                  {[&apos;AI-Powered Automation', &apos;Data-Driven Strategies', &apos;Scalable Solutions', &apos;Measurable Results', &apos;Expert Support', &apos;Cutting-Edge Technology'].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className=&quot;flex items-center space-x-2"
                    >
                      <div className=&quot;w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                        <span className=&quot;text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <span className=&quot;text-primary-navy dark:text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className=&quot;mt-10">
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                      Schedule a Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Packages Section */}
        <section className=&quot;py-20 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Customized For Your Business
              </motion.span>
              <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Tailored Service Solutions
              </h2>
              <p className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                We believe that every business has unique challenges and goals. Our service packages are meticulously crafted to address your specific needs rather than offering one-size-fits-all solutions.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;bg-gradient-to-r from-primary-navy/5 to-primary-blue/5 dark:from-primary-navy/30 dark:to-primary-blue/30 rounded-2xl overflow-hidden shadow-xl p-8 md:p-12"
            >
              <div className=&quot;grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-6">
                    Strategic, Results-Driven Approach
                  </h3>
                  <p className=&quot;text-primary-slate dark:text-white/80 mb-6">
                    Each solution we design begins with a thorough assessment of your business objectives, industry landscape, and growth targets. This collaborative approach ensures our services deliver maximum ROI and sustainable growth.
                  </p>
                  
                  <div className=&quot;space-y-4">
                    {[
                      &apos;Flexible service components that scale with your business',
                      &apos;Transparent delivery process with regular reporting',
                      &apos;Continuous optimization based on performance analytics',
                      &apos;Dedicated support from industry specialists',
                      &apos;Integration with your existing technology stack'
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className=&quot;flex items-start"
                      >
                        <div className=&quot;w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className=&quot;text-green-600 dark:text-green-400 text-xs">✓</span>
                        </div>
                        <span className=&quot;text-primary-navy dark:text-white/90 ml-3">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className=&quot;mt-8">
                    <Link href=&quot;/contact">
                      <AnimatedButton className=&quot;bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent shadow-lg">
                        Request Custom Solution
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
                
                <div className=&quot;relative">
                  <Image
                    src=&quot;/images/photos/Marketing_growth_success.jpg&quot;
                    alt=&quot;Tailored business solutions&quot;
                    width={600}
                    height={400}
                    className=&quot;rounded-xl shadow-lg&quot;
                  />
                  <div className=&quot;absolute -bottom-6 -right-6 bg-white dark:bg-primary-navy p-4 rounded-lg shadow-xl">
                    <div className=&quot;flex items-center space-x-2">
                      <FaStar className=&quot;text-yellow-500&quot; />
                      <span className=&quot;text-primary-navy dark:text-white font-bold">Custom Solutions</span>
                    </div>
                    <p className=&quot;text-sm text-primary-slate dark:text-white/80 mt-1">
                      Designed for your specific business goals
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className=&quot;text-center mt-16">
              <p className=&quot;text-primary-slate dark:text-white/80 mb-6">
                Ready to discover how our services can be tailored to your specific needs? 
                Our consultants will craft a solution that aligns perfectly with your business goals and budget.
              </p>
              <Link href=&quot;/contact">
                <AnimatedButton className=&quot;bg-transparent hover:bg-primary-blue/10 text-primary-blue border-primary-blue">
                  Schedule a Free Consultation
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
              text=&quot;Ready to Supercharge Your Business?&quot;
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
              Join hundreds of businesses that have transformed their operations with our AI-powered solutions. Schedule a call today and let&apos;s discuss how we can help you grow.
            </motion.p>
            
            <div className=&quot;flex flex-wrap justify-center gap-4">
              <Link href=&quot;/contact">
                <AnimatedButton className=&quot;bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  Schedule a Call
                </AnimatedButton>
              </Link>
              
              <Link href=&quot;/resources/document-creation">
                <AnimatedButton className=&quot;bg-white text-primary-navy hover:bg-primary-light border-transparent shadow-lg">
                  Try Document Creation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
