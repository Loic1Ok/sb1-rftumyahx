import React from 'react';
import { Car } from 'lucide-react';

export default function ShortTermParking() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Car className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Short-Term Parking</h3>
      <p className="text-gray-600 mb-4">Convenient parking for pick-ups and short visits.</p>
      <ul className="space-y-2 text-gray-600">
        <li>• First hour: MUR 20</li>
        <li>• Each additional hour: MUR 20</li>
        <li>• Maximum daily rate: MUR 20</li>
      </ul>
    </div>
  );
}