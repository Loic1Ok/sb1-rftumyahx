import React from 'react';
import { X, Phone, Clock, MapPin, Shield, Users, Stethoscope, Flame } from 'lucide-react';

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  contactNumbers: string[];
  operatingHours: string;
  location: string;
  team: string;
  equipment: string[];
  responseTime: string;
}

interface Props {
  service: Service | null;
  onClose: () => void;
}

export default function EmergencyServiceModal({ service, onClose }: Props) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="flex items-center mb-6">
            {service.icon}
            <h2 className="text-2xl font-bold ml-3">{service.title}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <Phone className="h-5 w-5 text-red-600 mr-2" />
                    Emergency Contacts
                  </h3>
                  <ul className="space-y-1">
                    {service.contactNumbers.map((number, idx) => (
                      <li key={idx} className="text-gray-600">{number}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <Clock className="h-5 w-5 text-red-600 mr-2" />
                    Operating Hours
                  </h3>
                  <p className="text-gray-600">{service.operatingHours}</p>
                </div>

                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    Location
                  </h3>
                  <p className="text-gray-600">{service.location}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <Users className="h-5 w-5 text-red-600 mr-2" />
                    Team
                  </h3>
                  <p className="text-gray-600">{service.team}</p>
                </div>

                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <Shield className="h-5 w-5 text-red-600 mr-2" />
                    Equipment
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {service.equipment.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-600">{service.responseTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}