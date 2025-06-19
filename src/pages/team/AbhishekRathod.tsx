import React from 'react';

const abhishekInfo = {
  name: 'Abhishek Rathod',
  designation: 'Co-Founder, Medicos Desire',
  image: '/Abhishek Rathod.png',
  bio: `As CEO, I'm passionate about empowering aspiring doctors to achieve their goals. Our mission is to bridge the gap between Indian students and top medical universities abroad, while also providing quality medical education opportunities in India.\n\nPersonally, I guide and consult students, offering expert advice on pursuing MBBS in India and abroad. Our comprehensive services include FMG coaching and courses, ensuring our students are well-prepared for success. My vision for Medicos Desire is to contribute significantly to India's growing demand for skilled doctors, while establishing our company as a leading institution in medical education consultancy. Through dedication and expertise, we strive to make a meaningful impact in the medical education landscape.`,
  highlights: [
    'Co-Founder of Medicos Desire',
    'Expert in University Partnerships',
    'Student Success Strategist',
    'Innovator in Medical Education',
    'Trusted Advisor to Students'
  ]
};

const AbhishekRathod: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 relative">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={abhishekInfo.image}
            alt={abhishekInfo.name}
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4 border-4 border-primary"
          />
          <h1 className="text-3xl font-bold text-primary mb-2">{abhishekInfo.name}</h1>
          <h2 className="text-lg font-semibold text-secondary mb-4">{abhishekInfo.designation}</h2>
        </div>
        <div className="prose prose-lg text-gray-700 mb-8 whitespace-pre-line">
          {abhishekInfo.bio}
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Key Highlights</h3>
          <ul className="list-disc list-inside text-gray-700">
            {abhishekInfo.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbhishekRathod; 