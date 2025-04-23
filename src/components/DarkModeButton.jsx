&apos;use client';

import { useState, useEffect } from &apos;react';
import { FaSun, FaMoon } from &apos;react-icons/fa';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains(&apos;dark'));
    
    // Listen for changes to the dark mode class
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains(&apos;dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [&apos;class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Don&apos;t render during SSR
  if (!mounted) return null;

  return (
    <button
      onClick={() => window.toggleDarkMode?.()}
      className=&quot;p-2 rounded-full bg-white dark:bg-primary-slate hover:bg-gray-100 dark:hover:bg-primary-navy transition-colors&quot;
      aria-label=&quot;Toggle dark mode"
    >
      {isDark ? (
        <FaSun className=&quot;text-yellow-400&quot; size={18} />
      ) : (
        <FaMoon className=&quot;text-primary-blue&quot; size={18} />
      )}
    </button>
  );
}
