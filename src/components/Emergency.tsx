import React, { useState } from 'react';
import { Siren, Phone, Stethoscope, Flame } from 'lucide-react';
import EmergencyServiceModal from './EmergencyServiceModal';

const emergencyServices = [
  {
    title: "Medical Services",
    icon: <Stethoscope className="h-8 w-8 text-red-600" />,
    description: "24/7 emergency medical assistance with state-of-the-art equipment.",
    contactNumbers: ["Emergency: 112", "Medical Center: +230 832 4999"],
    operatingHours: "24/7 service",
    location: "Main Terminal, Ground Floor",
    team: "Licensed medical professionals including doctors and paramedics",
    equipment: [
      "Advanced life support equipment",
      "Emergency medical supplies",
      "Ambulance service",
      "First aid stations"
    ],
    responseTime: "Under 3 minutes for terminal emergencies"
  },
  {
    title: "Fire Services",
    icon: <Flame className="h-8 w-8 text-red-600" />,
    description: "Rapid response fire and rescue services with specialized capabilities.",
    contactNumbers: ["Fire Emergency: 115", "Fire Station: +230 832 4995"],
    operatingHours: "24/7 service",
    location: "Dedicated fire station near runway",
    team: "Certified firefighters with aircraft rescue expertise",
    equipment: [
      "Rapid intervention vehicles",
      "Fire trucks with foam capability",
      "Rescue equipment",
      "Thermal imaging cameras"
    ],
    responseTime: "Under 2 minutes to any point on the airfield"
  }
];

export default function Emergency() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white"></div>
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <pattern id="cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#cross)"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-red-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Siren className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-800">Emergency Services</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {emergencyServices.map((service) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white p-8 rounded-2xl border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.contactNumbers.map((number, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <Phone className="h-4 w-4 text-red-600 mr-2" />
                          <span>{number}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-red-600">Click for details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-red-50 rounded-xl">
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-red-600" />
            <div>
              <h4 className="font-semibold">Emergency Contact Center</h4>
              <p className="text-gray-600">24/7 Emergency Hotline: 112</p>
            </div>
          </div>
        </div>
      </div>

      <EmergencyServiceModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}