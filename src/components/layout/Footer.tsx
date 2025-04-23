'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-primary-navy dark:bg-primary-slate text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Company Info */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">
            Technology Alliance Solutions, INC.
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Enterprise technology solutions and consulting services specializing in CRM, integration, and marketing automation.
          </p>
          <div className="pt-2">
            <div className="flex items-center space-x-2 text-sm mb-2">
              <FaMapMarkerAlt className="text-primary-blue" />
              <span>3355 Lenox Rd NE, Suite 1000, Atlanta, GA 30326</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <FaPhone className="text-primary-blue" />
              <span>(404) 205-8405</span>
            </div>
          </div>
          <div className="flex space-x-4 pt-2">
            <motion.a
              href="https://linkedin.com/company/technology-alliance-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/tech_alliance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href="https://facebook.com/technologyalliancesolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="https://instagram.com/tech_alliance_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="https://youtube.com/c/technologyalliancesolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Services Links */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/crm" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                CRM Implementation
              </Link>
            </li>
            <li>
              <Link href="/services/technology-integration" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Technology Integration
              </Link>
            </li>
            <li>
              <Link href="/services/marketing-automation" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Marketing Automation
              </Link>
            </li>
            <li>
              <Link href="/services/integration" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Custom Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/technologies/compare" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                System Optimization
              </Link>
            </li>
            <li>
              <Link href="/services/technologies" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Technology Consulting
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/resources" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Resource Center
              </Link>
            </li>
            <li>
              <Link href="/resources/document-creation" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Document Creation
              </Link>
            </li>
            <li>
              <Link href="/affiliate-tools" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Affiliate Tools
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Blog & Articles
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">Subscribe to Updates</h3>
          <p className="text-sm text-gray-300">
            Stay informed about our latest AI tools, marketing strategies, and industry insights.
          </p>
          <form className="space-y-2">
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-primary-slate border border-primary-slate focus:outline-none focus:ring-2 focus:ring-primary-blue text-white placeholder-gray-500"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <div className="bg-primary-slate py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Technology Alliance Solutions, INC. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-4 mt-2 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href="/privacy" className="hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-primary-blue transition-colors">
              Sitemap
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
