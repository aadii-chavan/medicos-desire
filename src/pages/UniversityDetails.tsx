import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  DollarSign, 
  Clock, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Globe,
  Home,
  Utensils,
  Thermometer,
  BookOpen,
  Star,
  Play,
  ExternalLink,
  Loader2,
  AlertCircle,
  Phone,
  Mail,
  ChevronRight,
  Heart,
  Headphones,
  Microscope,
  Beaker,
  Brain,
  FileText,
  ClipboardCheck,
  Document,
  InfoIcon,
  ClipboardList,
  Bus,
  Stamp
} from 'lucide-react';

interface UniversityData {
  id: string;
  name: string;
  country: string;
  city: string;
  bannerImage: string;
  description: string;
  established: string;
  nmcApproved: boolean;
  whoApproved: boolean;
  ranking: string;
  studentCount: string;
  annualFee: string;
  totalCost: string;
  duration: string;
  neetRequired: boolean;
  ageLimit: string;
  subjectCriteria: string[];
  mediumOfInstruction: string[];
  accommodationType: string;
  foodOptions: string[];
  climate: string;
  admissionProcess: string[];
  highlights: string[];
  uniqueFeatures: string[];
  latitude?: number;
  longitude?: number;
  galleryImages: string[];
  videoUrl?: string;
  applyNowUrl: string;
  visible: boolean;
  courses?: {
    name: string;
    duration: string;
    medium: string;
    intake: string;
    annualFee: string;
  }[];
  mbbsBreakdown?: {
    tuitionFee: string;
    hostelFee: string;
    insurance: string;
  };
  additionalFees?: {
    visaBiometrics: string;
    adminFee: string;
    totalCost: string;
  };
  coverImage?: string;
  logo?: string;
  recognition?: string;
  feeRange?: string;
  requirements?: string;
  facilities?: {
    name: string;
    description: string;
  }[];
  studentLife?: string;
  research?: string;
}

export const UniversityDetails: React.FC = () => {
  const { universityId } = useParams<{ universityId: string }>();
  const [university, setUniversity] = useState<UniversityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'courses'>('about');

  useEffect(() => {
    fetchUniversityData();
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [universityId]);

  const fetchUniversityData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Mock data for demonstration - replace with actual Firestore call
      const mockData: UniversityData = {
        id: universityId || '1',
        name: 'Kursk State Medical University',
        country: 'Russia',
        city: 'Kursk',
        bannerImage: 'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Kursk State Medical University is one of the leading medical institutions in Russia, established in 1935. The university is renowned for its high-quality medical education, modern infrastructure, and international recognition. With over 85 years of excellence in medical education, KSMU has trained thousands of doctors who serve worldwide.',
        established: '1935',
        nmcApproved: true,
        whoApproved: true,
        ranking: '#1 Medical University in Russia',
        studentCount: '9,000+ Students',
        annualFee: '$4,500',
        totalCost: '$27,000',
        duration: '6 Years',
        neetRequired: true,
        ageLimit: '17-25 years',
        subjectCriteria: ['Physics (50%)', 'Chemistry (50%)', 'Biology (50%)', 'English (50%)'],
        mediumOfInstruction: ['English', 'Russian'],
        accommodationType: 'University Hostels',
        foodOptions: ['Indian Cuisine', 'Continental', 'Local Russian Food', 'Vegetarian Options'],
        climate: 'Continental climate with cold winters and warm summers',
        admissionProcess: [
          'Submit application with required documents',
          'Receive invitation letter from university',
          'Apply for student visa at Russian embassy',
          'Complete medical examination',
          'Arrange accommodation booking',
          'Travel to Russia and complete registration'
        ],
        highlights: [
          'WHO and NMC approved university',
          'English medium instruction available',
          'Modern laboratories and equipment',
          'Experienced international faculty',
          'Clinical training in affiliated hospitals',
          'Safe and secure campus environment'
        ],
        uniqueFeatures: [
          'State-of-the-art simulation labs',
          'International student support services',
          'Research opportunities for students',
          'Cultural exchange programs',
          'Sports and recreational facilities',
          'Digital library with vast medical resources'
        ],
        latitude: 51.7373,
        longitude: 36.1873,
        galleryImages: [
          'https://images.pexels.com/photos/4916461/pexels-photo-4916461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        applyNowUrl: '/contact?university=kursk-state-medical-university',
        visible: true,
        courses: [
          {
            name: 'MBBS (General Medicine)',
            duration: '6 years',
            medium: 'English-medium',
            intake: 'Feb/Sep',
            annualFee: '$5,500/year'
          },
          {
            name: 'Dentistry (BDS)',
            duration: '5 years',
            medium: 'English-medium',
            intake: 'Sep',
            annualFee: '$6,000/year'
          },
          {
            name: 'Pharmacy',
            duration: '5 years',
            medium: 'English & Russian',
            intake: 'Sep',
            annualFee: '$4,500/year'
          },
          {
            name: 'Nursing',
            duration: '5 years',
            medium: 'English & Russian',
            intake: 'Sep',
            annualFee: '$5,750/year'
          }
        ],
        mbbsBreakdown: {
          tuitionFee: '$5,500/year',
          hostelFee: '$500/year',
          insurance: '$80/year'
        },
        additionalFees: {
          visaBiometrics: '~$300/year',
          adminFee: '~$200',
          totalCost: '≈ $33,000'
        },
        facilities: [
          {
            name: 'Modern Laboratories',
            description: 'State-of-the-art equipment, research facilities, and advanced simulation labs'
          },
          {
            name: 'Library Resources',
            description: 'Digital library access, international journals, and study areas & resources'
          },
          {
            name: 'Student Housing',
            description: 'Modern dormitories, 24/7 security, and Wi-Fi enabled'
          }
        ],
        studentLife: 'Join various medical and cultural clubs to enhance your university experience and network with peers.',
        research: 'Engage in cutting-edge medical research projects, state-of-the-art clinical trial facilities, and specialized research in neurology and brain sciences'
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUniversity(mockData);
    } catch (err) {
      setError('Failed to load university details. Please try again.');
      console.error('Error fetching university data:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderCoursesSection = () => {
    if (!university?.courses) return null;

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Programs Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {university.courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-semibold text-primary truncate">{course.name}</h4>
                    <p className="text-gray-600 text-sm mt-0.5 line-clamp-2">{course.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-secondary" />
                        <span>{course.medium}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>{course.intake}</span>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <DollarSign className="w-4 h-4 text-secondary" />
                        <span className="font-medium text-primary">{course.annualFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">MBBS Fee Structure</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Year</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Tuition Fee</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Hostel Fee</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Insurance</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">1st Year</td>
                  <td className="px-6 py-4 text-sm">$8,000</td>
                  <td className="px-6 py-4 text-sm">$2,000</td>
                  <td className="px-6 py-4 text-sm">$800</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">$10,800</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">2nd Year</td>
                  <td className="px-6 py-4 text-sm">$8,500</td>
                  <td className="px-6 py-4 text-sm">$2,200</td>
                  <td className="px-6 py-4 text-sm">$800</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">$11,500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">3rd Year</td>
                  <td className="px-6 py-4 text-sm">$9,000</td>
                  <td className="px-6 py-4 text-sm">$2,400</td>
                  <td className="px-6 py-4 text-sm">$800</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">$12,200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">4th Year</td>
                  <td className="px-6 py-4 text-sm">$9,500</td>
                  <td className="px-6 py-4 text-sm">$2,600</td>
                  <td className="px-6 py-4 text-sm">$800</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">$12,900</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">5th Year</td>
                  <td className="px-6 py-4 text-sm">$10,000</td>
                  <td className="px-6 py-4 text-sm">$2,800</td>
                  <td className="px-6 py-4 text-sm">$800</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">$13,600</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">6th Year</td>
                  <td className="px-6 py-4 text-sm">$10,500</td>
                  <td className="px-6 py-4 text-sm">$3,000</td>
                  <td className="px-6 py-4 text-sm">$800</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">$14,300</td>
                </tr>
                <tr className="bg-gray-100 font-semibold">
                  <td className="px-6 py-4 text-sm">Total</td>
                  <td className="px-6 py-4 text-sm">$55,500</td>
                  <td className="px-6 py-4 text-sm">$15,000</td>
                  <td className="px-6 py-4 text-sm">$4,800</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">$75,300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Loading university details...</p>
        </div>
      </div>
    );
  }

  if (error || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">University Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The requested university details could not be found.'}</p>
          <Link
            to="/universities"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center space-x-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Universities</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Apply Now Button */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <h3 className="font-bold text-primary">{university.name}</h3>
              <p className="text-sm text-gray-600">{university.city}, {university.country}</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="hidden sm:flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>{university.annualFee}/year</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{university.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center space-x-2 text-primary hover:text-primary-dark"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <Link
              to={university.applyNowUrl}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${university.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20">
          <div className="text-white animate-slide-up max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-8 text-gray-300">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/universities" className="hover:text-secondary transition-colors">Universities</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-secondary">{university.name}</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{university.name}</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">{university.description}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="font-medium">{university.city}, {university.country}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-sm text-gray-300">Established</p>
                  <p className="font-medium">{university.established}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-sm text-gray-300">Recognition</p>
                  <p className="font-medium">NMC & WHO Approved</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-sm text-gray-300">Students</p>
                  <p className="font-medium">{university.studentCount}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={university.applyNowUrl}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                <Award className="w-5 h-5 text-secondary" />
                <span>Recognition & Ranking</span>
              </h3>
              <div className="space-y-3">
                {university.nmcApproved && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>NMC Approved</span>
                  </div>
                )}
                {university.whoApproved && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>WHO Approved</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{university.ranking}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                <span>Fee Structure</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Annual Fee</span>
                  <span className="font-semibold text-primary">{university.annualFee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-semibold text-primary">{university.totalCost}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-primary">{university.duration}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span>Admission Requirements</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Age: {university.ageLimit}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{university.neetRequired ? 'NEET Required' : 'NEET Not Required'}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>{university.mediumOfInstruction.join(' & ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'about'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>About</span>
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                activeTab === 'courses'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Courses</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'about' ? (
            <div className="animate-fade-in">
              {/* University Overview */}
              <section className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h2 className="text-3xl font-bold text-primary mb-6">University Overview</h2>
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed">{university.description}</p>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                          <div className="flex items-start space-x-3">
                            <Calendar className="w-6 h-6 text-primary mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Established</h4>
                              <p className="text-gray-600">{university.established}</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Location</h4>
                              <p className="text-gray-600">{university.city}, {university.country}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-accent p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-primary mb-4">Quick Apply</h3>
                      <p className="text-gray-600 mb-4">Ready to start your medical journey at {university.name}?</p>
                      <Link
                        to={university.applyNowUrl}
                        className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-light transition-colors inline-flex items-center justify-center space-x-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Statistics */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Key Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Body</h3>
                    <p className="text-3xl font-bold text-primary">{university.studentCount}</p>
                    <p className="text-sm text-gray-500 mt-1">Total Students</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Rate</h3>
                    <p className="text-3xl font-bold text-primary">95%</p>
                    <p className="text-sm text-gray-500 mt-1">Graduation Rate</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">International</h3>
                    <p className="text-3xl font-bold text-primary">50+</p>
                    <p className="text-sm text-gray-500 mt-1">Countries Represented</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ranking</h3>
                    <p className="text-3xl font-bold text-primary">Top 10</p>
                    <p className="text-sm text-gray-500 mt-1">Medical Universities</p>
                  </div>
                </div>
              </section>

              {/* Facilities */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Campus Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {university.facilities?.map((facility, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="aspect-video bg-gray-100">
                        <img 
                          src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg" 
                          alt={facility.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h3>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Student Life */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Student Life</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Campus Activities</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Student Organizations</h4>
                          <p className="text-gray-600">{university.studentLife}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Events & Conferences</h4>
                          <p className="text-gray-600">Regular medical conferences, cultural events, and academic seminars throughout the year.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cultural Integration</h4>
                          <p className="text-gray-600">Programs and events to help international students adapt to the local culture and environment.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Support Services</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Academic Support</h4>
                          <p className="text-gray-600">Tutoring services, study groups, and academic counseling available to all students.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Health Services</h4>
                          <p className="text-gray-600">On-campus medical facilities and mental health support for students' wellbeing.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Headphones className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                          <p className="text-gray-600">Round-the-clock assistance for international students with dedicated support staff.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research & Innovation */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Research & Innovation</h2>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Centers</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Microscope className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Medical Research Center</h4>
                            <p className="text-gray-600 text-sm">Advanced research facilities for medical breakthroughs</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Beaker className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Clinical Research Lab</h4>
                            <p className="text-gray-600 text-sm">State-of-the-art clinical trial facilities</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Brain className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Neuroscience Center</h4>
                            <p className="text-gray-600 text-sm">Specialized research in neurology and brain sciences</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Publications & Patents</h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <span className="font-medium text-gray-900">Research Papers</span>
                          </div>
                          <span className="text-2xl font-bold text-primary">500+</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-medium text-gray-900">Patents Filed</span>
                          </div>
                          <span className="text-2xl font-bold text-primary">50+</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="font-medium text-gray-900">Research Students</span>
                          </div>
                          <span className="text-2xl font-bold text-primary">200+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Expenses */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Additional Expenses</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">One-time Expenses</h3>
                    <div className="space-y-4">
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Admission Fee</span>
                          </div>
                          <span className="text-primary font-semibold">$2,500</span>
                        </div>
                        <p className="text-sm text-gray-500">One-time payment at admission</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <ClipboardList className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Registration Fee</span>
                          </div>
                          <span className="text-primary font-semibold">$800</span>
                        </div>
                        <p className="text-sm text-gray-500">Initial registration charges</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Stamp className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Visa & Biometrics</span>
                          </div>
                          <span className="text-primary font-semibold">$300</span>
                        </div>
                        <p className="text-sm text-gray-500">Initial visa processing and biometrics</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Administrative Fee</span>
                          </div>
                          <span className="text-primary font-semibold">$200</span>
                        </div>
                        <p className="text-sm text-gray-500">Processing and documentation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Annual Expenses</h3>
                    <div className="space-y-4">
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Home className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Accommodation</span>
                          </div>
                          <span className="text-primary font-semibold">$3,000 - $4,500/year</span>
                        </div>
                        <p className="text-sm text-gray-500">Hostel or shared apartment rent</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Utensils className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Food & Living</span>
                          </div>
                          <span className="text-primary font-semibold">$2,400 - $3,600/year</span>
                        </div>
                        <p className="text-sm text-gray-500">Meals and daily essentials</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Books & Supplies</span>
                          </div>
                          <span className="text-primary font-semibold">$600 - $800/year</span>
                        </div>
                        <p className="text-sm text-gray-500">Textbooks and study materials</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Bus className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Transportation</span>
                          </div>
                          <span className="text-primary font-semibold">$500 - $800/year</span>
                        </div>
                        <p className="text-sm text-gray-500">Local travel and commuting</p>
                      </div>
                      <div className="group hover:bg-gray-50 rounded-lg p-4 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-secondary" />
                            <span className="font-medium text-gray-900">Health Insurance</span>
                          </div>
                          <span className="text-primary font-semibold">$800 - $1,200/year</span>
                        </div>
                        <p className="text-sm text-gray-500">Medical coverage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            renderCoursesSection()
          )}
        </div>
      </div>
    </div>
  );
};