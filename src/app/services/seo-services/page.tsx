&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaCode, FaLink, FaMapMarkerAlt, FaChartLine, FaFileAlt, FaCheckCircle, FaLaptop } from &apos;react-icons/fa';

export default function SeoServicesPage() {
  const services = [
    {
      title: &apos;On-Page SEO',
      description: &apos;Optimization of your website content, meta data, and structure to improve search engine visibility and user experience.&apos;,
      icon: FaFileAlt
    },
    {
      title: &apos;Technical SEO',
      description: &apos;Comprehensive analysis and improvement of your website architecture, speed, mobile-friendliness, and indexability.&apos;,
      icon: FaCode
    },
    {
      title: &apos;Off-Page SEO',
      description: &apos;Building high-quality backlinks, brand mentions, and digital authority to boost your site\'s credibility and rankings.&apos;,
      icon: FaLink
    },
    {
      title: &apos;Local SEO',
      description: &apos;Targeted strategies to improve visibility in local search results, Google Maps, and location-based queries.&apos;,
      icon: FaMapMarkerAlt
    },
    {
      title: &apos;Content Strategy',
      description: &apos;Development of SEO-driven content plans that attract, engage, and convert your target audience.&apos;,
      icon: FaLaptop
    },
    {
      title: &apos;SEO Analytics & Reporting',
      description: &apos;Detailed tracking and analysis of your SEO performance with actionable insights for continuous improvement.&apos;,
      icon: FaChartLine
    }
  ];

  const benefits = [
    &apos;Increased organic traffic from search engines',
    &apos;Higher search engine rankings for targeted keywords',
    &apos;Improved website visibility and brand awareness',
    &apos;Better quality traffic that converts to leads/sales',
    &apos;Enhanced user experience and engagement',
    &apos;Sustainable long-term growth strategy',
    &apos;Measurable return on investment'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;SEO Services&quot; 
            fill 
            className=&quot;object-cover&quot;
          />
        </div>
        <div className=&quot;absolute inset-0 bg-primary-navy/50 z-0"></div>
        <div className=&quot;container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=&quot;text-4xl md:text-5xl font-bold mb-6 text-center dark:text-blue-800"
          >
            SEO Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Drive sustainable organic traffic and improve search rankings with our comprehensive search engine optimization strategies.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic SEO Solutions</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today&apos;s digital landscape, ranking well in search engines is essential for business growth. Our SEO services help you improve your online visibility, attract qualified traffic, and convert visitors into customers.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                We take a comprehensive approach to SEO, addressing on-page optimization, technical factors, content strategy, and off-page elements to create a holistic strategy tailored to your business goals and target audience.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                Using data-driven methodologies and staying current with search algorithm changes, we implement strategies that deliver sustainable results and long-term growth for your business.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;/images/photos/WooRankImage.png&quot; 
                alt=&quot;SEO analytics dashboard&quot; 
                fill 
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our SEO Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive search engine optimization solutions that address every aspect of your online presence.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className=&quot;text-primary-blue mb-4 text-3xl">
                  {React.createElement(service.icon)}
                </div>
                <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white">{service.title}</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our SEO Process</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to develop and implement effective SEO strategies for your business.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;relative"
            >
              <div className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md h-full">
                <div className=&quot;text-primary-blue mb-3 text-2xl">
                  <div className=&quot;bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">1</div>
                </div>
                <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Comprehensive Audit</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">
                  We analyze your current SEO performance, website structure, content, and competitive landscape to identify opportunities and challenges.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;relative"
            >
              <div className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md h-full">
                <div className=&quot;text-primary-blue mb-3 text-2xl">
                  <div className=&quot;bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">2</div>
                </div>
                <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Strategy Development</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">
                  Based on audit findings, we create a customized SEO roadmap with prioritized actions to achieve your specific business objectives.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;relative"
            >
              <div className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md h-full">
                <div className=&quot;text-primary-blue mb-3 text-2xl">
                  <div className=&quot;bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">3</div>
                </div>
                <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Implementation</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">
                  We execute the strategy across all relevant SEO dimensions: technical, on-page, content, and off-page optimization.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className=&quot;relative"
            >
              <div className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md h-full">
                <div className=&quot;text-primary-blue mb-3 text-2xl">
                  <div className=&quot;bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">4</div>
                </div>
                <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Reporting & Optimization</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">
                  We continually monitor performance, provide detailed analytics reports, and refine the strategy based on results and evolving search trends.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our SEO Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Investing in professional SEO delivers numerous advantages for your business.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className=&quot;flex items-start"
              >
                <span className=&quot;text-primary-blue mr-2 mt-1">
                  <FaCheckCircle />
                </span>
                <span className=&quot;text-primary-navy dark:text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Study Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;bg-slate-50 dark:bg-primary-navy/30 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Home Services Company</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;Home service provider&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  A regional home services company was struggling to generate leads through their website. After implementing our comprehensive SEO strategy:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Organic traffic increased by 243% in six months</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Rankings for high-intent keywords improved from page 3+ to top 5 positions</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Local visibility improved by 187% with Google Business Profile optimization</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Cost per lead decreased by 62% compared to paid advertising</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;The SEO results from Technology Alliance Solutions have been remarkable. We now have a consistent flow of qualified leads coming through our website every day, and our business has grown by 37% year-over-year as a direct result of their work.&quot; - Operations Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Local SEO Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2 order-2 md:order-1">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1503194775635-ada629e511bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Local SEO map view&quot; 
                width={600} 
                height={400} 
                className=&quot;rounded-lg shadow-xl object-cover&quot;
              />
            </div>
            <div className=&quot;md:w-1/2 order-1 md:order-2">
              <div className=&quot;text-primary-blue mb-4 text-4xl">
                <FaMapMarkerAlt />
              </div>
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Dominate Local Search</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                For businesses serving local customers, our specialized local SEO services help you appear in Google&apos;s local pack, Google Maps, and local search results when nearby customers are looking for your products or services.
              </p>
              <ul className=&quot;space-y-3">
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Google Business Profile optimization</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Local citation building and cleanup</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Review generation and management</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Local content strategy</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Geo-targeted keyword optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our SEO services can help you attract more organic traffic, leads, and customers to grow your business.
          </p>
          <div className=&quot;flex flex-wrap justify-center gap-4">
            <AnimatedButton className=&quot;bg-white text-primary-blue hover:bg-primary-light border-none shadow-md">
              <a href=&quot;/contact">Request a Free SEO Audit</a>
            </AnimatedButton>
            <AnimatedButton className=&quot;bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md">
              <a href=&quot;/services">Explore Other Services</a>
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
