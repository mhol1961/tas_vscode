// Simple theme utility functions

// Check if dark mode is active
export const isDarkMode = (): boolean => {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
};

// Toggle dark mode
export const toggleDarkMode = (): void => {
  if (typeof document === 'undefined') return;
  
  const isDark = isDarkMode();
  
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};

// Initialize theme based on saved preference or system preference
export const initializeTheme = (): void => {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  
  // Check if theme is already set in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // If no preference is saved, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
};
