import React from "react";
import coding from "../assets/typing.gif";
import arrow from "../assets/arrow-r.svg";

const Projects = () => {
  return (
    <div
      className="group overflow-hidden h-full w-full rounded-xl object-center items-center justify-center object-contain relative bg-top"
      /* style={{ backgroundImage: `url(${coding})` }} */
    >
       <img className="absolute mix-blend-multiply w-full bg-center object-fill rounded-xl" src={coding}></img>
      <div className="bg-gradient-to-t from-yellow-400 from-10%  w-full rounded-xl h-full px-4 py-4 flex items-end ">
        <div className="flex flex-row items-center w-full justify-between z-10">
          <span className="font-bold text-[#fff] ">Projects & Test</span>
          <svg className="fill-white opacity-70 w-8 group-hover:translate-x-[-20px] transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
