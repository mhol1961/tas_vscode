&apos;use client';

import { motion } from &apos;framer-motion';
import React from &apos;react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = &apos;&apos;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Animated background effect */}
      <motion.span
        className=&quot;absolute inset-0 bg-transparent&quot; // Make overlay transparent
        initial={{ x: &apos;-100%&apos; }}
        whileHover={{ x: &apos;100%&apos; }}
        transition={{ duration: 0.8 }}
      />

      {/* Button content */}
      <span className=&quot;relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
