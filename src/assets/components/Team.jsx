import React from 'react';

const teamMembers = [
  { name: 'Lily Gomez', title: 'Founder', imageUrl: '/chica1.png' }, // ¡Ahora usando PNG transparente!
  { name: 'Dm Lincoln', title: 'Co-Founder', imageUrl: '/chica1.png' },
  { name: 'Serena Mei', title: 'Manager', imageUrl: '/chica1.png' },
  { name: 'Abdel Latif', title: 'Supervisor', imageUrl: '/chica1.png' },
];

const Team = () => {
  return (
    <section className="bg-[#fcfbf9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight sm:text-5xl">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Contenedor principal para el círculo con borde y fondo segmentado */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                
                {/* Fondo blanco en la parte superior */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>
                
                {/* Fondo de color en la parte inferior */}
                <div className={`absolute bottom-0 left-0 w-full h-1/2 
                                  ${index % 2 === 0 ? 'bg-yellow-400' : 'bg-green-600'} 
                                  z-0`}>
                </div>
                
                {/* La imagen de la chica (con fondo transparente) se superpone a ambos */}
                <img
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-10"
                  src={member.imageUrl}
                  alt={member.name}
                />
              </div>
              <div className="mt-8">
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