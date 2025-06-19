import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'General Information',
      faqs: [
        {
          question: 'What is Medicos Desire?',
          answer: 'Medicos Desire is a leading medical education consultancy that helps students secure admissions in MBBS and other medical programs in India and abroad. We provide comprehensive guidance from counseling to visa assistance.'
        },
        {
          question: 'How long has Medicos Desire been operating?',
          answer: 'We have been operating for over 15 years, helping thousands of students achieve their dream of becoming doctors. Our experience and expertise make us a trusted partner in medical education.'
        },
        {
          question: 'What services do you provide?',
          answer: 'We provide counseling & guidance, apostille & attestation, document translation, visa services, forex & travel assistance, and scholarships & education loans support.'
        }
      ]
    },
    {
      category: 'MBBS Abroad',
      faqs: [
        {
          question: 'Which countries do you offer MBBS programs in?',
          answer: 'We offer MBBS programs in Russia, Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan, and several other countries with WHO and MCI/NMC recognized universities.'
        },
        {
          question: 'Is NEET required for MBBS abroad?',
          answer: 'Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS abroad and want to practice medicine in India after graduation.'
        },
        {
          question: 'What is the duration of MBBS abroad?',
          answer: 'The duration of MBBS programs abroad is typically 6 years, which includes 5 years of academic study and 1 year of internship/clinical training.'
        },
        {
          question: 'Are the degrees globally recognized?',
          answer: 'Yes, all universities we partner with are recognized by WHO, MCI/NMC, and other international medical bodies, ensuring global recognition of your degree.'
        }
      ]
    },
    {
      category: 'Admission Process',
      faqs: [
        {
          question: 'What are the eligibility criteria for MBBS abroad?',
          answer: 'Students must have completed 12th grade with Physics, Chemistry, and Biology with minimum 50% marks (45% for SC/ST/OBC), qualified NEET, and be between 17-25 years of age.'
        },
        {
          question: 'When do admissions start?',
          answer: 'Admissions typically start in July-August for the September intake. However, some universities also have February intake. We recommend starting the process 6 months in advance.'
        },
        {
          question: 'What documents are required for admission?',
          answer: 'Required documents include 10th & 12th mark sheets, NEET scorecard, passport, birth certificate, medical certificate, and passport-size photographs. All documents need to be apostilled.'
        },
        {
          question: 'How long does the admission process take?',
          answer: 'The complete admission process, including document preparation, university application, and visa processing, typically takes 2-3 months.'
        }
      ]
    },
    {
      category: 'Fees and Financial',
      faqs: [
        {
          question: 'What is the fee structure for MBBS abroad?',
          answer: 'Fees vary by country and university, ranging from $2,500 to $9,000 per year. This includes tuition fees, but accommodation and living expenses are additional.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No, we maintain complete transparency in our fee structure. All costs including tuition, accommodation, visa, and our service charges are clearly mentioned upfront.'
        },
        {
          question: 'Do you help with education loans?',
          answer: 'Yes, we provide guidance and assistance for education loans from various banks and financial institutions. We help with documentation and application processes.'
        },
        {
          question: 'Are scholarships available?',
          answer: 'Yes, many universities offer merit-based scholarships. We help identify and apply for scholarships based on your academic performance and profile.'
        }
      ]
    },
    {
      category: 'Visa and Travel',
      faqs: [
        {
          question: 'Do you help with visa processing?',
          answer: 'Yes, we provide complete visa assistance including document preparation, application submission, and interview preparation. Our visa success rate is 100%.'
        },
        {
          question: 'How long does visa processing take?',
          answer: 'Visa processing typically takes 15-30 days depending on the country. We ensure all documents are properly prepared to avoid delays.'
        },
        {
          question: 'Do you arrange travel and accommodation?',
          answer: 'Yes, we provide complete travel assistance including flight bookings, airport transfers, and accommodation arrangements. We ensure a smooth transition for students.'
        }
      ]
    },
    {
      category: 'After Graduation',
      faqs: [
        {
          question: 'Can I practice medicine in India after graduating abroad?',
          answer: 'Yes, after completing MBBS abroad, you need to clear the FMGE/NExT exam to practice medicine in India. We provide guidance for this process as well.'
        },
        {
          question: 'What are the career opportunities after MBBS abroad?',
          answer: 'Graduates can practice medicine globally, pursue postgraduate studies (MD/MS), work in hospitals, start their own practice, or work in medical research and academia.'
        },
        {
          question: 'Do you provide post-graduation support?',
          answer: 'Yes, we provide ongoing support even after graduation, including guidance for licensing exams, job placements, and further education opportunities.'
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap((category, categoryIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      id: categoryIndex * 100 + faqIndex,
      category: category.category
    }))
  );

  const filteredFAQs = allFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about MBBS abroad, admission processes, 
              and our services. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative animate-slide-up">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for questions, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {searchTerm && (
            <p className="mt-4 text-gray-600 text-center">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          )}
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!searchTerm ? (
            // Show by categories when not searching
            faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 animate-slide-up">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqId = categoryIndex * 100 + faqIndex;
                    return (
                      <div
                        key={faqId}
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
                        style={{ animationDelay: `${faqIndex * 0.1}s` }}
                      >
                        <button
                          onClick={() => toggleFAQ(faqId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-primary pr-4">
                            {faq.question}
                          </h3>
                          {openFAQ === faqId ? (
                            <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                          )}
                        </button>
                        {openFAQ === faqId && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            // Show search results
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="pr-4">
                      <span className="text-sm text-secondary font-medium">{faq.category}</span>
                      <h3 className="text-lg font-semibold text-primary">
                        {faq.question}
                      </h3>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                  <p className="text-gray-500">
                    Try searching with different keywords or{' '}
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-primary hover:text-secondary font-medium"
                    >
                      browse all FAQs
                    </button>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Can't find the answer you're looking for? Our expert counselors are here 
              to help you with personalized guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors inline-flex items-center justify-center"
              >
                Ask a Question
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Links</h2>
            <p className="text-gray-600">Explore more resources and information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'MBBS Abroad Guide',
                description: 'Comprehensive guide to studying medicine abroad',
                link: '/mbbs-abroad'
              },
              {
                title: 'University Rankings',
                description: 'Top medical universities and their rankings',
                link: '/universities'
              },
              {
                title: 'Fee Structure',
                description: 'Detailed fee information for all countries',
                link: '/fees'
              }
            ].map((link, index) => (
              <div
                key={index}
                className="bg-accent p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <a
                  href={link.link}
                  className="text-secondary font-medium hover:text-primary transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};