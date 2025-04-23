&apos;use client';

import React from &apos;react';
import PageLayout from &apos;@/components/layout/PageLayout';
import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import { FaHome, FaTools, FaInfoCircle, FaLaptopCode, FaBookOpen, FaFileAlt } from &apos;react-icons/fa';

const Sitemap = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageLayout>
      <div className=&quot;max-w-5xl mx-auto">
        <motion.div
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
          variants={fadeIn}
          className=&quot;mb-12"
        >
          <h1 className=&quot;text-3xl md:text-4xl font-bold mb-6 text-primary-navy dark:text-white">
            Sitemap
          </h1>
          <p className=&quot;text-primary-slate dark:text-white/80 mb-4">
            Find everything on our website with this comprehensive sitemap.
          </p>
          <div className=&quot;w-20 h-1 bg-primary-blue mb-8"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
          className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Main Navigation */}
          <motion.div variants={fadeIn} className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className=&quot;flex items-center mb-4">
              <FaHome className=&quot;text-primary-blue mr-3 text-xl&quot; />
              <h2 className=&quot;text-xl font-bold text-primary-navy dark:text-white">Main Navigation</h2>
            </div>
            <ul className=&quot;space-y-2">
              <li>
                <Link href=&quot;/&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href=&quot;/services&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href=&quot;/about&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href=&quot;/why-choose-us&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href=&quot;/case-studies&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href=&quot;/blog&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href=&quot;/contact&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn} className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className=&quot;flex items-center mb-4">
              <FaTools className=&quot;text-primary-blue mr-3 text-xl&quot; />
              <h2 className=&quot;text-xl font-bold text-primary-navy dark:text-white">Our Services</h2>
            </div>
            <ul className=&quot;space-y-2">
              <li>
                <Link href=&quot;/services/crm&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/technology-integration&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Technology Integration
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/marketing-automation&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Marketing Automation
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/integration&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/technologies/compare&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  System Optimization
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/technologies&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={fadeIn} className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className=&quot;flex items-center mb-4">
              <FaLaptopCode className=&quot;text-primary-blue mr-3 text-xl&quot; />
              <h2 className=&quot;text-xl font-bold text-primary-navy dark:text-white">Technologies</h2>
            </div>
            <ul className=&quot;space-y-2">
              <li>
                <Link href=&quot;/services/technologies/crm&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  CRM Platforms
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/technologies/integration&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Integration Tools
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/technologies/marketing&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Marketing Platforms
                </Link>
              </li>
              <li>
                <Link href=&quot;/services/technologies/compare&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Compare Solutions
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeIn} className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className=&quot;flex items-center mb-4">
              <FaFileAlt className=&quot;text-primary-blue mr-3 text-xl&quot; />
              <h2 className=&quot;text-xl font-bold text-primary-navy dark:text-white">Resources</h2>
            </div>
            <ul className=&quot;space-y-2">
              <li>
                <Link href=&quot;/resources&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Resource Center
                </Link>
              </li>
              <li>
                <Link href=&quot;/resources/document-creation&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Document Creation
                </Link>
              </li>
              <li>
                <Link href=&quot;/affiliate-tools&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Affiliate Tools
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Blog & Case Studies */}
          <motion.div variants={fadeIn} className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className=&quot;flex items-center mb-4">
              <FaBookOpen className=&quot;text-primary-blue mr-3 text-xl&quot; />
              <h2 className=&quot;text-xl font-bold text-primary-navy dark:text-white">Blog & Case Studies</h2>
            </div>
            <ul className=&quot;space-y-2">
              <li>
                <Link href=&quot;/blog&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  All Blog Articles
                </Link>
              </li>
              <li>
                <Link href=&quot;/case-studies&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  All Case Studies
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company & Legal */}
          <motion.div variants={fadeIn} className=&quot;bg-white dark:bg-primary-navy/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className=&quot;flex items-center mb-4">
              <FaInfoCircle className=&quot;text-primary-blue mr-3 text-xl&quot; />
              <h2 className=&quot;text-xl font-bold text-primary-navy dark:text-white">Company & Legal</h2>
            </div>
            <ul className=&quot;space-y-2">
              <li>
                <Link href=&quot;/about&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href=&quot;/why-choose-us&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href=&quot;/contact&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href=&quot;/privacy&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href=&quot;/terms&quot; className=&quot;text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          variants={fadeIn}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
          className=&quot;mt-12 text-center"
        >
          <p className=&quot;text-primary-slate dark:text-white/80 mb-6">
            Can&apos;t find what you&apos;re looking for? Feel free to contact us directly.
          </p>
          <Link href=&quot;/contact&quot; className=&quot;inline-block px-6 py-3 bg-primary-blue text-white font-medium rounded-lg hover:bg-primary-blue/90 transition-colors">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Sitemap;
