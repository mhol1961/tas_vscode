// This script runs before the page renders to set the initial dark mode state
// It prevents flash of wrong theme by applying the theme immediately
export function darkModeScript() {
  return `
    (function() {
      // This script only runs on the client side
      if (typeof window === 'undefined') return;
      
      try {
        // Check localStorage only in try/catch to handle potential issues
        var savedTheme = null;
        try {
          savedTheme = localStorage.getItem('theme');
        } catch (storageErr) {
          console.warn('Could not access localStorage:', storageErr);
        }
        
        // Check for system preference
        var prefersDark = false;
        try {
          prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (mediaErr) {
          console.warn('Could not check media query:', mediaErr);
        }
        
        // Apply theme class
        if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('Dark mode initialization error:', e);
      }
    })();
  `;
}
