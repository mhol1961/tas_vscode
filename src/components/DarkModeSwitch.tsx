&apos;use client';

import { useState, useEffect } from &apos;react';
import { FaSun, FaMoon } from &apos;react-icons/fa';

// Simple dark mode switch component
export default function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(false);
  
  // Initialize on mount
  useEffect(() => {
    // Get initial state from localStorage
    const savedMode = localStorage.getItem(&apos;tas-dark-mode');
    const initialState = savedMode === &apos;true' || 
      (savedMode === null && window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;).matches);
    
    // Apply initial state
    setIsDark(initialState);
    applyDarkMode(initialState);
    
    // Listen for system changes
    const mediaQuery = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;);
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(&apos;tas-dark-mode') === null) {
        setIsDark(e.matches);
        applyDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener(&apos;change', handleChange);
    return () => mediaQuery.removeEventListener(&apos;change', handleChange);
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    const newState = !isDark;
    setIsDark(newState);
    applyDarkMode(newState);
    localStorage.setItem(&apos;tas-dark-mode', newState.toString());
  };
  
  // Apply dark mode to the document
  const applyDarkMode = (dark: boolean) => {
    if (dark) {
      document.documentElement.style.setProperty(&apos;--bg-color', &apos;#2C3E50');
      document.documentElement.style.setProperty(&apos;--text-color', &apos;#FFFFFF');
      document.documentElement.style.setProperty(&apos;--nav-bg', &apos;#34495E');
      document.documentElement.style.setProperty(&apos;--card-bg', &apos;#34495E');
      document.documentElement.style.setProperty(&apos;--border-color', &apos;#4A5568');
      document.body.style.backgroundColor = &apos;#2C3E50';
      document.body.style.color = &apos;#FFFFFF';
    } else {
      document.documentElement.style.setProperty(&apos;--bg-color', &apos;#FFFFFF');
      document.documentElement.style.setProperty(&apos;--text-color', &apos;#2C3E50');
      document.documentElement.style.setProperty(&apos;--nav-bg', &apos;#FFFFFF');
      document.documentElement.style.setProperty(&apos;--card-bg', &apos;#F7FAFC');
      document.documentElement.style.setProperty(&apos;--border-color', &apos;#E2E8F0');
      document.body.style.backgroundColor = &apos;#FFFFFF';
      document.body.style.color = &apos;#2C3E50';
    }
    
    // Force all sections to use the correct background
    document.querySelectorAll(&apos;section').forEach(section => {
      section.style.backgroundColor = dark ? &apos;#2C3E50' : &apos;#FFFFFF';
      section.style.color = dark ? &apos;#FFFFFF' : &apos;#2C3E50';
    });
    
    // Force navbar to use correct background
    document.querySelectorAll(&apos;nav').forEach(nav => {
      nav.style.backgroundColor = dark ? &apos;#34495E' : &apos;#FFFFFF';
      nav.style.color = dark ? &apos;#FFFFFF' : &apos;#2C3E50';
    });
  };
  
  return (
    <button
      onClick={toggleDarkMode}
      className=&quot;p-2 rounded-full bg-white hover:bg-gray-100 transition-colors border border-gray-300&quot;
      style={{
        backgroundColor: isDark ? &apos;#34495E' : &apos;#FFFFFF',
        color: isDark ? &apos;#FFFFFF' : &apos;#2C3E50',
        border: `1px solid ${isDark ? &apos;#4A5568' : &apos;#E2E8F0'}`
      }}
    >
      {isDark ? (
        <FaSun size={18} style={{ color: &apos;#F6E05E' }} />
      ) : (
        <FaMoon size={18} style={{ color: &apos;#3498DB' }} />
      )}
    </button>
  );
}
