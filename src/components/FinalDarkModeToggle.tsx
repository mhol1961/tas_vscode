&apos;use client';

import { useState, useEffect } from &apos;react';
import { FaSun, FaMoon } from &apos;react-icons/fa';

// Self-contained dark mode toggle that relies on Tailwind&apos;s class strategy
export default function FinalDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Function to apply dark mode by toggling the class on the HTML element
  const applyDarkMode = (dark: boolean) => {
    if (typeof document === &apos;undefined') return;

    // Update the HTML class for Tailwind dark mode
    if (dark) {
      document.documentElement.classList.add(&apos;dark');
    } else {
      document.documentElement.classList.remove(&apos;dark');
    }

    // Save the user&apos;s preference
    try {
      localStorage.setItem(&apos;tas-theme', dark ? &apos;dark' : &apos;light');
    } catch (e) {
      console.error(&apos;Error saving theme preference:&apos;, e);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (!mounted) return;

    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    applyDarkMode(newDarkMode); // Use the simplified function
  };

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);

    let darkModeEnabled = false;
    try {
      const savedTheme = localStorage.getItem(&apos;tas-theme');
      if (savedTheme === &apos;dark') {
        darkModeEnabled = true;
      } else if (savedTheme === &apos;light') {
        darkModeEnabled = false;
      } else {
        darkModeEnabled = window.matchMedia?.(&apos;(prefers-color-scheme: dark)&apos;).matches || false;
      }
    } catch (e) {
      console.error(&apos;Error reading theme preference:&apos;, e);
    }

    setIsDark(darkModeEnabled);
    applyDarkMode(darkModeEnabled); // Apply initial theme based on detection

    // Listen for system changes
    try {
      const mediaQuery = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;);
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if no user preference is saved
        if (!localStorage.getItem(&apos;tas-theme')) {
          setIsDark(e.matches);
          applyDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener(&apos;change', handleChange);
      return () => mediaQuery.removeEventListener(&apos;change', handleChange);
    } catch (e) {
      console.error(&apos;Error setting up media query listener:&apos;, e);
    }
  }, []);

  // Don&apos;t render during SSR
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className=&quot;p-2 rounded-full transition-colors duration-200 border 
                bg-white dark:bg-primary-slate 
                text-primary-blue dark:text-white 
                border-primary-blue dark:border-white 
                hover:bg-gray-100 dark:hover:bg-primary-navy&quot;
      aria-label={isDark ? &apos;Switch to light mode' : &apos;Switch to dark mode'}
    >
      {isDark ? (
        <FaSun size={18} style={{ color: &apos;#F6E05E' }} /> // Keeping specific color for sun icon
      ) : (
        <FaMoon size={18} className=&quot;text-primary-blue&quot; /> // Use Tailwind class for moon icon
      )}
    </button>
  );
}
