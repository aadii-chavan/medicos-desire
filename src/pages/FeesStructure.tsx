import React, { useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeesStructure: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const feeData = [
    {
      country: 'Russia',
      universities: [
        { name: 'Kursk State Medical University', fee: '$4,500', duration: '6 years', total: '$27,000' },
        { name: 'Kazan Federal University', fee: '$5,200', duration: '6 years', total: '$31,200' },
        { name: 'Saint Petersburg State University', fee: '$6,000', duration: '6 years', total: '$36,000' },
        { name: 'Moscow State University', fee: '$7,500', duration: '6 years', total: '$45,000' }
      ]
    },
    {
      country: 'Georgia',
      universities: [
        { name: 'Tbilisi State Medical University', fee: '$8,000', duration: '6 years', total: '$48,000' },
        { name: 'Batumi Shota Rustaveli State University', fee: '$6,500', duration: '6 years', total: '$39,000' },
        { name: 'University of Georgia', fee: '$7,000', duration: '6 years', total: '$42,000' },
        { name: 'European University', fee: '$9,000', duration: '6 years', total: '$54,000' }
      ]
    },
    {
      country: 'Uzbekistan',
      universities: [
        { name: 'Central Asian Medical University', fee: '$3,500', duration: '6 years', total: '$21,000' },
        { name: 'Tashkent Medical Academy', fee: '$3,500', duration: '6 years', total: '$21,000' },
        { name: 'Samarkand State Medical Institute', fee: '$4,000', duration: '6 years', total: '$24,000' },
        { name: 'Andijan State Medical Institute', fee: '$3,200', duration: '6 years', total: '$19,200' }
      ]
    },
    {
      country: 'Kazakhstan',
      universities: [
        { name: 'Kazakh National Medical University', fee: '$5,500', duration: '6 years', total: '$33,000' },
        { name: 'South Kazakhstan Medical Academy', fee: '$4,800', duration: '6 years', total: '$28,800' },
        { name: 'West Kazakhstan Medical University', fee: '$4,200', duration: '6 years', total: '$25,200' }
      ]
    },
    {
      country: 'Kyrgyzstan',
      universities: [
        { name: 'Kyrgyz State Medical Academy', fee: '$3,000', duration: '6 years', total: '$18,000' },
        { name: 'International School of Medicine', fee: '$4,500', duration: '6 years', total: '$27,000' },
        { name: 'Osh State University', fee: '$2,800', duration: '6 years', total: '$16,800' }
      ]
    }
  ];

  const filteredData = feeData.filter(countryData => {
    if (selectedCountry === 'all') return true;
    return countryData.country.toLowerCase() === selectedCountry;
  }).map(countryData => ({
    ...countryData,
    universities: countryData.universities.filter(uni =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(countryData => countryData.universities.length > 0);

  const additionalCosts = [
    { item: 'Accommodation (per year)', cost: '$1,200 - $2,400' },
    { item: 'Food & Living (per year)', cost: '$1,800 - $3,600' },
    { item: 'Visa Processing', cost: '$200 - $500' },
    { item: 'Medical Insurance', cost: '$150 - $300' },
    { item: 'Travel Expenses', cost: '$800 - $1,500' },
    { item: 'Books & Study Materials', cost: '$300 - $600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fees Structure</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Transparent and detailed fee information for MBBS programs across 
              different countries and universities.
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
                  placeholder="Search universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Countries</option>
                  <option value="russia">Russia</option>
                  <option value="georgia">Georgia</option>
                  <option value="uzbekistan">Uzbekistan</option>
                  <option value="kazakhstan">Kazakhstan</option>
                  <option value="kyrgyzstan">Kyrgyzstan</option>
                </select>
              </div>
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </section>

      {/* Fee Tables */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredData.map((countryData, countryIndex) => (
            <div key={countryData.country} className="mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                {countryData.country} - MBBS Fee Structure
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">University Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Annual Fee (USD)</th>
                      <th className="px-6 py-4 text-left font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left font-semibold">Total Fee (USD)</th>
                      <th className="px-6 py-4 text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryData.universities.map((university, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{university.name}</td>
                        <td className="px-6 py-4 text-secondary font-semibold">{university.fee}</td>
                        <td className="px-6 py-4 text-gray-600">{university.duration}</td>
                        <td className="px-6 py-4 text-primary font-semibold">{university.total}</td>
                        <td className="px-6 py-4">
                          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                            Apply Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Additional Costs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apart from tuition fees, here are the additional costs you should consider 
              when planning your MBBS abroad budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCosts.map((cost, index) => (
              <div
                key={index}
                className="bg-accent p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{cost.item}</h3>
                <p className="text-2xl font-bold text-secondary">{cost.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Financial Assistance Available</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  We understand that financing medical education can be challenging. 
                  That's why we offer comprehensive support to help you explore various 
                  financial options.
                </p>
                <ul className="space-y-2">
                  <li>• Education loan guidance and assistance</li>
                  <li>• Scholarship opportunities and applications</li>
                  <li>• Financial planning and budgeting support</li>
                  <li>• Government and institutional grants</li>
                  <li>• Flexible payment options</li>
                </ul>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Need Financial Help?</h3>
                <p className="text-gray-600 mb-6">
                  Our financial advisors can help you explore the best funding options 
                  for your medical education.
                </p>
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center justify-center"
                >
                  Schedule Financial Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Medical Journey?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get detailed fee information and personalized financial guidance. 
              Our experts will help you plan your budget effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Detailed Fee Structure
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
                Financial Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};