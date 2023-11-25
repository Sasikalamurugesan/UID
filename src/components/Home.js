import React from 'react';
import Hero from './Hero';
import Header from './Header';
import Appointment from './Appointment';
import Prices from './Prices';
import Contact from './Contact';
import Footer from './Footer';
import Gallery from './Gallery';
const Home = () => {
return(
    <div>
        <Header/>
        <Hero/>
        <Prices/>
        <Gallery/>
        <Appointment />
         <Contact/>
        </div>
);
};
export default Home;