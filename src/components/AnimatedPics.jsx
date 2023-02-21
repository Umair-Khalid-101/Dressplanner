import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Girl1R, Girl2R, Girl3R } from "../assets/TOPimages";

const AnimatedPics = () => {
  const [animationController, setAnimationController] = useState(0);
  useEffect(() => {
    let newCount = 0;
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        newCount++;
        setAnimationController(newCount);
        console.log(
          "🚀 ~ file: AnimatedPics.jsx:16 ~ setTimeout ~ newCount:",
          newCount
        );
      }, i * 5000);
    }
  }, []);

  const variants = {
    pic: {
      x: [0, 100, -400],
      y: [0, -200, -550],
      opacity: ["0%", "100%", "0%"],
    },
    pic2: {
      x: [0, 100, -400],
      y: [0, -200, -550],
      opacity: ["0%", "100%", "0%"],
    },
    pic3: {
      x: [0, 100, -400],
      y: [0, -200, -550],
      opacity: ["0%", "100%", "0%"],
    },
  };

  return (
    <div
      className="flex justify-end items-end h-screen
    min-w-full"
    >
      <motion.div
        variants={variants}
        animate={animationController == 1 ? "pic" : ""}
        transition={{ duration: 5 }}
        className="w-[160px] h-[120px] opacity-0 rounded-[20px] 
        bg-slate-500 overflow-hidden absolute mr-[300px]"
      >
        <img src={Girl1R} alt="pic" className="w-full h-full" />
      </motion.div>
      <div className="flex items-center justify-center">
        <motion.div
          variants={variants}
          animate={animationController == 2 ? "pic" : ""}
          transition={{ duration: 5 }}
          className="mr-[300px]
        w-[160px] h-[120px] opacity-0 rounded-[20px] bg-slate-500 
        overflow-hidden"
        >
          <img src={Girl2R} alt="pic" className="w-full h-full" />
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <motion.div
          variants={variants}
          animate={animationController == 3 ? "pic" : ""}
          transition={{ duration: 5 }}
          className="w-[160px] h-[120px] opacity-0 rounded-[20px] 
          bg-slate-500 overflow-hidden absolute mr-[760px] 
          mb-[120px]"
        >
          <img src={Girl3R} alt="pic" className="w-full h-full" />
        </motion.div>
      </div>
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
