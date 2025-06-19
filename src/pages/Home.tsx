import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Globe, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Star,
  PlayCircle,
  BookOpen,
  Shield,
  Clock,
  Heart
} from 'lucide-react';

export const Home: React.FC = () => {
  const countries = [
    {
      name: 'Russia',
      flag: '🇷🇺',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '50+ Universities',
      duration: '6 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$4,000 - 6,000/year'
    },
    {
      name: 'Georgia',
      flag: '🇬🇪',
      image: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '30+ Universities',
      duration: '6 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$5,000 - 7,000/year'
    },
    {
      name: 'Uzbekistan',
      flag: '🇺🇿',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '20+ Universities',
      duration: '6 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$3,500 - 5,000/year'
    },
    {
      name: 'Kazakhstan',
      flag: '🇰🇿',
      image: 'https://images.pexels.com/photos/5452295/pexels-photo-5452295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '15+ Universities',
      duration: '6 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$4,000 - 6,000/year'
    },
    {
      name: 'Kyrgyzstan',
      flag: '🇰🇬',
      image: 'https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '10+ Universities',
      duration: '6 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$3,000 - 5,000/year'
    },
    {
      name: 'Nepal',
      flag: '🇳🇵',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '10+ Universities',
      duration: '5.5 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$4,000 - 7,000/year'
    },
    {
      name: 'China',
      flag: '🇨🇳',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '45+ Universities',
      duration: '6 Years',
      recognition: 'WHO & NMC Approved',
      avgFee: '$3,000 - 6,000/year'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Trusted Guidance',
      desc: '7+ years of experience with 3750+ successful students placed in top medical universities.'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Global Network',
      desc: 'Strong partnerships with 50+ medical universities across multiple countries.'
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: '100% Success Rate',
      desc: 'Guaranteed admission and visa approval with our comprehensive support.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Personal Care',
      desc: 'Dedicated counselors provide personalized guidance throughout your journey.'
    }
  ];

  const admissionProcess = [
    { step: 1, title: 'Free Counseling', desc: 'Initial consultation to understand your goals' },
    { step: 2, title: 'University Selection', desc: 'Choose the best university based on your profile' },
    { step: 3, title: 'Document Preparation', desc: 'Complete assistance with application documents' },
    { step: 4, title: 'Admission Processing', desc: 'Submit applications and track progress' },
    { step: 5, title: 'Visa Assistance', desc: 'Complete visa support and documentation' },
    { step: 6, title: 'Pre-Departure', desc: 'Orientation and travel assistance' }
  ];

  const testimonials = [
    { 
      name: 'Priya Sharma', 
      university: 'Kursk State Medical University, Russia',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Medicos Desire made my dream of studying MBBS abroad a reality. Their guidance was exceptional throughout the process.'
    },
    { 
      name: 'Rahul Patel', 
      university: 'Tbilisi State Medical University, Georgia',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'From application to visa, everything was handled professionally. I highly recommend their services to aspiring doctors.'
    },
    { 
      name: 'Ananya Singh', 
      university: 'Tashkent Medical Academy, Uzbekistan',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'The team at Medicos Desire is incredibly knowledgeable and supportive. They guided me every step of the way.'
    }
  ];

  // Only show Russia, China, Nepal in the Start Your MBBS Journey section
  const journeyCountries = [
    countries.find(c => c.name === 'Russia'),
    countries.find(c => c.name === 'China'),
    countries.find(c => c.name === 'Nepal')
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary min-h-screen flex items-center pt-0 mt-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Your Dream of
                <span className="text-secondary block">Studying MBBS</span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-lg">
                Expert guidance for MBBS admissions in India and abroad. 
                Join 3750+ successful students who trusted us with their medical career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
                  onClick={() => {
                    const el = document.getElementById('mbbs-journey');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center"
                >
                  Free Counseling
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="/hero.png"
                alt="Medical students studying"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary">3750+</div>
                  <div className="text-sm text-gray-600">
                    <div>Students</div>
                    <div>Successfully Placed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Background */}
      <section className="py-20 bg-accent relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">About Medicos Desire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are India's leading medical education consultancy, dedicated to helping 
              aspiring doctors achieve their dreams through expert guidance and comprehensive support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Partnerships with top medical universities across Russia, Georgia, Uzbekistan, and more.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Proven Success</h3>
              <p className="text-gray-600">
                7+ years of experience with 100% success rate in visa approvals and university admissions.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Personal Care</h3>
              <p className="text-gray-600">
                Dedicated counselors provide personalized guidance from admission to graduation.
              </p>
            </div>
          </div>
          <div className="text-center mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">3750+</div>
              <div className="text-gray-600">Students Successfully Placed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="mbbs-journey" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Start Your MBBS Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our partner countries offering world-class medical education 
              at affordable costs with excellent career prospects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeyCountries.map((country, index) => (
              <div
                key={country.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <img
                    src={country.image}
                    alt={`${country.name} medical education`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{country.flag} {country.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Universities</p>
                      <p className="font-semibold text-primary">{country.universities}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-primary">{country.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Recognition</p>
                      <p className="font-semibold text-primary">{country.recognition}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Average Fee</p>
                      <p className="font-semibold text-primary">{country.avgFee}</p>
                    </div>
                  </div>
                  <Link
                    to={`/mbbs-abroad/${country.name.toLowerCase()}`}
                    className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
                  >
                    Explore {country.flag} {country.name}
                  </Link>
                </div>
              </div>
            ))}
            {/* Explore more countries card (mobile/tablet only) */}
            <div className="col-span-1 flex justify-center items-center lg:hidden">
              <div
                className="group bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto flex flex-col items-center justify-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${journeyCountries.length * 0.1}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Globe className="w-16 h-16 mb-4 group-hover:animate-spin-slow text-primary" />
                  <h3 className="text-2xl font-bold mb-2 text-primary group-hover:scale-105 transition-transform duration-500">Explore more countries</h3>
                  <p className="mb-6 text-center text-lg text-secondary group-hover:scale-105 transition-transform duration-500">Discover more MBBS destinations and find the perfect fit for your medical journey.</p>
                  <Link
                    to="/mbbs-abroad"
                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105 group-hover:bg-secondary group-hover:text-white group-hover:underline group-hover:shadow-lg"
                  >
                    View All Countries
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/5 to-accent/5 rounded-full translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
          {/* Explore more countries card (centered on desktop) */}
          <div className="hidden lg:flex justify-center mt-8">
            <div
              className="group bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto flex flex-col items-center justify-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${journeyCountries.length * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <Globe className="w-16 h-16 mb-4 group-hover:animate-spin-slow text-primary" />
                <h3 className="text-2xl font-bold mb-2 text-primary group-hover:scale-105 transition-transform duration-500">Explore more countries</h3>
                <p className="mb-6 text-center text-lg text-secondary group-hover:scale-105 transition-transform duration-500">Discover more MBBS destinations and find the perfect fit for your medical journey.</p>
                <Link
                  to="/mbbs-abroad"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105 group-hover:bg-secondary group-hover:text-white group-hover:underline group-hover:shadow-lg"
                >
                  View All Countries
                </Link>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/5 to-accent/5 rounded-full translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose Medicos Desire?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We provide comprehensive support and guidance to ensure your success 
              in pursuing medical education abroad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process with Background */}
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
            <h2 className="text-4xl font-bold text-primary mb-4">Our Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step approach to ensure smooth and successful admission 
              to your dream medical university.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who are now pursuing their medical dreams 
              at top universities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.university}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Medical Journey?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get expert guidance and personalized counseling to secure your admission 
              in top medical universities. Book your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};