import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  GraduationCap, 
  DollarSign, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen
} from 'lucide-react';

export const MBBSAbroad: React.FC = () => {
  const countries = [
    {
      name: 'Russia',
      slug: 'russia',
      flag: '🇷🇺',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '45+',
      duration: '6 Years',
      recognition: 'WHO/MCI Approved',
      avgFee: '$3,000-6,000',
      highlights: ['No IELTS Required', 'Quality Education', 'Low Cost of Living', 'European Standard']
    },
    {
      name: 'Georgia',
      slug: 'georgia',
      flag: '🇬🇪',
      image: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '12+',
      duration: '6 Years',
      recognition: 'WHO/MCI Approved',
      avgFee: '$5,000-8,000',
      highlights: ['English Medium', 'EU Standard', 'Safe Environment', 'Modern Infrastructure']
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan',
      flag: '🇺🇿',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '8+',
      duration: '6 Years',
      recognition: 'WHO/MCI Approved',
      avgFee: '$3,500-5,500',
      highlights: ['Affordable Fees', 'Cultural Similarity', 'Quality Education', 'Easy Visa Process']
    },
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan',
      flag: '🇰🇿',
      image: 'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '15+',
      duration: '6 Years',
      recognition: 'WHO/MCI Approved',
      avgFee: '$4,000-7,000',
      highlights: ['Modern Facilities', 'Research Opportunities', 'International Exposure', 'Good Climate']
    },
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan',
      flag: '🇰🇬',
      image: 'https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '6+',
      duration: '6 Years',
      recognition: 'WHO/MCI Approved',
      avgFee: '$2,500-4,500',
      highlights: ['Lowest Fees', 'Mountain Climate', 'Friendly Environment', 'Simple Admission']
    },
    {
      name: 'Nepal',
      slug: 'nepal',
      flag: '🇳🇵',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '10+',
      duration: '5.5 Years',
      recognition: 'WHO/NMC Approved',
      avgFee: '$4,000-7,000',
      highlights: ['Cultural Similarity', 'Close to India', 'English Medium', 'Quality Education']
    },
    {
      name: 'China',
      slug: 'china',
      flag: '🇨🇳',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: '45+',
      duration: '6 Years',
      recognition: 'WHO/NMC Approved',
      avgFee: '$3,000-6,000',
      highlights: ['English Medium', 'Affordable Fees', 'Modern Infrastructure', 'Global Recognition']
    }
  ];

  const advantages = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Education',
      description: 'Significantly lower fees compared to private medical colleges in India'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Recognition',
      description: 'Degrees recognized by WHO, MCI/NMC, and other international bodies'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'English Medium',
      description: 'Most universities offer MBBS programs in English language'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'No Donation',
      description: 'Direct admission without any capitation fees or donations'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Education',
      description: 'High-quality medical education with modern facilities and equipment'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Simple Process',
      description: 'Straightforward admission process with minimal documentation'
    }
  ];

  const eligibilityRequirements = [
    'Completed 12th grade with Physics, Chemistry, and Biology',
    'Minimum 50% marks in PCB (45% for SC/ST/OBC candidates)',
    'NEET qualification (for Indian students)',
    'Age between 17-25 years at the time of admission',
    'Valid passport for international travel'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">MBBS Abroad</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Pursue your medical dreams at world-renowned universities abroad. 
              Quality education, affordable fees, and global recognition await you.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Destination</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our partner countries offering excellent medical education programs 
              with international recognition and career opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div
                key={country.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={country.image}
                    alt={`${country.name} medical education`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{country.flag} {country.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
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
                      <p className="font-semibold text-primary text-xs">{country.recognition}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Annual Fee</p>
                      <p className="font-semibold text-primary text-sm">{country.avgFee}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                    <div className="space-y-1">
                      {country.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/mbbs-abroad/${country.slug}`}
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Explore {country.flag} {country.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Study MBBS Abroad?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the numerous advantages of pursuing your medical degree 
              at international universities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">Eligibility Requirements</h2>
              <p className="text-gray-600 mb-8">
                Basic eligibility criteria for MBBS abroad programs. Requirements may vary 
                slightly by country and university.
              </p>
              <div className="space-y-4">
                {eligibilityRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{requirement}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors mt-8"
              >
                <span>Check Your Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Medical students"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Medical Journey?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get personalized guidance and expert support to secure your admission 
              in top medical universities abroad. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/universities"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Universities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};