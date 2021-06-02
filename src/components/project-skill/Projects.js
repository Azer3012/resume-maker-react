import React, { useContext } from "react";

import "./css/projects.css";
import { Context } from "../context/ContextProvider";

function Projects() {
  const { color, projects, addProject, removeProject } = useContext(Context);
  return (
    <div className="projects">
      <h3>PROJECTS</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <span style={{ backgroundColor: color }}>
              <i className="fa fa-check"></i>
            </span>
            <p contentEditable={true} suppressContentEditableWarning={true}></p>
            <div className="add-remove">
              {projects.length>1&&<button onClick={e=>removeProject(project.id)}>-</button>}
              <button onClick={addProject}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
