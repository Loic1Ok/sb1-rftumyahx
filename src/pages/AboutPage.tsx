import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { History, Award, Plane, Building2, Car, Construction, Users, Shield, Briefcase, Target, Globe, Banknote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="About Our Airport"
        subtitle="Discover the history and vision behind Plaine Corail Airport"
        bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
        icon={<History className="h-12 w-12" />}
      />
      <main className="py-16">
        {/* History and Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <History className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our History</h3>
                    <p className="text-gray-600">
                      Established in 1943, Plaine Corail Airport has served as the primary gateway to Rodrigues Island. 
                      Originally built as a small airstrip, it has evolved into a modern regional airport serving thousands 
                      of passengers annually. Prior to being renamed in 2017, it was known as Sir Gaëtan Duval Airport, 
                      after Gaëtan Duval (1930–1996), a former deputy Mauritian prime minister, who oversaw much of the 
                      development of Rodrigues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Plane className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">History and Development</h3>
                    <p className="text-gray-600">
                      Inaugurated in 1972, the airport initially featured a six-seater Piper PA-31 Navajo aircraft connecting 
                      Rodrigues to Mauritius. This was later upgraded to a Twin Otter with a 16-passenger capacity in 1975. 
                      Subsequent infrastructure enhancements have enabled the apron to accommodate two ATR 72-500 aircraft.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Banknote className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recent Developments</h3>
                    <p className="text-gray-600">
                      In 2024, the World Bank and the European Union co-financed a significant project to construct a new 
                      runway and associated facilities at the airport. The project received funding through a loan of $184 
                      million from the World Bank and a grant of approximately €16 million from the EU. The primary goal 
                      is to enhance air connectivity while promoting sustainable development, including the construction of 
                      a 2,100-meter-long runway to accommodate larger aircraft and increase airport capacity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Target className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide safe, efficient, and customer-focused airport services while promoting the sustainable 
                      development of Rodrigues Island and maintaining the highest standards of operational excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-8 w-8 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the leading regional airport in the Indian Ocean, connecting Rodrigues to the world while 
                      maintaining our commitment to sustainability and community development.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://sundaytimesmauritius.com/wp-content/uploads/2019/08/rodrigues-airport-6.jpg"
                  alt="Aerial view of Plaine Corail Airport"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the existing sections remain unchanged */}
        {/* Key Facts Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Facts</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Plane className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Annual Passengers</h3>
                <p className="text-2xl font-bold text-blue-600">80,000+</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Terminal Size</h3>
                <p className="text-2xl font-bold text-blue-600">2,500 m²</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Staff Members</h3>
                <p className="text-2xl font-bold text-blue-600">90+</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Years of Service</h3>
                <p className="text-2xl font-bold text-blue-600">50+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Development Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Future Development</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Construction className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Expansion Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• New international terminal building</li>
                  <li>• Runway extension to 2,100 meters</li>
                  <li>• Enhanced cargo facilities</li>
                  <li>• Modern air traffic control tower</li>
                  <li>• Sustainable energy initiatives</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Award className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Strategic Goals</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Increase international connectivity</li>
                  <li>• Enhance passenger experience</li>
                  <li>• Implement smart airport technologies</li>
                  <li>• Achieve carbon neutrality by 2030</li>
                  <li>• Strengthen regional partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Community Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Economic Growth</h3>
                <p className="text-gray-600">
                  As a major employer and economic driver, we contribute significantly to the island's 
                  development through job creation, business opportunities, and tourism growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
                <p className="text-gray-600">
                  We are committed to sustainable practices, including waste reduction, energy efficiency, 
                  and the preservation of local ecosystems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Social Responsibility</h3>
                <p className="text-gray-600">
                  Through educational programs, community partnerships, and cultural initiatives, we actively 
                  support the social development of Rodrigues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}