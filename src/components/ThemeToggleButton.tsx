&apos;use client';

import { FaSun, FaMoon } from &apos;react-icons/fa';
import { useTheme } from &apos;./ThemeProvider';
import { useEffect, useState } from &apos;react';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don&apos;t render anything until after hydration to prevent mismatch
  if (!mounted) {
    return <div className=&quot;w-9 h-9"></div>; // Empty placeholder with same dimensions
  }

  return (
    <button
      onClick={toggleTheme}
      className=&quot;p-2 rounded-full bg-white dark:bg-primary-slate text-primary-blue dark:text-white hover:bg-primary-light dark:hover:bg-primary-navy transition-colors border border-primary-blue dark:border-white&quot;
      aria-label={`Switch to ${theme === &apos;dark' ? &apos;light' : &apos;dark'} mode`}
      type=&quot;button"
    >
      {theme === &apos;dark' ? (
        <FaSun size={18} className=&quot;text-yellow-400&quot; />
      ) : (
        <FaMoon size={18} className=&quot;text-primary-blue&quot; />
      )}
    </button>
  );
}
