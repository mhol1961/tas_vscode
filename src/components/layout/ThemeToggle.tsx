&apos;use client';

import { useState, useEffect } from &apos;react';
import { FaSun, FaMoon } from &apos;react-icons/fa';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);
    // Check if dark mode is currently active
    setDarkMode(document.body.classList.contains(&apos;dark-mode'));

    // Add a mutation observer to detect changes to the body class
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains(&apos;dark-mode'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [&apos;class']
    });

    return () => observer.disconnect();
  }, []);

  // Use the global toggle function from our script
  const handleToggle = () => {
    if (typeof window !== &apos;undefined' && window.toggleDarkMode) {
      window.toggleDarkMode();
    }
  };

  // Don&apos;t render during SSR to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className=&quot;p-2 rounded-full bg-white text-primary-blue hover:bg-primary-light transition-colors border border-primary-blue&quot;
      aria-label=&quot;Toggle dark mode&quot;
      type=&quot;button"
    >
      {darkMode ? 
        <FaSun size={18} className=&quot;text-yellow-400&quot; /> : 
        <FaMoon size={18} className=&quot;text-primary-blue&quot; />
      }
    </button>
  );
}
