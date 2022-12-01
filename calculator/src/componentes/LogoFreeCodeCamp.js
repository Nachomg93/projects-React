import React from "react";
import freeCodeCamp from "../imagenes/freecodecamp-logo.jpg";
// import './LogoFreeCodeCamp.css';

function LogoFreeCodeCamp() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCamp}
        className="freecodecamp-logo"
        alt="Logo de freecodecamp"
      />
    </div>
  );
}

export default LogoFreeCodeCamp;
