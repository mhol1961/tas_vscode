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
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(52, 152, 219, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
        primary 
          ? 'bg-gradient-primary text-white shadow-lg hover:shadow-xl' 
          : 'bg-white/90 dark:bg-primary-slate text-primary-navy dark:text-white border-2 border-primary-blue/20'
      } ${className}`}
      onClick={onClick}
    >
      {/* Animated background effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1 }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
