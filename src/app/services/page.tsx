'use client';

import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import React from 'react';
import { FaChartLine, FaUsers, FaCogs, FaRocket, FaLaptopCode, FaClipboardCheck } from 'react-icons/fa';

export default function ServicesOverviewPage() {
  const services = [
    {
      title: 'CRM Solutions',
      description: 'Tailored CRM strategies and implementations to enhance customer relationships and drive business growth.',
      icon: FaUsers,
      link: '/services/crm',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'CRM platform selection and implementation',
        'Custom configuration and development',
        'Data migration and integration',
        'User training and adoption strategies'
      ]
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline your marketing efforts with powerful automation tools that nurture leads and drive conversions.',
      icon: FaChartLine,
      link: '/services/marketing-automation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Email marketing automation',
        'Lead scoring and nurturing',
        'Campaign management and analytics',
        'Marketing and sales alignment'
      ]
    },
    {
      title: 'Technology Integration',
      description: 'Connect your business systems seamlessly to ensure data flows efficiently across your organization.',
      icon: FaCogs,
      link: '/services/integration',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'API development and management',
        'Custom middleware solutions',
        'Data synchronization and ETL',
        'Legacy system integration'
      ]
    },
    {
      title: 'Strategy Consulting',
      description: 'Expert guidance to help you navigate the complex landscape of CRM and marketing technology.',
      icon: FaRocket,
      link: '/services/strategy',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Digital transformation roadmaps',
        'Technology stack assessment',
        'Process optimization',
        'Change management'
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Digital services" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-navy/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Comprehensive solutions to transform your customer relationships, streamline operations, and drive measurable business growth.
          </motion.p>
        </div>
      </div>

      {/* Services Overview */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">How We Help You Succeed</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our team of experts delivers tailored solutions that address your unique business challenges and help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-primary-navy/50 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
              >
                <Link href={service.link} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-primary-blue mb-4 text-3xl">
                      {React.createElement(service.icon)}
                    </div>
                    <p className="text-primary-slate dark:text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-blue mr-2">✓</span>
                          <span className="text-primary-slate dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-primary-blue font-semibold group-hover:underline">Learn more →</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Approach</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful outcomes for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white mt-4">Discovery</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We start by understanding your business objectives, challenges, and current processes to identify opportunities for improvement.
              </p>
            </div>
            <div className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white mt-4">Strategy</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Our team develops a tailored strategy and implementation plan aligned with your specific needs and goals.
              </p>
            </div>
            <div className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white mt-4">Implementation</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We execute the plan with precision, leveraging our technical expertise and industry best practices.
              </p>
            </div>
            <div className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white mt-4">Optimization</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We continuously monitor, measure, and refine to ensure you achieve maximum value from your technology investments.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Technologies We Work With</h2>
            <p className="text-lg text-primary-navy dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across a wide range of CRM and marketing automation platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Marketo', 'Pardot', 'ClickDimensions', 'ActiveCampaign', 'Mailchimp', 'Zoho CRM', 'SugarCRM', 'Zendesk', 'Pipedrive'].map((tech, index) => {
              const slug = tech.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={tech} href={`/services/technologies/${slug}`} className="block">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-4 bg-blue-800 dark:bg-blue-700 text-white rounded-lg shadow-sm hover:shadow-lg transition-shadow h-full flex items-center justify-center"
                  >
                    <p className="font-medium">{tech}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Link to Comparison Page */}
          <div className="text-center mt-12">
            <Link href="/services/technologies/compare"
              className="inline-block bg-primary-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Compare Technologies
            </Link>
          </div>

        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your business objectives.
          </p>
          <motion.div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-blue font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.a>
            <motion.a 
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn About Us
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
