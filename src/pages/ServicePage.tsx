import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  Languages, 
  Plane, 
  CreditCard, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award
} from 'lucide-react';

export const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const serviceData: { [key: string]: any } = {
    'counseling-guidance': {
      title: 'Counseling & Guidance',
      icon: <Users className="w-16 h-16" />,
      heroImage: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      description: 'Expert educational counseling to help you make informed decisions about your medical career path.',
      detailedDescription: `Our comprehensive counseling and guidance service is designed to help aspiring medical students navigate the complex landscape of medical education. With over 15 years of experience, our certified counselors provide personalized advice tailored to your academic background, career goals, and personal preferences.

      We understand that choosing the right medical university and course is a life-changing decision. Our expert counselors work closely with you to assess your strengths, interests, and aspirations, ensuring you make the best choice for your future medical career.`,
      services: [
        'One-on-one career counseling sessions',
        'Personalized university selection guidance',
        'Course and specialization advice',
        'Academic pathway planning',
        'Future career prospects analysis',
        'Scholarship and financial guidance'
      ],
      process: [
        'Initial consultation to understand your goals',
        'Academic and personal assessment',
        'University and course recommendations',
        'Application strategy development',
        'Ongoing support and guidance',
        'Post-admission counseling'
      ],
      benefits: [
        'Make informed decisions about your medical career',
        'Save time and avoid costly mistakes',
        'Access to expert knowledge and insights',
        'Personalized guidance based on your profile',
        'Ongoing support throughout your journey',
        'Increased chances of successful admission'
      ],
      faqs: [
        {
          question: 'How long does the counseling process take?',
          answer: 'The initial counseling session typically takes 1-2 hours, with follow-up sessions as needed based on your requirements.'
        },
        {
          question: 'Is the counseling service free?',
          answer: 'We offer a free initial consultation. Detailed counseling packages are available based on your specific needs.'
        },
        {
          question: 'Can I get counseling for both Indian and international universities?',
          answer: 'Yes, our counselors are experts in both Indian medical colleges and international universities across multiple countries.'
        }
      ]
    },
    'apostille-attestation': {
      title: 'Apostille & Attestation',
      icon: <Shield className="w-16 h-16" />,
      heroImage: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      description: 'Complete document verification and authentication services for international admissions.',
      detailedDescription: `Document apostille and attestation is a crucial step for students planning to study abroad. Our comprehensive service ensures all your academic and personal documents are properly verified and authenticated according to international standards.

      We handle the entire process from document collection to final attestation, ensuring compliance with both Indian and international requirements. Our experienced team understands the specific requirements of different countries and universities.`,
      services: [
        'Educational document apostille',
        'Personal document attestation',
        'Embassy attestation services',
        'MEA (Ministry of External Affairs) attestation',
        'State government attestation',
        'HRD (Human Resource Development) attestation'
      ],
      process: [
        'Document collection and verification',
        'Notary attestation',
        'State government attestation',
        'MEA attestation',
        'Embassy attestation (if required)',
        'Document delivery'
      ],
      benefits: [
        'Legally recognized documents worldwide',
        'Hassle-free university admission process',
        'Visa application support',
        'Expert handling of complex procedures',
        'Time-saving professional service',
        'Reduced risk of document rejection'
      ],
      faqs: [
        {
          question: 'What documents need apostille for studying abroad?',
          answer: 'Typically, educational certificates, mark sheets, birth certificates, and medical certificates require apostille for international use.'
        },
        {
          question: 'How long does the apostille process take?',
          answer: 'The complete apostille process usually takes 15-20 working days, depending on the document type and attestation requirements.'
        },
        {
          question: 'Is apostille required for all countries?',
          answer: 'Apostille is required for countries that are members of the Hague Convention. Other countries may require embassy attestation.'
        }
      ]
    }
    // Add more services as needed
  };

  const currentService = serviceData[serviceId || ''] || serviceData['counseling-guidance'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentService.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white animate-slide-up">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-secondary">{currentService.icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold">{currentService.title}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Service</h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {currentService.detailedDescription}
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-accent p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Services Include</h3>
                <div className="space-y-3">
                  {currentService.services.map((service: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <p className="text-gray-600">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to ensure efficient and effective service delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.process.map((step: string, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Step {index + 1}</h3>
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Service?</h2>
              <div className="space-y-4">
                {currentService.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Professional service"
                className="rounded-xl shadow-lg"
              />
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
              Common questions about our {currentService.title.toLowerCase()} service
            </p>
          </div>
          <div className="space-y-6">
            {currentService.faqs.map((faq: any, index: number) => (
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
            <h2 className="text-4xl font-bold mb-6">Need Professional Assistance?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get expert help with {currentService.title.toLowerCase()}. Our team is ready 
              to provide you with comprehensive support and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};