import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Home from './components/Home';
import Header from './components/Header';
import Appointment from './components/Appointment';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Services from './components/Services';
import Program from './components/Program';
import Form from './components/Form';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Insurance from './Pages/Insurance';
import Inform from './Pages/Inform';
import Training from './Pages/Training';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Confirmation from './components/Confirmation';
import Events from './Pages/Events';
import Shop from './Pages/Shop';
const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/app" element={<Appointment />} />
          <Route path="/price" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/program" element={<Program />} />
          <Route path="/services" element={<Services />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/inform" element={<Inform />} />
          <Route path="/training" element={<Training />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
