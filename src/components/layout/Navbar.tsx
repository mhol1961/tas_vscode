import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import FinalDarkModeToggle from '../FinalDarkModeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { 
    name: 'Solutions', 
    href: '#',
    submenu: [
      { name: 'CRM Solutions', href: '/services/crm' },
      { name: 'Marketing Automation', href: '/services/marketing-automation' },
      { name: 'Systems Integration', href: '/services/integration' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-primary-navy shadow-lg transition-colors duration-300">
      {/* Restore original gradient div */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/30 to-primary-blue/10 dark:from-primary-navy dark:to-primary-blue/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 py-4">
              <Image
                src="/images/TAS_logo.png"
                alt="TAS Logo"
                width={140}
                height={45}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-white/90 px-4 py-2 text-sm font-bold rounded-full transition-all duration-150 hover:bg-primary-light/50 dark:hover:bg-white/10 hover:scale-105"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-white/90 px-4 py-2 text-sm font-bold rounded-full transition-all duration-150 hover:bg-primary-light/50 dark:hover:bg-white/10 hover:scale-105"
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-card ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-primary-navy/50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Final Dark Mode Toggle */}
            <div className="ml-4">
              <FinalDarkModeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <FinalDarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-white/90 hover:bg-primary-light/50 dark:hover:bg-white/10 focus:outline-none transition-all duration-150 hover:scale-105"
            >
              {isMobileMenuOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-primary-navy shadow-lg border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full text-left text-primary-navy dark:text-white hover:text-primary-blue block px-3 py-2 text-base font-medium"
                      >
                        {item.name}
                      </button>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="pl-4"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-primary-slate dark:text-gray-300 hover:text-primary-blue block px-3 py-2 text-sm"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-primary-navy dark:text-white hover:text-primary-blue block px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
