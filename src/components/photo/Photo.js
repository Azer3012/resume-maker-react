import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/ContextProvider";

import "./css/photo.css";
function Photo() {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const fileInputRef = useRef(null);

  const { selectedPhoto, setSelectedPhoto, azLang } = useContext(Context);

  const change = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }

    fileInputRef.current.click();
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className="photo">
      <form>
        <label htmlFor="inputPhoto">
          <img src={preview} alt="" />
          <i
            style={preview ? { opacity: 0 } : null}
            className="fa fa-camera"
          ></i>
          <span
            style={preview ? { opacity: 0 } : null}
            onClick={(e) => e.preventDefault()}
          >
            {azLang ? "Şəkil seçin" : "Select your picture"}
          </span>
          <input
            type="file"
            accept="image/*"
            id="inputPhoto"
            name="picture"
            multiple
            ref={fileInputRef}
            onChange={change}
          />
        </label>
      </form>
    </div>
  );
}

export default Photo;
