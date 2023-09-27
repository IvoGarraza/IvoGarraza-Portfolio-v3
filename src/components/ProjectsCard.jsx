import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./ProjectCard.css";

const ProjectsCard = ({ project, isInView }) => {
  return (
   /*  <div class="card-container w-96 h-80">
      <div class="card">
        <div
          class="front-content relative bg-center"
          style={{ backgroundImage: `url(${project.img})` }}
        >
          <p className="absolute">{project.title}</p>
          
        </div>
        <div class="content">
          <p>{project.description}</p>
        </div>
      </div>
    </div> */
    <div className="group w-96 h-80 relative overflow-hidden rounded-md">
      <img src={project.img} className="absolute h-full w-auto"></img>
      <div className="absolute h-1/3 group-hover:h-full transition-all w-full bg-primario flex flex-col items-center justify-center bottom-0">
        <span className="font-bold text-white flex text-xl mb-2">{project.title}</span>
        <span className="group-hover:flex text-center transition-opacity text-white hidden mb-2"> {project.description}</span>
        <button className="group-hover:flex hidden transition-opacity bg-noveno p-2 text-white rounded-md font-medium">Ver mas</button>
      </div>
    </div>
  );
};

export default ProjectsCard;
