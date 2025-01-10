import React from 'react';
import { Scan, Clock, FileWarning } from 'lucide-react';

export default function CustomsInfo() {
  return (
    <section id="customs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Customs & Immigration</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Processing Times</h3>
            <p className="text-gray-600">Average processing time: 15-20 minutes</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Peak hours: 8AM - 11AM</li>
              <li>• Off-peak: 2PM - 5PM</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <Scan className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Valid passport</li>
              <li>• Completed arrival card</li>
              <li>• Return ticket</li>
              <li>• Hotel reservation</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <FileWarning className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Restricted Items</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Fresh produce</li>
              <li>• Animal products</li>
              <li>• Weapons</li>
              <li>• Illegal substances</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}