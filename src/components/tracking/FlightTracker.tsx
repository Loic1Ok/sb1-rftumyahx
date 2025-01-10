import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Plane, Clock, Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { getFlights } from '../../services/flightApi';
import type { Flight } from '../../types/flight';

// Custom plane icon
const planeIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61212.png',
  iconSize: [25, 25],
  iconAnchor: [12, 12],
});

// Airport location
const AIRPORT_LOCATION = {
  lat: -19.7577,
  lng: 63.3610,
  name: 'Plaine Corail Airport',
  code: 'RRG'
};

export default function FlightTracker() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-8"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center text-red-700">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Plane className="h-8 w-8 text-primary-dark mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Flight Radar</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <MapContainer
                center={[AIRPORT_LOCATION.lat, AIRPORT_LOCATION.lng]}
                zoom={11}
                style={{ height: '500px' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                
                {/* Airport Marker */}
                <Marker
                  position={[AIRPORT_LOCATION.lat, AIRPORT_LOCATION.lng]}
                  icon={planeIcon}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold">{AIRPORT_LOCATION.name}</h3>
                      <p>IATA: {AIRPORT_LOCATION.code}</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Today's Flights</h3>
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {flights.length > 0 ? (
                  flights.map(flight => (
                    <div
                      key={flight.id}
                      className={`p-4 rounded-lg cursor-pointer transition-colors ${
                        selectedFlight?.id === flight.id
                          ? 'bg-primary/10 border border-primary'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedFlight(flight)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{flight.flight}</span>
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          flight.status === 'On Time' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {flight.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Navigation className="h-4 w-4 mr-1" />
                          {flight.origin} → {flight.destination}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {flight.departureTime}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    No flights scheduled
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                Flight information is updated every minute. Data provided by Aviation Edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}