import React from "react";
import { motion } from "framer-motion";

export const ButtonNavbar = ({text, set}) => {
  return (
    <section className="place-content-center relative h-full overflow-hidden text-white" >
      <FlipLink>{text}</FlipLink>
      {/* <div className="absolute bottom-0 w-full h-[2px] bg-white"></div> */}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative h-full block px-4 overflow-hidden whitespace-nowrap font-black uppercase"
      style={{
        lineHeight: 3,
      }}
    >
        
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block "
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 px-4 text-[#F72585f2]">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};