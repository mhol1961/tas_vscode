'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  primary = true,
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: primary ? '0 10px 25px -5px rgba(52, 152, 219, 0.4)' : '0 4px 10px -3px rgba(0, 0, 0, 0.1)' }} // Adjusted shadow for secondary
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
        primary
          ? 'bg-primary-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl' // Changed gradient to solid blue + hover
          : 'bg-white text-primary-navy border border-primary-blue/50 dark:bg-primary-slate dark:text-gray-200 dark:border-primary-slate' // Changed dark mode text
      } ${className}`}
      onClick={onClick}
    >
      {/* Animated background effect (kept for subtle hover interaction) */}
      {/* You might want to remove or adjust this if it clashes with the solid color */}
      <motion.span
        className={`absolute inset-0 ${primary ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-primary-blue/10 to-transparent'}`} // Adjusted effect based on type
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }} // Slightly adjusted duration
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
