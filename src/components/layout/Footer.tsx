import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-navy dark:bg-primary-slate text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-blue">TAS Solutions</h3>
          <p className="text-sm text-gray-300 dark:text-gray-200 leading-relaxed">
            Empowering businesses with innovative CRM solutions and cutting-edge marketing automation technologies.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-primary-blue hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-primary-blue hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-primary-blue hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-blue">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-blue">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/crm" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                CRM Solutions
              </Link>
            </li>
            <li>
              <Link href="/services/marketing" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                Marketing Automation
              </Link>
            </li>
            <li>
              <Link href="/services/integration" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                Systems Integration
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" className="text-gray-300 dark:text-gray-200 hover:text-primary-blue transition-colors">
                IT Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-blue">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 dark:text-gray-200">
            <li>123 Business Avenue</li>
            <li>Suite 200</li>
            <li>New York, NY 10001</li>
            <li className="text-primary-blue hover:text-white transition-colors">
              <a href="mailto:contact@tas-solutions.com">contact@tas-solutions.com</a>
            </li>
            <li className="text-primary-blue hover:text-white transition-colors">
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 dark:border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 dark:text-gray-300">
            © {new Date().getFullYear()} TAS Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 dark:text-gray-300 hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 dark:text-gray-300 hover:text-primary-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
