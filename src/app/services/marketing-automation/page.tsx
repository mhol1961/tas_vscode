&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaChartLine, FaEnvelope, FaRobot, FaChartPie, FaUserFriends, FaTools, FaCheckCircle } from &apos;react-icons/fa';

export default function MarketingAutomationPage() {
  const platforms = [
    {
      name: &apos;Marketo',
      description: &apos;Enterprise-grade marketing automation platform that helps marketers master the art and science of digital marketing.&apos;,
      features: [&apos;Email Marketing', &apos;Lead Management', &apos;Consumer Marketing', &apos;Customer Base Marketing', &apos;Mobile Marketing']
    },
    {
      name: &apos;HubSpot Marketing Hub',
      description: &apos;All-in-one inbound marketing software that helps you attract visitors, convert leads, and close customers.&apos;,
      features: [&apos;Email Marketing', &apos;Marketing Automation', &apos;Lead Generation', &apos;Analytics', &apos;Social Media']
    },
    {
      name: &apos;Pardot (Salesforce)&apos;,
      description: &apos;B2B marketing automation by Salesforce that helps marketing and sales teams maximize efficiency and increase revenue.&apos;,
      features: [&apos;Email Marketing', &apos;Lead Management', &apos;Sales Alignment', &apos;ROI Reporting', &apos;Lifecycle Reporting']
    },
    {
      name: &apos;ClickDimensions',
      description: &apos;Marketing automation solution made exclusively for Microsoft Dynamics 365, designed to help marketers create and implement effective marketing campaigns.&apos;,
      features: [&apos;Email Marketing', &apos;Web Intelligence', &apos;Campaign Automation', &apos;Social Marketing', &apos;Event Management']
    }
  ];

  const services = [
    {
      title: &apos;Email Marketing Automation',
      description: &apos;Design and implement sophisticated email workflows that nurture leads, engage customers, and drive conversions.&apos;,
      icon: FaEnvelope
    },
    {
      title: &apos;Lead Scoring & Nurturing',
      description: &apos;Develop intelligent lead scoring models and nurturing campaigns that identify and cultivate your most promising prospects.&apos;,
      icon: FaUserFriends
    },
    {
      title: &apos;Campaign Management',
      description: &apos;Create, execute, and optimize multi-channel marketing campaigns that deliver measurable results and ROI.&apos;,
      icon: FaChartLine
    },
    {
      title: &apos;Marketing Analytics',
      description: &apos;Implement comprehensive analytics solutions that provide actionable insights into campaign performance and customer behavior.&apos;,
      icon: FaChartPie
    },
    {
      title: &apos;Platform Implementation',
      description: &apos;Expert setup and configuration of leading marketing automation platforms tailored to your specific business needs.&apos;,
      icon: FaTools
    },
    {
      title: &apos;AI-Powered Personalization',
      description: &apos;Leverage artificial intelligence to deliver hyper-personalized content and experiences that resonate with your audience.&apos;,
      icon: FaRobot
    }
  ];

  const benefits = [
    &apos;Increased marketing efficiency and productivity',
    &apos;Enhanced lead quality and conversion rates',
    &apos;Improved marketing and sales alignment',
    &apos;Better customer segmentation and targeting',
    &apos;Personalized customer journeys at scale',
    &apos;Data-driven marketing decisions',
    &apos;Measurable marketing ROI'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;Marketing Automation&quot; 
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
            Marketing Automation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Streamline your marketing efforts, nurture leads, and drive conversions with powerful automation solutions tailored to your business.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Marketing dashboard&quot; 
                fill 
                className=&quot;object-cover&quot;
              />
            </div>
            <div className=&quot;md:w-1/2 order-1 md:order-2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Accelerate Your Marketing Impact</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today&apos;s digital landscape, marketing teams are expected to do more with less while delivering exceptional results. Marketing automation empowers you to scale your efforts, personalize customer experiences, and measure the impact of your campaigns with precision.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our marketing automation solutions help you streamline repetitive tasks, nurture leads through personalized journeys, and gain valuable insights into customer behavior and campaign performance.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                Whether you&apos;re just getting started with marketing automation or looking to optimize your existing setup, our team of experts will help you implement strategies and technologies that drive measurable business results.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Marketing Automation Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive marketing automation services to help you engage customers, generate leads, and drive revenue growth.
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

      {/* Platforms Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Marketing Automation Platforms</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across leading marketing automation platforms, helping you select and implement the right solution for your business.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
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

      {/* Customer Journey Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">The Customer Journey</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our marketing automation solutions help you guide prospects through every stage of the customer journey.
            </p>
          </div>
          
          <div className=&quot;relative max-w-4xl mx-auto">
            {/* Journey Path Line */}
            <div className=&quot;absolute top-1/2 left-0 right-0 h-1 bg-primary-blue/30 dark:bg-primary-blue/20 -translate-y-1/2 hidden md:block"></div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { stage: &apos;Awareness', description: &apos;Attract prospects with targeted content and campaigns', icon: &apos;🔍&apos; },
                { stage: &apos;Consideration', description: &apos;Nurture leads with personalized content and automated workflows', icon: &apos;🤔&apos; },
                { stage: &apos;Decision', description: &apos;Convert prospects with timely, relevant offers and information', icon: &apos;✅&apos; },
                { stage: &apos;Retention', description: &apos;Delight customers with ongoing engagement and support', icon: &apos;❤️&apos; }
              ].map((step, index) => (
                <motion.div 
                  key={step.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md relative z-10"
                >
                  <div className=&quot;absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl hidden md:flex">
                    {index + 1}
                  </div>
                  <div className=&quot;text-4xl mb-4 text-center">{step.icon}</div>
                  <h3 className=&quot;text-xl font-semibold mb-2 text-primary-navy dark:text-white text-center">{step.stage}</h3>
                  <p className=&quot;text-primary-slate dark:text-gray-300 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Marketing Automation</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing the right marketing automation solution delivers numerous advantages for your business.
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
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: B2B Technology Company</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;Technology company&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  A mid-sized B2B technology company was struggling with lead generation and nurturing. We implemented a comprehensive marketing automation solution that:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Increased qualified leads by 67% in the first quarter</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Improved email engagement rates by 43%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Reduced cost per lead by 28%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Shortened sales cycle by 22%</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;The marketing automation solution implemented by TAS has transformed our lead generation and nurturing processes. We&apos;re now able to deliver personalized experiences at scale and see a clear ROI from our marketing efforts.&quot; - Marketing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our marketing automation solutions can help you engage customers, generate leads, and drive revenue growth.
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
