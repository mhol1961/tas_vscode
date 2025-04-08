// Simple dark mode script - no dependencies, no complexity

// Initialize dark mode based on saved preference or system preference
(function() {
  // Check localStorage first
  const theme = localStorage.getItem('theme');
  
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

// Global toggle function
window.toggleDarkMode = function() {
  const isDark = document.documentElement.classList.contains('dark');
  
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  
  // Force immediate style update
  document.body.style.transition = 'background-color 0.3s, color 0.3s';
  document.body.offsetHeight; // Force reflow
};
