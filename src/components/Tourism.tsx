import React from 'react';
import { Palmtree, Mountain, Compass, Navigation, Clock, Camera, MapPin } from 'lucide-react';

const attractions = [
  {
    name: "Trou d'Argent Beach",
    category: "Beaches",
    description: "One of Rodrigues' most beautiful beaches with crystal clear waters.",
    image: "https://images.unsplash.com/photo-1589519160732-57fc498494f8",
    distance: "12km",
    activities: ["Swimming", "Snorkeling", "Sunbathing"],
    bestTime: "Early morning or late afternoon",
    coordinates: "-19.7577, 63.3610"
  },
  {
    name: "Mont Limon",
    category: "Mountains",
    description: "The highest point of Rodrigues with panoramic island views.",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc",
    distance: "8km",
    activities: ["Hiking", "Photography", "Bird Watching"],
    bestTime: "Early morning for best views",
    coordinates: "-19.7432, 63.3789"
  },
  {
    name: "Port Mathurin",
    category: "City",
    description: "Experience the vibrant capital city and local markets.",
    image: "https://images.unsplash.com/photo-1589492312756-e94a12d61346",
    distance: "3km",
    activities: ["Shopping", "Cultural Tours", "Local Cuisine"],
    bestTime: "Market days (Wed & Sat)",
    coordinates: "-19.6833, 63.4167"
  }
];

export default function Tourism() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-emerald-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Palmtree className="h-8 w-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-800">Tourism Attractions</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-600 rounded-full text-sm font-medium">
                      {attraction.category}
                    </span>
                  </div>
                  
                  {/* Distance Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-white">
                      <Navigation className="h-4 w-4 mr-1" />
                      <span className="text-sm">{attraction.distance} from airport</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {attraction.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {attraction.description}
                  </p>

                  {/* Activities */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {attraction.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-emerald-500 mr-2" />
                      <span>Best time: {attraction.bestTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-emerald-500 mr-2" />
                      <span>{attraction.coordinates}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group">
                    <Camera className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Section */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Compass className="h-6 w-6 text-emerald-600 mr-3" />
              Travel Tips
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                <p className="text-gray-600">May to November offers the best weather conditions with lower humidity and pleasant temperatures.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transportation</h4>
                <p className="text-gray-600">Rent a car or use local bus services to explore the island. Taxis are readily available at major attractions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Local Customs</h4>
                <p className="text-gray-600">Respect local traditions and dress modestly when visiting religious sites. Always ask permission before taking photos of people.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}