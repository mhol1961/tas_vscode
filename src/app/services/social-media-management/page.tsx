&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';
import { FaFacebook, FaInstagram, FaTwitter, FaChartLine, FaCogs, FaCalendarAlt, FaComments, FaCheckCircle, FaUsers } from &apos;react-icons/fa';

export default function SocialMediaManagementPage() {
  const platforms = [
    { name: &apos;Facebook', icon: FaFacebook },
    { name: &apos;Instagram', icon: FaInstagram },
    { name: &apos;TikTok', icon: FaUsers },
    { name: &apos;LinkedIn', icon: FaUsers },
    { name: &apos;Pinterest', icon: FaUsers },
    { name: &apos;YouTube', icon: FaUsers },
    { name: &apos;Rumble', icon: FaUsers },
    { name: &apos;X (Twitter)&apos;, icon: FaTwitter }
  ];

  const services = [
    {
      title: &apos;Content Creation',
      description: &apos;Custom, brand-aligned content creation for all your social media platforms, tailored to each channel\'s audience.&apos;,
      icon: FaUsers
    },
    {
      title: &apos;Strategic Posting',
      description: &apos;Data-driven posting schedules to maximize engagement and reach across all platforms.&apos;,
      icon: FaCalendarAlt
    },
    {
      title: &apos;Community Management',
      description: &apos;Active engagement with your audience through comments, messages, and mentions with prompt, personalized responses.&apos;,
      icon: FaComments
    },
    {
      title: &apos;Performance Analytics',
      description: &apos;Detailed reporting and analytics to track growth, engagement, and ROI of your social media efforts.&apos;,
      icon: FaChartLine
    },
    {
      title: &apos;Paid Campaign Management',
      description: &apos;Strategic planning, execution, and optimization of paid social media advertising campaigns.&apos;,
      icon: FaUsers
    },
    {
      title: &apos;Automation & Scheduling',
      description: &apos;Streamlined content scheduling and automation to maintain a consistent presence without constant manual posting.&apos;,
      icon: FaCogs
    }
  ];

  const benefits = [
    &apos;Increased brand awareness and visibility',
    &apos;Higher engagement with your target audience',
    &apos;Consistent posting schedule across all platforms',
    &apos;Professional content tailored to each platform',
    &apos;Time savings for your internal team',
    &apos;Data-driven strategy adjustments',
    &apos;Growth in followers and community size'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;Social Media Management&quot; 
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
            Social Media Management
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Grow your brand with strategic content, consistent posting, and engaging community management across all major platforms.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic Social Media Presence</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today&apos;s digital landscape, an effective social media presence is essential for business growth. Our social media management services help you build meaningful connections with your audience through strategic content, consistent posting, and active community engagement.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                We develop customized strategies for each platform, ensuring your content resonates with each unique audience while maintaining your brand voice and messaging across all channels.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                From content creation and scheduling to community management and analytics, our comprehensive approach handles every aspect of your social media presence, allowing you to focus on running your business.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;Social media dashboard&quot; 
                fill 
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Platforms Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Platforms We Manage</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We provide expert management across all major social media platforms, tailoring content and strategy to each platform&apos;s unique audience and features.
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className=&quot;bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className=&quot;text-primary-blue mb-3 text-3xl flex justify-center">
                  {React.createElement(platform.icon)}
                </div>
                <h3 className=&quot;text-lg font-semibold text-primary-navy dark:text-white">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Social Media Services</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive social media management solutions cover every aspect of your online presence.
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
                className=&quot;bg-slate-50 dark:bg-primary-slate p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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

      {/* Benefits Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;text-center mb-12">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Social Media Management</h2>
            <p className=&quot;text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Professional social media management delivers measurable advantages for your business.
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
            <h2 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Boutique Retail Brand</h2>
            <div className=&quot;flex flex-col md:flex-row gap-8">
              <div className=&quot;md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src=&quot;https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&quot; 
                  alt=&quot;Retail store front&quot; 
                  fill 
                  className=&quot;object-cover&quot;
                />
              </div>
              <div className=&quot;md:w-2/3">
                <p className=&quot;text-primary-slate dark:text-gray-300 mb-4">
                  A boutique fashion retailer with physical locations and an online store was struggling to maintain an effective social media presence. We implemented a comprehensive social media strategy that:
                </p>
                <ul className=&quot;space-y-2 mb-4">
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Increased Instagram followers by 215% in six months</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Improved engagement rates across all platforms by an average of 78%</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Generated a 43% increase in website traffic from social media channels</span>
                  </li>
                  <li className=&quot;flex items-start">
                    <span className=&quot;text-primary-blue mr-2">✓</span>
                    <span className=&quot;text-primary-slate dark:text-gray-300">Delivered a 28% increase in online sales attributed to social media</span>
                  </li>
                </ul>
                <p className=&quot;text-primary-slate dark:text-gray-300 italic">
                  &quot;The team at Technology Alliance Solutions transformed our social media presence. Their strategic approach and consistent content creation has significantly increased our online visibility and directly contributed to our sales growth.&quot; - Marketing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Transform Your Social Media Presence?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our social media management services can help you build a stronger brand and connect with your audience.
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
