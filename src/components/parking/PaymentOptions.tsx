import React from 'react';
import { CreditCard } from 'lucide-react';

export default function PaymentOptions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <CreditCard className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Payment Options</h3>
      <p className="text-gray-600 mb-4">Multiple payment methods accepted.</p>
      <ul className="space-y-2 text-gray-600">
        <li>• Credit/Debit cards</li>
        <li>• Mobile payments</li>
        <li>• Cash (MUR)</li>
      </ul>
    </div>
  );
}