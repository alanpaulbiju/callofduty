import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; 
import { FaArrowUp } from 'react-icons/fa6';
import videoFile from '../assets/video.mp4';

function Landingpage() {
  const [navbarColor, setNavbarColor] = useState('text-white');

  useEffect(() => {
    const navbar = document.querySelector('.nav');
    const landingPage = document.querySelector('.landingpage-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavbarColor('text-black');
          } else {
            setNavbarColor('text-[#0e8effb8]');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (landingPage) {
      observer.observe(landingPage);
    }

    return () => {
      if (landingPage) {
        observer.unobserve(landingPage);
      }
    };
  }, []);

  return (
    <>
      <Navbar navbarColor={navbarColor} />
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-[110vh] pt-2 landingpage-section">
        <div className="video">
          <video
            className="absolute top-0 left-0 object-cover z-[-1]"
            autoPlay
            loop
            muted
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-overlay bg-[rgba(0,0,0,.4)] absolute z-3 top-0 left-0 w-full h-full"></div>
        <div className="textstructure mt-[12rem] px-[3.4rem] leading-7">
          {["A Better Mortgage", "Experience, Without", "The Hassle."].map(
            (item, index) => {
              return (
                <div key={index} className="masker">
                  <h1 className='uppercase text-5xl tracking-tighter leading-[3.4rem] font-["Montserrat"] font-semibold text-white backdrop-blur-[2px]'>
                    {item}
                  </h1>
                </div>
              );
            }
          )}
        </div>
        <div className="Get-start flex absolute z-1 group">
          <button className="btn">Get Started</button>
          <div className="arrow mt-5 w-[58px] h-[57px] flex items-center justify-center rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
