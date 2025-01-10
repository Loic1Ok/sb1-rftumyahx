import React from 'react';
import { Plane, Radio, CloudRain, Ruler } from 'lucide-react';


export default function PilotInfo() {
  return (
    <section id="pilot-info" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pilot Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Runway Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Dimensions</p>
                  <p className="text-gray-600">Length: 1287m, Width: 30m</p>
                  <p className="text-gray-600 text-sm">Elevation: 95ft / 29m</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Radio className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Communications</p>
                  <p className="text-gray-600">ATIS: 127.75 MHz</p>
                  <p className="text-gray-600">Tower: 118.1 MHz</p>
                  <p className="text-gray-600">Ground: 121.9 MHz</p>
                </div>
              </div>
              
              {/* Modern Runway Visualization */}
              
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Navigation & Weather</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Plane className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Approaches</p>
                  <p className="text-gray-600">ILS/DME RWY 13 (CAT I)</p>
                  <p className="text-gray-600">VOR/DME RWY 31</p>
                  <p className="text-gray-600">RNAV (GNSS) RWY 13/31</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CloudRain className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="font-medium">Weather Minimums</p>
                  <p className="text-gray-600">RWY 13 ILS: 200ft / 800m</p>
                  <p className="text-gray-600">RWY 31 VOR: 500ft / 1500m</p>
                  <p className="text-gray-600">Circling: 600ft / 2500m</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Additional Information</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• PAPI (3°) both runway ends</li>
                  <li>• Full runway lighting system (HIRL)</li>
                  <li>• PCN 45/F/B/X/T</li>
                  <li>• Bird activity possible</li>
                  <li>• Limited rescue and firefighting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}