&apos;use client';

import React from &apos;react';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  overlayOpacity = 60 
}) => {
  return (
    <div className=&quot;absolute inset-0 overflow-hidden">
      {/* Enhanced gradient overlay with darker left side for better text visibility */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/75 to-primary-blue/${overlayOpacity} z-10`}></div>
      
      {/* Additional left side darkening for text area */}
      <div className=&quot;absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary-navy/80 to-transparent z-10"></div>
      <video
        className=&quot;absolute min-w-full min-h-full object-cover&quot;
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type=&quot;video/mp4&quot; />
      </video>
    </div>
  );
};

export default VideoBackground;
