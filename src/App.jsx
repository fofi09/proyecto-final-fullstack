import React from 'react';
import Hero from './assets/components/Hero';
import Stats from './assets/components/Stats';
import Cards from './assets/components/cards';
import AboutUs from './assets/components/AboutUs';
import Testimonial from './assets/components/Testimonial';
import CallToAction from './assets/components/CallToAction';
import Team from './assets/components/Team';



function App() {
    return (
        <div className="font-sans bg-white">
            <Hero />
            <Stats />
            <Cards />
             <AboutUs />
               <Team />
            <Testimonial />
            <CallToAction />
                     <Team />
         
        </div>
    );
}

export default App;