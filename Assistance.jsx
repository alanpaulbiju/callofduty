import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Assistance() {
  return (
    <div className="pr-20 pl-20">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
        style={{ backgroundSize: `100% 100%`, padding: ` 70px 0px !important` }}
        className='need-help relative overflow-hidden w-full h-[27vw] Assistance bg-[url("https://financify.ae/wp-content/uploads/2023/06/Rectangle-1687@2x.png")] hidden sm:hidden md:hidden lg:block'
      >
        <div className="help "></div>
        <div className="help-2 overflow-hidden"></div>
        <div className="text-center mt-20">
          <h1 className='text-3xl font-["Montserrat"] font-semibold uppercase text-white '>
            Need Assistance ?
          </h1>
          <p className='font-["Montserrat"] w-30 text-[12px] mt-4 mb-4 text-white'>
            Whether you’d like to make a Mortgage enquiry or simply have a
            question about our services,<br></br>
            we’re available
          </p>
          <h2 className='text-[20px] font-["Montserrat"] uppercase font-semibold text-zinc-100 mt-5'>
            Apply For Free Consultation
          </h2>
        </div>
        <div className="flex gap-5 justify-center mt-5 text-white text-[107%]">
          <div className="flex items-center gap-2 hover:translate-y-[-2px] hover: transition-transform duration-300">
            <i>
              <MdEmail />
            </i>
            <a href="mailto:info@financify.ae">info@financify.ae</a>
          </div>
          <div className="flex items-center gap-2 hover:translate-y-[-2px] hover: transition-transform duration-300">
            <i>
              <FaPhone />
            </i>
            <a href="tel:+971585899398">+971585899398</a>
          </div>
          <div className="flex items-center gap-2 hover:translate-y-[-2px] hover: transition-transform duration-300">
            <i>
              <FaPhone />
            </i>
            <a href="tel:+971585655007">+971585655007</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assistance;
