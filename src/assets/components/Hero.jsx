import React from 'react';
import Header from './Header';

const Hero = () => {
    return (
        <header className="w-full flex flex-col md:flex-row">
            {/* Columna izquierda (fondo beige) */}
            <div className="w-full md:w-1/2 bg-[#F9F5E8] px-4 py-8 md:px-16 md:py-12 flex flex-col justify-between min-h-screen">
                <div>
                    {/* Reemplazado el texto "Ta" por la imagen */}
                    <img src="/ta.png" alt="Logo de la marca" className="h-auto w-12 mb-2 md:mb-4" />
                    
                    <div className="mt-12 md:-mt">
                        {/* AUMENTO DEL TAMAÑO DEL TÍTULO */}
                        <h1 style={{ fontFamily: 'Recoleta semi bond' }} className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4 md:mb-12">
                            Charity Is An <br />
                            Act Of A Soft <br /> Heart.
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-8 max-w-md">
                            We've spent the last 5 years helping over 25,00000 <br/>
                            teams just like yourself create and sustain  <br/>
                            successful online support.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            <button className="w-full md:w-auto bg-[#036F59] text-white font-semibold px-6 py-3 rounded-none shadow hover:bg-emerald-800">
                                Donate Now
                            </button>

                            {/* ESTA ES LA ÚNICA LÍNEA DE CÓDIGO QUE AGREGAMOS */}
                            <img src="/flecha.png" alt="Icono de la gorra" className="w-16 h-16" />
                            
                            <div className="relative flex-shrink-0 w-28 h-28 flex items-center justify-center ml-1">
                                {/* aqui arriba ml controla en q posicion estara td  */}
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                                    <defs>
                                        <path id="circle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"></path>
                                    </defs>
                                    <text dy="5" className="uppercase text-[10px] font-semibold tracking-[0.2em] fill-stone-700">
                                        <textPath xlinkHref="#circle">
                                            Learn about us through this video •
                                        </textPath>
                                    </text>
                                </svg>
                                <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 ml-1 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-24 text-sm font-medium text-gray-700">
                    {/* gap es lo q hace la separacion entre youtube instagram y face, creo q es 28 y 32 */}
                    <a href="#">Youtube</a>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                </div>
            </div>

            {/* Columna derecha (fondo amarillo) - SIN CAMBIOS */}
            <div className="w-full md:w-1/2 relative bg-[#FED65D] overflow-hidden min-h-[400px] md:min-h-screen">
                <div className="px-4 md:px-20 py-12 flex items-center justify-end">
                    <Header />
                </div>
                <div className="absolute bottom-0 left-0">
                    <img
                        src="/h1.jpg"
                        alt="Charity scene"
                        className="h-full md:h-[540px] md:w-[595px] shadow-xl"
                    />
                </div>
            </div>
        </header>
    );
};

export default Hero;