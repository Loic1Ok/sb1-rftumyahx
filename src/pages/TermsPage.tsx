import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollText, Shield, AlertTriangle, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <ScrollText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Terms & Conditions</h2>
            </div>

            {/* Disclaimer Banner */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
                <p className="text-amber-700">
                  This document outlines the terms of use for Plaine Corail Airport facilities and services. 
                  By using our facilities, you agree to these terms.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* General Terms */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">General Terms</h3>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    These terms and conditions govern your use of Plaine Corail Airport facilities and services. 
                    By accessing or using our facilities, you agree to be bound by these terms.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The airport reserves the right to modify these terms at any time without notice</li>
                    <li>Users must comply with all applicable laws and regulations</li>
                    <li>Airport management decisions regarding safety and security are final</li>
                    <li>Users must follow staff instructions at all times</li>
                  </ul>
                </div>
              </div>

              {/* Liability Disclaimer */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Liability Disclaimer</h3>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    While we strive to provide accurate information and reliable services, Plaine Corail Airport:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Is not liable for flight delays, cancellations, or schedule changes</li>
                    <li>Does not accept responsibility for loss or damage to personal property</li>
                    <li>Reserves the right to refuse service to anyone violating airport policies</li>
                    <li>Is not responsible for third-party services operating within the airport</li>
                  </ul>
                </div>
              </div>

              {/* Usage Rules */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Facility Usage Rules</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-2">Terminal Access</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Valid ticket or airport pass required for entry</li>
                      <li>Security screening is mandatory</li>
                      <li>Follow all posted signs and directions</li>
                      <li>No unauthorized photography or filming</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Parking Facilities</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Park only in designated areas</li>
                      <li>Payment required for all parking services</li>
                      <li>Airport not responsible for vehicle damage or theft</li>
                      <li>No overnight parking without authorization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    We are committed to protecting your privacy and handling your personal information responsibly:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>CCTV surveillance is in operation throughout the airport</li>
                    <li>Personal information is collected only for security and service purposes</li>
                    <li>Data is handled in accordance with applicable privacy laws</li>
                    <li>Information may be shared with law enforcement when required</li>
                  </ul>
                </div>
              </div>

              {/* Emergency Procedures */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Emergency Procedures</h3>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    In case of emergency:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Follow staff instructions immediately</li>
                    <li>Use marked emergency exits</li>
                    <li>Do not attempt to retrieve personal belongings</li>
                    <li>Assist others only if safe to do so</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-600">
                  For questions regarding these terms or to report violations, contact:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Legal Department: legal@plainecorail.mu</li>
                  <li>Phone: +230 832 0019</li>
                  <li>Address: Port Mathurin, Rodrigues Island</li>
                </ul>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                Last updated: March 15, 2024
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}