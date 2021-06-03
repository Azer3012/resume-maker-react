import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import "./css/profile.css";
function Profile() {
  const { azLang } = useContext(Context);
  return (
    <div className="profile">
      <h3>{azLang ? "Haqqınızda" : "PROFILE"}</h3>
      <p
        onFocus={(e) => (e.target.innerText = "")}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {azLang ? "Özünüz haqda yazın" : "Write here about yourself"}
      </p>
    </div>
  );
}

export default Profile;
