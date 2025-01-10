import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Plane, Clock, MapPin, Calendar, Phone, Mail, Globe } from 'lucide-react';

const airlines = [
  {
    name: "Air Mauritius",
    logo: "https://cdn.planespotters.net/40715/3b-nbo-air-mauritius-atr-72-500-72-212a_PlanespottersNet_799041_a40284dffc_o.jpg",
    description: "The national carrier of Mauritius, providing daily connections between Rodrigues and Mauritius since 1972.",
    routes: [
      {
        destination: "Sir Seewoosagur Ramgoolam International Airport, Mauritius",
        frequency: "Daily flights",
        flightTime: "1 hour 30 minutes",
        aircraft: "ATR 72-500"
      }
    ],
    contact: {
      phone: "+230 207 7070",
      email: "mkecare@airmauritius.com",
      website: "www.airmauritius.com"
    }
  },
  {
    name: "Air Austral",
    logo: "https://cdn.plnspttrs.net/28406/f-ojmz-ewa-air-atr-72-600-72-212a_PlanespottersNet_1326040_d933b0245c_o.jpg",
    description: "Réunion's premier airline offering seasonal connections between Rodrigues and Réunion.",
    routes: [
      {
        destination: "Roland Garros Airport, Réunion",
        frequency: "Seasonal (2-3 flights per week)",
        flightTime: "1 hour 15 minutes",
        aircraft: "ATR 72-500"
      }
    ],
    contact: {
      phone: "+262 262 93 77 00",
      email: "contact@air-austral.com",
      website: "www.air-austral.com"
    }
  }
];

const futureAircraft = [
  {
    category: "Regional Jets",
    examples: ["Embraer E190/195", "Bombardier CRJ series"],
    capacity: "70–150 passengers",
    purpose: "Ideal for short to medium-haul routes, these jets would connect Rodrigues to destinations within the Indian Ocean region and potentially further afield, such as South Africa or Madagascar.",
    icon: <Plane className="h-8 w-8 text-blue-600" />,
    images: [
      {
        url: "https://th.bing.com/th/id/R.36306b8e1758a16a02f6bed75c71638d?rik=cd%2bEmEGR2%2bFcFA&riu=http%3a%2f%2fwww.pilootenvliegtuig.nl%2fwp-content%2fuploads%2f2013%2f02%2fEMBRAER-190-JetairFly.jpg&ehk=mBIn9jqou3cAhfkHvzFZsY2shHfGUtDr7%2fXMw7dnN7A%3d&risl=&pid=ImgRaw&r=0",
        caption: "Embraer E190"
      },
      {
        url: "https://th.bing.com/th/id/R.fe982cac3e660ad396b61b1cfdb362f2?rik=cruO0frqSQjJPQ&pid=ImgRaw&r=0",
        caption: "Bombardier CRJ"
      }
    ]
  },
  {
    category: "Narrow-Body Aircraft",
    examples: ["Airbus A320/A321", "Boeing 737 series"],
    capacity: "150–230 passengers",
    purpose: "Narrow-body jets could handle medium-haul routes to destinations such as Dubai, India, or East Africa, expanding Rodrigues' connectivity.",
    icon: <Plane className="h-8 w-8 text-blue-600 rotate-45" />,
    images: [
      {
        url: "https://aviationnews-online.com/public/storage/news/airbus-a330-200-july-2018.jpg",
        caption: "Airbus A320"
      },
      {
        url: "https://news.gtp.gr/wp-content/uploads/2021/01/Boeing_737_MAX_8_1.jpg",
        caption: "Boeing 737"
      }
    ]
  },
  {
    category: "Wide-Body Aircraft",
    examples: ["Boeing 787-8", "Airbus A330-200/300"],
    capacity: "200–300 passengers",
    purpose: "These aircraft are suited for longer routes and higher passenger loads. With the new runway, Rodrigues could potentially connect directly to destinations in Europe, Asia, or Australia.",
    icon: <Plane className="h-8 w-8 text-blue-600 -rotate-45" />,
    images: [
      {
        url: "https://www.aerotime.aero/images/Boeing-787-8-airplane.jpg",
        caption: "Boeing 787 Dreamliner"
      },
      {
        url: "https://th.bing.com/th/id/R.5364c33bd60d92ee5bd991accf57d934?rik=6I1oU%2fwgFK5oIg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa7%2fAirbus_A330-200_Emirates_A6-EAL.jpg&ehk=RCaeIgERcp%2f0MKtwLY2%2fFwmaOI8mkz%2bfHX5T2Im4UJ4%3d&risl=&pid=ImgRaw&r=0",
        caption: "Airbus A330"
      }
    ]
  },
  {
    category: "Enhanced Turboprops",
    examples: ["ATR 72-600", "De Havilland Canada Dash 8-Q400"],
    capacity: "70–90 passengers",
    purpose: "Continued use of turboprops for regional routes, especially for destinations within 1,500 kilometers.",
    icon: <Plane className="h-8 w-8 text-blue-600 rotate-90" />,
    images: [
      {
        url: "https://th.bing.com/th/id/OIP.ecAqFE3i3_TQ8ZQw4U0ETAHaE7?rs=1&pid=ImgDetMain",
        caption: "ATR 72-600"
      },
      {
        url: "https://th.bing.com/th/id/R.e404296595142e427933cd744bd023f5?rik=l1Lvtoe8hWnLyw&pid=ImgRaw&r=0",
        caption: "Dash 8-Q400"
      }
    ]
  }
];

export default function AirlinesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our Airlines"
        subtitle="Connecting Rodrigues to the world"
        bgImage="https://images.unsplash.com/photo-1569154941061-e231b4725ef1"
        icon={<Plane className="h-12 w-12" />}
      />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Current Airlines */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Airlines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {airlines.map((airline) => (
                <div key={airline.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1">
                      <img 
                        src={airline.logo}
                        alt={`${airline.name} logo`}
                        className="w-full h-48 object-contain rounded-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">{airline.name}</h3>
                      <p className="text-gray-600 mb-6">{airline.description}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 flex items-center">
                            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                            Routes & Schedules
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {airline.routes.map((route, idx) => (
                              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                                <p className="font-medium text-gray-800">{route.destination}</p>
                                <div className="mt-2 space-y-1 text-sm text-gray-600">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {route.frequency}
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    Flight time: {route.flightTime}
                                  </div>
                                  <div className="flex items-center">
                                    <Plane className="h-4 w-4 mr-2" />
                                    Aircraft: {route.aircraft}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-blue-600 mr-2" />
                              {airline.contact.phone}
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-blue-600 mr-2" />
                              {airline.contact.email}
                            </div>
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 text-blue-600 mr-2" />
                              {airline.contact.website}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Aircraft Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Future Aircraft Types</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              With the planned runway extension to 2,100 meters, Plaine Corail Airport will be able to accommodate 
              a wider range of aircraft types, expanding our connectivity and capacity.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {futureAircraft.map((aircraft) => (
                <div key={aircraft.category} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {aircraft.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                          <p className="text-white text-center text-sm px-2">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {aircraft.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{aircraft.category}</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Examples</p>
                            <p className="font-medium">{aircraft.examples.join(", ")}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Capacity</p>
                            <p className="font-medium">{aircraft.capacity}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Purpose</p>
                            <p className="text-gray-600">{aircraft.purpose}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}