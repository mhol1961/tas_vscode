&apos;use client';

import { useState, useEffect } from &apos;react';
import { FaSun, FaMoon } from &apos;react-icons/fa';

export default function SimpleDarkToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Function to check if dark mode is currently active
  const checkDarkMode = () => {
    return document.documentElement.classList.contains(&apos;dark');
  };

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);
    // Set initial state based on the actual class on HTML element
    setIsDark(checkDarkMode());
    
    // Create a function to handle theme changes
    const handleThemeChange = () => {
      setIsDark(checkDarkMode());
    };
    
    // Set up an observer to monitor class changes on the HTML element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === &apos;class') {
          handleThemeChange();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [&apos;class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Function to toggle dark mode using the global toggle function
  const handleToggle = () => {
    if (typeof window !== &apos;undefined' && window.toggleDarkMode) {
      try {
        console.log(&apos;Toggling dark mode from button click');
        const newDarkState = window.toggleDarkMode();
        console.log(&apos;New dark state:&apos;, newDarkState);
        setIsDark(newDarkState);
      } catch (e) {
        console.error(&apos;Error toggling dark mode:&apos;, e);
      }
    } else {
      console.error(&apos;toggleDarkMode function not available');
    }
  };

  // Wait until mounted to render to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className=&quot;p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-primary-slate dark:hover:bg-primary-navy transition-colors&quot;
      aria-label={isDark ? &apos;Switch to light mode' : &apos;Switch to dark mode'}
      style={{color: isDark ? &apos;#FFFFFF' : &apos;#3498DB', border: &apos;1px solid #3498DB'}}
    >
      {isDark ? (
        <FaSun size={18} style={{color: &apos;#F6E05E'}} />
      ) : (
        <FaMoon size={18} style={{color: &apos;#3498DB'}} />
      )}
    </button>
  );
}
