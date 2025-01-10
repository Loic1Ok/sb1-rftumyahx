import React, { useState, useEffect } from 'react';
import { Clock, Plane } from 'lucide-react';
import { getFlights } from '../services/flightApi';
import type { Flight } from '../types/flight';
import { Link } from 'react-router-dom';

export default function HomeFlightInfo() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        const data = await getFlights();
        setFlights(data);
        setError(null);
      } catch (err) {
        setError('Failed to load flight data');
        console.error('Error fetching flights:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Latest Flights</h2>
          <Link 
            to="/flights" 
            className="text-xs md:text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Mobile view */}
          <div className="block md:hidden">
            {flights.slice(0, 3).map((flight) => (
              <div
                key={flight.id}
                className="p-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <Plane className="h-3 w-3 mr-1.5 text-blue-500" />
                    <span className="text-xs font-medium">{flight.flight}</span>
                  </div>
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] ${
                    flight.status === 'On Time'
                      ? 'bg-green-50 text-green-700'
                      : flight.status === 'Delayed'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}>
                    {flight.status}
                  </span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {flight.departureTime}
                  </div>
                  <span>To: {flight.destination}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 text-xs">
                  <th className="py-2 px-3 text-left font-medium text-gray-600">Flight</th>
                  <th className="py-2 px-3 text-left font-medium text-gray-600">To</th>
                  <th className="py-2 px-3 text-left font-medium text-gray-600">Time</th>
                  <th className="py-2 px-3 text-left font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {flights.slice(0, 3).map((flight) => (
                  <tr
                    key={flight.id}
                    className="text-xs hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2 px-3">
                      <div className="flex items-center">
                        <Plane className="h-3 w-3 mr-1.5 text-blue-500" />
                        <span className="font-medium">{flight.flight}</span>
                      </div>
                    </td>
                    <td className="py-2 px-3">{flight.destination}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-3 w-3 mr-1.5" />
                        {flight.departureTime}
                      </div>
                    </td>
                    <td className="py-2 px-3">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] ${
                        flight.status === 'On Time'
                          ? 'bg-green-50 text-green-700'
                          : flight.status === 'Delayed'
                          ? 'bg-red-50 text-red-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        {flight.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}