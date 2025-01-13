import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Lock, ArrowRight, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-24 pb-12 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <pattern id="grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Plane className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">ARL</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span>+230 832 0019</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span>info@plainecorail.mu</span>
              </div>
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span>Plain Corail, Rodrigues Island</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/plainecorailairport" },
                  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/plainecorail" },
                  { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/plainecorailairport" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/plainecorail-airport" },
                  { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/plainecorailairport" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Flight Information", path: "/flights" },
                { name: "Services", path: "/services" },
                { name: "Parking", path: "/parking" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "FAQ", path: "/faq" },
                { name: "Careers", path: "/careers" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Plaine Corail Airport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
