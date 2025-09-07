import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#FAF8F1] py-16 px-4 md:px-16 flex justify-center">
      {/* Desplazamos TODO el bloque un poco a la derecha */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl relative ml-4 md:ml-8">
        
        {/* Columna Izquierda: Imagen */}
        <div className="w-full md:w-2/5 flex justify-start z-10 -ml-0 md:-ml-12">
          <img
            src="/circular.jpg" 
            alt="Dos personas sonriendo"
            className="w-full h-auto object-cover rounded-t-[50%] shadow-lg -mt-16 md:mt-0"
          />
        </div>

        {/* Fondo blanco (independiente) */}
        <div className="absolute right-0 top-12 md:top-24 bottom-8 md:bottom-0 w-[70%] md:w-[75%] bg-white rounded-3xl md:rounded-r-none md:rounded-l-3xl shadow-lg z-0"></div>

        {/* Texto arriba del fondo */}
        <div className="relative w-full md:w-4/5 flex flex-col gap-4 md:gap-6 pl-8 md:pl-20 z-10 mt-8 md:mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About Us
          </h2>
          {/* Línea debajo del título */}
          <div className="w-16 border-b-4 border-gray-900 mb-2"></div>
          <p className="text-base text-gray-600 max-w-xl">
          The legal definition of a charitable organization (and of charity) varies between countries and between different legal systems. The regulation of charities and the way in which charity law affects charitable organizations varies.
          </p>
          <a 
            href="#" 
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800 self-start"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
