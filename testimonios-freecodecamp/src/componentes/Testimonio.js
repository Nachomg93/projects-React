import React from "react";
import "../hojas-de-estilos/Testimonio.css";

function Testimonio(props) {
  //Se usa para la estructura de los componentes para personalizar
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"<strong>{props.texto}</strong></p>
      </div>
    </div>
  );
}

export default Testimonio;
