import React from 'react';

interface GalleryImageProps {
  url: string;
  title: string;
  description?: string;
}

export default function GalleryImage({ url, title, description }: GalleryImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <img 
        src={url}
        alt={title}
        className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          {description && (
            <p className="text-white/80 text-sm">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}