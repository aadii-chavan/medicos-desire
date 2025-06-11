import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  DollarSign, 
  Award, 
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  BookOpen
} from 'lucide-react';

export const CountryPage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  
  // Mock data - in a real app, this would be fetched based on the country parameter
  const countryData: { [key: string]: any } = {
    russia: {
      name: 'Russia',
      flag: '🇷🇺',
      heroImage: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English/Russian',
        recognition: 'WHO, MCI/NMC Approved',
        totalFee: '$18,000 - 36,000',
        livingCost: '$2,400 - 3,600/year'
      },
      advantages: [
        'No IELTS/TOEFL required',
        'Direct admission without entrance exam',
        'World-class medical education',
        'Low cost of living',
        'Safe and secure environment',
        'Clinical training in top hospitals'
      ],
      topUniversities: [
        {
          name: 'Kursk State Medical University',
          location: 'Kursk',
          established: '1935',
          ranking: '#1 in Russia',
          fee: '$4,500/year'
        },
        {
          name: 'Kazan Federal University',
          location: 'Kazan',
          established: '1804',
          ranking: '#2 in Russia',
          fee: '$5,200/year'
        },
        {
          name: 'Saint Petersburg State University',
          location: 'Saint Petersburg',
          established: '1724',
          ranking: '#3 in Russia',
          fee: '$6,000/year'
        }
      ],
      admissionProcess: [
        'Submit application with required documents',
        'Receive invitation letter from university',
        'Apply for student visa',
        'Complete medical examination',
        'Arrange accommodation',
        'Travel to Russia and begin studies'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        {
          question: 'Is NEET required for admission in Russia?',
          answer: 'Yes, NEET qualification is mandatory for Indian students to pursue MBBS in Russia.'
        },
        {
          question: 'What is the medium of instruction?',
          answer: 'Most universities offer MBBS programs in English. Some also provide Russian language courses.'
        },
        {
          question: 'Are the degrees globally recognized?',
          answer: 'Yes, medical degrees from Russian universities are recognized by WHO, MCI/NMC, and other international bodies.'
        }
      ]
    },
    georgia: {
      name: 'Georgia',
      flag: '🇬🇪',
      heroImage: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      overview: {
        duration: '6 Years',
        medium: 'English',
        recognition: 'WHO, MCI/NMC Approved',
        totalFee: '$30,000 - 48,000',
        livingCost: '$3,600 - 4,800/year'
      },
      advantages: [
        'European standard education',
        'English medium instruction',
        'Modern infrastructure',
        'Safe and peaceful environment',
        'Cultural diversity',
        'EU recognition'
      ],
      topUniversities: [
        {
          name: 'Tbilisi State Medical University',
          location: 'Tbilisi',
          established: '1918',
          ranking: '#1 in Georgia',
          fee: '$8,000/year'
        },
        {
          name: 'Batumi Shota Rustaveli State University',
          location: 'Batumi',
          established: '1935',
          ranking: '#2 in Georgia',
          fee: '$6,500/year'
        },
        {
          name: 'University of Georgia',
          location: 'Tbilisi',
          established: '2004',
          ranking: '#3 in Georgia',
          fee: '$7,000/year'
        }
      ],
      admissionProcess: [
        'Submit application with academic documents',
        'Receive provisional admission letter',
        'Apply for student visa',
        'Complete medical and background checks',
        'Confirm admission and pay fees',
        'Travel to Georgia and register'
      ],
      eligibility: [
        'Completed 12th with PCB (50% marks)',
        'NEET qualification',
        'Age between 17-25 years',
        'Valid passport'
      ],
      faqs: [
        {
          question: 'What is the cost of living in Georgia?',
          answer: 'The cost of living in Georgia is quite affordable, ranging from $300-400 per month including accommodation.'
        },
        {
          question: 'Is the climate suitable for Indian students?',
          answer: 'Georgia has a moderate climate similar to northern India, making it comfortable for Indian students.'
        },
        {
          question: 'Can I practice medicine in India after graduation?',
          answer: 'Yes, after clearing the FMGE/NExT exam, you can practice medicine in India.'
        }
      ]
    }
    // Add more countries as needed
  };

  const currentCountry = countryData[country?.toLowerCase() || ''] || countryData.russia;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentCountry.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white animate-slide-up">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{currentCountry.flag}</span>
              <h1 className="text-4xl md:text-6xl font-bold">MBBS in {currentCountry.name}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl">
              Pursue your medical degree at world-class universities with excellent 
              infrastructure and international recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-accent p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Duration</h3>
                  <p className="text-gray-600">{currentCountry.overview.duration}</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Medium</h3>
                  <p className="text-gray-600">{currentCountry.overview.medium}</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Recognition</h3>
                  <p className="text-gray-600">{currentCountry.overview.recognition}</p>
                </div>
                <div className="bg-accent p-4 rounded-lg">
                  <DollarSign className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-primary">Total Fee</h3>
                  <p className="text-gray-600">{currentCountry.overview.totalFee}</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6">Key Advantages</h2>
              <div className="space-y-3">
                {currentCountry.advantages.map((advantage: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-gray-600">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Top Medical Universities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the leading medical universities in {currentCountry.name} offering 
              world-class MBBS programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCountry.topUniversities.map((university: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">{university.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{university.location}</span>
                  </div>
                  <p className="text-sm text-gray-500">Established: {university.established}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ranking:</span>
                    <span className="font-semibold text-primary">{university.ranking}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Fee:</span>
                    <span className="font-semibold text-secondary">{university.fee}</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-light transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Admission Process</h2>
              <div className="space-y-4">
                {currentCountry.admissionProcess.map((step: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Eligibility Criteria</h2>
              <div className="space-y-3">
                {currentCountry.eligibility.map((criteria: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{criteria}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center space-x-2"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about studying MBBS in {currentCountry.name}
            </p>
          </div>
          <div className="space-y-6">
            {currentCountry.faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Study in {currentCountry.name}?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get personalized guidance and complete support for your MBBS admission 
              in {currentCountry.name}. Our experts are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Application</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/universities"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore More Universities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};