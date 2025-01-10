import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    title: "Annual Aviation Day",
    date: "December 2024",
    description: "Join us for our annual celebration of aviation with aircraft displays and family activities.",
    location: "Main Terminal",
    attendees: "500+ expected",
    time: "10:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2a"
  },
  {
    title: "Airport Open House",
    date: "March 2024",
    description: "Experience behind-the-scenes tours and learn about airport operations.",
    location: "Various Locations",
    attendees: "300+ expected",
    time: "9:00 AM - 4:00 PM",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1"
  }
];

export default function Events() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-purple-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0"></div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-purple-500 mr-2" />
                      {event.attendees}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-purple-500 mr-2" />
                      {event.time}
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn">
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white p-8 rounded-xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive updates about upcoming events and airport news.
              </p>
              
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}