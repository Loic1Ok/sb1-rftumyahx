import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Plane, Menu, X, Home, Info, Users, 
  Briefcase, MapPin, Car, Phone, ChevronDown,
  ChevronRight, MessageSquare, Link2
} from 'lucide-react';

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: <Home className="h-5 w-5" />
  },
  {
    name: 'About',
    path: '/about',
    icon: <Info className="h-5 w-5" />
  },
  {
    name: 'Airlines',
    path: '/airlines',
    icon: <Plane className="h-5 w-5" />
  },
  {
    name: 'Management',
    path: '/management',
    icon: <Users className="h-5 w-5" />
  },
  {
    name: 'Visitors Info',
    path: '/visitors',
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    name: 'Flights',
    path: '/flights',
    icon: <Plane className="h-5 w-5" />,
    submenu: ['Flight Status', 'Arrivals', 'Departures']
  },
  {
    name: 'Services',
    path: '/services',
    icon: <MapPin className="h-5 w-5" />,
    submenu: ['Passenger Services', 'VIP Lounge', 'Dining']
  },
  {
    name: 'Parking',
    path: '/parking',
    icon: <Car className="h-5 w-5" />,
    submenu: ['Short Term', 'Long Term', 'Rates']
  },
  {
    name: 'Useful Links',
    path: '/links',
    icon: <Link2 className="h-5 w-5" />
  },
  {
    name: 'Feedback',
    path: '/feedback',
    icon: <MessageSquare className="h-5 w-5" />
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <Phone className="h-5 w-5" />
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50">
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-3 mb-8">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">ARL</span>
        </Link>

        <div className="space-y-2">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 ${
                  isActive(item.path) ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => item.submenu && setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.submenu && (
                  activeSubmenu === item.name ? 
                    <ChevronDown className="h-4 w-4" /> : 
                    <ChevronRight className="h-4 w-4" />
                )}
              </Link>
              
              {item.submenu && activeSubmenu === item.name && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem}
                      to="#"
                      className="block p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}