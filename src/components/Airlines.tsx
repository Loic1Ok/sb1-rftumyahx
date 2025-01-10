import React from 'react';
import { Plane } from 'lucide-react';

const airlines = [
  {
    name: "Air Mauritius",
    routes: ["Mauritius(Plaissance)", "Reunion"],
    frequency: "Daily flights",
    logo: "https://live.staticflickr.com/7889/46384710365_8cf702e4d8_b.jpg"
  },
  {
    name: "Air Austral",
    routes: ["Reunion"],
    frequency: "Weekly flights",
    logo: "https://th.bing.com/th/id/OIP.ZKhbxZFOkYouFhjtepH56QHaE8?rs=1&pid=ImgDetMain"
  }
];

export default function Airlines() {
  return (
    <section id="airlines" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Plane className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Airlines & Destinations</h2>
            </div>
          </div>
        </div>
        
        <div className="space-y-16">
          {airlines.map((airline, index) => (
            <div key={index} className="relative">
              {/* Background line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
              
              <div className="relative flex items-center gap-12">
                <div className="w-1/3">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-video bg-white rounded-lg overflow-hidden">
                      <img 
                        src={airline.logo} 
                        alt={`${airline.name} logo`}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{airline.name}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Destinations</h4>
                      <div className="flex flex-wrap gap-2">
                        {airline.routes.map((route, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium"
                          >
                            {route}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Frequency</h4>
                      <p className="text-gray-800">{airline.frequency}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}