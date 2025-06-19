import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { id: 'counseling-guidance', name: 'Counseling & Guidance' },
        { id: 'apostille-attestation', name: 'Apostille & Attestation' },
        { id: 'document-translation', name: 'Document Translation' },
        { id: 'visa-services', name: 'Visa Services' },
        { id: 'forex-travel', name: 'Forex & Travel' },
        { id: 'scholarships-loans', name: 'Scholarships & Loans' }
      ]
    },
    {
      name: 'MBBS Abroad',
      href: '/mbbs-abroad',
      submenu: [
        { id: 'russia', name: '🇷🇺 Russia' },
        { id: 'georgia', name: '🇬🇪 Georgia' },
        { id: 'uzbekistan', name: '🇺🇿 Uzbekistan' },
        { id: 'kazakhstan', name: '🇰🇿 Kazakhstan' },
        { id: 'kyrgyzstan', name: '🇰🇬 Kyrgyzstan' },
        { id: 'nepal', name: '🇳🇵 Nepal' },
        { id: 'china', name: '🇨🇳 China' }
      ]
    },
    { name: 'Universities', href: '/universities' },
    { name: 'Fees', href: '/fees' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 z-50">
              <img
                src="/medicos.png"
                alt="Medicos Desire Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white"
              />
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
                  
                  {/* Desktop Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={`${item.href}/${subItem.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 z-50 relative"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <img
                src="/medicos.png"
                alt="Medicos Desire Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white"
              />
              <span className="text-xl font-bold text-primary">Medicos Desire</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:text-primary hover:bg-accent'
                    }`}
                    onClick={() => !item.submenu && setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={`${item.href}/${subItem.id}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="space-y-3">
              <a
                href="tel:+917448002465"
                className="flex items-center space-x-3 p-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href="https://wa.me/917448002465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};