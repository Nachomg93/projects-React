import "./ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";
import React, { useState } from "react";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <tarea texto={tarea.texto} completada={tarea.completada} />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
