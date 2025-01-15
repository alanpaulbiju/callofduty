import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Secondpage from './components/Secondpage';
import About from './components/About';
import Eyes from './components/Eyes';
import Services from './components/Services';
import Assistance from './components/Assistance';
import Calculator from './components/Calculator';
import Contactus from './components/Contact-us';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('#your-container-id'),
    });
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="your-container-id" className='text-black'>
      <Navbar showNavbar={showNavbar} />
      <section id="home">
        <Landingpage />
      </section>
      <section id="secondpage">
        <Secondpage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="eyes">
        <Eyes />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="assistance">
        <Assistance />
      </section>
      <section id="calculator">
        <Calculator />
      </section>
      <section id="contact">
        <Contactus />
      </section>
      <Footer />
    </div>
  );
}

export default App;
