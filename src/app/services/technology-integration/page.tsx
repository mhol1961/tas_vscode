&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaNetworkWired, FaExchangeAlt, FaCloud, FaLock, FaCode, FaDatabase, FaCheckCircle } from &apos;react-icons/fa';

export default function TechnologyIntegrationPage() {
  const integrationTypes = [
    {
      title: &apos;API Integration',
      description: &apos;Connect applications through their APIs to enable seamless data exchange and process automation.&apos;,
      icon: FaExchangeAlt
    },
    {
      title: &apos;Data Integration',
      description: &apos;Synchronize data across multiple systems to create a unified view of your business information.&apos;,
      icon: FaDatabase
    },
    {
      title: &apos;Cloud Integration',
      description: &apos;Connect on-premises systems with cloud applications to create hybrid environments that maximize flexibility.&apos;,
      icon: FaCloud
    },
    {
      title: &apos;Custom Middleware',
      description: &apos;Develop tailored middleware solutions that bridge gaps between disparate systems and technologies.&apos;,
      icon: FaCode
    },
    {
      title: &apos;Enterprise Service Bus',
      description: &apos;Implement ESB architecture to facilitate communication between different applications and services.&apos;,
      icon: FaNetworkWired
    },
    {
      title: &apos;Secure Integration',
      description: &apos;Ensure all integrations meet security and compliance requirements with robust authentication and encryption.&apos;,
      icon: FaLock
    }
  ];

  const technologies = [
    {
      category: &apos;Integration Platforms',
      items: [&apos;MuleSoft', &apos;Dell Boomi', &apos;Informatica', &apos;Microsoft Azure Integration Services', &apos;IBM App Connect']
    },
    {
      category: &apos;API Management',
      items: [&apos;Apigee', &apos;Kong', &apos;Azure API Management', &apos;AWS API Gateway', &apos;Postman']
    },
    {
      category: &apos;iPaaS Solutions',
      items: [&apos;Zapier', &apos;Workato', &apos;Integromat', &apos;Tray.io', &apos;Celigo']
    },
    {
      category: &apos;Data Integration Tools',
      items: [&apos;Talend', &apos;Fivetran', &apos;Stitch', &apos;Matillion', &apos;Airbyte']
    }
  ];

  const benefits = [
    &apos;Streamlined business processes and workflows',
    &apos;Elimination of data silos and improved data quality',
    &apos;Enhanced operational efficiency and productivity',
    &apos;Real-time data visibility across the organization',
    &apos;Reduced manual data entry and associated errors',
    &apos;Improved customer experience through connected systems',
    &apos;Faster time-to-market for new initiatives'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;Technology Integration&quot; 
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
            className=&quot;text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Technology Integration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Connect your business systems and applications to create a unified technology ecosystem that drives efficiency and innovation.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Seamless Integration for Business Success</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today&apos;s complex technology landscape, businesses rely on numerous applications and systems to operate effectively. However, when these systems don&apos;t communicate properly, inefficiencies arise, data becomes siloed, and opportunities are missed.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our technology integration services help you connect your critical business systems—from CRM and ERP to marketing automation and custom applications—creating a cohesive ecosystem where data flows seamlessly and processes run efficiently.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                Whether you need to integrate cloud applications, connect legacy systems with modern platforms, or build custom middleware solutions, our team of integration experts will design and implement solutions that align with your business objectives and technical requirements.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Connected systems&quot; 
                fill 
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Types Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Integration Solutions</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of integration services to connect your business systems and enable seamless data flow.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationTypes.map((type, index) => (
              <motion.div 
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className=&quot;text-primary-blue mb-4 text-3xl">
                  {React.createElement(type.icon)}
                </div>
                <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white">{type.title}</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Integration Approach</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver successful integration projects that meet your business needs.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { 
                phase: &apos;Discovery', 
                description: &apos;We analyze your existing systems, integration requirements, and business objectives to develop a comprehensive integration strategy.&apos;,
                number: &apos;01'
              },
              { 
                phase: &apos;Design', 
                description: &apos;Our team designs the integration architecture, data mapping, and transformation rules to ensure seamless data flow between systems.&apos;,
                number: &apos;02'
              },
              { 
                phase: &apos;Implementation', 
                description: &apos;We build and deploy the integration solution using the most appropriate technologies and best practices for your environment.&apos;,
                number: &apos;03'
              },
              { 
                phase: &apos;Support', 
                description: &apos;Our ongoing support ensures your integrations continue to function optimally as your business and technology landscape evolves.&apos;,
                number: &apos;04'
              }
            ].map((phase, index) => (
              <motion.div 
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md relative"
              >
                <div className=&quot;absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-xl">
                  {phase.number}
                </div>
                <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white mt-4">{phase.phase}</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Technologies We Work With</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across a wide range of integration platforms and technologies.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className=&quot;text-xl font-semibold mb-4 text-primary-navy dark:text-white">{tech.category}</h3>
                <div className=&quot;flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className=&quot;bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Technology Integration</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing well-designed integration solutions delivers numerous advantages for your business.
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
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Retail Chain Integration</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;Retail store&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  A national retail chain with 50+ locations was struggling with disconnected systems for inventory, POS, e-commerce, and customer management. We implemented a comprehensive integration solution that:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Created real-time inventory visibility across all channels</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Reduced order processing time by 75%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Enabled unified customer profiles across all touchpoints</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Decreased manual data entry by 90%</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;The integration solution provided by TAS has transformed our operations. We now have a single view of inventory, orders, and customers across all channels, which has significantly improved our efficiency and customer experience.&quot; - CIO
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Connect Your Business Systems?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our technology integration solutions can help you create a unified ecosystem that drives efficiency and innovation.
          </p>
          <div className=&quot;flex flex-wrap justify-center gap-4">
            <AnimatedButton className=&quot;bg-white text-primary-blue hover:bg-primary-light border-none shadow-md">
              <a href=&quot;/contact">Request a Consultation</a>
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
