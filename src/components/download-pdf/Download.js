import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import "./css/download.css";
import ReactToPdf from "react-to-pdf";
function Download() {
  const { colors, color, btnColor,refPdf } = useContext(Context);

  const options = {
    orientation: "portrait",
    unit: "px",
    format: [700, 842],
  };

  
  return (
    <div className="download">
      <ReactToPdf
        targetRef={refPdf}
        filename="cv.pdf"
        options={options}
        x={0}
        y={0}
        scale={1}
      >
        {({ toPdf }) => (
          <button onClick={toPdf} style={{ backgroundColor: btnColor }}>
            <i className="fa fa-download"></i>
            DOWNLOAD PDF
          </button>
        )}
      </ReactToPdf>
    </div>
  );
}

export default Download;
