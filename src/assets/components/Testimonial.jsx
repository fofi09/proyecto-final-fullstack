import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-[#FAF8F1] py-16 px-4 md:px-16 flex justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl relative ml-4 md:ml-8">
        
        {/* Columna Izquierda: Imagen */}
        <div className="w-full md:w-2/5 flex justify-start z-10 -ml-0 md:-ml-12">
          <img
            src="/c2.jpg" // 👈 cambia a la ruta real de tu imagen
            alt="Testimonial"
            className="w-full h-auto object-cover rounded-b-[50%] shadow-lg mt-0 md:-mb-12"
          />
        </div>

        {/* Fondo blanco (estirado hacia arriba) */}
        <div className="absolute right-0 top-0 bottom-0 w-[70%] md:w-[75%] bg-white rounded-3xl md:rounded-r-none md:rounded-l-3xl shadow-lg z-0"></div>

        {/* Texto arriba del fondo */}
        <div className="relative w-full md:w-4/5 flex flex-col gap-4 md:gap-6 pl-8 md:pl-20 z-10 mt-8 md:mt-12">
          <p className="text-lg text-gray-700 max-w-xl italic">
            "We’re very happy that the challenge went well, and we’re grateful
            that we have a partner in Charity Challenge whom we could trust to
            take the best possible care of our supporters."
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Mustafa Kamal
          </h3>
          <p className="text-sm text-gray-500">CEO, Toggle</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
