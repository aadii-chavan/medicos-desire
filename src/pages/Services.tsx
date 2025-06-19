import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  Languages, 
  Plane, 
  CreditCard, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'counseling-guidance',
      title: 'Counseling & Guidance',
      icon: <Users className="w-12 h-12" />,
      description: 'Expert educational counseling to help you choose the right medical university and course.',
      features: ['Personalized career counseling', 'University selection guidance', 'Course selection advice', 'Future career planning'],
      color: 'bg-blue-500',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'apostille-attestation',
      title: 'Apostille & Attestation',
      icon: <Shield className="w-12 h-12" />,
      description: 'Complete document verification and authentication services for international admissions.',
      features: ['Document verification', 'Apostille services', 'Embassy attestation', 'Certificate authentication'],
      color: 'bg-green-500',
      bgImage: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'document-translation',
      title: 'Document Translation',
      icon: <Languages className="w-12 h-12" />,
      description: 'Professional translation services for all your academic and personal documents.',
      features: ['Certified translations', 'Multiple language support', 'Academic document translation', 'Legal document translation'],
      color: 'bg-purple-500',
      bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'visa-services',
      title: 'Visa Services',
      icon: <Plane className="w-12 h-12" />,
      description: 'Complete visa application support and guidance for studying abroad.',
      features: ['Visa application assistance', 'Document preparation', 'Interview preparation', 'Visa tracking'],
      color: 'bg-orange-500',
      bgImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'forex-travel',
      title: 'Forex & Travel Assistance',
      icon: <CreditCard className="w-12 h-12" />,
      description: 'Foreign exchange and travel arrangements for international students.',
      features: ['Currency exchange', 'Travel booking', 'Insurance assistance', 'Airport transfers'],
      color: 'bg-teal-500',
      bgImage: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 'scholarships-loans',
      title: 'Scholarships & Education Loans',
      icon: <GraduationCap className="w-12 h-12" />,
      description: 'Financial assistance and guidance for scholarships and education loans.',
      features: ['Scholarship applications', 'Education loan guidance', 'Financial planning', 'Grant applications'],
      color: 'bg-red-500',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const processSteps = [
    { step: 1, title: 'Initial Consultation', desc: 'Free consultation to understand your needs' },
    { step: 2, title: 'Service Planning', desc: 'Customized service plan based on your requirements' },
    { step: 3, title: 'Documentation', desc: 'Preparation and verification of all required documents' },
    { step: 4, title: 'Processing', desc: 'Professional handling of all procedures and applications' },
    { step: 5, title: 'Follow-up', desc: 'Continuous support and updates throughout the process' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive support services to guide you through every step of your 
              medical education journey, from admission to graduation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90"></div>
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-secondary transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Background */}
      <section className="py-20 bg-accent relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to ensure efficient and effective service delivery 
              for all our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We provide comprehensive, reliable, and professional services 
              tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Quick Processing',
                description: 'Fast and efficient service delivery with minimal waiting time'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Reliable',
                description: 'Complete security and confidentiality of your documents and information'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 expert assistance and guidance throughout the process'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Need Professional Assistance?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get expert help with all your medical education requirements. 
              Our team is ready to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};