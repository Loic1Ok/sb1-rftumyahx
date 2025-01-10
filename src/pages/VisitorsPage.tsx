import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Clock, Luggage, Passport, Shield, Info, Map, DollarSign, Plane } from 'lucide-react';

export default function VisitorsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Visitor Information"
        subtitle="Everything you need to know for a smooth journey"
        bgImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        icon={<Info className="h-12 w-12" />}
      />
      <main className="py-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Quick Reference Guide */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Check-in Times</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Domestic: 1 hour before</li>
                  <li>• International: 2 hours before</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <Luggage className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Baggage Allowance</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Carry-on: 7kg</li>
                  <li>• Checked: 20kg</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Valid ID required</li>
                  <li>• Liquids ≤ 100ml</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Terminal Hours</h3>
                <p className="text-gray-600">Open 24/7</p>
              </div>
            </div>

            {/* Detailed Information Sections */}
            <div className="space-y-12">
              {/* Before Your Flight */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Plane className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold">Before Your Flight</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Valid passport</li>
                        <li>Boarding pass</li>
                        <li>Visa (if required)</li>
                        <li>Travel insurance (recommended)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Preparation Tips</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Check flight status</li>
                        <li>Prepare documents</li>
                        <li>Pack according to guidelines</li>
                        <li>Arrange transportation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* At the Airport */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Map className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold">At the Airport</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Check-in Process</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Locate your airline counter</li>
                        <li>Present required documents</li>
                        <li>Check in baggage</li>
                        <li>Collect boarding pass</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Security Screening</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Remove electronic devices</li>
                        <li>Place liquids in clear bag</li>
                        <li>Remove outerwear</li>
                        <li>Follow staff instructions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Available Services</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Information desk</li>
                        <li>Currency exchange</li>
                        <li>Duty-free shopping</li>
                        <li>Food and beverages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold">Transportation & Parking</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Getting To/From Airport</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Public bus service (06:00-16:30)</li>
                        <li>Taxi services available 24/7</li>
                        <li>Shuttle bus for all flights</li>
                        <li>Car rental services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Parking Options</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Short-term parking: MUR 20</li>
                        <li>Long-term parking: MUR 20</li>
                        <li>24/7 security surveillance</li>
                        <li>Payment at exit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}