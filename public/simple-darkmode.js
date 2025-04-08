// Simple dark mode implementation
console.log('Dark mode script loaded');

// Function to set the theme
function setTheme(isDark) {
  console.log('Setting theme:', isDark ? 'dark' : 'light');
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  try {
    localStorage.setItem('tas-theme', isDark ? 'dark' : 'light');
    console.log('Theme saved to localStorage');
  } catch (e) {
    console.error('Failed to save theme to localStorage:', e);
  }
}

// Function to toggle dark mode
window.toggleDarkMode = function() {
  console.log('Toggle dark mode called');
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(!isDark);
  console.log('Dark mode is now:', !isDark ? 'on' : 'off');
  return !isDark; // Return the new state
};

// Initialize theme based on saved preference or system preference
(function initializeTheme() {
  console.log('Initializing theme');
  let theme;
  
  try {
    theme = localStorage.getItem('tas-theme');
    console.log('Theme from localStorage:', theme);
  } catch (e) {
    console.error('Failed to read theme from localStorage:', e);
  }
  
  if (theme === 'dark') {
    setTheme(true);
  } else if (theme === 'light') {
    setTheme(false);
  } else {
    // Check system preference
    try {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('System prefers dark mode:', prefersDark);
      setTheme(prefersDark);
    } catch (e) {
      console.error('Failed to check system preference:', e);
      setTheme(false); // Default to light mode
    }
  }
})();
