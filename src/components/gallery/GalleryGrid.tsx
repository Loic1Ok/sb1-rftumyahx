import React from 'react';
import GalleryImage from './GalleryImage';

interface GalleryItem {
  url: string;
  title: string;
  description?: string;
}

interface GalleryGridProps {
  images: GalleryItem[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div key={index} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
          <GalleryImage {...image} />
        </div>
      ))}
    </div>
  );
}