import React, { useState } from 'react';
import { MessageCircle, Phone, X, Mail, Send } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-secondary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-opacity-90 transition-all duration-300 animate-bounce-subtle"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-scale-in">
          <h3 className="font-semibold text-primary mb-3">Get in Touch</h3>
          <div className="space-y-2">
            <a
              href="https://wa.me/917448002465?text=Hello%20Medicos%20Desire,%20I%20need%20guidance%20for%20MBBS%20admission."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">WhatsApp Chat</span>
            </a>
            
            <a
              href="tel:+918669084302"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Call Now</span>
            </a>
            
            <a
              href="mailto:medicosdesire@gmail.com"
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Email Us</span>
            </a>
            
            <button className="w-full bg-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};