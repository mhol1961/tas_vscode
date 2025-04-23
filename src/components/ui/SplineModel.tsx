&apos;use client';

import { motion } from &apos;framer-motion';
import React, { Suspense } from &apos;react';
import dynamic from &apos;next/dynamic';

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import(&apos;@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className=&quot;w-full h-full flex items-center justify-center">Loading 3D model...</div>
});

interface SplineModelProps {
  sceneUrl: string;
  className?: string;
}

const SplineModel: React.FC<SplineModelProps> = ({ sceneUrl, className = &apos;&apos; }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`w-full h-[400px] ${className}`}
    >
      <Suspense fallback={<div className=&quot;w-full h-full flex items-center justify-center">Loading 3D model...</div>}>
        <Spline scene={sceneUrl} />
      </Suspense>
    </motion.div>
  );
};

export default SplineModel;
