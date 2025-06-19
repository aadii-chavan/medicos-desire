import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Shield
} from 'lucide-react';
import { FloatingNotificationButton } from '../common/FloatingNotificationButton';
import { FloatingContact } from '../common/FloatingContact';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/medicos.png"
                alt="Medicos Desire Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white"
              />
              <span className="text-2xl font-bold">Medicos Desire</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for MBBS admissions in India and abroad. We guide students 
              to achieve their dreams of becoming doctors with expert counseling and comprehensive support.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/medicosdesire/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/medicosdesire/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="https://x.com/DesireMedicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.youtube.com/c/MedicosDesire" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/mbbs-abroad" className="text-gray-300 hover:text-secondary transition-colors">MBBS Abroad</Link></li>
              <li><Link to="/universities" className="text-gray-300 hover:text-secondary transition-colors">Universities</Link></li>
              <li><Link to="/fees" className="text-gray-300 hover:text-secondary transition-colors">Fees Structure</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Head Offices in Russia, Uzbekistan, Pune & Buldhana
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-gray-300">+91 7448002465</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-gray-300">+91 8669084302</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-gray-300">medicosdesire@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-gray-300">support@medicosdesire.in</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col items-center">
          <div className="text-gray-400 text-sm text-center space-y-1">
            <p>© {currentYear} Medicos Desire. Website by Aditya Chavan.</p>
            <p>Design & code © Aditya Chavan.</p>
            <p>Medicos Desire is licensed to use and publish this project.</p>
          </div>
          <div className="flex space-x-6 mt-6">
            <Link to="/privacy" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/admin-login" className="text-gray-400 hover:text-secondary text-sm transition-colors flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>Admin Login</span>
            </Link>
          </div>
        </div>

        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
          <div className="pointer-events-auto mb-4">
            <FloatingNotificationButton />
          </div>
          <div className="pointer-events-auto">
            <FloatingContact />
          </div>
        </div>
      </div>
    </footer>
  );
};