import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import "./css/personal.css";
function Personal() {
  const { color, azLang } = useContext(Context);
  return (
    <div className="personal">
      <h3>{azLang ? "ŞƏXSİ MƏLUMATLAR" : "PERSONAL DETAILS"}</h3>
      <h4 style={{ color: color }}>{azLang ? "Ünvan" : "Address"}</h4>
      <p contentEditable="true" suppressContentEditableWarning={true}>
        {azLang ? "Ünvanı daxil edin" : "Enter your addres"}
      </p>
    </div>
  );
}

export default Personal;
