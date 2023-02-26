import React from "react";
import "./logoform.css";

export default function ImageLogo({ ClassName, src }) {
  return <img id="logoForm" className={ClassName} src={src} />;
}
