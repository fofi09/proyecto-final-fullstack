import React from 'react';

const CallToAction = () => {
  return (
    <section
      className="bg-emerald-800 text-white py-12 md:py-12 relative overflow-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='1600' height='200' viewBox='0 0 1600 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 120 C 200 10, 400 180, 800 120 C 1200 60, 1400 180, 1600 120' stroke='rgba(255, 255, 255, 0.1)' stroke-width='2' /%3E%3Cpath d='M0 80 C 200 150, 400 20, 800 80 C 1200 140, 1400 20, 1600 80' stroke='rgba(255, 255, 255, 0.1)' stroke-width='2' /%3E%3C/svg%3E")
        `,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between z-10 relative">
        {/* Contenedor del texto */}
        <div className="flex flex-col mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's Help Other With
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Charity
          </h2>
        </div>

        {/* Contenedor del botón */}
        <div>
          <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition-colors">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;