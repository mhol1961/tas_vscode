'use client';

import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  overlayOpacity = 60 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r from-primary-navy/70 to-primary-blue/${overlayOpacity} z-10`}></div>
      <video
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
