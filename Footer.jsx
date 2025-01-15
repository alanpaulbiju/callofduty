import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-cont w-full h-auto sm:h-screen relative rounded-tl-3xl rounded-tr-3xl">
      <div className="footer flex flex-col sm:flex-row md:flex-row gap-10 p-10 sm:p-14 md:p-20 pl-6 pr-6 sm:pl-20 sm:pr-16 font-['Montserrat'] relative z-20">
      <div className="w-full sm:w-[16vw] mb-8 sm:mb-0">
  <img
    className="mb-10"
    src="https://financify.ae/wp-content/uploads/2023/06/123456.png"
    alt="Logo"
  />
  <div className="lg:flex gap-2 mb-5 sm:block hidden">
    <i className="mt-1">
      <FaLocationDot />
    </i>
    <p className="text-sm sm:text-base">
      Office # 402C, Aspin
      <br />
      Commercial Tower, Sheikh <br />
      Zayed Road, Dubai
    </p>
  </div>
  <div className="lg:flex items-center gap-2 mb-5 sm:block hidden">
    <i>
      <IoIosMail />
    </i>
    <a href="mailto:info@financify.ae" className="text-sm sm:text-base">
      info@financify.ae
    </a>
  </div>
  <div className="lg:flex gap-2 sm:block hidden">
    <i className="mt-2">
      <FaPhoneAlt />
    </i>
    <a href="tel:+971585899398" className="text-sm sm:text-base">
      +971585899398
    </a>
  </div>
  <a className="ml-6 text-sm sm:text-base sm:block hidden" href="tel:+971585655007">
    +971585655007
  </a>
</div>


        <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap gap-[15px] sm:gap-10">
          <div className="text-[15px] sm:text-base w-full sm:w-[30%] md:w-[25%]">
            <h1 className="mb-7 font-semibold text-[20px] sm:text-2xl">Quick Links</h1>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">Home</a>
            </div>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">About Us</a>
            </div>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">Services</a>
            </div>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">FAQs</a>
            </div>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">Career</a>
            </div>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">Contact Us</a>
            </div>
            <div className="footer-links flex items-center mb-3">
              <i>
                <MdKeyboardDoubleArrowRight />
              </i>
              <a href="">Mortgage Calculator</a>
            </div>
          </div>

          <div className="text-[15px] sm:text-base w-full sm:w-[30%] md:w-[25%]">
            <h1 className="mb-7 font-semibold text-[20px] sm:text-2xl">Our Services</h1>
            <div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">New Purchase</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Remortgage & Equity Release</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Mortgage For Handover Properties</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Overseas Mortgage</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Buy To Let Mortgage</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Building Finance</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">House Construction Finance</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Shariah-Compliant / Islamic Home Loans</a>
              </div>
            </div>
          </div>

          <div className="text-[15px] sm:text-base w-full sm:w-[30%] md:w-[25%]">
            <h1 className="mb-7 font-semibold text-[20px] sm:text-2xl">Privacy</h1>
            <div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Terms & Conditions</a>
              </div>
              <div className="footer-links flex items-center mb-3">
                <i>
                  <MdKeyboardDoubleArrowRight />
                </i>
                <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[30%] md:w-[25%]">
  <h1 className="mb-7 font-semibold text-[20px] sm:text-2xl">Social Icons</h1>
  <div className="flex gap-4 mb-3 sm:flex-row flex-wrap sm:justify-start">
    <a href="" className="social-icon bg-facebook">
      <FaFacebookF />
    </a>
    <a href="" className="social-icon bg-twitter">
      <FaTwitter />
    </a>
    <a href="" className="social-icon bg-linkedin">
      <FaLinkedinIn />
    </a>
  </div>
  <div className="flex gap-4 sm:flex-row flex-wrap sm:justify-start">
    <a href="" className="social-icon bg-instagram move-down">
      <FaInstagram />
    </a>
    <a href="" className="social-icon bg-youtube move-down">
      <FaYoutube />
    </a>
    <a href="" className="social-icon bg-tiktok move-down">
      <FaTiktok />
    </a>
  </div>
</div>

        </div>
      </div>
      <div className="footer-background bg-[url('https://financify.ae/wp-content/uploads/2023/06/Group-388.png')] bg-cover bg-center"></div>
    </div>
  );
}

export default Footer;
