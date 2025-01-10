import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Link2, Plane, Shield, FileText, Phone, Globe, Book, MapPin, AlertTriangle, Users, Building2 } from 'lucide-react';

const linkCategories = [
  {
    title: "Aviation Organizations",
    icon: <Plane className="h-6 w-6" />,
    links: [
      { name: "ACI - Airports Council International", url: "https://www.airports.org" },
      { name: "Air Mauritius", url: "https://www.airmauritius.com" },
      { name: "Civil Aviation Department", url: "http://civil-aviation.gov.mu" },
      { name: "IATA – International Air Transport Association", url: "https://www.iata.org" },
      { name: "ICAO – International Civil Aviation Organisation", url: "https://www.icao.int" }
    ]
  },
  {
    title: "Government Links",
    icon: <Building2 className="h-6 w-6" />,
    links: [
      { name: "Government of Mauritius", url: "https://www.gov.mu" },
      { name: "Rodrigues Regional Assembly", url: "https://www.rra.mu" },
      { name: "Customs department/MRA", url: "http://mra.gov.mu" }
    ]
  },
  {
    title: "Security & Training",
    icon: <Shield className="h-6 w-6" />,
    links: [
      { name: "Greenlight Security Training & Consultancy", url: "https://www.avsec.com" }
    ]
  },
  {
    title: "Tourist Information",
    icon: <Globe className="h-6 w-6" />,
    links: [
      { name: "Rodrigues Tourism Office", url: "https://www.tourism-rodrigues.mu" },
      { name: "State Bank of Mauritius", url: "https://www.sbmgroup.mu" },
      { name: "Trail de Rodrigues", url: "https://www.trailrodrigues.com" }
    ]
  },
  {
    title: "Shopping & Services",
    icon: <Book className="h-6 w-6" />,
    links: [
      { name: "Mauritius Duty Free Paradise", url: "https://www.mdfp.mu" }
    ]
  },
  {
    title: "Airport Services",
    icon: <MapPin className="h-6 w-6" />,
    links: [
      { name: "Flight Information", url: "/flights" },
      { name: "Parking Services", url: "/parking" },
      { name: "Terminal Services", url: "/services" },
      { name: "Contact Us", url: "/contact" }
    ]
  }
];

export default function LinksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Useful Links"
        subtitle="Quick access to important resources and information"
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
        icon={<Link2 className="h-12 w-12" />}
      />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-12 rounded-r-lg">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
              <p className="text-amber-700">
                External links open in a new window. Plaine Corail Airport is not responsible for the content of external websites.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linkCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target={link.url.startsWith('http') ? "_blank" : undefined}
                        rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                      >
                        <Link2 className="h-4 w-4 mr-2 group-hover:rotate-45 transition-transform" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Additional Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Travel Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Check our flight schedules</li>
                  <li>• Review travel requirements</li>
                  <li>• Book airport services</li>
                  <li>• Arrange transportation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Stay Connected</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Subscribe to our newsletter</li>
                  <li>• Follow us on social media</li>
                  <li>• Contact customer service</li>
                  <li>• Download airport maps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}