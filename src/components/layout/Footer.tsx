&apos;use client';

import Link from &apos;next/link';
import { motion } from &apos;framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from &apos;react-icons/fa';

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
    <footer className=&quot;bg-primary-navy dark:bg-primary-slate text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      {/* Main Footer Content */}
      <motion.div
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10&quot;
        variants={containerVariants}
        initial=&quot;hidden&quot;
        whileInView=&quot;visible&quot;
        viewport={{ once: true, margin: &quot;-100px&quot; }}
      >
        {/* Company Info */}
        <motion.div className=&quot;space-y-4&quot; variants={itemVariants}>
          <h3 className=&quot;text-xl font-bold text-primary-blue">
            Technology Alliance Solutions, INC.
          </h3>
          <p className=&quot;text-sm text-gray-300 leading-relaxed">
            Enterprise technology solutions and consulting services specializing in CRM, integration, and marketing automation.
          </p>
          <div className=&quot;pt-2">
            <div className=&quot;flex items-center space-x-2 text-sm mb-2">
              <FaMapMarkerAlt className=&quot;text-primary-blue&quot; />
              <span>3355 Lenox Rd NE, Suite 1000, Atlanta, GA 30326</span>
            </div>
            <div className=&quot;flex items-center space-x-2 text-sm mb-2">
              <FaPhone className=&quot;text-primary-blue&quot; />
              <span>(404) 205-8405</span>
            </div>
          </div>
          <div className=&quot;flex space-x-4 pt-2">
            <motion.a
              href=&quot;https://linkedin.com/company/technology-alliance-solutions&quot;
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              className=&quot;text-primary-blue hover:text-white transition-colors&quot;
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label=&quot;LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href=&quot;https://twitter.com/tech_alliance&quot;
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              className=&quot;text-primary-blue hover:text-white transition-colors&quot;
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label=&quot;Twitter"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href=&quot;https://facebook.com/technologyalliancesolutions&quot;
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              className=&quot;text-primary-blue hover:text-white transition-colors&quot;
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label=&quot;Facebook"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href=&quot;https://instagram.com/tech_alliance_solutions&quot;
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              className=&quot;text-primary-blue hover:text-white transition-colors&quot;
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label=&quot;Instagram"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href=&quot;https://youtube.com/c/technologyalliancesolutions&quot;
              target=&quot;_blank&quot;
              rel=&quot;noopener noreferrer&quot;
              className=&quot;text-primary-blue hover:text-white transition-colors&quot;
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label=&quot;YouTube"
            >
              <FaYoutube size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Services Links */}
        <motion.div className=&quot;space-y-4&quot; variants={itemVariants}>
          <h3 className=&quot;text-xl font-bold text-primary-blue">Our Services</h3>
          <ul className=&quot;space-y-2">
            <li>
              <Link href=&quot;/services/crm&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                CRM Implementation
              </Link>
            </li>
            <li>
              <Link href=&quot;/services/technology-integration&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Technology Integration
              </Link>
            </li>
            <li>
              <Link href=&quot;/services/marketing-automation&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Marketing Automation
              </Link>
            </li>
            <li>
              <Link href=&quot;/services/integration&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Custom Solutions
              </Link>
            </li>
            <li>
              <Link href=&quot;/services/technologies/compare&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                System Optimization
              </Link>
            </li>
            <li>
              <Link href=&quot;/services/technologies&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Technology Consulting
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div className=&quot;space-y-4&quot; variants={itemVariants}>
          <h3 className=&quot;text-xl font-bold text-primary-blue">Resources</h3>
          <ul className=&quot;space-y-2">
            <li>
              <Link href=&quot;/resources&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Resource Center
              </Link>
            </li>
            <li>
              <Link href=&quot;/resources/document-creation&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Document Creation
              </Link>
            </li>
            <li>
              <Link href=&quot;/affiliate-tools&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Affiliate Tools
              </Link>
            </li>
            <li>
              <Link href=&quot;/case-studies&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href=&quot;/blog&quot; className=&quot;text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Blog & Articles
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div className=&quot;space-y-4&quot; variants={itemVariants}>
          <h3 className=&quot;text-xl font-bold text-primary-blue">Subscribe to Updates</h3>
          <p className=&quot;text-sm text-gray-300">
            Stay informed about our latest AI tools, marketing strategies, and industry insights.
          </p>
          <form className=&quot;space-y-2">
            <div>
              <input
                type=&quot;email&quot;
                placeholder=&quot;Your email address&quot;
                className=&quot;w-full px-4 py-2 rounded-md bg-primary-slate border border-primary-slate focus:outline-none focus:ring-2 focus:ring-primary-blue text-white placeholder-gray-500&quot;
                required
              />
            </div>
            <motion.button
              type=&quot;submit&quot;
              className=&quot;w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors&quot;
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <div className=&quot;bg-primary-slate py-4 relative z-10">
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Technology Alliance Solutions, INC. All rights reserved.
          </motion.p>
          <motion.div
            className=&quot;flex space-x-4 mt-2 md:mt-0&quot;
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href=&quot;/privacy&quot; className=&quot;hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href=&quot;/terms&quot; className=&quot;hover:text-primary-blue transition-colors">
              Terms of Service
            </Link>
            <Link href=&quot;/sitemap&quot; className=&quot;hover:text-primary-blue transition-colors">
              Sitemap
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
