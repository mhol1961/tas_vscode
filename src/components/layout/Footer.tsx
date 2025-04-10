'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
          <h3 className="text-2xl font-bold text-gradient-primary inline-block">TAS Solutions</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering businesses with innovative CRM solutions and cutting-edge marketing automation technologies.
          </p>
          <div className="pt-2">
            <div className="flex items-center space-x-2 text-sm mb-2">
              <FaMapMarkerAlt className="text-primary-blue" />
              <span>123 Business Avenue, Tech City</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mb-2">
              <FaPhone className="text-primary-blue" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <FaEnvelope className="text-primary-blue" />
              <span>info@tassolutions.com</span>
            </div>
          </div>
          <div className="flex space-x-4 pt-2">
            <motion.a 
              href="#" 
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-primary-blue hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Home
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/crm" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                CRM Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/marketing" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Marketing Automation
              </Link>
            </li>
            <li>
              <Link href="/services/integration" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Systems Integration
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                Consulting
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-bold text-primary-blue">Stay Updated</h3>
          <p className="text-sm text-gray-300">
            Subscribe to our newsletter for the latest updates and insights.
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
              className="w-full bg-primary-blue hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
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
            &copy; {new Date().getFullYear()} TAS Solutions. All rights reserved.
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
