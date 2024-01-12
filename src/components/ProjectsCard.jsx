import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "./ProjectCard.css";
import { logos } from "../assets/logos";
import { createPortal } from "react-dom";
import SkillModal from "./SkillModal";
import ProjectModal from "./ProjectModal";

const ProjectsCard = ({ project, isInView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="group w-72 h-96 sm:h-72 mx-2 relative overflow-hidden rounded-xl"
      id="ProjectContainer"
    >
      <img src={project.img} className="absolute bottom-10 h-auto w-[150%]"></img>
      <div className="absolute flex items-center justify-center text-xl text-center text-white font-bold h-1/3 w-full bg-sexto">{project.title}</div>
      <div className="absolute group-hover:pt-14 group-hover:pb-4 h-1/6 group-hover:h-full transition-all w-full bg-primario flex flex-col items-center justify-center bottom-0 group-hover:overflow-auto">
        <span className="font-light flex group-hover:font-bold group-hover:text-xl text-white group-hover:hidden text-sm text-center mb-2">
          {project.tipo}
        </span>
        <span className="hidden group-hover:flex font-light group-hover:font-bold group-hover:text-xl text-white text-sm text-center mb-2">
          {project.title}
        </span>
        <div className="group-hover:flex hidden w-full flex-col items-center mb-4">
          <div className="h-[2px] group-hover:w-[90%] w-[0px] group-hover:delay-1000 group-hover:duration-1000 group-hover:transition-transform bg-white rounded-full"></div>
          <span className="text-white font-light text-xs mt-1">{project.tipo}</span>
        </div>
        <span className="group-hover:flex text-center font-semibold px-2 transition-opacity text-lg text-white hidden mb-2">
          {" "}
          {project.description}
        </span>
        <div className="group-hover:flex hidden w-full flex-col items-center my-4">
          <span className="text-white text-md font-extralight group-hover:flex hidden">
            Tecnologias usadas:
          </span>
          <div className="w-full flex justify-around my-2">
            {project.technologies.map((logo, index) => {
              console.log(logo);
              return <img src={logo} className="w-6 h-6"></img>;
            })}
          </div>
        </div>
        <div className="group-hover:flex hidden">
          <div>
            {createPortal(
              <AnimatePresence>
                {isOpen && (
                  <motion.div>
                    <div className="fixed top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center z-50 bg-[rgba(0,0,0,0.2)]">
                      <ProjectModal
                        project={project}
                        handle={handleClick}
                      ></ProjectModal>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>,
              document.body
            )}
          </div>
        </div>
        {/* <button className="group-hover:flex hidden transition-opacity bg-noveno p-2 text-white rounded-md font-medium" onClick={handleClick}>{project.boton}</button> */}
        <div className="flex flex-row w-full justify-around text-white">
          <a
            href={project.repositorio}
            className="p-2 bg-noveno rounded-md group-hover:flex hidden"
          >
            Repositorio
          </a>
          <a
            href={project.link}
            className={`p-2 bg-noveno rounded-md ${
              project.link ? "group-hover:flex hidden" : "hidden"
            } `}
          >
            Ver sitio
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
