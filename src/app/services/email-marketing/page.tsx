&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaEnvelope, FaChartLine, FaUsers, FaRobot, FaLayerGroup, FaFilter, FaCheckCircle } from &apos;react-icons/fa';

export default function EmailMarketingPage() {
  const services = [
    {
      title: &apos;Campaign Design & Creation',
      description: &apos;Eye-catching, responsive email templates and compelling content that drives engagement and conversions.&apos;,
      icon: FaEnvelope
    },
    {
      title: &apos;Audience Segmentation',
      description: &apos;Strategic division of your contact list based on demographics, behavior, and preferences for targeted messaging.&apos;,
      icon: FaUsers
    },
    {
      title: &apos;Automation Workflows',
      description: &apos;Sophisticated email sequences triggered by specific actions, time intervals, or customer behaviors.&apos;,
      icon: FaRobot
    },
    {
      title: &apos;A/B Testing',
      description: &apos;Data-driven optimization of subject lines, content, and designs to maximize open rates and conversions.&apos;,
      icon: FaLayerGroup
    },
    {
      title: &apos;Performance Analytics',
      description: &apos;Comprehensive reporting on campaign performance with actionable insights for continuous improvement.&apos;,
      icon: FaChartLine
    },
    {
      title: &apos;List Management & Growth',
      description: &apos;Strategic approaches to building, cleaning, and maintaining high-quality email lists for optimal deliverability.&apos;,
      icon: FaFilter
    }
  ];

  const benefits = [
    &apos;Higher engagement rates with your audience',
    &apos;Increased conversion rates and ROI',
    &apos;Improved customer retention and loyalty',
    &apos;Personalized communication at scale',
    &apos;Automated customer journeys and nurturing',
    &apos;Valuable data insights for business decisions',
    &apos;Cost-effective marketing channel'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;Email Marketing&quot; 
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
            Email Marketing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Drive revenue and nurture customer relationships with sophisticated email campaigns, automation, and audience segmentation.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic Email Marketing</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Email marketing remains one of the most effective channels for engaging with your audience and driving conversions. Our email marketing services help you create and manage targeted campaigns that deliver measurable results.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                We combine creative design, compelling content, and data-driven strategy to develop email campaigns that resonate with your audience and support your business objectives.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                From one-time promotional campaigns to sophisticated automation workflows, our comprehensive approach covers every aspect of effective email marketing, helping you build stronger customer relationships and drive more revenue.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Email marketing dashboard&quot; 
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
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Email Marketing Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive email marketing solutions that cover every aspect of creating and managing effective campaigns.
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

      {/* Automation Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Email Automation That Drives Results</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our advanced automation workflows nurture leads and customers throughout their journey with your brand.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
            >
              <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Welcome Series</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                Introduce new subscribers to your brand with a strategic sequence of emails that build trust and encourage first purchases.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
            >
              <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Abandoned Cart Recovery</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                Automatically remind customers about products they left behind, with personalized incentives to complete their purchase.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
            >
              <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">Re-Engagement Campaigns</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                Revive inactive subscribers with targeted content and special offers designed to rebuild engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Email Marketing</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Strategic email marketing delivers measurable advantages for your business.
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
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: E-commerce Retailer</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;E-commerce shopping bags&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  An online fashion retailer was struggling with low email engagement and poor conversion rates. We implemented a comprehensive email marketing strategy that:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Increased open rates from 15% to 32% through improved segmentation</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Boosted click-through rates by 78% with enhanced design and content</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Recovered 23% of abandoned carts with automated workflows</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Generated a 34% increase in email-attributed revenue within 3 months</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;Technology Alliance Solutions transformed our email marketing from a basic newsletter to a sophisticated revenue driver. Their strategic approach and automation expertise has significantly improved our customer engagement and sales.&quot; - Marketing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our email marketing solutions can help you engage your audience and drive more revenue.
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
