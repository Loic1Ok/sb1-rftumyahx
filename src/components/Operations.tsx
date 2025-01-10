import React from 'react';
import { Clock, Plane, Briefcase, HeadphonesIcon } from 'lucide-react';

const operationItems = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Operating Hours",
    description: "24/7 Operations",
    details: [
      "Continuous terminal access",
      "Round-the-clock security",
      "Always-available services"
    ]
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: "Flight Services",
    description: "Domestic & International",
    details: [
      "Regular domestic flights",
      "International routes coming soon",
      "Charter services available"
    ]
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Cargo Services",
    description: "Import & Export Facilities",
    details: [
      "Cargo handling",
      "Customs clearance",
      "Storage facilities"
    ]
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: "Support",
    description: "24/7 Ground Support",
    details: [
      "Customer service",
      "Technical assistance",
      "Emergency response"
    ]
  }
];

export default function Operations() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, rgba(59, 130, 246, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.05) 87.5%, rgba(59, 130, 246, 0.05)), linear-gradient(150deg, rgba(59, 130, 246, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.05) 87.5%, rgba(59, 130, 246, 0.05))',
          backgroundSize: '48px 84px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Airport Operations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ensuring smooth and efficient operations around the clock
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {operationItems.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative h-full bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="relative z-10">
                  <div className="p-3 bg-blue-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-500">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">{item.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{item.description}</p>
                  
                  <ul className="space-y-2 text-gray-600">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent transform rotate-45 translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}