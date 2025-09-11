import React from 'react';

const Cards = () => {
  return (
    <section className="bg-[#F9F5E8] py-16 px-4 md:px-16 flex flex-col md:flex-row items-start gap-12 md:gap-24">
      
      {/* Columna izquierda: Título, texto y las dos tarjetas pequeñas */}
      <div className="flex-1 flex flex-col gap-8 md:gap-12 max-w-lg">
        {/* Título y texto */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Support Your <br /> Community
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            The legal definition of a charitable organization (and of charity) varies between countries and in charity law effects charitable organizations also vary.
          </p>
        </div>
        
        {/* Contenedor de las dos tarjetas pequeñas */}
        <div className="flex flex-col md:flex-row gap-4 w-[600px]">
          {/* Tarjeta 1: Covid-19 */}
          <div className="bg-white overflow-hidden flex-1 flex flex-col border-b-[16px] border-white">
            <img
              src="/covid.jpg" 
              alt="Covid-19"
              className="w-full h-32 md:h-52 object-cover"
            />
            <p className="mt-2 text-sm font-semibold text-gray-800 p-2">Covid-19</p>
          </div>
          
          {/* Tarjeta 2: Food Bank */}
          <div className="bg-white overflow-hidden flex-1 flex flex-col border-b-[16px] border-white">
            <img
              src="/covid.jpg" 
              alt="Food Bank"
              className="w-full h-32 md:h-52 object-cover"
            />
            <p className="mt-2 text-sm font-semibold text-gray-800 p-2">Food Bank</p>
          </div>
        </div>
      </div>

      {/* Columna derecha: Tarjeta grande */}
      <div className="w-[450px] md:ml-[130px] md:mr-0">
        <div className="bg-white overflow-hidden flex flex-col border-b-[8px] border-white">
          <img
            src="/g.png" 
            alt="Safe Water"
            className="w-full h-[354px] object-cover"
            style={{ objectPosition: '20% 50%' }}
          />
          <p className="mt-2 text-sm font-semibold text-gray-800 p-2">Safe Water</p>
        </div>
        <a href="#" className="mt-8 text-sm font-medium text-emerald-700 hover:text-emerald-800 self-start">
          View All Campaign
        </a>
      </div>
    </section>
  );
};

export default Cards;