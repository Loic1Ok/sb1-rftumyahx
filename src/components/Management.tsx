import React from 'react';
import { Users } from 'lucide-react';

export default function Management() {
  return (
    <section id="management" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Users className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Airport Management</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Airport Director"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
Gail Leong Kye
</h3>
            <p className="text-blue-600 mb-4">Airport Manager</p>
            <p className="text-gray-600">Over 20 years of aviation management experience.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              alt="Operations Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
Mathilde Gaspard
</h3>
            <p className="text-blue-600 mb-4">Operations Manager</p>
            <p className="text-gray-600">Leads daily airport operations and safety protocols.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
              alt="Technical Director"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
Armand Perrine
</h3>
            <p className="text-blue-600 mb-4">Planning and maintenance manager</p>
            <p className="text-gray-600">In charge of the well going of the building and everything that is related to the aiport.</p>
          </div>

          <div className="bg-grey-50 p-6 rounded-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                alt="Finance Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
            <h3 className="text-xl font-semibold mb-2">Chantelle Baptiste</h3>
            <p className="text-blue-600 mb-4">Finance and Administration Manager</p>
            <p className="text-grey-600">In charge of the finance department and the administration department.</p>
          </div>
        </div>
      </div>
    </section>
  );
}