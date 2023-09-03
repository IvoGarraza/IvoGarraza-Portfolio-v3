import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./ProjectCard.css";

const ProjectsCard = ({ project, isInView }) => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="front-content relative bg-center" style={{backgroundImage:`url(${project.img})`}}>
          <p className="absolute">{project.title}</p>
          {/* <img src={project.img} className="absolute w-auto h-full"></img> */}
        </div>
        <div class="content">
          <p class="heading">Card Hover</p>
          <p>
{project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
