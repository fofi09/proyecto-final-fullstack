import React from 'react';

const Stats = () => {
    return (
        <section className="bg-emerald-900 text-white py-8 md:py-12">
            <div className="flex justify-start px-4 md:px-16 w-full">
                
                {/* Contenedor de las estadísticas */}
                <div className="flex flex-wrap items-center justify-between gap-4 md:gap-12 w-full max-w-6xl">
                    
                    {/* Primer elemento */}
                    {/* Aumentamos el espacio entre el icono y el texto */}
                    <div className="flex items-center space-x-4">
                        <div className="text-xl md:text-3xl">✨</div>
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-bold">985+</p>
                            <p className="text-xs md:text-sm text-gray-200">Donation Received</p>
                        </div>
                    </div>

                    {/* Segundo elemento */}
                    {/* Aumentamos el espacio entre el icono y el texto */}
                    <div className="flex items-center space-x-4">
                        <div className="text-xl md:text-3xl">📦</div>
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-bold">$10 M</p>
                            <p className="text-xs md:text-sm text-gray-200">Money Donated</p>
                        </div>
                    </div>

                    {/* Tercer elemento */}
                    {/* Aumentamos el espacio entre el icono y el texto */}
                    <div className="flex items-center space-x-4">
                        <div className="text-xl md:text-3xl">📢</div>
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-bold">12+</p>
                            <p className="text-xs md:text-sm text-gray-200">Active Campaigns</p>
                        </div>
                    </div>

                    {/* Cuarto elemento */}
                    <div className="flex items-center space-x-4">
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