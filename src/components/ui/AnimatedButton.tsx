'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function AnimatedButton({ 
  children, 
  className = '', 
  onClick, 
  href, 
  type = 'button',
  disabled = false 
}: AnimatedButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const buttonContent = (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {children}
    </motion.div>
  );

  if (href && !disabled) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className="inline-block"
    >
      {buttonContent}
    </button>
  );
}
