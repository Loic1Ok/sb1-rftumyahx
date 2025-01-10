import React from 'react';
import { X, Plane, Clock, MapPin, Info } from 'lucide-react';
import type { Flight } from '../types/flight';

interface Props {
  flight: Flight | null;
  onClose: () => void;
}

export default function FlightDetailsModal({ flight, onClose }: Props) {
  if (!flight) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="flex items-center mb-6">
            <Plane className="h-8 w-8 text-primary-dark mr-3" />
            <h2 className="text-2xl font-bold">Flight Details</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Flight Number</p>
                <p className="font-medium">{flight.flight}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Airline</p>
                <p className="font-medium">{flight.airline}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Origin</p>
                <p className="font-medium">{flight.origin}</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Destination</p>
                <p className="font-medium">{flight.destination}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Departure Time</p>
                <p className="font-medium">{flight.departureTime}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Arrival Time</p>
                <p className="font-medium">{flight.arrivalTime}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Info className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Terminal</p>
                <p className="font-medium">{flight.terminal}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Info className="h-5 w-5 text-gray-400 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-medium">{flight.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}