import React from 'react';

const teamMembers = [
  { name: 'Lily Gomez', title: 'Founder', imageUrl: '/chica1.jpg' },
  { name: 'Dm Lincoln', title: 'Co-Founder', imageUrl: '/chica1.jpg' },
  { name: 'Serena Mei', title: 'Manager', imageUrl: '/chica1.jpg' },
  { name: 'Abdel Latif', title: 'Supervisor', imageUrl: '/chica1.jpg' },
];

const Team = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight sm:text-5xl">
            Our Team
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <div className="absolute inset-0 z-0 bg-yellow-400 transform scale-150 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-base text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;