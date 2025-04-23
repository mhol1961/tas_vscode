&apos;use client';

import React, { createContext, useContext, useState, useEffect } from &apos;react';

type Theme = &apos;light' | &apos;dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: &apos;light',
  toggleTheme: () => {},
});

// Export the hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(&apos;light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on client side only
  useEffect(() => {
    setMounted(true);
    
    // Get initial theme from localStorage or system preference
    const storedTheme = localStorage.getItem(&apos;theme') as Theme;
    const prefersDark = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;).matches;
    
    if (storedTheme === &apos;dark' || (!storedTheme && prefersDark)) {
      setTheme(&apos;dark');
      document.documentElement.classList.add(&apos;dark');
    } else {
      setTheme(&apos;light');
      document.documentElement.classList.remove(&apos;dark');
    }
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === &apos;light' ? &apos;dark' : &apos;light';
    setTheme(newTheme);
    
    // Apply theme to document
    if (newTheme === &apos;dark') {
      document.documentElement.classList.add(&apos;dark');
    } else {
      document.documentElement.classList.remove(&apos;dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem(&apos;theme', newTheme);
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
