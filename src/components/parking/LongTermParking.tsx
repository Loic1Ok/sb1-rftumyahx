import React from 'react';
import { Clock } from 'lucide-react';

export default function LongTermParking() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Clock className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Long-Term Parking</h3>
      <p className="text-gray-600 mb-4">Economic rates for extended stays.</p>
      <ul className="space-y-2 text-gray-600">
        <li>• Daily rate: MUR 20</li>
        <li>• Weekly rate: MUR 20</li>
        <li>• Monthly rate: MUR 20</li>
      </ul>
    </div>
  );
}