import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://www.lexpress.mu/sites/lexpress/files/i/social/images/article/2015/2015-01/2015-01-17/rodrigues-airport.jpg",
    title: "MK View",
    description: "Breathtaking view of 2 MK landing at Plaine Corail Airport"
  },
  {
    url: "https://www.business-magazine.mu/wp-content/uploads/2020/11/airport-plaine-corail_20190226183854.jpg",
    title: "Terminal view",
    description: "A modern and traditional terminal facilities"
  },
  {
    url: "https://cdn.flightsim.to/images/24/fimr-rodrigues-island-plaine-corail-airport-v-0-1-0-288142-1679142411-voHFi.jpg?width=1400&auto_optimize=medium",
    title: "Sunset at Rodrigues",
    description: "Stunning sunset view from the airport"
  },
  {
    url: "https://i1.wp.com/www.globerovers-magazine.com/wp-content/uploads/2020/06/Rodrigues-Island-Sea-View.jpg?w=940&ssl=1",
    title: "Nature view in Rodrigues",
    description: "Enjoy a glimpse of Rodrigues island beauty"
  },
  {
    url: "https://cdn1.mega.mu/data/ed/fb/Plaine-Corail-air-mauritius_j1JjHLf.jpg",
    title: "Old airplane at Rodrigues",
    description: "This is where this beautiful story started"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Camera className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Discover Our Airport</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
            isZoomed ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleClose}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={handleClose}
          >
            ✕
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-5xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
              <p className="text-white/80">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}