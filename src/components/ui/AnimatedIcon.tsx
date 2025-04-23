&apos;use client';

import { motion } from &apos;framer-motion';
import React, { useState } from &apos;react';
import { IconType } from &apos;react-icons';

interface AnimatedIconProps {
  icon: IconType;
  delay?: number;
  className?: string;
  variant?: &apos;primary' | &apos;secondary' | &apos;gradient' | &apos;outline';
  size?: &apos;sm' | &apos;md' | &apos;lg' | &apos;xl';
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  icon: Icon, 
  delay = 0,
  className = &apos;&apos;,
  variant = &apos;primary',
  size = &apos;lg'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine size class
  const sizeClass = {
    sm: &apos;text-2xl p-2',
    md: &apos;text-3xl p-3',
    lg: &apos;text-4xl p-4',
    xl: &apos;text-5xl p-5'
  }[size];
  
  // Determine variant styling
  const variantClass = {
    primary: &apos;bg-primary-blue text-white shadow-lg',
    secondary: &apos;bg-primary-navy text-white shadow-lg',
    gradient: &apos;bg-gradient-primary text-white shadow-lg',
    outline: &apos;bg-white dark:bg-primary-slate/40 text-primary-blue dark:text-primary-blue border-2 border-primary-blue/50 dark:border-primary-blue/70 shadow-md'
  }[variant];
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: &apos;spring',
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: isHovered ? 5 : 0,
        y: -5,
        boxShadow: &apos;0 10px 25px -5px rgba(52, 152, 219, 0.5)&apos;
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`rounded-2xl ${sizeClass} ${variantClass} flex items-center justify-center relative overflow-hidden ${className}`}
    >
      <Icon className=&quot;relative z-10&quot; />
      
      {/* Animated background effect */}
      {isHovered && (
        <motion.div 
          className=&quot;absolute inset-0 bg-primary-blue/20 rounded-2xl&quot;
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default AnimatedIcon;
