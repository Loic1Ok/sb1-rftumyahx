import React, { useState, useEffect } from 'react';
import { Clock, Plane, Search, Building2, Calendar, Info, MapPin, Briefcase, Users, AlertTriangle, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { getFlights } from '../services/flightApi';
import type { Flight } from '../types/flight';
import FlightDetailsModal from './FlightDetailsModal';

export default function FlightInfo() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [activeTab, setActiveTab] = useState<'arrivals' | 'departures'>('arrivals');

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
    const interval = setInterval(fetchFlights, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredFlights = flights.filter(flight => {
    const matchesSearch = flight.flight.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter based on active tab
    if (activeTab === 'arrivals') {
      return matchesSearch && flight.type === 'arrival';
    } else {
      return matchesSearch && flight.type === 'departure';
    }
  });

  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-48 bg-gray-200 rounded"></div>
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="flights" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Flight Information</h2>
            <p className="text-gray-600 mt-2">Real-time updates for all flights</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search flights..."
                className="pl-10 pr-4 py-2 w-full md:w-64 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Flight Type Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('arrivals')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'arrivals'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowDownRight className="h-4 w-4 mr-2" />
            Arrivals
          </button>
          <button
            onClick={() => setActiveTab('departures')}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'departures'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Departures
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            {/* Mobile view */}
            <div className="block lg:hidden">
              {filteredFlights.map((flight) => (
                <div
                  key={flight.id}
                  className="p-4 border-b border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedFlight(flight)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Plane className={`h-5 w-5 text-blue-500 mr-2 ${
                        flight.type === 'departure' ? 'rotate-45' : '-rotate-45'
                      }`} />
                      <div>
                        <div className="font-medium">{flight.flight}</div>
                        <div className="text-sm text-gray-500">{flight.airline}</div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      flight.status === 'On Time'
                        ? 'bg-green-100 text-green-800'
                        : flight.status === 'Delayed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {flight.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {flight.type === 'arrival' ? flight.origin : flight.destination}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {flight.type === 'arrival' ? flight.arrivalTime : flight.departureTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop view */}
            <table className="hidden lg:table w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">Flight</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">Airline</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">
                    {activeTab === 'arrivals' ? 'From' : 'To'}
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">Schedule</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">Terminal</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">Status</th>
                  <th className="py-4 px-6 text-left font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredFlights.map((flight) => (
                  <tr
                    key={flight.id}
                    className="group hover:bg-blue-50/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <Plane className={`h-5 w-5 text-blue-500 ${
                          flight.type === 'departure' ? 'rotate-45' : '-rotate-45'
                        }`} />
                        <div>
                          <div className="font-medium">{flight.flight}</div>
                          <div className="text-sm text-gray-500">Aircraft: ATR 72-500</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://picsum.photos/32/32" 
                          alt={flight.airline}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium">{flight.airline}</div>
                          <div className="text-sm text-gray-500">Code: MK</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium">
                            {flight.type === 'arrival' ? flight.origin : flight.destination}
                          </div>
                          <div className="text-sm text-gray-500">Direct Flight</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>
                            {flight.type === 'arrival' ? 'Arrival: ' : 'Departure: '}
                            {flight.type === 'arrival' ? flight.arrivalTime : flight.departureTime}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {flight.type === 'arrival' ? `Departed: ${flight.departureTime}` : `Expected Arrival: ${flight.arrivalTime}`}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium">Terminal {flight.terminal}</div>
                          <div className="text-sm text-gray-500">Gate 2</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                          flight.status === 'On Time'
                            ? 'bg-green-100 text-green-800'
                            : flight.status === 'Delayed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {flight.status}
                        </span>
                        {flight.status === 'Delayed' && (
                          <div className="flex items-center text-sm text-red-600">
                            <AlertTriangle className="h-4 w-4 mr-1" />
                            30 min delay
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedFlight(flight)}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredFlights.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No flights found
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500 text-center">
          Flight information is updated every minute
        </div>

        <FlightDetailsModal 
          flight={selectedFlight}
          onClose={() => setSelectedFlight(null)}
        />
      </div>
    </section>
  );
}