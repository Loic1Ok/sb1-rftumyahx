import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import FlightInfo from '../components/FlightInfo';
import { Plane, AlertTriangle, Info } from 'lucide-react';

export default function FlightsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Flight Information"
        subtitle="Real-time updates for all arrivals and departures"
        bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
        icon={<Plane className="h-12 w-12" />}
      />
      <main>
        <FlightInfo />
        
        {/* Flight Guidelines */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Flight Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Plane className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Check-in Times</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Domestic: 1 hour before</li>
                  <li>• International: 2 hours before</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Important Notice</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid ID required</li>
                  <li>• Baggage restrictions apply</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <Info className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Tips</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Online check-in available</li>
                  <li>• Download boarding pass</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}