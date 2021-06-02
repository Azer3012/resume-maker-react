import React from "react";
import Contact from "../contact/Contact";
import Personal from "../personal-details/Personal";
import Photo from "../photo/Photo";
import Profile from "../profile/Profile";
import "./css/left.css";
function Left() {
  

  return (
    <div className="left">
      <Photo/>
      <Profile/>
      <Personal/>
      <Contact/>
    </div>
  );
}

export default Left;
