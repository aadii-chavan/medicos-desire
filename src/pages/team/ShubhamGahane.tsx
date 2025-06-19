import React from 'react';

const shubhamInfo = {
  name: 'Shubham Gahane',
  designation: 'Head of Counseling, Medicos Desire',
  image: '/Pavan Rathod.png',
  bio: `During my own journey studying MBBS abroad, I faced numerous challenges that tested my resolve. The struggle to adapt, the lack of resources, and the uncertainty of it all - I know what it's like to navigate this path alone. That's why I'm driven to ensure that our students have a different experience. My vision is to provide the support, guidance, and facilities that I lacked during my own journey. At Medicos Desire, I'm committed to making a meaningful difference in the lives of aspiring doctors, helping them achieve their goals with confidence and clarity.`,
  highlights: [
    'Head of Counseling at Medicos Desire',
    'Expert in Student Guidance',
    'Personalized Counseling Approach',
    'Supportive Mentor',
    'Specialist in International Medical Education'
  ]
};

const ShubhamGahane: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 relative">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={shubhamInfo.image}
            alt={shubhamInfo.name}
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4 border-4 border-primary"
          />
          <h1 className="text-3xl font-bold text-primary mb-2">{shubhamInfo.name}</h1>
          <h2 className="text-lg font-semibold text-secondary mb-4">{shubhamInfo.designation}</h2>
        </div>
        <div className="prose prose-lg text-gray-700 mb-8 whitespace-pre-line">
          {shubhamInfo.bio}
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Key Highlights</h3>
          <ul className="list-disc list-inside text-gray-700">
            {shubhamInfo.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShubhamGahane; 