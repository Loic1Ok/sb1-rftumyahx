import React from 'react';

export default function LandingFees() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Landing Fees</h3>
      <ul className="space-y-3 text-gray-600">
        <li>Light Aircraft (&lt; 5,700 kg): MUR 0.07/kg</li>
        <li>Medium Aircraft (5,700 - 20,000 kg): MUR 0.07/kg</li>
        <li>Heavy Aircraft (&gt; 20,000 kg): MUR 0.07/kg</li>
      </ul>
    </div>
  );
}