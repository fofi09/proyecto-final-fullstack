import React from 'react';
import Hero from './assets/components/Hero';
import Stats from './assets/components/Stats';
import Cards from './assets/components/cards';


function App() {
    return (
        <div className="font-sans bg-white">
            <Hero />
            <Stats />
            <Cards />
        </div>
    );
}

export default App;