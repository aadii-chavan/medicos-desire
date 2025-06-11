import React, { useState } from 'react';
import { MapPin, Calendar, Award, Users, Search, Filter, ExternalLink } from 'lucide-react';

export const Universities: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const universities = [
    {
      id: 1,
      name: 'Kursk State Medical University',
      country: 'Russia',
      location: 'Kursk',
      established: '1935',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Russia',
      fee: '$4,500/year',
      duration: '6 Years',
      highlights: ['No IELTS Required', 'English Medium', 'Modern Infrastructure', 'Clinical Training']
    },
    {
      id: 2,
      name: 'Tbilisi State Medical University',
      country: 'Georgia',
      location: 'Tbilisi',
      established: '1918',
      image: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Georgia',
      fee: '$8,000/year',
      duration: '6 Years',
      highlights: ['European Standard', 'English Medium', 'Research Opportunities', 'International Faculty']
    },
    {
      id: 3,
      name: 'Tashkent Medical Academy',
      country: 'Uzbekistan',
      location: 'Tashkent',
      established: '1919',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Uzbekistan',
      fee: '$3,500/year',
      duration: '6 Years',
      highlights: ['Affordable Fees', 'Quality Education', 'Cultural Similarity', 'Easy Admission']
    },
    {
      id: 4,
      name: 'Kazakh National Medical University',
      country: 'Kazakhstan',
      location: 'Almaty',
      established: '1931',
      image: 'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Kazakhstan',
      fee: '$5,500/year',
      duration: '6 Years',
      highlights: ['Modern Facilities', 'Research Focus', 'International Programs', 'Good Climate']
    },
    {
      id: 5,
      name: 'Kyrgyz State Medical Academy',
      country: 'Kyrgyzstan',
      location: 'Bishkek',
      established: '1939',
      image: 'https://images.pexels.com/photos/5452280/pexels-photo-5452280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#1 in Kyrgyzstan',
      fee: '$3,000/year',
      duration: '6 Years',
      highlights: ['Lowest Fees', 'Mountain Climate', 'Friendly Environment', 'Simple Process']
    },
    {
      id: 6,
      name: 'Kazan Federal University',
      country: 'Russia',
      location: 'Kazan',
      established: '1804',
      image: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      recognition: 'WHO, MCI/NMC Approved',
      ranking: '#2 in Russia',
      fee: '$5,200/year',
      duration: '6 Years',
      highlights: ['Historic University', 'Research Excellence', 'Modern Labs', 'International Recognition']
    }
  ];

  const filteredUniversities = universities.filter(uni => {
    const matchesCountry = selectedCountry === 'all' || uni.country.toLowerCase() === selectedCountry;
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  const countries = ['all', 'russia', 'georgia', 'uzbekistan', 'kazakhstan', 'kyrgyzstan'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Medical Universities</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore top medical universities worldwide offering quality MBBS programs 
              with international recognition and excellent career prospects.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities or cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country === 'all' ? 'All Countries' : country.charAt(0).toUpperCase() + country.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-gray-600">
              Showing {filteredUniversities.length} universities
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university, index) => (
              <div
                key={university.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {university.country}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {university.ranking}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {university.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{university.location}, {university.country}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Established</span>
                      </div>
                      <p className="font-semibold text-primary">{university.established}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Award className="w-4 h-4" />
                        <span>Duration</span>
                      </div>
                      <p className="font-semibold text-primary">{university.duration}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Recognition</p>
                    <p className="text-sm font-medium text-secondary">{university.recognition}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Key Highlights</p>
                    <div className="flex flex-wrap gap-1">
                      {university.highlights.slice(0, 2).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {university.highlights.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{university.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Annual Fee</p>
                      <p className="text-lg font-bold text-secondary">{university.fee}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-light transition-colors">
                      Apply Now
                    </button>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No universities found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCountry('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-primary hover:text-secondary font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Our University Network</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Strong partnerships with leading medical universities worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Partner Universities' },
              { number: '15+', label: 'Countries' },
              { number: '5000+', label: 'Students Placed' },
              { number: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Find Your Perfect University</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get personalized university recommendations based on your profile, 
              preferences, and career goals. Our experts are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get University Recommendations
              </button>
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