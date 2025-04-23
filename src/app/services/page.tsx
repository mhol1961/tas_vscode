'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { 
  FaSearchDollar, 
  FaGlobe, 
  FaEnvelope, 
  FaUserCheck, 
  FaDatabase, 
  FaStar, 
  FaHashtag,
  FaChevronRight
} from 'react-icons/fa';

const services = [
  {
    id: 'seo',
    title: 'SEO Services',
    icon: FaSearchDollar,
    description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.',
    benefits: [
      'On-Page SEO Optimization',
      'Off-Page SEO Strategies',
      'Technical SEO Audits',
      'Local SEO for Regional Targeting',
      'Content Optimization',
      'Keyword Research & Strategy'
    ],
    image: '/images/photos/Marketing_growth_success.jpg',
    color: 'from-blue-600 to-purple-600',
    link: '/services/seo'
  },
  {
    id: 'website-creation',
    title: 'Website Creation',
    icon: FaGlobe,
    description: 'Get a professionally designed, SEO-optimized website tailored to your business needs.',
    benefits: [
      'Custom Web Design & Development',
      'SEO-Optimized Architecture',
      'eCommerce Website Development',
      'User Experience (UX) Optimization',
      'Mobile-Responsive Design',
      'Ongoing Maintenance Plans'
    ],
    image: '/images/photos/Abstract_laptop.png',
    color: 'from-green-600 to-teal-600',
    link: '/services/website-creation'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    icon: FaEnvelope,
    description: 'Engage your audience with personalized email campaigns and automated workflows.',
    benefits: [
      'Campaign Strategy & Design',
      'Audience Segmentation',
      'Automated Email Sequences',
      'A/B Testing & Optimization',
      'Performance Analytics',
      'Lead Nurturing Workflows'
    ],
    image: '/images/photos/Static_tech_image.png',
    color: 'from-orange-500 to-red-500',
    link: '/services/email-marketing'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    icon: FaUserCheck,
    description: 'Acquire quality leads with our integrated solutions and AI-powered targeting systems.',
    benefits: [
      'API-Integrated Lead Capture Systems',
      'Supabase Backend for Data Storage',
      'Lead Qualification & Scoring',
      'Custom Lead Capture Forms',
      'Multi-Channel Lead Generation',
      'Lead Conversion Optimization'
    ],
    image: '/images/photos/illustrations/Arrows_segments_marketing.png',
    color: 'from-purple-600 to-pink-500',
    link: '/services/lead-generation'
  },
  {
    id: 'crm',
    title: 'CRM & Automation',
    icon: FaDatabase,
    description: 'Streamline your business with custom CRM solutions and powerful automation tools.',
    benefits: [
      'White-Labeled GoHighLevel Instances',
      'Text-Back Automation Systems',
      'AI-Powered Chatbots',
      'Customer Lifecycle Management',
      'Workflow Automation',
      'Sales Pipeline Optimization'
    ],
    image: '/images/photos/Laptop_CRM_dashboard.png',
    color: 'from-blue-500 to-cyan-500',
    link: '/services/crm'
  },
  {
    id: 'reputation-management',
    title: 'Reputation Management',
    icon: FaStar,
    description: 'Protect and enhance your brand reputation with automated monitoring and response systems.',
    benefits: [
      'Automated Review Management',
      'Sentiment Analysis',
      'Crisis Response Planning',
      'Brand Monitoring',
      'Review Generation Campaigns',
      'Reputation Recovery Strategies'
    ],
    image: '/images/photos/Two_people_looking_at_screen.png',
    color: 'from-yellow-500 to-amber-600',
    link: '/services/reputation-management'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: FaHashtag,
    description: 'Maximize your social presence across all major platforms with content strategy and analytics.',
    benefits: [
      'Multi-Platform Content Strategy',
      'Social Media Content Calendar',
      'Engagement Management',
      'Performance Analytics',
      'Social Advertising Campaigns',
      'Platform-Specific Optimization'
    ],
    image: '/images/photos/Two_People_looking_at_screen1.png',
    color: 'from-pink-500 to-rose-500',
    link: '/services/social-media'
  }
];

export default function ServicesPage() {

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Services for Business Growth
              </h1>
              
              <p className="text-lg text-white/90 mb-10">
                From SEO and website creation to lead generation and CRM automation, we offer a comprehensive suite of solutions to help your business thrive in the digital landscape.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#service-list">
                  <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Explore Services
                  </AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                    Request a Quote
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Section */}
        <section id="service-list" className="py-16 md:py-24 bg-white dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedText
                text="Our Services"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <p className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                We offer a comprehensive range of AI-powered marketing and automation services designed to help your business grow, attract more leads, and improve customer engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className={`h-48 relative overflow-hidden bg-gradient-to-r ${service.color}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="text-white text-5xl drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">{service.title}</h3>
                    <p className="text-primary-slate dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                    <Link href={service.link} className="mt-auto">
                      <span className="inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold group-hover:underline">
                        Learn more
                        <FaChevronRight className="ml-2 text-sm" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Section */}
        <AnimatedSection className="py-20 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Why Choose Intelligrow
              </motion.span>
              <AnimatedText
                text="Comprehensive Business Solutions"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Our AI-powered tools and automation systems help you scale your business efficiently while delivering exceptional results.
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl overflow-hidden">
                  <div className="relative h-80">
                    <Image 
                      src="/images/photos/Two_people_looking_at_screen.png"
                      alt="Intelligrow Services"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-6">
                  Full-Service Digital Solutions
                </h3>
                <p className="text-primary-slate dark:text-white/80 mb-8">
                  At Intelligrow, we understand that modern businesses need integrated solutions. That's why we offer a complete range of services that work together seamlessly to maximize your marketing efforts and drive tangible results.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {['AI-Powered Automation', 'Data-Driven Strategies', 'Scalable Solutions', 'Measurable Results', 'Expert Support', 'Cutting-Edge Technology'].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-primary-navy dark:text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link href="/contact">
                    <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                      Schedule a Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Packages Section */}
        <section className="py-20 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Service Packages
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Choose from our range of service packages designed to meet your specific business needs and budget.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-2">$499<span className="text-base font-normal">/mo</span></div>
                  <p className="text-white/80">Perfect for small businesses getting started with digital marketing</p>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      'Basic SEO optimization',
                      'Simple website setup',
                      'Email marketing setup',
                      'Social media management (1 platform)',
                      'Monthly performance report',
                      'Email support'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-primary-navy dark:text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="mt-auto block">
                    <button className="w-full py-3 px-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-md transition-colors font-medium">
                      Get Started
                    </button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Professional Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-2xl flex flex-col transform scale-105 z-10 ring-4 ring-green-500/20"
              >
                <div className="p-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-3">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <div className="text-3xl font-bold mb-2">$999<span className="text-base font-normal">/mo</span></div>
                  <p className="text-white/80">Comprehensive solution for growing businesses</p>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      'Advanced SEO optimization',
                      'Custom website development',
                      'Email marketing automation',
                      'Social media management (3 platforms)',
                      'Lead generation system',
                      'CRM integration',
                      'Bi-weekly performance reports',
                      'Priority email & chat support'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-primary-navy dark:text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="mt-auto block">
                    <button className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors font-medium">
                      Get Started
                    </button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Enterprise Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-2">$1,999<span className="text-base font-normal">/mo</span></div>
                  <p className="text-white/80">Full-scale solution for established businesses</p>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      'Premium SEO strategy & implementation',
                      'Advanced website with e-commerce',
                      'Comprehensive email marketing',
                      'Social media management (all platforms)',
                      'Advanced lead generation system',
                      'Full CRM & automation setup',
                      'Reputation management',
                      'Weekly performance reports',
                      '24/7 dedicated support'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-primary-navy dark:text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="mt-auto block">
                    <button className="w-full py-3 px-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-md transition-colors font-medium">
                      Get Started
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-primary-slate dark:text-white/80 mb-4">
                Need a custom solution? We offer tailored packages to meet your specific needs.
              </p>
              <Link href="/contact">
                <AnimatedButton className="bg-transparent hover:bg-primary-blue/10 text-primary-blue border-primary-blue">
                  Contact for Custom Pricing
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text="Ready to Supercharge Your Business?"
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
              Join hundreds of businesses that have transformed their operations with our AI-powered solutions. Schedule a call today and let's discuss how we can help you grow.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  Schedule a Call
                </AnimatedButton>
              </Link>
              
              <Link href="/resources/document-creation">
                <AnimatedButton className="bg-white text-primary-navy hover:bg-primary-light border-transparent shadow-lg">
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
