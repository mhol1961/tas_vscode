&apos;use client';

import PageLayout from &apos;@/components/layout/PageLayout';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import { FaLightbulb, FaHandshake, FaChartLine, FaUsers } from &apos;react-icons/fa';

export default function AboutPage() {
  const teamMembers = [
    {
      name: &apos;Sarah Johnson',
      title: &apos;CEO & Founder',
      bio: &apos;With over 15 years of experience in CRM implementation and strategy, Sarah founded TAS to help businesses leverage technology for growth.&apos;,
      image: &apos;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: &apos;Michael Chen',
      title: &apos;CTO',
      bio: &apos;Michael brings 12+ years of software engineering expertise, specializing in integration solutions and marketing automation platforms.&apos;,
      image: &apos;https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: &apos;Priya Patel',
      title: &apos;Director of Client Services',
      bio: &apos;Priya ensures every client receives exceptional service and results, with deep expertise in CRM strategy and implementation.&apos;,
      image: &apos;https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: &apos;James Wilson',
      title: &apos;Marketing Automation Lead',
      bio: &apos;James specializes in creating sophisticated marketing automation workflows that drive engagement and conversion.&apos;,
      image: &apos;https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className=&quot;relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className=&quot;absolute inset-0 z-0 opacity-20">
          <Image 
            src=&quot;https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80&quot; 
            alt=&quot;Team collaboration&quot; 
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
            About TAS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=&quot;text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            We&apos;re a team of CRM and marketing automation experts dedicated to helping businesses transform their customer relationships and drive growth.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <div className=&quot;flex flex-col md:flex-row items-center gap-12">
            <div className=&quot;md:w-1/2">
              <h2 className=&quot;text-3xl font-bold mb-6 text-primary-navy dark:text-white">Our Story</h2>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                Founded in 2015, TAS began with a simple mission: to help businesses leverage CRM and marketing automation technologies to their fullest potential. We saw too many companies investing in powerful tools without the strategy or expertise to maximize their return on investment.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300 mb-4">
                What started as a boutique consultancy has grown into a comprehensive technology advisory firm serving mid-to-large enterprises across industries. Our team combines deep technical knowledge with strategic business acumen to deliver solutions that drive measurable results.
              </p>
              <p className=&quot;text-lg text-primary-slate dark:text-gray-300">
                Today, we&apos;re proud to be trusted advisors to over 200 companies worldwide, helping them transform their customer relationships, streamline operations, and accelerate growth through technology.
              </p>
            </div>
            <div className=&quot;md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src=&quot;https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&quot; 
                alt=&quot;TAS team meeting&quot; 
                fill 
                className=&quot;object-cover&quot;
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection className=&quot;py-16 bg-slate-100 dark:bg-primary-navy">
        <div className=&quot;container mx-auto px-4">
          <h2 className=&quot;text-3xl font-bold mb-12 text-center text-primary-navy dark:text-white">Our Values</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className=&quot;bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className=&quot;text-4xl text-primary-blue mb-4 flex justify-center">
                <FaLightbulb />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white">Innovation</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            <div className=&quot;bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className=&quot;text-4xl text-primary-blue mb-4 flex justify-center">
                <FaHandshake />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white">Partnership</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                We work as an extension of your team, committed to your success and building lasting relationships.
              </p>
            </div>
            <div className=&quot;bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className=&quot;text-4xl text-primary-blue mb-4 flex justify-center">
                <FaChartLine />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white">Results-Driven</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                We focus on delivering measurable outcomes and tangible business value with every engagement.
              </p>
            </div>
            <div className=&quot;bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className=&quot;text-4xl text-primary-blue mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3 text-primary-navy dark:text-white">Expertise</h3>
              <p className=&quot;text-primary-slate dark:text-gray-300">
                Our team brings deep domain knowledge and technical skill to solve your most complex challenges.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-slate">
        <div className=&quot;container mx-auto px-4">
          <h2 className=&quot;text-3xl font-bold mb-12 text-center text-primary-navy dark:text-white">Our Leadership Team</h2>
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-slate-50 dark:bg-primary-navy/50 rounded-lg overflow-hidden shadow-md"
              >
                <div className=&quot;relative h-64 w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className=&quot;object-cover&quot;
                  />
                </div>
                <div className=&quot;p-6">
                  <h3 className=&quot;text-xl font-semibold mb-1 text-primary-navy dark:text-white">{member.name}</h3>
                  <p className=&quot;text-primary-blue font-medium mb-3">{member.title}</p>
                  <p className=&quot;text-primary-slate dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className=&quot;py-16 bg-primary-blue text-white">
        <div className=&quot;container mx-auto px-4 text-center">
          <h2 className=&quot;text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className=&quot;text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how our team can help you leverage CRM and marketing automation to drive growth and enhance customer relationships.
          </p>
          <motion.a 
            href=&quot;/contact&quot;
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=&quot;inline-block bg-white text-primary-blue font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
