&apos;use client';

import { useState, useEffect } from &apos;react';
import { FaSun, FaMoon } from &apos;react-icons/fa';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize on client-side only
  useEffect(() => {
    // Set mounted to true to indicate client-side rendering
    setMounted(true);
    
    // Check if dark mode is currently active
    const isDarkMode = document.documentElement.classList.contains(&apos;dark');
    setDarkMode(isDarkMode);
    
    // Add an event listener to detect changes to the HTML class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === &apos;class') {
          const isDark = document.documentElement.classList.contains(&apos;dark');
          setDarkMode(isDark);
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    // Force direct DOM manipulation for immediate visual feedback
    if (document.documentElement.classList.contains(&apos;dark')) {
      // Switch to light mode
      document.documentElement.classList.remove(&apos;dark');
      try {
        localStorage.setItem(&apos;theme', &apos;light');
      } catch (e) {
        console.warn(&apos;Could not save theme preference', e);
      }
    } else {
      // Switch to dark mode
      document.documentElement.classList.add(&apos;dark');
      try {
        localStorage.setItem(&apos;theme', &apos;dark');
      } catch (e) {
        console.warn(&apos;Could not save theme preference', e);
      }
    }
  };

  // Don&apos;t render during SSR to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className=&quot;p-2 rounded-full bg-white dark:bg-primary-slate text-primary-blue dark:text-white hover:bg-primary-light dark:hover:bg-primary-navy transition-colors border border-primary-blue&quot;
      aria-label=&quot;Toggle dark mode&quot;
      type=&quot;button"
    >
      {darkMode ? 
        <FaSun size={18} className=&quot;text-yellow-400&quot; /> : 
        <FaMoon size={18} className=&quot;text-primary-blue dark:text-white&quot; />
      }
    </button>
  );
}
