import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  const ProjectItem = technologies.map((tech) => {
    return (
      <span key = {tech} tech = {tech}>{tech}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {ProjectItem}
        
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
