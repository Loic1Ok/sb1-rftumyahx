import React from 'react';
import { MapPin, Compass, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.05) 2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Airport Location</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Navigation className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Address & Coordinates</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>Plain Corail, Rodrigues Island, Mauritius</p>
                      <p>19°45′19″S 63°21′59″E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Compass className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Technical Information</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-32">Elevation:</span>
                        <span>93 feet / 28 meters</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-32">Runway Length:</span>
                        <span>1,287 meters (4,222 ft)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-32">Runway Width:</span>
                        <span>30 meters (98 ft)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-32">IATA Code:</span>
                        <span>RRG</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-32">ICAO Code:</span>
                        <span>FIMR</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group h-[600px]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative h-full bg-white rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.888888888889!2d63.36111111111111!3d-19.757777777777777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ1JzE5LjAiUyA2M8KwMjEnNTkuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}