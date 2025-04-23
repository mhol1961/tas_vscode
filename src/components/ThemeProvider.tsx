&apos;use client';

import { createContext, useContext, useEffect, useState } from &apos;react';

type Theme = &apos;light' | &apos;dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(&apos;light');

  // Initialize theme on client-side only
  useEffect(() => {
    
    // Function to update theme in DOM and state
    const updateTheme = (newTheme: Theme) => {
      setTheme(newTheme);
      if (newTheme === &apos;dark') {
        document.documentElement.classList.add(&apos;dark');
      } else {
        document.documentElement.classList.remove(&apos;dark');
      }
    };

    // Get initial theme from localStorage or system preference
    try {
      const savedTheme = localStorage.getItem(&apos;theme') as Theme | null;
      if (savedTheme) {
        updateTheme(savedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;).matches;
        updateTheme(prefersDark ? &apos;dark' : &apos;light');
      }
    } catch (e) {
      console.error(&apos;Error initializing theme:&apos;, e);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    try {
      const newTheme = theme === &apos;light' ? &apos;dark' : &apos;light';
      setTheme(newTheme);
      localStorage.setItem(&apos;theme', newTheme);
      
      if (newTheme === &apos;dark') {
        document.documentElement.classList.add(&apos;dark');
      } else {
        document.documentElement.classList.remove(&apos;dark');
      }
    } catch (e) {
      console.error(&apos;Error toggling theme:&apos;, e);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(&apos;useTheme must be used within a ThemeProvider');
  }
  return context;
}
