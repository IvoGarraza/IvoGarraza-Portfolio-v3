import React from "react";
import { logos } from "../assets/logos";
import { motion } from "framer-motion";

const variantsCard = {
  uno: { scale: 0.8 },
  dos: { scale: 1 },
  aparition: { opacity: 1, scale:1 },
  hidden: { opacity: 0, },
};
let transitionDuration= 0.300
let delayDuration = 0.000

const SkillModal = () => {
  return (
    <div className="bg-white w-11/12 h-5/6 flex flex-col items-center justify-around rounded-xl p-6 relative">
      <h3 className="font-bold">Some of my skill learn of the time...</h3>
      <button className="w-8 h-8 absolute top-0 right-0 rounded-full text-red-600 font-bold">X</button>
      <div className="grid grid-cols-4 w-full place-items-center gap-4">
        {logos.map((logo, index) => {
          const row = Math.floor(index / 3);
          const delay = (index % 3) * 0.050 + row * 0.100;
          const transition = { duration: 0.050, delay: delay };
          return (
            <motion.div
              variants={variantsCard}
              whileHover="uno"
              initial="hidden"
              animate="aparition"
              transition={transition}
              className="border-2 p-6 h-32 border-b-black rounded-md"
            >
              <img className="w-16" src={logo} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillModal;
