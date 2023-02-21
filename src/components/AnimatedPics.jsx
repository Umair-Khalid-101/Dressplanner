import React from "react";
import { motion } from "framer-motion";

import { react } from "../assets";
import { Girl1R, Girl2R, Girl3R } from "../assets/TOPimages";

const AnimatedPics = () => {
  return (
    <div
      className="flex justify-end items-end h-screen
    min-w-full"
    >
      <motion.div
        initial={{
          y: 180,
          x: -250,
        }}
        animate={{
          x: [-100, 100, -400],
          y: [200, -200, -550],
        }}
        transition={{ duration: 5 }}
        className="mb-[200px] mr-[200px]
        w-[160px] h-[120px] rounded-[20px] bg-slate-500 overflow-hidden"
      >
        <img src={Girl1R} alt="pic" className="w-full h-full" />
      </motion.div>
      {/* <motion.div
        initial={{
          y: 0,
          scale: 2,
          x: 250,
        }}
        animate={{
          y: -350,
          scale: 1.5,
          x: -250,
        }}
        transition={{ duration: 3 }}
        className="bg-slate-500 border-1 rounded-lg h-40 w-60
        flex justify-center items-center mb-[300px]"
      >
        <img src={Girl1R} alt="pic" className="w-full h-full rounded-lg" />
      </motion.div>
      <motion.div
        initial={{
          y: 0,
          scale: 1,
          x: -400,
        }}
        animate={{
          y: -320,
          scale: 2,
          x: 0,
        }}
        transition={{ duration: 3 }}
        className="bg-slate-500 border-1 rounded-lg h-40 w-60
        flex justify-center items-center mr-[200px]"
      >
        <img src={Girl2R} alt="pic" className="w-full h-full rounded-lg" />
      </motion.div> */}
    </div>
  );
};

export default AnimatedPics;
