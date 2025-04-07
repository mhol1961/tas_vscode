'use client';

// Initialize dark mode on page load
export function initializeTheme() {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

// Function to toggle dark mode
export function toggleDarkMode() {
  if (typeof window !== 'undefined') {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  initializeTheme();
}
