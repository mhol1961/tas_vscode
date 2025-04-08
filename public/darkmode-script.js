// Standalone dark mode toggle script
(function() {
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      // Switch to light mode
      body.classList.remove('dark-mode');
      localStorage.setItem('tas-theme', 'light');
    } else {
      // Switch to dark mode
      body.classList.add('dark-mode');
      localStorage.setItem('tas-theme', 'dark');
    }
  }

  // Function to initialize dark mode based on saved preference
  function initDarkMode() {
    const savedTheme = localStorage.getItem('tas-theme');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
      document.body.classList.remove('dark-mode');
    } else {
      // If no preference is stored, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('tas-theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('tas-theme', 'light');
      }
    }
  }

  // Initialize dark mode when the script loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
  } else {
    initDarkMode();
  }

  // Expose the toggle function to the global scope
  window.toggleDarkMode = toggleDarkMode;
})();
