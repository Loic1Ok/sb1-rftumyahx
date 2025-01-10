import React from 'react';
import { History, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Plaine Corail Airport</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <History className="h-8 w-8 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Our History</h3>
                <p className="text-gray-600">
                  Established in 1943, Plaine Corail Airport has served as the primary gateway to Rodrigues Island. 
                  Originally built as a small airstrip, it has evolved into a modern regional airport serving thousands 
                  of passengers annually.
                   Prior to being renamed in 2017,it was known as Sir Gaëtan Duval Airport, after Gaëtan Duval (1930–1996), a former deputy Mauritian prime minister, who oversaw much of the development of Rodrigues. Airport of Rodrigues Ltd (ARL) was incorporated on 8 February 2000 as a public company.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award className="h-8 w-8 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide safe, efficient, and customer-focused airport services while promoting the sustainable 
                  development of Rodrigues Island and maintaining the highest standards of operational excellence.
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
  );
}