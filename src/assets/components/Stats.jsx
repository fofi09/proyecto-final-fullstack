import React from 'react';

const Stats = () => {
    return (
        <section className="bg-emerald-900 text-white py-8 md:py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
                <div>
                    <div className="text-xl md:text-3xl mb-1 md:mb-2">✨</div>
                    <p className="text-xl md:text-2xl font-bold">985+</p>
                    <p className="text-xs md:text-sm text-gray-200">Donation Received</p>
                </div>
                <div>
                    <div className="text-xl md:text-3xl mb-1 md:mb-2">📦</div>
                    <p className="text-xl md:text-2xl font-bold">$10 M</p>
                    <p className="text-xs md:text-sm text-gray-200">Money Donated</p>
                </div>
                <div>
                    <div className="text-xl md:text-3xl mb-1 md:mb-2">📢</div>
                    <p className="text-xl md:text-2xl font-bold">12+</p>
                    <p className="text-xs md:text-sm text-gray-200">Active Campaigns</p>
                </div>
                <div>
                    <div className="text-xl md:text-3xl mb-1 md:mb-2">✌️</div>
                    <p className="text-xl md:text-2xl font-bold">$60 M</p>
                    <p className="text-xs md:text-sm text-gray-200">Charity in last Year</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;