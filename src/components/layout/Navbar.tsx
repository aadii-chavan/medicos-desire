import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        'counseling-guidance',
        'apostille-attestation',
        'document-translation',
        'visa-services',
        'forex-travel',
        'scholarships-loans'
      ]
    },
    {
      name: 'MBBS Abroad',
      href: '/mbbs-abroad',
      submenu: ['russia', 'georgia', 'uzbekistan', 'kazakhstan', 'kyrgyzstan']
    },
    { name: 'Universities', href: '/universities' },
    { name: 'Fees', href: '/fees' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-primary">Medicos Desire</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`${item.href}/${subItem}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200 capitalize"
                          >
                            {subItem.replace('-', ' ')}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 fixed top-16 left-0 right-0 bottom-0 z-40 overflow-y-auto">
            <div className="px-4 py-4 space-y-2 max-h-full">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.href}/${subItem}`}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-accent rounded-lg capitalize transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.replace('-', ' ')}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200 mt-6">
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
};