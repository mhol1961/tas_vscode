'use client';

import { useEffect } from 'react';
import { initializeTheme } from '@/app/theme';

export default function ThemeInitializer() {
  useEffect(() => {
    // Initialize theme on client side
    initializeTheme();
  }, []);

  // This component doesn't render anything
  return null;
}
