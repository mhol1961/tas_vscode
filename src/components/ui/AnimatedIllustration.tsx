&apos;use client';

import { motion } from &apos;framer-motion';
import Image from &apos;next/image';
import React from &apos;react';

interface AnimatedIllustrationProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  width?: number;
  height?: number;
}

const AnimatedIllustration: React.FC<AnimatedIllustrationProps> = ({ 
  src, 
  alt, 
  delay = 0,
  className = &apos;&apos;,
  width = 400,
  height = 300
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className=&quot;object-contain&quot;
      />
    </motion.div>
  );
};

export default AnimatedIllustration;
