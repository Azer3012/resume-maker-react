import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import "./css/skills.css";
function Skills() {
  const {skills,addSkill,removeSkill}=useContext(Context)
  return (
    <div className="skills">
      <h2>SKILLS</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <span contentEditable={true} suppressContentEditableWarning={true}>
              add skill
            </span>
            <div className="add-remove">
              {skills.length > 1 ?<button onClick={e=>removeSkill(skill.id)}>-</button>:null}
              <button onClick={addSkill}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
