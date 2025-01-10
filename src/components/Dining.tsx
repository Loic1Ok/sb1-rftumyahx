import React from 'react';
import { Utensils, Coffee, Wine, Clock, Star, MapPin, Phone } from 'lucide-react';

const restaurants = [
  {
    name: "Duty Free Paradise",
    type: "Local Boutique",
    hours: "6:00 AM - 10:00 PM",
    description: "A variety of goods for your pleasure.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    icon: <Utensils className="h-6 w-6" />,
    rating: 4.5,
    location: "Terminal 1, Ground Floor",
    contact: "+230 832 1234",
    specialties: ["Local Products", "Souvenirs", "Duty-Free Items"]
  },
  {
    name: "Kafe Solitaire",
    type: "Coffee & Light Meals",
    hours: "During air services",
    description: "Fresh pastries and coffee",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    icon: <Coffee className="h-6 w-6" />,
    rating: 4.2,
    location: "Terminal 1, First Floor",
    contact: "+230 832 5678",
    specialties: ["Coffee", "Pastries", "Sandwiches"]
  },
  {
    name: "Island Bar & Grill",
    type: "Local Cuisine & Drinks",
    hours: "10:00 AM - 11:00 PM",
    description: "Local specialties and cocktails",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    icon: <Wine className="h-6 w-6" />,
    rating: 4.7,
    location: "Terminal 1, Ground Floor",
    contact: "+230 832 9012",
    specialties: ["Local Cuisine", "Cocktails", "Seafood"]
  }
];

export default function Dining() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(234, 88, 12, 0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-orange-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
                <Utensils className="h-8 w-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-800">Dining Options</h2>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-600">Experience local and international cuisine</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-48">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-600 rounded-full text-sm font-medium">
                      {restaurant.type}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-white text-sm">{restaurant.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                      {restaurant.name}
                    </h3>
                    <div className="p-2 bg-orange-50 rounded-full">
                      {restaurant.icon}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{restaurant.description}</p>

                  {/* Details */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 text-orange-500 mr-2" />
                      {restaurant.hours}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 text-orange-500 mr-2" />
                      {restaurant.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 text-orange-500 mr-2" />
                      {restaurant.contact}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}