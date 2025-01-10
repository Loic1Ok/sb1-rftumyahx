import React from 'react';

export default function AnimatedSky() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated clouds */}
      <div className="absolute w-full h-full">
        <div className="cloud-1 animate-float-slow"></div>
        <div className="cloud-2 animate-float-medium"></div>
        <div className="cloud-3 animate-float-fast"></div>
      </div>
      
      {/* Animated birds */}
      <div className="absolute w-full h-full">
        <div className="bird-1 animate-fly-1"></div>
        <div className="bird-2 animate-fly-2"></div>
      </div>
    </div>
  );
}