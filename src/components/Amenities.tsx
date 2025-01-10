import React from 'react';
import { ShoppingBag, Wifi, Coffee, Briefcase, Stethoscope, Users } from 'lucide-react';

const amenities = [
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Duty Free Shopping",
    description: "Browse through our selection of local and international products"
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet"
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Cafes",
    description: "Enjoy a break before leaving..."
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Medical Services",
    description: "24/7 first aid and medical assistance"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Information Desk",
    description: "Friendly staff ready to assist you"
  }
];

export default function Amenities() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Airport Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable journey through our airport
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-500">
                      {amenity.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                    <p className="text-gray-600">{amenity.description}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-100 to-transparent transform rotate-45 translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}