import React, { useState } from 'react';
import { Newspaper, Megaphone, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "New International Terminal Project Announced",
    date: "2024-03-15",
    category: "Development",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d",
    summary: "Exciting plans unveiled for a new international terminal to enhance airport capacity and passenger experience.",
    link: "/news/new-terminal"
  },
  {
    id: 2,
    title: "Direct Flights to Reunion Starting Soon",
    date: "2024-03-10",
    category: "Flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    summary: "New direct flight service to Reunion Island launching next month, boosting regional connectivity.",
    link: "/news/reunion-flights"
  },
  {
    id: 3,
    title: "Airport Achieves Safety Excellence Award",
    date: "2024-03-05",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1",
    summary: "Plaine Corail Airport recognized for outstanding safety standards and protocols.",
    link: "/news/safety-award"
  }
];

const advertisements = [
  {
    id: 1,
    title: "Duty Free Special Offers",
    image: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be",
    description: "Exclusive discounts on premium brands at our duty-free shops.",
    link: "https://www.mdfp.mu/offers",
    sponsor: "Mauritius Duty Free Paradise"
  },
  {
    id: 2,
    title: "Car Rental Deals",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    description: "Special rates for airport car rentals. Book early and save!",
    link: "/services/car-rental",
    sponsor: "Island Car Rental"
  }
];

export default function NewsAndAds() {
  const [activeTab, setActiveTab] = useState<'news' | 'announcements'>('news');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Newspaper className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Latest Updates</h2>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'news'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              News
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'announcements'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Announcements
            </button>
          </div>
        </div>

        {/* News Section */}
        {activeTab === 'news' && (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <a
                    href={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read more <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Announcements & Ads Section */}
        {activeTab === 'announcements' && (
          <div className="space-y-8">
            {/* Important Announcements */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <Megaphone className="h-6 w-6 text-amber-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-amber-700">
                    Terminal maintenance scheduled for March 20, 2024. Some facilities may have limited access.
                    Please check with your airline for specific guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Advertisements */}
            <div className="grid md:grid-cols-2 gap-8">
              {advertisements.map((ad) => (
                <div key={ad.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-full">
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">
                        Advertisement
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                      <p className="text-gray-600 mb-4">{ad.description}</p>
                      <p className="text-sm text-gray-500 mb-4">Sponsored by {ad.sponsor}</p>
                      <a
                        href={ad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Learn more <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}