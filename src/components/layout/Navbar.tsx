&apos;use client';

import Link from &apos;next/link';
import Image from &apos;next/image';
import { useState, useEffect, useRef } from &apos;react'; // Import useRef
import { motion, AnimatePresence } from &apos;framer-motion';
import { HiMenu, HiX } from &apos;react-icons/hi';
import FinalDarkModeToggle from &apos;../FinalDarkModeToggle';
import AnimatedButton from &apos;../ui/AnimatedButton';

const navigation = [
  { name: &apos;Home', href: &apos;/&apos; },
  { 
    name: &apos;Services', 
    href: &apos;/services', 
    submenu: [
      { name: &apos;SEO Services', href: &apos;/services/seo-services' },
      { name: &apos;Website Creation', href: &apos;/services/website-creation' },
      { name: &apos;Email Marketing', href: &apos;/services/email-marketing' },
      { name: &apos;Lead Generation', href: &apos;/services/lead-generation' },
      { name: &apos;CRM & Automation', href: &apos;/services/crm' },
      { name: &apos;Reputation Management', href: &apos;/services/reputation-management' },
      { name: &apos;Social Media Management', href: &apos;/services/social-media-management' },
      { name: &apos;Technology Integration', href: &apos;/services/technology-integration' },
      { name: &apos;Marketing Automation', href: &apos;/services/marketing-automation' },
      { name: &apos;Custom Solutions', href: &apos;/services/custom-solutions' },
      { name: &apos;System Optimization', href: &apos;/services/system-optimization' },
      { name: &apos;Technology Consulting', href: &apos;/services/technologies' }
    ]
  },
  { name: &apos;About Us', href: &apos;/about' },
  { name: &apos;Why Choose Us', href: &apos;/why-choose-us' },
  { 
    name: &apos;Technologies', 
    href: &apos;/services/technologies',
    submenu: [
      { name: &apos;CRM Platforms', href: &apos;/services/technologies/crm' },
      { name: &apos;Integration Tools', href: &apos;/services/technologies/integration' },
      { name: &apos;Marketing Platforms', href: &apos;/services/technologies/marketing' },
      { name: &apos;Compare Solutions', href: &apos;/services/technologies/compare' }
    ]
  },
  { name: &apos;Case Studies', href: &apos;/case-studies' },
  { name: &apos;Blog', href: &apos;/blog' },
  { name: &apos;Contact', href: &apos;/contact' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null); // Ref for the main nav element
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu div
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID

  // Check for dark mode on mount and watch for changes
  useEffect(() => {
    setMounted(true);

    // Function to check if dark mode is active
    const checkDarkMode = () => {
      // Ensure this runs only on the client
      if (typeof window !== &apos;undefined') {
        return document.documentElement.classList.contains(&apos;dark');
      }
      return false;
    };

    const initialDarkMode = checkDarkMode();
    setIsDarkMode(initialDarkMode);

    // Apply initial style directly if dark mode is detected on mount
    if (initialDarkMode && navRef.current) {
      navRef.current.style.backgroundColor = &apos;#1e3d8f';
    }
    // Note: Mobile menu style applied when it renders/updates below

    // Set up mutation observer to watch for class changes on <html> element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === &apos;class') {
          const currentDarkMode = checkDarkMode();
          setIsDarkMode(currentDarkMode);
          // Apply/remove style directly when dark mode changes
          if (navRef.current) {
            navRef.current.style.backgroundColor = currentDarkMode ? &apos;#1e3d8f' : &apos;&apos;;
          }
          // Apply/remove style for mobile menu if it exists
          if (mobileMenuRef.current) {
             mobileMenuRef.current.style.backgroundColor = currentDarkMode ? &apos;#1e3d8f' : &apos;&apos;;
          }
        }
      });
    });

    // Start observing the document&apos;s root element
    if (typeof window !== &apos;undefined') {
      observer.observe(document.documentElement, { attributes: true });
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Avoid rendering logo based on theme until mounted to prevent hydration mismatch
  const logoSrc = mounted && isDarkMode ? &quot;/images/TAS_logo.png&quot; : &quot;/images/TAS_LOGO3.png&quot;;

  // Effect to apply style to mobile menu when it appears/dark mode changes
  useEffect(() => {
    if (mounted && isMobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.style.backgroundColor = isDarkMode ? &apos;#1e3d8f' : &apos;&apos;;
    }
  }, [isMobileMenuOpen, isDarkMode, mounted]);

  // Avoid rendering logo based on theme until mounted to prevent hydration mismatch
  // const logoSrc = mounted && isDarkMode ? &quot;/images/TAS_logo.png&quot; : &quot;/images/TAS_LOGO3.png&quot;; // Removed duplicate declaration

  return (
    <nav 
      ref={navRef} // Assign ref to nav element
      className=&quot;fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-colors duration-300&quot; 
      // Removed inline style, now controlled by useEffect
    >
      {/* Gradient background for light mode only */}
      <div className=&quot;absolute inset-0 bg-gradient-to-r from-primary-light/30 to-primary-blue/10 dark:hidden"></div> {/* Hide gradient in dark mode */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container: Use justify-between to push left and right groups apart */}
        <div className=&quot;flex justify-between items-center h-20">
          {/* Left Group: Logo Only */}
          <div className=&quot;flex items-center">
            <Link href=&quot;/&quot; className=&quot;flex-shrink-0 py-2">
              <div className=&quot;relative h-12 w-36">
                {/* Conditionally render logo based on dark mode state, only after mounting */}
                {mounted && (
                  <Image 
                    key={logoSrc} // Add key to force re-render on src change if needed
                    src={logoSrc} 
                    alt=&quot;Technology Alliance Solutions Logo&quot; 
                    fill
                    sizes=&quot;(max-width: 768px) 9rem, 9rem&quot;
                    style={{ objectFit: &apos;contain' }}
                    priority 
                  />
                )}
                {/* Optional: Render a placeholder or the light logo initially to prevent layout shift */}
                {!mounted && (
                   <Image 
                    src=&quot;/images/TAS_LOGO3.png&quot; // Default to light logo before mount
                    alt=&quot;Technology Alliance Solutions Logo&quot;
                    fill
                    sizes=&quot;(max-width: 768px) 9rem, 9rem&quot;
                    style={{ objectFit: &apos;contain' }} // Corrected indentation and ensured props are aligned
                    priority
                  />
                )}
              </div>
            </Link>
          </div>

          {/* Right Group: Nav Links Dark Mode Toggle and CTA Button */}
          <div className=&quot;hidden md:flex items-center space-x-4">
            {/* Desktop Menu Links */}
            <div className=&quot;flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className=&quot;relative group&quot;
                  onMouseEnter={() => {
                    if (item.submenu) {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current); // Clear any pending close timeout
                        timeoutRef.current = null;
                      }
                      setActiveDropdown(item.name); // Open dropdown immediately
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.submenu) {
                      // Set a timeout to close the dropdown after a short delay
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 150); // 150ms delay
                    }
                  }}
                >
                  {item.submenu ? (
                    <div className=&quot;flex items-center">
                      <Link href={item.href} className=&quot;text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red px-4 py-2 text-sm font-bold rounded-full transition-all duration-150 hover:bg-primary-light/50 hover:scale-105">
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className=&quot;text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red px-4 py-2 text-sm font-bold rounded-full transition-all duration-150 hover:bg-primary-light/50 hover:scale-105&quot; // Updated dark text/hover
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className=&quot;absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-primary-slate ring-1 ring-black ring-opacity-5&quot;
                      // Add mouse enter/leave to the dropdown itself to cancel/restart the close timer
                      onMouseEnter={() => {
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current); // Cancel close timeout if mouse enters dropdown
                          timeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={() => {
                        // Restart close timeout if mouse leaves dropdown
                        timeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 150); // 150ms delay
                      }}
                    >
                      <div className=&quot;py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className=&quot;block px-4 py-2 text-sm text-primary-navy dark:text-white hover:bg-primary-blue/10 dark:hover:text-primary-red dark:hover:bg-primary-accentblue/20&quot; // Updated dropdown dark text/hover
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <FinalDarkModeToggle />
            {/* Styled CTA Button */}
            {/* Wrap AnimatedButton in Link for navigation */}
            <Link href=&quot;/contact&quot; passHref>
              <AnimatedButton
                className=&quot;bg-red-600 hover:bg-red-700 text-white border-transparent"
              >
                Get Started
              </AnimatedButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className=&quot;md:hidden flex items-center space-x-4">
            <FinalDarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className=&quot;inline-flex items-center justify-center p-2 rounded-full text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red hover:bg-primary-light/50 focus:outline-none transition-all duration-150 hover:scale-105&quot; // Updated mobile button dark hover
            >
              {isMobileMenuOpen ? (
                <HiX className=&quot;block h-6 w-6&quot; />
              ) : (
                <HiMenu className=&quot;block h-6 w-6&quot; />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef} // Assign ref to mobile menu div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: &apos;auto' }}
            exit={{ opacity: 0, height: 0 }}
            className=&quot;md:hidden bg-white shadow-lg border-t border-gray-200 dark:border-gray-700&quot; 
            // Removed inline style, now controlled by useEffect
          >
            <div className=&quot;px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className=&quot;flex flex-col">
                        <Link href={item.href} className=&quot;text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-2 text-base font-medium">
                          {item.name}
                        </Link>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className=&quot;text-gray-500 dark:text-gray-400 text-sm font-medium px-3 py-1"
                        >
                          Show submenu {activeDropdown === item.name ? &apos;▲&apos; : &apos;▼&apos;}
                        </button>
                      </div>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className=&quot;pl-4"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className=&quot;text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-2 text-sm&quot; // Updated mobile dropdown dark text/hover
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
                      className=&quot;text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-2 text-base font-medium&quot; // Updated mobile menu dark text/hover
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* CTA Button for Mobile Menu */}
              <div className=&quot;mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {/* Wrap AnimatedButton in Link for navigation */}
                <Link href=&quot;/contact&quot; passHref>
                  <AnimatedButton
                    className=&quot;w-full justify-center bg-red-600 hover:bg-red-700 text-white border-transparent"
                  >
                    Get Started
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
