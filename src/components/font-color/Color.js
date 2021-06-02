import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import "./css/color.css";
function Color() {
  const { colors, color, changeColor,clicked,colorClickBtn } = useContext(Context);

  

  return (
    <div className="color">
      <button onClick={clicked} style={{ backgroundColor: color }}></button>
      <span>Color</span>

        
      {colorClickBtn?<div className="sub-menu">
        {colors.map((color) => (
          <button
            onClick={(e) => changeColor(e.target.style.backgroundColor)}
            style={{ backgroundColor: color.name }}
            key={color.name}
          ></button>
          
        ))}
        
            <label htmlFor="edit">
                <i class="fa fa-paint-brush"></i>
                <input  onChange={(e)=>changeColor(e.target.value)} type="color" id="edit" name="edit" />
            </label>
        
      </div>:null}
    </div>
  );
}

export default Color;
