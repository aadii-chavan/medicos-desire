import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  User,
  BookOpen
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Offices',
      details: [
        'Head Office - Russia',
        'Head Office - Uzbekistan',
        'Head Office - Pune',
        'Head Office - Buldhana'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: ['+91 8669084302', '+91 7448002465']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      details: ['medicosdesire@gmail.com', 'support@medicosdesire.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM', 'Emergency: 24/7 Available']
    }
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp Chat',
      description: 'Get instant responses to your queries',
      action: 'Chat Now',
      color: 'bg-green-500',
      link: 'https://wa.me/917448002465?text=Hello%20Medicos%20Desire,%20I%20need%20guidance%20for%20MBBS%20admission.%20Please%20help%20me%20with%20the%20process%20and%20requirements.'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Schedule Call',
      description: 'Book a consultation with our experts',
      action: 'Book Call',
      color: 'bg-blue-500',
      link: 'tel:8669084302'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Office Visit',
      description: 'Visit our office for detailed guidance',
      action: 'Book Visit',
      color: 'bg-purple-500',
      link: 'https://maps.app.goo.gl/b6L6bM72S3bLPqrGA'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to start your medical journey? Get in touch with our expert counselors 
              for personalized guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-4">Get Instant Help</h2>
            <p className="text-gray-600">Choose the most convenient way to reach us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{action.title}</h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <a
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors inline-block"
                >
                  {action.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Interest
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Select Course</option>
                          <option value="mbbs">MBBS</option>
                          <option value="md">MD</option>
                          <option value="bds">BDS</option>
                          <option value="nursing">Nursing</option>
                          <option value="pharmacy">Pharmacy</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select Country</option>
                      <option value="russia">Russia</option>
                      <option value="georgia">Georgia</option>
                      <option value="uzbekistan">Uzbekistan</option>
                      <option value="kazakhstan">Kazakhstan</option>
                      <option value="kyrgyzstan">Kyrgyzstan</option>
                      <option value="india">India</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-light transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-gray-600">Find us at our convenient locations</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.383151677305!2d76.1668844!3d20.5314983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda1f174d761aa7%3A0x704d9b7ac99a60a7!2sMedicos%20Desire!5e0!3m2!1sen!2sin!4v1750271789630!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Medicos Desire Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Don't wait! Get expert guidance and take the first step towards 
              your medical career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8669084302"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/917448002465"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};