import React, { useContext, useState } from "react";
import "./css/work.css";
import { Context } from "../context/ContextProvider";
function Work() {
  const { color, works, addWork, removeWork, azLang } = useContext(Context);

  return (
    <div className="work">
      <h2>{azLang ? "İS TƏCRÜBƏSİ" : "WORK EXPERIENCE"}</h2>
      <ul>
        {works.map((work) => (
          <li key={work.id}>
            <h3
              style={{ color: color }}
              contentEditable={true}
              suppressContentEditableWarning={true}
            >
              {azLang ? "Peşəniz" : work.position}
            </h3>
            <h3 contentEditable={true} suppressContentEditableWarning={true}>
              {azLang ? "Müəssisə adı" : work.employer}
            </h3>
            <p contentEditable={true} suppressContentEditableWarning={true}>
              {azLang ? "İs haqqinda məlumat" : work.workDescription}
            </p>
            <span style={{ backgroundColor: color }} className="circle"></span>
            <span
              contentEditable={true}
              suppressContentEditableWarning={true}
              className="date"
            >
              {azLang ? "daxil-çıxış" : work.date}
            </span>
            <span className="line">.</span>
            <div className="add-remove">
              <button onClick={() => removeWork(work.id)}>-</button>
              <button onClick={addWork}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
