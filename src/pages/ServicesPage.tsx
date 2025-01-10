import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import VIPLounge from '../components/VIPLounge';
import Dining from '../components/Dining';
import { Headphones, MessageSquare, Briefcase } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Airport Services"
        subtitle="Everything you need for a comfortable journey"
        bgImage="https://images.unsplash.com/photo-1537498425277-c283d32ef9db"
        icon={<Briefcase className="h-12 w-12" />}
      />
      <main>
        <Services />
        <VIPLounge />
        <Dining />
        {/* Rest of existing content */}
      </main>
      <Footer />
    </div>
  );
}