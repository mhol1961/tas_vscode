'use client';

// Function to toggle dark mode
export function toggleDarkMode() {
  if (typeof window !== 'undefined') {
    const htmlElement = document.documentElement;
    
    // Toggle the dark class
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}

// Function to initialize theme based on user preference or system preference
export function initializeTheme() {
  if (typeof window !== 'undefined') {
    // Check if theme preference is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // If no preference is stored, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
