'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { toggleDarkMode } from '@/app/theme';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run this effect on the client side
  useEffect(() => {
    setMounted(true);
    // Check for user preference on initial load
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const handleToggle = () => {
    toggleDarkMode();
    setDarkMode(!darkMode);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-white dark:bg-primary-slate text-primary-blue dark:text-white hover:bg-primary-light dark:hover:bg-primary-navy transition-colors border border-primary-blue"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
