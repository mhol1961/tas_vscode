&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaUsers, FaChartLine, FaCogs, FaDatabase, FaLaptopCode, FaClipboardCheck, FaCheckCircle } from &apos;react-icons/fa';

export default function CrmSolutionsPage() {
  const crmPlatforms = [
    {
      name: &apos;Salesforce',
      description: &apos;The world\'s #1 CRM platform, offering a complete suite of cloud-based applications for sales, service, marketing, and more.&apos;,
      features: [&apos;Sales Cloud', &apos;Service Cloud', &apos;Marketing Cloud', &apos;Commerce Cloud', &apos;Analytics Cloud']
    },
    {
      name: &apos;Microsoft Dynamics 365',
      description: &apos;A powerful suite of business applications that combines CRM and ERP capabilities to provide end-to-end business solutions.&apos;,
      features: [&apos;Sales', &apos;Customer Service', &apos;Field Service', &apos;Marketing', &apos;Finance & Operations']
    },
    {
      name: &apos;HubSpot',
      description: &apos;An all-in-one inbound marketing, sales, and service platform that helps businesses attract visitors, convert leads, and close customers.&apos;,
      features: [&apos;Marketing Hub', &apos;Sales Hub', &apos;Service Hub', &apos;CMS Hub', &apos;Operations Hub']
    }
  ];

  const services = [
    {
      title: &apos;CRM Implementation',
      description: &apos;End-to-end implementation services to set up your CRM platform for success, from initial planning to deployment and beyond.&apos;,
      icon: FaLaptopCode
    },
    {
      title: &apos;Data Migration',
      description: &apos;Seamless transfer of your valuable customer data from legacy systems to your new CRM platform with data cleansing and validation.&apos;,
      icon: FaDatabase
    },
    {
      title: &apos;Custom Development',
      description: &apos;Tailored solutions that extend your CRM functionality to meet your unique business requirements and processes.&apos;,
      icon: FaCogs
    },
    {
      title: &apos;Integration Services',
      description: &apos;Connect your CRM with other business systems to create a unified ecosystem that enhances productivity and data flow.&apos;,
      icon: FaChartLine
    },
    {
      title: &apos;Training & Adoption',
      description: &apos;Comprehensive training programs and adoption strategies to ensure your team maximizes the value of your CRM investment.&apos;,
      icon: FaUsers
    },
    {
      title: &apos;Ongoing Support',
      description: &apos;Continuous support and optimization services to keep your CRM running smoothly and evolving with your business needs.&apos;,
      icon: FaClipboardCheck
    }
  ];

  const benefits = [
    &apos;Improved customer relationships and satisfaction',
    &apos;Enhanced sales performance and forecasting',
    &apos;Streamlined customer service operations',
    &apos;Better marketing campaign effectiveness',
    &apos;Increased team collaboration and productivity',
    &apos;Data-driven decision making',
    &apos;Scalable growth for your business'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;CRM Solutions&quot; 
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
            CRM Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Transform your customer relationships with tailored CRM strategies and implementations that drive growth and enhance customer experiences.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Elevate Your Customer Relationships</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today&apos;s competitive business landscape, managing customer relationships effectively is critical to success. Our CRM solutions help you centralize customer data, streamline processes, and gain valuable insights to deliver exceptional customer experiences.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Whether you&apos;re implementing a new CRM system or optimizing an existing one, our team of experts will guide you through every step of the journey, ensuring your CRM strategy aligns with your business objectives and delivers measurable results.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                We work with leading CRM platforms including Salesforce, Microsoft Dynamics 365, and HubSpot, tailoring our approach to your specific needs and industry requirements.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;CRM dashboard&quot; 
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
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our CRM Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of CRM services to help you maximize the value of your customer relationship management investment.
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

      {/* CRM Platforms Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">CRM Platforms We Support</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across leading CRM platforms, helping you select and implement the right solution for your business needs.
            </p>
          </div>
          
          <div className=&quot;space-y-8">
            {crmPlatforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
              >
                <h3 className=&quot;text-2xl font-semibold mb-3 text-primary-navy dark:text-white">{platform.name}</h3>
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">{platform.description}</p>
                <div className=&quot;flex flex-wrap gap-2">
                  {platform.features.map((feature) => (
                    <span key={feature} className=&quot;bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
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
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our CRM Solutions</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing the right CRM solution with our expert guidance delivers numerous advantages for your business.
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
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Global Manufacturing Company</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;Manufacturing facility&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  A global manufacturing company with 500+ employees was struggling with disconnected systems and poor visibility into their sales pipeline. We implemented a customized Salesforce solution that:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Increased sales productivity by 35%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Reduced lead response time from 24 hours to 2 hours</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Improved forecast accuracy by 40%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Achieved 98% user adoption within 3 months</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;TAS transformed our sales operations with their CRM expertise. We now have complete visibility into our pipeline and can make data-driven decisions that have significantly improved our results.&quot; - VP of Sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Transform Your Customer Relationships?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our CRM solutions can help you achieve your business objectives and deliver exceptional customer experiences.
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
