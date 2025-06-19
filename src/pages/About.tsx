import React, { useState, useEffect } from 'react';
import { Users, Award, Globe, Heart, Shield, CheckCircle, BookOpen, HeartHandshake, GraduationCap, Building2, PiggyBank, HelpCircle, UserCheck, Mail } from 'lucide-react';
import { getTeamMembers } from '../firebase/firestore';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  order: number;
  visible: boolean;
}

export const About: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const data = await getTeamMembers();
      if (data && Array.isArray(data)) {
        setTeamMembers(data.filter(member => member.visible).sort((a, b) => a.order - b.order));
      } else {
        // Default team members if no data exists
        setTeamMembers([
          {
            id: '1',
            name: 'Pavan Rathod',
            designation: 'Founder & Managing Director',
            description: 'Leading the vision and mission of Medicos Desire with expertise in international medical education and student counseling.',
            image: '/Shubham.png',
            order: 1,
            visible: true
          },
          {
            id: '2',
            name: 'Abhishek Rathod',
            designation: 'Co-Founder & CEO',
            description: 'Driving innovation and growth in medical education, specializing in university partnerships and student success strategies.',
            image: '/Abhishek Rathod.png',
            order: 2,
            visible: true
          },
          {
            id: '3',
            name: 'Shubham Gahane',
            designation: 'Head of Counseling & CFO',
            description: 'Expert in student guidance and counseling, ensuring personalized support for every aspiring medical student.',
            image: '/Pavan Rathod.png',
            order: 3,
            visible: true
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: '7+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '3750+', label: 'Students Placed', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Partner Universities', icon: <Globe className="w-8 h-8" /> },
    { number: '100%', label: 'Visa Success Rate', icon: <Shield className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      headline: 'Proven Success',
      desc: 'Thousands of students placed in top medical universities worldwide with a 100% visa success rate.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      headline: 'Official Partnerships',
      desc: 'Direct collaborations with leading NMC/WHO-approved universities for transparent admissions.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      headline: 'Trusted Recruiter',
      desc: 'Authorized student recruiter (Doctors-IEA) with a reputation for ethical, student-first guidance.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      headline: 'Expert Guidance',
      desc: 'Up-to-date admission information and personalized counseling for every student.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      headline: 'End-to-End Support',
      desc: 'Comprehensive help from application to graduation, including travel, visa, and post-admission care.'
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-secondary" />,
      headline: 'Financial Guidance',
      desc: 'Loan assistance and transparent fee structures to make your medical dream affordable.'
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-primary" />,
      headline: 'One-Stop Help Desk',
      desc: 'Dedicated support for students and parents, answering all your questions at every step.'
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      headline: 'Personal Care',
      desc: 'Individual attention and care for every student, ensuring a smooth and happy journey.'
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      headline: 'Recognized & Respected',
      desc: 'Highly rated by students and institutions for our commitment and results.'
    }
  ];

  const russiaServices = [
    'Admission in top government medical universities of Russia',
    'Personalized university matching based on NEET score & budget',
    'Visa invitation letters from the university itself',
    'Complete visa processing guidance from India to Russia',
    'On-arrival airport pickup, hostel allocation & registration',
    'Post-admission student monitoring and support'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to <span className="text-secondary">Medicos Desire</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto">
              Your Gateway to Becoming a Doctor – Globally Recognized, Personally Guided
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Design */}
      <section className="py-12 bg-white -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction with Founder Image */}
      <section className="py-16 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-indigo-100">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  At Medicos Desire, we specialize in guiding ambitious medical aspirants who wish to pursue MBBS abroad at an affordable cost while receiving high-quality education. With a strong legacy of success and a commitment to ethical, transparent, and student-first practices, Medicos Desire Global Network is your go-to consultancy for MBBS in Russia, Uzbekistan, and other top destinations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We are dedicated to simplifying the journey of becoming a doctor by offering accurate guidance, end-to-end support, and official partnerships with NMC-approved medical universities across the globe.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300 transform rotate-6 rounded-2xl"></div>
              <img
                src="/pavan (founder).jpeg"
                alt="Medicos Desire Founder"
                className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-semibold">Established 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Enhanced Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">
            Why Choose Medicos Desire?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover what makes us the trusted choice for aspiring doctors and their families.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-white via-accent/10 to-secondary/5 p-8 rounded-2xl shadow-lg border-t-4 border-primary hover:shadow-2xl hover:scale-105 hover:bg-white/90 transition-all duration-300 flex flex-col items-center text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.headline}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MBBS in Russia with Enhanced Design */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">MBBS in Russia with Medicos Desire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {russiaServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-500 shadow-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700 font-medium ml-4 mt-1">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated leadership team brings together decades of experience in medical education and student counseling.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Pavan Rathod',
                role: 'Founder & Managing Director',
                image: '/pavan (founder).jpeg',
                fallbackImage: 'https://via.placeholder.com/400x500/f3f4f6/1e40af?text=Pavan+Rathod',
                description: 'Leading the vision and mission of Medicos Desire with expertise in international medical education.'
              },
              {
                name: 'Abhishek Rathod',
                role: 'Co-Founder & CEO',
                image: '/Abhishek Rathod.png',
                fallbackImage: 'https://via.placeholder.com/400x500/f3f4f6/1e40af?text=Abhishek+Rathod',
                description: 'Driving innovation and growth in medical education consulting services.'
              },
              {
                name: 'Shubham Gahane',
                role: 'Head of Counseling & CFO',
                image: '/Pavan Rathod.png',
                fallbackImage: 'https://via.placeholder.com/400x500/f3f4f6/1e40af?text=Shubham+Gahane',
                description: 'Expert in student guidance and counseling for international medical education.'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden">
                  {/* Glow Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/30 to-accent/30 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = member.fallbackImage;
                    }}
                    className="w-full h-[300px] object-cover object-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 animate-shine"></div>
                </div>
                {/* Content Container */}
                <div className="p-6 relative z-30 bg-white/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-primary mb-2 transform transition-transform duration-500 group-hover:translate-x-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 transform transition-transform duration-500 group-hover:translate-x-2">
                    {member.description}
                  </p>
                  <a
                    href={`/team/${member.name.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-block mt-4 text-primary font-semibold underline hover:text-secondary transition-colors"
                  >
                    {member.name === 'Pavan Rathod' && 'About Founder'}
                    {member.name === 'Abhishek Rathod' && 'About Co-Founder'}
                    {member.name === 'Shubham Gahane' && 'About HOC'}
                  </a>
                </div>
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-secondary/10 to-accent/10 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 rounded-tl-3xl"></div>
              </div>
            ))}
          </div>

          {/* Developer Credit Card */}
          <div className="max-w-2xl mx-auto">
            <a
              href="mailto:workwithaadichavan@gmail.com"
              className="group block bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] relative overflow-hidden cursor-pointer focus:outline-none"
              aria-label="Contact Aditya Chavan via Email"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-primary transform transition-transform duration-500 group-hover:scale-105">
                    Aditya Chavan
                  </h3>
                </div>
                <p className="text-secondary font-medium mb-2 transform transition-transform duration-500 group-hover:scale-105">
                  Tech Consultant or Website Developer
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/5 to-accent/5 rounded-full translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Promise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-2xl p-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Our Promise</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              We don't make promises we can't keep. At Doctors-IEA (now integrated into Medicos Desire), we walk the journey with you from the first consultation to your graduation. Whether you're a student or a concerned parent — your trust is our responsibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};