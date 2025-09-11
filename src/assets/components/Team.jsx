import React from 'react';

const teamMembers = [
  { name: 'Lily Gomez', title: 'Founder', imageUrl: '/lily.png' },
  { name: 'Dm Lincoln', title: 'Co-Founder', imageUrl: '/lincon.png' },
  { name: 'Serena Mei', title: 'Manager', imageUrl: '/serena.png' },
  { name: 'Abdel Latif', title: 'Supervisor', imageUrl: '/cap.png' },
];

const Team = () => {
  return (
    <section className="bg-[#F9F5E8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Línea gris finita arriba */}
        <hr className="border-t border-gray-400 mb-16 w-[98%] mx-auto" />

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight sm:text-5xl">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Imagen circular */}
              <img
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-base text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Línea gris finita abajo */}
        <hr className="border-t border-gray-400 mt-16 w-[98%] mx-auto" />
      </div>
    </section>
  );
};

export default Team;
