import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#FAF8F1] py-16 px-4 md:px-16 flex justify-center">
      {/* Contenedor principal que mantiene la alineación */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        
        {/* Columna Izquierda: Imagen */}
        <div className="w-full md:w-2/5 flex justify-start z-10 -ml-0 md:-ml-12">
          <img
            src="/circular.jpg" 
            alt="Dos personas sonriendo"
            className="w-full h-auto object-cover rounded-t-[50%] shadow-lg -mt-16 md:mt-0"
          />
        </div>

        {/* Columna Derecha: Contenido con el fondo blanco */}
        <div className="w-full md:w-4/5 bg-white flex flex-col gap-4 md:gap-8 p-8 md:p-12 rounded-3xl md:rounded-r-none md:rounded-l-3xl shadow-lg mt-8 md:mt-32 z-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About Us
          </h2>
          <p className="text-base text-gray-600">
            The legal definition of a charitable organization (and of charity) varies between countries and in some instances charity law effects charitable organizations also vary.
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