import React from 'react';
import Hero from './assets/components/Hero';
import Stats from './assets/components/Stats';
import Cards from './assets/components/cards';
import AboutUs from './assets/components/AboutUs';



function App() {
    return (
        <div className="font-sans bg-white">
            <Hero />
            <Stats />
            <Cards />
             <AboutUs />
        </div>
    );
}

export default App;