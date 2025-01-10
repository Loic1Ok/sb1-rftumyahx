import React from 'react';
import { Search, Plane, Calendar, Info } from 'lucide-react';
import AnimatedSky from './AnimatedSky';

export default function Hero() {
  return (
    <div className="relative">
      {/* Main Hero */}
      <div className="relative h-[90vh] bg-cover bg-center bg-fixed" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80")'
      }}>
        <AnimatedSky />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl space-y-6 animate-fadeIn">
              <h1 className="text-7xl font-bold text-white">
                Welcome to{' '}
                <span className="text-gradient bg-clip-text">Rodrigues Island</span>
              </h1>
              <p className="text-2xl text-white/90 leading-relaxed">
                Experience world-class service at Plaine Corail Airport, your gateway to paradise
              </p>

              {/* Quick Search */}
              <div className="mt-8">
                <div className="backdrop-blur-md bg-white/10 rounded-full p-2 flex items-center gap-4 border border-white/20 shadow-lg hover:bg-white/20 transition-colors">
                  <div className="flex-1 flex items-center gap-3 pl-4">
                    <Search className="h-5 w-5 text-white" />
                    <input
                      type="text"
                      placeholder="Search flights, services..."
                      className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors">
                    Search
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">80K+</div>
                  <div className="text-white/80">Annual Passengers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2</div>
                  <div className="text-white/80">Airlines</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="relative -mt-24 mx-auto max-w-6xl px-4">
        <div className="backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl divide-x divide-gray-200/20">
          <div className="grid md:grid-cols-4">
            <QuickAction 
              icon={<Plane className="h-6 w-6" />}
              title="Flight Info"
              description="Track your flight"
              link="/flights"
            />
            <QuickAction 
              icon={<Calendar className="h-6 w-6" />}
              title="Plan Journey"
              description="Travel requirements"
              link="/visitors"
            />
            <QuickAction 
              icon={<Info className="h-6 w-6" />}
              title="Airport Guide"
              description="Terminal information"
              link="/about"
            />
            <QuickAction 
              icon={<Search className="h-6 w-6" />}
              title="Services"
              description="Explore our services"
              link="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon, title, description, link }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a 
      href={link}
      className="p-8 text-left hover:bg-white/50 transition-all duration-300 group"
    >
      <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}