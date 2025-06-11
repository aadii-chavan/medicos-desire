import React from 'react';
import { Users, Award, Globe, Heart, Target, Eye, Shield, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { number: '7+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '3750+', label: 'Students Placed', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: 'Partner Universities', icon: <Globe className="w-8 h-8" /> },
    { number: '100%', label: 'Visa Success Rate', icon: <Shield className="w-8 h-8" /> }
  ];

  const team = [
    {
      name: 'Dr. Pavan Rathod',
      position: 'Founder & CEO',
      image: '/pavan.png',
      bio: 'Former medical college dean with 20+ years in medical education'
    },
    {
      name: 'Dr. Abhishek Rathod',
      position: 'Head of Counseling',
      image: '/abhi.png',
      bio: 'Educational psychologist specializing in career guidance'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Student-Centric Approach',
      description: 'Every decision we make puts our students\' success and wellbeing first.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity & Transparency',
      description: 'We maintain complete transparency in all our processes and communications.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence in Service',
      description: 'We strive for excellence in every aspect of our educational consultancy services.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      description: 'We help students think globally while supporting them with local expertise.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Medicos Desire</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Empowering aspiring doctors to achieve their dreams through expert guidance, 
              comprehensive support, and unwavering commitment to their success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Medicos Desire was established in the year 2019 with it's motive to offer study MBBS abroad opportunities to aspiring students in selected medical universities abroad. As years flew by, our services became noticeable in all regions of India and started attracting huge number of students for MBBS admission abroad. With the growing demand of students willing to pursue MBBS from other countries, we expanded our horizon to several countries.
                </p>
                <p>
                  Today, we provide full guidance and all services for MBBS in Russia, MBBS in Kyrgyzstan, MBBS in Uzbekistan, MBBS in Kazakhstan, etc. Pacific Educational Consultants is backed by some highly skilled & experienced individuals who have vast experience in counselling and have been doing it since decades. This has made us pioneers in this field of medical education abroad. We have our head offices in Russia, Uzbekistan, Mumbai & Pune and 30+ branches in almost all states of India.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="/founder.png"
                alt="Medicos Desire Founder"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide comprehensive, ethical, and personalized educational consultancy 
                services that empower students to achieve their medical career aspirations 
                through quality education and expert guidance.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in medical education consultancy, recognized for 
                our integrity, innovation, and unwavering commitment to student success, 
                while contributing to the development of healthcare professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships 
              with students, partners, and the broader community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of education consultants, visa experts, and counselors 
              are dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Students studying"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">Why Students Choose Us</h2>
              <div className="space-y-4">
                {[
                  'Personalized counseling based on individual goals',
                  'Strong partnerships with top medical universities',
                  'Complete assistance from admission to graduation',
                  '100% transparency in all processes and fees',
                  'Expert visa and documentation support',
                  'Post-admission support and guidance'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};