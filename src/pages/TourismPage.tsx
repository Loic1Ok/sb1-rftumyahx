import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Palmtree, Compass, Mountain, Fish, Anchor, Sun, Map, Utensils, Camera } from 'lucide-react';

const attractions = [
  {
    name: "Trou d'Argent Beach",
    category: "Beaches",
    description: "One of the most beautiful beaches in Rodrigues, featuring crystal-clear waters and pristine white sand.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    distance: "12 km",
    activities: ["Swimming", "Snorkeling", "Sunbathing"],
    bestTime: "Early morning or late afternoon"
  },
  {
    name: "Mont Limon",
    category: "Mountains",
    description: "The highest point in Rodrigues offering panoramic views of the entire island.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    distance: "8 km",
    activities: ["Hiking", "Photography", "Bird watching"],
    bestTime: "Early morning for clearest views"
  },
  {
    name: "François Leguat Giant Tortoise Reserve",
    category: "Nature",
    description: "Home to over 3,000 giant tortoises and endemic plants.",
    image: "https://images.unsplash.com/photo-1597165826446-b872c7d9edc4",
    distance: "5 km",
    activities: ["Guided tours", "Wildlife photography", "Nature walks"],
    bestTime: "9 AM - 4 PM"
  },
  {
    name: "Caverne Patate",
    category: "Adventure",
    description: "The longest cave system in Rodrigues with fascinating limestone formations.",
    image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1",
    distance: "15 km",
    activities: ["Cave exploration", "Guided tours"],
    bestTime: "Guided tours available throughout the day"
  }
];

const activities = [
  {
    name: "Diving & Snorkeling",
    icon: <Fish className="h-6 w-6" />,
    description: "Explore vibrant coral reefs and marine life in crystal-clear waters.",
    locations: ["Mourouk", "Port Sud-Est", "Trou d'Argent"],
    bestSeason: "October to April"
  },
  {
    name: "Hiking",
    icon: <Mountain className="h-6 w-6" />,
    description: "Trek through scenic trails and discover breathtaking viewpoints.",
    locations: ["Mont Limon", "Grande Montagne", "Cascade Pistache"],
    bestSeason: "May to September"
  },
  {
    name: "Sailing",
    icon: <Anchor className="h-6 w-6" />,
    description: "Experience the thrill of sailing in the lagoon or open waters.",
    locations: ["Port Mathurin", "Port Sud-Est"],
    bestSeason: "Year-round"
  }
];

export default function TourismPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589519160732-57fc498494f8")'
        }}>
          <div className="absolute inset-0 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
              <h1 className="text-5xl font-bold mb-4">Discover Rodrigues Island</h1>
              <p className="text-xl max-w-2xl">Experience the untouched beauty and authentic charm of Rodrigues Island, your gateway to paradise.</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Tourist Attractions */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-12">
                <Compass className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Tourist Attractions</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {attractions.map((attraction) => (
                  <div key={attraction.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img 
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {attraction.distance} from airport
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{attraction.name}</h3>
                        <span className="text-blue-600 text-sm">{attraction.category}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{attraction.description}</p>
                      <div className="space-y-2">
                        <div>
                          <h4 className="font-semibold mb-1">Activities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {attraction.activities.map((activity) => (
                              <span key={activity} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Best Time to Visit:</h4>
                          <p className="text-gray-600 text-sm">{attraction.bestTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-12">
                <Sun className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Popular Activities</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {activities.map((activity) => (
                  <div key={activity.name} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-blue-600 mb-4">{activity.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Best Locations:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {activity.locations.map((location) => (
                          <li key={location}>{location}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-blue-600 mt-2">Best Season: {activity.bestSeason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-8">
                <Map className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Travel Tips</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Sun className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                      <p className="text-gray-600">May to November offers the best weather conditions with lower humidity and pleasant temperatures.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Utensils className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Local Cuisine</h3>
                      <p className="text-gray-600">Try local specialties like octopus curry, fresh seafood, and traditional Rodriguan dishes.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Camera className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Photography Spots</h3>
                      <p className="text-gray-600">Don't miss sunset at Mont Limon and the pristine beaches for perfect photo opportunities.</p>
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