import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import "./css/lang.css";
function Lang() {
  const { color, langs, addLang, removeLang } = useContext(Context);
  return (
    <div className="lang">
      <h3>LANGUAGE</h3>
      <ul>
        {langs.map((lang) => (
          <li key={lang.id}>
            <span style={{ backgroundColor: color }}>
              <i className="fa fa-check"></i>
            </span>
            <p contentEditable={true} suppressContentEditableWarning={true}></p>
            <div className="add-remove">
              {langs.length>1&&<button onClick={e=>removeLang(lang.id)}>-</button>}
              <button onClick={addLang}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lang;
