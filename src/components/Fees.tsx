import React from 'react';
import { DollarSign } from 'lucide-react';
import LandingFees from './fees/LandingFees';
import ParkingFees from './fees/ParkingFees';

export default function Fees() {
  return (
    <section id="fees" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Airport Usage Fees</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <LandingFees />
          <ParkingFees />
        </div>
      </div>
    </section>
  );
}