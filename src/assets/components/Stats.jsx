import React from 'react';

const Stats = () => {
  return (
    <section 
      className="bg-emerald-900 text-white py-8 md:py-12 relative overflow-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='1200' height='300' viewBox='0 0 1200 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Elipse superior izquierda (ajustada para ser más larga) --%3E%3Cellipse cx='100' cy='-15' rx='50' ry='100' fill='rgba(255, 255, 255, 0.1)'/%3E%3C!-- Elipse superior derecha --%3E%3Cellipse cx='1425' cy='10' rx='50' ry='70' fill='rgba(255, 255, 255, 0.1)'/%3E%3C!-- Elipse inferior izquierda --%3E%3Cellipse cx='-590' cy='280' rx='50' ry='70' fill='rgba(255, 255, 255, 0.1)'/%3E%3C!-- Elipse inferior derecha --%3E%3Cellipse cx='750' cy='280' rx='50' ry='70' fill='rgba(255, 255, 255, 0.1)'/%3E%3C/svg%3E")
        `,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      <div className="flex justify-start px-4 md:px-16 w-full relative z-10">
        
        {/* Contenedor de las estadísticas */}
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-12 w-full max-w-6xl">
          
          {/* Primer elemento */}
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-3xl">✨</div>
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-bold">985+</p>
              <p className="text-xs md:text-sm text-gray-200">Donation Received</p>
            </div>
          </div>

          {/* Segundo elemento */}
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-3xl">📦</div>
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-bold">$10 M</p>
              <p className="text-xs md:text-sm text-gray-200">Money Donated</p>
            </div>
          </div>

          {/* Tercer elemento */}
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-3xl">📢</div>
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-bold">12+</p>
              <p className="text-xs md:text-sm text-gray-200">Active Campaigns</p>
            </div>
          </div>

          {/* Cuarto elemento */}
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-3xl">✌️</div>
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-bold">$60 M</p>
              <p className="text-xs md:text-sm text-gray-200">Charity in last Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;