'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Self-contained dark mode toggle that directly manipulates the DOM
export default function FinalDarkModeToggle() {
  // Don't initialize state with values that depend on browser APIs
  // This prevents hydration mismatches
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Your brand colors from project requirements
  const colors = {
    navy: '#2C3E50',    // Navy
    blue: '#3498DB',    // Electric Blue
    slate: '#34495E',   // Slate Gray
    white: '#FFFFFF'
  };

  // Function to apply dark mode styles directly
  const applyDarkModeStyles = (dark: boolean) => {
    if (typeof document === 'undefined') return;
    
    // First update the HTML class for Tailwind dark mode
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Create a style element with critical styles
    let styleElement = document.getElementById('tas-dark-mode-styles') as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'tas-dark-mode-styles';
      document.head.appendChild(styleElement);
    }
    
    if (dark) {
      // Forcing dark mode styles with !important to override any conflicts
      styleElement.textContent = `
        body, main { background-color: ${colors.navy} !important; color: ${colors.white} !important; }
        nav { background-color: ${colors.slate} !important; color: ${colors.white} !important; }
        footer { background-color: ${colors.slate} !important; color: ${colors.white} !important; }
        .bg-white { background-color: ${colors.navy} !important; }
        .text-gray-800, .text-gray-900, .text-primary-navy { color: ${colors.white} !important; }
        .bg-primary-light { background-color: ${colors.slate} !important; }
        h1, h2, h3, h4, h5, h6 { color: ${colors.white} !important; }
        p { color: ${colors.white} !important; }
        .border-gray-200 { border-color: ${colors.slate} !important; }
      `;
    } else {
      // Remove dark mode styles
      styleElement.textContent = '';
    }
    
    // Save the user's preference
    try {
      localStorage.setItem('tas-theme', dark ? 'dark' : 'light');
    } catch (e) {
      console.error('Error saving theme preference:', e);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (!mounted) return;
    
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    applyDarkModeStyles(newDarkMode);
  };

  // Initialize on client-side only
  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Check for saved preference
    let darkModeEnabled = false;
    
    try {
      // Check localStorage
      const savedTheme = localStorage.getItem('tas-theme');
      
      if (savedTheme === 'dark') {
        darkModeEnabled = true;
      } else if (savedTheme === 'light') {
        darkModeEnabled = false;
      } else {
        // No saved preference, check system preference
        darkModeEnabled = window.matchMedia?.('(prefers-color-scheme: dark)').matches || false;
      }
    } catch (e) {
      console.error('Error reading theme preference:', e);
    }
    
    // Update state
    setIsDark(darkModeEnabled);
    
    // Apply styles
    applyDarkModeStyles(darkModeEnabled);
    
    // Listen for system changes
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if no user preference is saved
        if (!localStorage.getItem('tas-theme')) {
          setIsDark(e.matches);
          applyDarkModeStyles(e.matches);
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {
      console.error('Error setting up media query listener:', e);
    }
  }, []);

  // Don't render during SSR to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-200"
      style={{
        backgroundColor: isDark ? colors.slate : colors.white,
        color: isDark ? colors.white : colors.blue,
        border: `1px solid ${isDark ? colors.white : colors.blue}`,
        padding: '0.5rem',
        borderRadius: '9999px',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FaSun size={18} style={{ color: '#F6E05E' }} />
      ) : (
        <FaMoon size={18} style={{ color: colors.blue }} />
      )}
    </button>
  );
}
