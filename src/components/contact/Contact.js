import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

import "./css/contact.css";
function Contact() {

  const {color}=useContext(Context)
  return (
    <div className="contact">
      <h3>CONTACT</h3>
      <ul>
        <li>
          <div style={{backgroundColor:color}} className="soc">
            <i className="fa fa-envelope"></i>
          </div>
          <p onFocus={e=>e.target.innerText=""} contentEditable={true} suppressContentEditableWarning={true}>
            Enter your email
          </p>
        </li>
        <li>
          <div style={{backgroundColor:color}} className="soc">
            <i className="fa fa-phone"></i>
          </div>
          <p onFocus={e=>e.target.innerText=""} contentEditable={true} suppressContentEditableWarning={true}>
            Enter your phone number
          </p>
        </li>
        <li>
          <div style={{backgroundColor:color}} className="soc">
            <i className="fa fa-linkedin"></i>
          </div>
          <p onFocus={e=>e.target.innerText=""} contentEditable={true} suppressContentEditableWarning={true} >
          Enter only your username
          </p>
        </li>
        <li>
          <div style={{backgroundColor:color}} className="soc">
            <i className="fa fa-github"></i>
          </div>
          <p onFocus={e=>e.target.innerText=""} contentEditable={true} suppressContentEditableWarning={true}>
            Enter only your username
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
