import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Users, BarChart, Briefcase, Shield } from 'lucide-react';

const departments = [
  {
    head: {
      name: "Gail Leong Kye",
      title: "Airport Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "Over 20 years of aviation management experience, leading airport operations and strategic development."
    },
    staffCount: All department,
    responsibilities: [
      "Overall airport management",
      "Strategic planning",
      "Stakeholder relations",
      "Regulatory compliance"
    ]
  },
  {
    head: {
      name: "Mathilde Gaspard",
      title: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "Leads daily airport operations and safety protocols with expertise in aviation operations management."
    },
    staffCount: 34,
    responsibilities: [
      "Terminal operations",
      "Ground handling",
      "Flight operations coordination",
      "Safety management"
    ]
  },
  {
    head: {
      name: "Armand Perrine",
      title: "Planning and Maintenance Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      description: "Oversees all maintenance activities and infrastructure planning for the airport."
    },
    staffCount: 21,
    responsibilities: [
      "Infrastructure maintenance",
      "Equipment management",
      "Facility planning",
      "Technical support"
    ]
  },
  {
    head: {
      name: "Chantelle Baptiste",
      title: "Finance and Administration Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      description: "Manages financial operations and administrative functions of the airport."
    },
    staffCount: 12,
    responsibilities: [
      "Financial management",
      "Human resources",
      "Administrative operations",
      "Budget planning"
    ]
  }
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Airport Management"
        subtitle="Meet the team behind Plaine Corail Airport's operations"
        bgImage="https://images.unsplash.com/photo-1521791055366-0d553872125f"
        icon={<Users className="h-12 w-12" />}
      />
      <main className="py-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold">Total Staff</p>
                <p className="text-2xl font-bold text-blue-600">92</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Briefcase className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold">Departments</p>
                <p className="text-2xl font-bold text-blue-600">4</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold">Years of Operation</p>
                <p className="text-2xl font-bold text-blue-600">50+</p>
              </div>
            </div>

            {/* Departments */}
            <div className="space-y-12">
              {departments.map((dept, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-1">
                      <img 
                        src={dept.head.image}
                        alt={dept.head.name}
                        className="w-48 h-48 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">{dept.head.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{dept.head.title}</p>
                      <p className="text-gray-600 mb-6">{dept.head.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Users className="h-5 w-5 text-blue-600 mr-2" />
                            Department Size
                          </h4>
                          <p className="text-gray-600">{dept.staffCount} staff members</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                            Key Responsibilities
                          </h4>
                          <ul className="text-gray-600 list-disc list-inside">
                            {dept.responsibilities.map((resp, idx) => (
                              <li key={idx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
