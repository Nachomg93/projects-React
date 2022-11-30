import React from "react";
import "./Boton.css";

function Boton(props) {
  //Si no es un numero ni tampoco un punto ni un igual, entonces es un operador
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  //Si el valor retornado de la funcion es true, entonces se va reemplazar 'operador' y si es false sera null
  if (esOperador(props.children)) {
    return (
      <div
        className="boton-contenedor operador"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        className="boton-contenedor"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  }
  //Otra forma alternativa

  // return (
  //   <div
  //     className={`boton-contenedor ${
  //       esOperador(props.children) ? "operador" : ""
  //     }`.trimEnd()}
  //     onClick={() => props.manejarClic(props.children)}
  //   >
  //     {props.children}
  //   </div>
  // );

  //llamamos al metodo .trim() para eliminar los espacios vacios.
  //{() => props.manejarClic(props.children)} una funcion anonima llama a otra funcion para que lo retorne por los props.children
}

export default Boton;
