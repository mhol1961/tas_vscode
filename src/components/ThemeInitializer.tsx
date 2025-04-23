&apos;use client';

import { useEffect } from &apos;react';
import { initializeTheme } from &apos;@/utils/theme';

export default function ThemeInitializer() {
  // Script to run immediately before React hydration to prevent flickering
  const themeScript = `
    (function() {
      try {
        const storedTheme = localStorage.getItem(&apos;theme');
        if (storedTheme === &apos;dark') {
          document.documentElement.classList.add(&apos;dark');
          document.documentElement.style.colorScheme = &apos;dark';
        } else if (storedTheme === &apos;light') {
          document.documentElement.classList.remove(&apos;dark');
          document.documentElement.style.colorScheme = &apos;light';
        } else {
          const prefersDark = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;).matches;
          if (prefersDark) {
            document.documentElement.classList.add(&apos;dark');
            document.documentElement.style.colorScheme = &apos;dark';
          }
        }
      } catch (e) {}
    })();
  `;

  useEffect(() => {
    // Initialize theme on client side
    initializeTheme();
    
    // Add event listener for system preference changes
    const mediaQuery = window.matchMedia(&apos;(prefers-color-scheme: dark)&apos;);
    
    const handleChange = (e: MediaQueryListEvent) => {
      const currentTheme = localStorage.getItem(&apos;theme');
      
      // Only change theme if user hasn&apos;t manually set a preference
      if (!currentTheme) {
        if (e.matches) {
          document.documentElement.classList.add(&apos;dark');
          localStorage.setItem(&apos;theme', &apos;dark');
        } else {
          document.documentElement.classList.remove(&apos;dark');
          localStorage.setItem(&apos;theme', &apos;light');
        }
      }
    };
    
    mediaQuery.addEventListener(&apos;change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener(&apos;change', handleChange);
    };
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
