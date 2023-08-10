import React from "react";
import coding from '../assets/coding2.webp'

const Projects = () => {
  return (
    <div className=" h-full w-full rounded-xl object-center items-center justify-center object-fill relative" style={{backgroundImage:`url(${coding})`}}>
     {/*  <img className="absolute h-full bg-center object-fill rounded-xl" src={coding}></img> */}
      <div className="bg-gradient-to-t from-black from-10% w-full rounded-xl h-full px-4 py-4 flex items-end">
        <span className="font-bold text-[#fff]">Projects & Test</span>
      </div>
    </div>
  );
};

export default Projects;
