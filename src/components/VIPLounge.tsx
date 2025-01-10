import React from 'react';
import { Crown, Wifi, Coffee, Tv } from 'lucide-react';

export default function VIPLounge() {
  return (
    <section id="vip-lounge" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">VIP Lounge</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b"
              alt="VIP Lounge"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Premium Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Wifi className="h-5 w-5 text-blue-600 mr-2" />
                <span>High-speed WiFi</span>
              </div>
              <div className="flex items-center">
                <Coffee className="h-5 w-5 text-blue-600 mr-2" />
                <span>Premium Refreshments</span>
              </div>
              <div className="flex items-center">
                <Crown className="h-5 w-5 text-blue-600 mr-2" />
                <span>Concierge Service</span>
              </div>
              <div className="flex items-center">
                <Tv className="h-5 w-5 text-blue-600 mr-2" />
                <span>Entertainment</span>
              </div>
            </div>
            <p className="text-gray-600">
              Experience luxury and comfort in our exclusive VIP lounge. Available for first-class passengers and premium members.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}