import React from 'react';
import { Leaf, Recycle, Volume2, TreePine } from 'lucide-react';

export default function Environmental() {
  return (
    <section id="environmental" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Environmental Initiatives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Leaf className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Solar Power</h3>
            <p className="text-gray-600">30% of our energy needs met by solar panels</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <Recycle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Waste Management</h3>
            <p className="text-gray-600">No plastic is allow in the island, unless it is biodigradable</p>
          </div>
          
        
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <TreePine className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Green Areas</h3>
            <p className="text-gray-600">Native plant species preservation</p>
          </div>
        </div>
      </div>
    </section>
  );
}