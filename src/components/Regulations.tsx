import React from 'react';
import { Shield, AlertTriangle, Check, Info } from 'lucide-react';

const regulations = {
  security: [
    "Valid ID required for all passengers",
    "Arrive 2 hours before international flights",
    "Follow all security screening procedures",
    "Comply with baggage restrictions",
    "No unattended baggage allowed",
    "Liquids must be in containers ≤ 100ml",
    "Sharp objects prohibited in carry-on",
    "Electronic devices must be charged",
    "No prohibited items in restricted areas",
    "Photography restrictions in security zones",
    "Follow staff instructions at all times",
    "Keep boarding pass and ID accessible"
  ],
  safety: [
    "No smoking in terminal buildings",
    "Follow staff instructions at all times",
    "Report unattended baggage",
    "Observe all posted signs and warnings",
    "Keep emergency exits clear",
    "No weapons or dangerous goods",
    "Maintain social distancing when required",
    "Use designated walking areas only",
    "No unauthorized access to restricted areas",
    "Emergency contact: 112"
  ]
};

export default function Regulations() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-white rounded-lg p-4 flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Airport Regulations</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Security Guidelines */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white p-8 rounded-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Security Guidelines</h3>
                  <p className="text-gray-600">Essential security measures for all passengers</p>
                </div>
              </div>

              <div className="space-y-4">
                {regulations.security.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item hover:bg-blue-50 p-2 rounded-lg transition-colors"
                  >
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-600">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Safety Rules */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white p-8 rounded-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Safety Rules</h3>
                  <p className="text-gray-600">Important safety guidelines to follow</p>
                </div>
              </div>

              <div className="space-y-4">
                {regulations.safety.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item hover:bg-blue-50 p-2 rounded-lg transition-colors"
                  >
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-600">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-12 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-amber-50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Important Notice</h4>
                <p className="text-amber-800">
                  Failure to comply with these regulations may result in denied access to airport facilities 
                  or legal consequences. Please ensure you understand and follow all guidelines for a safe journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}