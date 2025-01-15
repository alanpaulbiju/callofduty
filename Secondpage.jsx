import { motion } from "framer-motion";
import React from "react";

function Secondpage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      style={{
        background: "linear-gradient(45deg, rgba(122,96,247,1) 0%, rgba(46,168,238,1) 100%)",
      }}
      className="h-[26vh] md:h-[26vh] lg:h-[50vh] py-12 md:py-16 rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="flex whitespace-nowrap font-['Montserrat'] uppercase font-[600] overflow-hidden text-white">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none pr-20"
        >
          WE are Financify
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none pr-20"
        >
          WE are Financify
        </motion.h1>
      </div>
    </div>
  );
}

export default Secondpage;
