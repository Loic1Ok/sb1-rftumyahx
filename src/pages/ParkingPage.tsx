import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Parking from '../components/Parking';
import { Car, Clock, Phone } from 'lucide-react';

export default function ParkingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Parking Facilities"
        subtitle="Convenient and secure parking options for all visitors"
        bgImage="https://images.unsplash.com/photo-1621977717126-e29965156a27"
        icon={<Car className="h-12 w-12" />}
      />
      <main>
        <Parking />
        {/* Rest of existing content */}
      </main>
      <Footer />
    </div>
  );
}