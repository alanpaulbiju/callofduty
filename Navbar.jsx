import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

function Navbar({ showNavbar, navbarColor }) {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      if (showNavbar) {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(navRef.current, {
          y: '-100%',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  }, [showNavbar]);

  return (
    <div
      ref={navRef}
      className={`nav fixed z-[999] w-full px-6 py-4 font-["Neue Montreal"] flex justify-between items-center transition-colors duration-300 ${navbarColor}`}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      {/* Logo */}
      <div>
        <img
          className="w-[8rem]"
          src="https://financify.ae/wp-content/uploads/2023/06/123456.png"
          alt="Logo"
        />
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
      </button>

      {/* Links */}
      <div
        className={`links flex-col lg:flex-row lg:flex items-center lg:gap-10 ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:block bg-white lg:bg-transparent absolute lg:static top-[100%] left-0 w-full lg:w-auto p-6 lg:p-0 transition-all duration-300 shadow-md lg:shadow-none`}
      >
        {["home", "about", "services", "contact", "calculator"].map(
          (item, index) => (
            <Link
              key={index}
              to={item}
              smooth={true}
              duration={700}
              className={`text-lg capitalize font-[400] cursor-pointer link-hover ${
                index >= 4 ? "lg:mr-32" : ""
              } hover:text-[#0e8eff] transition-colors duration-300`}
            >
              {item.replace(/^\w/, (c) => c.toUpperCase()).replace(/_/g, ' ')}
            </Link>
          )
        )}
        <a
          href="http://localhost:3000/login"
          className="text-lg font-[500] hover:text-[#0e8eff] transition-colors duration-300"
        >
          Login
        </a>
        <a
          href="http://localhost:3000/signup"
          className="text-lg font-[500] hover:text-[#0e8eff] transition-colors duration-300"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navbar;
