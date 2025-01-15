import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function About() {
  return (
    <div className="w-full pt-20 bg-white text-black rounded-tl-3xl rounded-tr-3xl shadow-xl">
      <h1 className='pr-4 pl-4 md:pr-20 md:pl-20 pb-8 font-["Montserrat"] text-xl md:text-3xl leading-6 md:leading-[3.5vw] tracking-tighter'>
        Financify is a trusted name in the UAE mortgage industry, offering a
        personalized approach to secure the best possible mortgage for its
        clients. At Financify, customer is at the heart of everything we do. We
        take pride in our commitment to build lasting relationships with our
        clients, which will be evident with our exceptional customer service.
      </h1>
      <div className="line h-[1px] w-full bg-slate-950"></div>
      <div className="pl-4 md:pl-20 pt-10 flex flex-col md:flex-row gap-6 md:gap-10">
        <h1 className='font-["Montserrat"] text-lg md:text-xl md:w-[35vw]'>
          What you can expect:
        </h1>
        <p className='font-["Montserrat"] text-sm md:text-base md:w-[29vw]'>
          Financify approach to business is driven by its values of
          transparency, integrity, and trust. Clients can rest assured that we
          have a team of professionals who have their best interests at heart.
          With a commitment to ensure that the mortgage process is effortless
          and transparent, our clients can rely on us to get expert guidance for
          the complex world of mortgages.
        </p>
        <div className="ml-0 md:ml-10 mt-8 md:mt-[16vw]">
          <p className='font-["Montserrat"] mb-3'>Social Media:</p>
          <div className="grid decoration-solid decoration-white">
            <a
              className="link"
              href="https://www.facebook.com/financifygroup?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              className="link"
              href="https://www.instagram.com/financify.ae/?igshid=MjEwN2IyYWYwYw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="link"
              href="https://ae.linkedin.com/company/financify-mortgage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              className="link"
              href="https://www.youtube.com/channel/UCKxaFK18Slauz8zXfzdRfSQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="line h-[1px] w-full bg-slate-950 mt-10 mb-10"></div>
      <div className="new-purchase pl-4 md:pl-16">
        <h1 className='text-xl md:text-3xl font-["Montserrat"] capitalize font-[500]'>
          New Purchase:
        </h1>
        <div>
          <p className="mt-10 mr-4 md:mr-10 font-['Montserrat'] font-medium text-base md:text-xl">
            Buying a home is exciting but it may become tricky if you require a
            Mortgage. Whether you are searching for your first property or
            later, at Financify we aim to turn your property aspiration into
            reality based on our skillset and experience
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[21vw]">
            <div>
              <p className="mt-10 font-['Montserrat'] font-medium text-base md:text-xl">
                Mortgage can be difficult especially if customers:
              </p>
              <ul className="custom-bullets pl-5 pt-5 pr-5">
                <li>Have complexities in their profile</li>
                <li>
                  Are not sure which lender / Financial Institution is best
                  suited
                </li>
                <li>Need to move quickly</li>
              </ul>
              <div className="container flex flex-col md:flex-row items-center gap-6 md:gap-[42.5vw] mb-10 mt-10">
                <div
                  id="img-effect"
                  className="read-btn cursor-pointer mr-4 bg-black text-white w-[176px] pr-5 pl-5 pt-3 pb-3 rounded-2xl flex gap-7 group hover:bg-[linear-gradient(45deg, rgba(122,96,247,1) 0%, rgba(46,168,238,1) 100%)] mb-0 md:mb-[8rem]"
                >
                  <a className="text-[16px] flex items-center" href="">
                    Read More
                    <div className="btn-arrow bg-white rounded-full w-[30px] h-[30px] mt-[1px] text-black ml-7 group-hover:bg-black transition-all duration-300 ease-in-out">
                      <span className="flex rotate-[45deg] items-center mt-[10px] ml-[6px] group-hover:text-white transition-all duration-300 ease-in-out">
                        <FaArrowUp />
                      </span>
                    </div>
                  </a>
                </div>

                {/* Image and Button Layout */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[42.5vw] mb-10 mt-10">
                  <img
                    id="img-to-scale"
                    className="w-full md:w-[30vw] h-[55vw] rounded-[6px] object-cover transition-all duration-300 ease-in-out md:h-[20vw]"
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
