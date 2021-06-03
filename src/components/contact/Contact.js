import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

import "./css/contact.css";
function Contact() {
  const { color, azLang } = useContext(Context);
  return (
    <div className="contact">
      <h3>{azLang ? "Əlaqə" : "CONTACT"}</h3>
      <ul>
        <li>
          <div style={{ backgroundColor: color }} className="soc">
            <i className="fa fa-envelope"></i>
          </div>
          <p
            onFocus={(e) => (e.target.innerText = "")}
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {azLang ? "Mail ünvani daxil edin" : "Enter your email"}
          </p>
        </li>
        <li>
          <div style={{ backgroundColor: color }} className="soc">
            <i className="fa fa-phone"></i>
          </div>
          <p
            onFocus={(e) => (e.target.innerText = "")}
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {azLang ? "Əlaqə nömrəsi daxil edin" : "Enter your phone number"}
          </p>
        </li>
        <li>
          <div style={{ backgroundColor: color }} className="soc">
            <i className="fa fa-linkedin"></i>
          </div>
          <p
            onFocus={(e) => (e.target.innerText = "")}
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {azLang
              ? "İstifadəçi adını  daxil edin"
              : "Enter only your username"}
          </p>
        </li>
        <li>
          <div style={{ backgroundColor: color }} className="soc">
            <i className="fa fa-github"></i>
          </div>
          <p
            onFocus={(e) => (e.target.innerText = "")}
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {azLang
              ? "İstifadəçi adını  daxil edin"
              : "Enter only your username"}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
