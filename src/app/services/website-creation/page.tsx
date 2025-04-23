&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaLaptopCode, FaShoppingCart, FaSearch, FaRobot, FaTools, FaMobile, FaCheckCircle, FaShieldAlt } from &apos;react-icons/fa';

export default function WebsiteCreationPage() {
  const services = [
    {
      title: &apos;SEO-Optimized Websites',
      description: &apos;Custom websites built with search engine visibility in mind from the ground up, ensuring maximum organic traffic.&apos;,
      icon: FaSearch
    },
    {
      title: &apos;E-Commerce Development',
      description: &apos;Powerful online stores with secure payment processing, inventory management, and optimized checkout experiences.&apos;,
      icon: FaShoppingCart
    },
    {
      title: &apos;Responsive Design',
      description: &apos;Mobile-first websites that provide an exceptional user experience across all devices and screen sizes.&apos;,
      icon: FaMobile
    },
    {
      title: &apos;Custom Web Applications',
      description: &apos;Tailored web applications that automate processes and provide unique functionality for your business needs.&apos;,
      icon: FaLaptopCode
    },
    {
      title: &apos;AI-Powered Experiences',
      description: &apos;Integration of chatbots, recommendation engines, and other AI tools to create intelligent, interactive websites.&apos;,
      icon: FaRobot
    },
    {
      title: &apos;Website Maintenance',
      description: &apos;Ongoing support, updates, and optimization to keep your website secure, fast, and up-to-date.&apos;,
      icon: FaTools
    }
  ];

  const maintenancePlans = [
    {
      title: &apos;Basic Maintenance',
      features: [
        &apos;Monthly security updates',
        &apos;Regular backups',
        &apos;Uptime monitoring',
        &apos;Basic performance optimization',
        &apos;Email support'
      ]
    },
    {
      title: &apos;Advanced Maintenance',
      features: [
        &apos;All Basic features',
        &apos;Weekly security scans',
        &apos;Content updates (2 hours/month)&apos;,
        &apos;Technical SEO monitoring',
        &apos;Performance optimization',
        &apos;Priority email & phone support'
      ]
    },
    {
      title: &apos;Full SEO + Chatbots',
      features: [
        &apos;All Advanced features',
        &apos;Monthly SEO audits & updates',
        &apos;AI chatbot integration & management',
        &apos;Content updates (5 hours/month)&apos;,
        &apos;Analytics reports with insights',
        &apos;Conversion rate optimization',
        &apos;24/7 emergency support'
      ]
    }
  ];

  const benefits = [
    &apos;Professional brand representation online',
    &apos;Improved user experience and engagement',
    &apos;Higher search engine rankings',
    &apos;Increased conversion rates',
    &apos;Mobile-friendly functionality',
    &apos;Fast loading speeds',
    &apos;Secure and reliable performance'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;/images/photos/Abstract_laptop.png&quot; 
            alt=&quot;Website Creation&quot; 
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
            Website Creation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Build your digital presence with custom, SEO-optimized websites and e-commerce solutions designed for performance and conversions.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Custom Website Solutions</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Your website is often the first point of contact between your business and potential customers. Our website creation services help you make a powerful first impression with custom designs that reflect your brand identity and drive conversions.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                We build websites that are not only visually stunning but also technically sound—optimized for search engines, fast-loading, secure, and responsive across all devices.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                From simple informational sites to complex e-commerce platforms, our experienced development team handles projects of all sizes with a focus on creating exceptional user experiences that help you achieve your business goals.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Web development&quot; 
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
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Website Creation Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive website development solutions tailored to your specific business needs.
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

      {/* Maintenance Plans Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Website Maintenance Plans</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance packages.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <motion.div 
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md border-t-4 border-primary-blue hover:shadow-lg transition-shadow"
              >
                <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-4 text-center">{plan.title}</h3>
                <ul className=&quot;space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className=&quot;flex items-start">
                      <span className=&quot;text-primary-blue mr-2">✓</span>
                      <span className=&quot;text-primary-slate dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className=&quot;text-center mt-8">
            <AnimatedButton className=&quot;bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
              <a href=&quot;/contact">Request Custom Plan</a>
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Website Solutions</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              A professionally designed and developed website delivers numerous advantages for your business.
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
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Professional Services Firm</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;Business office&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  A professional services firm was struggling with an outdated website that was not generating leads or properly representing their brand. We built a new SEO-optimized website that:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Increased organic traffic by 156% within 6 months</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Improved mobile conversion rate by 83%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Reduced page load time from 5.2 seconds to 1.8 seconds</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Generated a 68% increase in qualified leads through the website</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;Technology Alliance Solutions delivered a website that far exceeded our expectations. Not only does it look amazing, but it&apos;s actually generating new business for us consistently. The SEO optimization and performance improvements have made a significant impact on our digital presence.&quot; - Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Security Feature */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <div className=&quot;text-primary-blue mb-4 text-4xl">
                <FaShieldAlt />
              </div>
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Built with Security in Mind</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Every website we build includes robust security measures to protect your business and your customers. Our security-first approach includes:
              </p>
              <ul className=&quot;space-y-3">
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">SSL encryption for all websites</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Regular security updates and patches</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Secure hosting with firewall protection</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Protection against common vulnerabilities</span>
                </li>
                <li className=&quot;flex items-start">
                  <span className=&quot;text-primary-blue mr-2">✓</span>
                  <span className=&quot;text-primary-slate dark:text-gray-300">Secure payment processing for e-commerce</span>
                </li>
              </ul>
            </div>
            <div className=&quot;md:w-1/2 relative h-[350px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Cybersecurity&quot; 
                fill 
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Create Your Dream Website?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how we can build a website that elevates your brand, engages your visitors, and drives your business forward.
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
