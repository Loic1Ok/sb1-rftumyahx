import React from 'react';
import { Store, Utensils, Plane } from 'lucide-react';
import InteractiveMap from '../maps/InteractiveMap';

export default function AirportMap() {
  return (
    <section id="airport-map" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Airport Directory</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Airport Location</h3>
            <div className="rounded-lg overflow-hidden mb-4">
              <InteractiveMap />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Store className="h-5 w-5 text-blue-600 mr-2" />
                <span>Shops</span>
              </div>
              <div className="flex items-center">
                <Plane className="h-5 w-5 text-blue-600 mr-2" />
                <span>Gates</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ground Floor</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Check-in counters</li>
                <li>• Baggage claim</li>
                <li>• Car rental</li>
                <li>• Tourist information</li>
                 <li>• Security checkpoint</li>
                <li>• Departure gates</li>
                <li>• Duty-free shops</li>
                <li>• Air Mauritius office</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">First Floor</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ARL office</li>
                <li>• Duty free office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}