import React from 'react';
import { ShoppingBag, Car, Coffee, Wifi } from 'lucide-react';

const services = [
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Duty Free Shopping",
    description: "Explore our wide range of tax-free luxury goods and local specialties."
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: "Parking Services",
    description: "Secure, convenient parking options for short and long-term stays."
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Dining Options",
    description: "Various restaurants and cafes serving local and international cuisine."
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "Free Wi-Fi",
    description: "Stay connected with our high-speed internet throughout the terminal."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Airport Services</h2>
        
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] gap-1 opacity-5 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="h-20 bg-blue-500/20 rounded-sm"></div>
            ))}
          </div>
          
          {/* Services list */}
          <div className="relative space-y-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex items-center gap-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white transform hover:rotate-12 transition-transform">
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 max-w-xl">
                      {service.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="absolute -left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}