import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "New Flight Route Announced",
    image: "https://www.rodfishingclub.com/wp-content/uploads/2016/08/A%C3%A9roport-de-Rodrigues-Cr%C3%A9dit-photo-ARL-Rod-Fishing-Club-Ile-Rodrigues-Maurice-Oc%C3%A9an-Indien.jpg",
    date: "January 07, 2025",
    description: "New airport project coming. An enlargement of the runway and the terminal will be able to welcome international flights from different airlines.",
    category: "Development"
  },
  {
    title: "Terminal Upgrade Complete",
    image: "https://sundaytimesmauritius.com/wp-content/uploads/2019/08/rodrigues-airport-6.jpg",
    date: "March 10, 2024",
    description: "Enhanced facilities for better passenger experience with modern amenities and improved services.",
    category: "Infrastructure"
  },
  {
    title: "Safety Excellence Achievement",
    image: "https://th.bing.com/th/id/OIP.VFN6po7rnGC-YHq4qDyt5QHaE8?rs=1&pid=ImgDetMain",
    date: "January 7, 2025",
    description: "Our airport ensures safety to all its passengers with world-class security measures.",
    category: "Safety"
  }
];

export default function Blog() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Newspaper className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Latest Updates</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group/btn">
                    Read more
                    <ArrowRight className="h-4 w-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
