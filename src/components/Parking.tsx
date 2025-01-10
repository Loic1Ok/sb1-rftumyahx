import React from 'react';
import ShortTermParking from './parking/ShortTermParking';
import LongTermParking from './parking/LongTermParking';
import PaymentOptions from './parking/PaymentOptions';

export default function Parking() {
  return (
    <section id="parking" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Parking Facilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ShortTermParking />
          <LongTermParking />
          <PaymentOptions />
        </div>
      </div>
    </section>
  );
}