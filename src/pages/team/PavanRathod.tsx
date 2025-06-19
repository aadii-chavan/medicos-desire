import React from 'react';

const pavanInfo = {
  name: 'Pavan Rathod',
  designation: 'Founder & CEO, Medicos Desire',
  image: '/pavan (founder).jpeg',
  bio: `I was just a 19-year-old student navigating the challenges of studying abroad, I faced numerous hurdles - exorbitant fees, lack of student-centric facilities, and fragmented guidance. Determined to bridge this gap, I founded Medicos Desire to provide comprehensive support and guidance to students pursuing medical education abroad. Today, Medicos Desire is more than just a platform - it's a trusted study partner for students. My vision is to empower students to not only graduate but also crack the NEXT/FMGE exam in their first attempt, and I'm committed to making this vision a reality for every student who joins us.`,
  highlights: [
    '7+ Years Experience',
    '3750+ Students Placed',
    '50+ Partner Universities',
    '100% Visa Success Rate',
    'Recognized Student Recruiter',
    'Expert in International Medical Education'
  ]
};

const PavanRathod: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 relative">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={pavanInfo.image}
            alt={pavanInfo.name}
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4 border-4 border-primary"
          />
          <h1 className="text-3xl font-bold text-primary mb-2">{pavanInfo.name}</h1>
          <h2 className="text-lg font-semibold text-secondary mb-4">{pavanInfo.designation}</h2>
        </div>
        <div className="prose prose-lg text-gray-700 mb-8 whitespace-pre-line">
          {pavanInfo.bio}
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Key Highlights</h3>
          <ul className="list-disc list-inside text-gray-700">
            {pavanInfo.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PavanRathod; 